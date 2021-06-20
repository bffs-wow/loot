import { Injectable } from '@angular/core';
import { Item, Source } from './item.interface';
import { of } from 'rxjs';
import { Zone } from './zone.interface';

import btData from './raw/bt-items.json';
import gruulData from './raw/gruul-items.json';
import hyjalData from './raw/hyjal-items.json';
import karaData from './raw/kara-items.json';
import magData from './raw/mag-items.json';
import sscData from './raw/ssc-items.json';
import sunwellData from './raw/sunwell-items.json';
import tkData from './raw/tk-items.json';
import sharedLoot from './raw/shared-loot.json';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private allItems = [
    ...btData,
    ...gruulData,
    ...hyjalData,
    ...karaData,
    ...magData,
    ...sscData,
    ...sunwellData,
    ...tkData,
  ] as unknown[] as Item[];

  allItems$ = of(this.allItems);

  constructor() {}

  getByName(name: string) {
    const item = this.allItems.find(
      (i) => i.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (item) {
      return item;
    }
    throw new Error(`Item not found! (${name})`);
  }

  getById(id: number) {
    const item = this.allItems.find((i) => i.itemId === id);
    if (item) {
      return item;
    }
    throw new Error(`Item not found! (${id})`);
  }

  getBySource(zone: Zone, source: Source) {
    // If 'All' is specified as the source, just return all items in the zone
    if (source.name === 'All') {
      return this.allItems.filter((i) => i.source.zone === zone.zoneId);
    }
    // Otherwise filter by zone and boss
    const items = this.allItems.filter(
      (i) =>
        // Get items for this zone...
        i.source.zone === zone.zoneId &&
        // That drop from this source...
        (i.source.name === source.name ||
          // Match special 'Zone Drop' category if necessary
          (source.category === 'Zone Drop' &&
            i.source.category === source.category))
    );
    // If this boss has shared loot with other bosses, find and add those items
    if (Array.isArray(sharedLoot[source.name])) {
      items.push(...sharedLoot[source.name].map((id) => this.getById(id)));
    }

    return items;
  }
}
