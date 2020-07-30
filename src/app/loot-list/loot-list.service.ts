import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SheetData } from './models/sheet-data.model';
import { CacheService } from '../cache/cache.service';
import { of, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LootListService {
  private endPoint = `https://sheets.googleapis.com/v4/spreadsheets/${environment.sheetId}`

  constructor(private http: HttpClient, private cache: CacheService) { }

  get<T>(endPoint: string) {
    const key = `lootListGet-${endPoint}`;
    return from(this.cache.get<T>(key)).pipe(switchMap(cached => {
      if (cached) {
        return of(cached);
      }
      return this.http.get<T>(this.buildSheetsEndPoint(endPoint))
        .pipe(switchMap(res => this.cache.set(key, res)), map(c => c.val));
    }));
  }

  getData(sheet: string, range: string) {
    const endPoint = `values/'${encodeURIComponent(sheet)}'!${range}`;
    const key = `lootListgetData-${endPoint}`;
    return from(this.cache.get<SheetData>(key)).pipe(switchMap(cached => {
      if (cached) {
        return of(cached);
      }
      return this.http.get<SheetData>(this.buildSheetsEndPoint(`values/'${encodeURIComponent(sheet)}'!${range}`))
        .pipe(switchMap(res => this.cache.set(key, res)), map(c => c.val));
    }));
  }

  private buildSheetsEndPoint(path: string) {
    if (path.startsWith('/')) {
      path = path.substring(1, path.length)
    }
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1)
    }
    return [this.endPoint, path].join('/') + `?key=${environment.apiKey}`;
  }
}
