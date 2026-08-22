import { Injectable } from '@angular/core';
import { CsvItem } from './models/item.interface';
import { Observable, of } from 'rxjs';
import { Zone } from '../zone/zone.interface';
import Papa from 'papaparse';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ReceivedItem, WishlistItem } from './models/tmb.interface';

@Injectable({ providedIn: 'root' })
export class ItemService {
  allItems$: Observable<CsvItem[]> = this.http
    .get('assets/tmb-items.csv', { responseType: 'text' })
    .pipe(
      map((csvData) =>
        Papa.parse(csvData, { header: true, skipEmptyLines: 'greedy' })
      ),
      tap((csvRes) => {
        // Ignore 'TooManyFields' errors
        const actualErrors = csvRes.errors.filter(
          (e) => e.code !== 'TooManyFields'
        );
        if (actualErrors.length) {
          console.error(
            `Error parsing CSV: ${actualErrors
              .map((e) => `(${e.code}|${e.type}) - ${e.message}`)
              .join('; ')}`,
            actualErrors
          );
        }
      }),
      map((csvRes) => {
        // Parse IDs into numbers
        return csvRes.data.map((i) => {
          return { ...i, id: parseInt(i.id) };
        });
      }),
      shareReplay(1)
    );

  constructor(private http: HttpClient) { }

  getByName(name: string) {
    return this.allItems$.pipe(
      map((items) => {
        const item = items.find(
          (i) => i.name.toLowerCase() === name.trim().toLowerCase()
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
        const item = items.find((i) => i.id === id);
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
  getTmbItem(item: WishlistItem | ReceivedItem | CsvItem) {
    if ((item as WishlistItem | ReceivedItem).item_id) {
      return this.getById((item as WishlistItem | ReceivedItem).item_id);
    }
    if (item.id) {
      return this.getById(item.id);
    }
    // Not a csv item
    let notCsvItem = item as WishlistItem | ReceivedItem;
    if (notCsvItem.parent_item_id) {
      return this.getById(notCsvItem.parent_item_id);
    }
    return this.getById(notCsvItem.item_id);
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
