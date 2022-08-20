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
  'Mother Shahraz': 2.7,
  'Illidari Council': 2.8,
  'Illidan Stormrage': 2.9,
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

  getZone(slugOrId: string | number) {
    if (!slugOrId) {
      throw new Error(`Missing Slug or Id`);
    }
    let zone;
    if (!isNaN(parseInt(slugOrId as string))) {
      zone = this.zones.find((z) => z.zoneId === parseInt(slugOrId as string));
    } else if (isString(slugOrId)) {
      zone = this.zones.find((z) => z.slug === slugOrId);
    }

    return zone;
  }

  getSourceOrdering(source: string): number {
    return _sourceOrdering[source];
  }
}
