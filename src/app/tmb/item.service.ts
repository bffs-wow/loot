import { Injectable } from '@angular/core';
import { CsvItem } from './models/item.interface';
import { Observable, of } from 'rxjs';
import { Zone } from '../zone/zone.interface';
import Papa from 'papaparse';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { ReceivedItem, WishlistItem } from './models/tmb.interface';

@Injectable({ providedIn: 'root' })
export class ItemService {
  allItems$: Observable<CsvItem[]> = this.http
    .get('assets/tmb-items.csv', { responseType: 'text' })
    .pipe(
      map((csvData) => Papa.parse(csvData, { header: true })),
      map((csvRes) => {
        return csvRes.data.map((i) => {
          return { ...i, item_id: parseInt(i.item_id) };
        });
      }),
      shareReplay(1)
    );

  constructor(private http: HttpClient) {}

  getByName(name: string) {
    return this.allItems$.pipe(
      map((items) => {
        const item = items.find(
          (i) => i.item_name.toLowerCase() === name.trim().toLowerCase()
        );
        if (item) {
          return item;
        }
        console.warn(`Item not found! (${name})`);
        return null;
      })
    );
  }

  getById(id: number) {
    return this.allItems$.pipe(
      map((items) => {
        const item = items.find((i) => i.item_id === id);
        if (item) {
          return item;
        }
        console.warn(`Item not found! (${id})`);
        return null;
      })
    );
  }

  /**
   * Given an item from the TMB Export data, retrieve the actual *listable* item from the TMB database.
   * For example, if provided with the item that is received from a token, this will return the token.
   */
  getTmbItem(item: WishlistItem | ReceivedItem) {
    if (item.parent_item_id) {
      return this.getById(item.parent_item_id);
    }
    return this.getById(item.item_id);
  }

  getBySource(zone: Zone, source: string) {
    return this.allItems$.pipe(
      map((allItems) => {
        // If 'All' is specified as the source, just return all items in the zone
        if (source === 'All') {
          return allItems.filter((i) => i.instance_name === zone.name);
        }
        // Otherwise filter by zone and boss
        const items = allItems.filter(
          (i) =>
            // Get items for this zone...
            i.instance_name === zone.name &&
            // That drop from this source...
            i.source_name === source
        );

        return items;
      })
    );
  }
}
