import { Injectable } from '@angular/core';
import isString from 'lodash-es/isString';
import uniqBy from 'lodash-es/uniqBy';
import { first, tap } from 'rxjs/operators';
import { ItemService } from '../tmb/item.service';
import { CsvItem } from '../tmb/models/item.interface';
import { Zone } from './zone.interface';

/**
 * This ordering will sort the loot history for the same day.
 */
const _sourceOrdering: { [source: string]: number } = {
  Trash: 10,
  Recipes: 11,
  // TODO: add per-boss manual ordering as desired.
};

@Injectable({ providedIn: 'root' })
export class ZoneService {
  zones: Zone[] = [
    {
      zoneId: 4603,
      name: 'Vault of Archavon N25',
      slug: 'vault-of-archavon',
      itemSources: [],
    },
    {
      zoneId: 3456,
      name: 'Naxxramas N25',
      slug: 'naxxramas',
      itemSources: [],
    },
    {
      zoneId: 4500,
      name: 'Eye of Eternity N25',
      slug: 'eye-of-eternity',
      itemSources: [],
    },
    {
      zoneId: 4493,
      name: 'Obsidian Sanctum N25',
      slug: 'obsidian-sanctum',
      itemSources: [],
    },
    {
      zoneId: 4273,
      name: 'Ulduar N25',
      slug: 'ulduar',
      itemSources: [],
    },
    {
      zoneId: 4722,
      name: 'Trial of the Crusader N25',
      slug: 'trial-of-the-crusader-n',
      itemSources: [],
    },
    {
      zoneId: 4722,
      name: 'Trial of the Crusader H25',
      slug: 'trial-of-the-crusader-h',
      itemSources: [],
    },
    {
      zoneId: 4812,
      name: 'Icecrown Citadel N25',
      slug: 'icecrown-citadel-n',
      itemSources: [],
    },
    {
      zoneId: 4812,
      name: 'Icecrown Citadel H25',
      slug: 'icecrown-citadel-h',
      itemSources: [],
    },
    {
      zoneId: 4987,
      name: 'Ruby Sanctum N25',
      slug: 'ruby-sanctum-n',
      itemSources: [],
    },
    {
      zoneId: 4987,
      name: 'Ruby Sanctum H25',
      slug: 'ruby-sanctum-h',
      itemSources: [],
    },
  ];
  constructor(private itemService: ItemService) {
    itemService.allItems$
      .pipe(
        tap((items) => {
          const sources = uniqBy(
            items,
            (i) => `${i.instance_name}${i.source_name}`
          );
          this.zones = this.zones.map((z) => {
            z.itemSources = sources
              .filter((s) => s.instance_name === z.name)
              .map((s) => s.source_name)
              .sort((a, b) => _sourceOrdering[a] - _sourceOrdering[b]);
            return z;
          });
        }),
        first()
      )
      .subscribe();
  }

  getItemSource(item: CsvItem) {
    if (!item) {
      throw new Error(`Missing Item`);
    }
    const source = item.source_name;

    return source;
  }

  getItemZone(item: CsvItem) {
    if (!item) {
      throw new Error(`Missing Item`);
    }
    const zone = this.zones.find((z) => z.name === item.instance_name);

    return zone;
  }

  getZone(slugOrId: string | number): Zone {
    if (!slugOrId) {
      throw new Error(`Missing Slug or Id`);
    }
    let zone: Zone;
    if (!isNaN(parseInt(slugOrId as string))) {
      zone = this.zones.find((z) => z.zoneId === parseInt(slugOrId as string));
    } else if (isString(slugOrId)) {
      zone = this.zones.find((z) => z.slug === slugOrId);
      // Try by name
      if (!zone) {
        zone = this.zones.find((z) => z.name === slugOrId);
      }
    }

    return zone;
  }

  getSourceOrdering(source: string): number {
    return _sourceOrdering[source];
  }
}
