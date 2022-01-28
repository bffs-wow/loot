import { Injectable } from '@angular/core';
import isString from 'lodash-es/isString';
import uniqBy from 'lodash-es/uniqBy';
import { first, tap } from 'rxjs/operators';
import { Item } from './item.interface';
import { ItemService } from './item.service';
import { Zone } from './zone.interface';

/**
 * This ordering will sort the loot history for the same day.
 */
const _sourceOrdering: { [source: string]: number } = {
  'Zone Drop': 10,
  'Rage Winterchill': 1.1,
  Anetheron: 1.2,
  [`Kaz'rogal`]: 1.3,
  Azgalor: 1.3,
  Archimonde: 1.4,
  [`High Warlord Naj'entus`]: 2.1,
  Supremus: 2.2,
  'Shade of Akama': 2.3,
  'Teron Gorefiend': 2.4,
  'Gurtogg Bloodboil': 2.5,
  'Reliquary of Souls': 2.6,
  'Illidari Council': 2.7,
  'Illidan Stormrage': 2.8,
};

@Injectable({ providedIn: 'root' })
export class ZoneService {
  zones: Zone[] = [
    { zoneId: 3457, name: 'Karazhan', slug: 'karazhan', itemSources: [] },
    {
      zoneId: 3923,
      name: "Gruul's Lair",
      slug: 'gruuls-lair',
      itemSources: [],
    },
    {
      zoneId: 3836,
      name: "Magtheridon's Lair",
      slug: 'magtheridons-lair',
      itemSources: [],
    },
    {
      zoneId: 3607,
      name: 'Serpentshrine Cavern',
      slug: 'serpentshrine-cavern',
      itemSources: [],
    },
    {
      zoneId: 3845,
      name: 'Tempest Keep',
      slug: 'tempest-keep',
      itemSources: [],
    },
    {
      zoneId: 3606,
      name: 'Hyjal Summit',
      slug: 'hyjal-summit',
      itemSources: [],
    },
    {
      zoneId: 3959,
      name: 'Black Temple',
      slug: 'black-temple',
      itemSources: [],
    },
    {
      zoneId: 4075,
      name: 'Sunwell Plateau',
      slug: 'sunwell-plateau',
      itemSources: [],
    },
  ];
  constructor(private itemService: ItemService) {
    itemService.allItems$
      .pipe(
        tap((items) => {
          const sources = uniqBy(
            items.map((i) => i.source),
            (i) => `${i.zone}${i.category}${i.name}`
          ).map((s) => {
            s.bossOrder = _sourceOrdering[s.name || s.category];
            return s;
          });
          this.zones = this.zones.map((z) => {
            z.itemSources = sources
              .filter((s) => s.zone === z.zoneId)
              .sort((a, b) => a.bossOrder - b.bossOrder);
            return z;
          });
        }),
        first()
      )
      .subscribe();
  }

  getItemSource(item: Item) {
    if (!item) {
      throw new Error(`Missing Item`);
    }
    const zone = this.getItemZone(item);
    const source = zone.itemSources.find((s) => s.name === item.source.name);
    if (!source) {
      throw new Error(`Source not found for (${item.itemId})`);
    }
    return source;
  }

  getItemZone(item: Item) {
    if (!item) {
      throw new Error(`Missing Item`);
    }
    const zone = this.zones.find((z) => z.zoneId === item.source.zone);
    if (!zone) {
      throw new Error(`Zone not found for (${item.itemId})`);
    }
    return zone;
  }

  getZone(slugOrId: string) {
    if (!slugOrId) {
      throw new Error(`Missing Slug or Id`);
    }
    let zone;
    if (!isNaN(parseInt(slugOrId))) {
      zone = this.zones.find((z) => z.zoneId === parseInt(slugOrId));
    } else if (isString(slugOrId)) {
      zone = this.zones.find((z) => z.slug === slugOrId);
    }
    if (!zone) {
      throw new Error(`Zone not found for (${slugOrId})`);
    }
    return zone;
  }
}
