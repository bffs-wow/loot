import { Injectable } from '@angular/core';
import isString from 'lodash-es/isString';
import uniqBy from 'lodash-es/uniqBy';
import { first, tap } from 'rxjs/operators';
import { Item } from './item.interface';
import { ItemService } from './item.service';
import { Zone } from './zone.interface';

/**
 * This ordering will sort the loot history for the same day.
 * We'll assume we want to see Naxx first, then AQ40, then BWL, then MC, then Ony.
 */
const _sourceOrdering: { [source: string]: number } = {
  'Zone Drop': 10,
  Lucifron: 0.1,
  Magmadar: 0.2,
  Gehennas: 0.2,
  Garr: 0.3,
  'Baron Geddon': 0.4,
  Shazzrah: 0.5,
  'Sulfuron Harbinger': 0.6,
  'Golemagg the Incinerator': 0.7,
  'Majordomo Executus': 0.8,
  Ragnaros: 0.9,
  Onyxia: 0.1,
  'Razorgore the Untamed': 1.1,
  'Vaelastrasz the Corrupt': 1.2,
  'Broodlord Lashlayer': 1.3,
  Firemaw: 1.4,
  Ebonroc: 1.5,
  Flamegor: 1.6,
  Chromaggus: 1.7,
  Nefarian: 1.8,
  'The Prophet Skeram': 2.1,
  'Silithid Royalty': 2.2,
  'Battleguard Sartura': 2.3,
  'Fankriss the Unyielding': 2.4,
  Viscidus: 2.5,
  'Princess Huhuran': 2.6,
  "Twin Emperors": 2.7,
  Ouro: 2.8,
  "C'Thun": 2.9,
  "Anub'Rekhan": 3.1,
  'Grand Widow Faerlina': 3.2,
  Maexxna: 3.3,
  'Noth the Plaguebringer': 3.4,
  'Heigan the Unclean': 3.5,
  Loatheb: 3.6,
  Patchwerk: 3.7,
  Grobbulus: 3.8,
  Gluth: 3.9,
  Thaddius: 3.91,
  'Instructor Razuvious': 3.92,
  'Gothik the Harvester': 3.93,
  'The Four Horsemen': 3.94,
  Sapphiron: 3.95,
  "Kel'Thuzad": 3.96,
};

@Injectable({ providedIn: 'root' })
export class ZoneService {
  zones: Zone[] = [
    { zoneId: 2717, name: 'Molten Core', slug: 'molten-core', itemSources: [] },
    {
      zoneId: 2159,
      name: "Onyxia's lair",
      slug: 'onyxias-lair',
      itemSources: [],
    },
    {
      zoneId: 2677,
      name: 'Blackwing Lair',
      slug: 'blackwing-lair',
      itemSources: [],
    },
    {
      zoneId: 3428,
      name: "Temple of Ahn'Qiraj",
      slug: 'ahn-qiraj',
      itemSources: [],
    },
    { zoneId: 3456, name: 'Naxxramas', slug: 'naxxramas', itemSources: [] },
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
    }
    else if (isString(slugOrId)) {
      zone = this.zones.find((z) => z.slug === slugOrId);
    }
    if (!zone) {
      throw new Error(`Zone not found for (${slugOrId})`);
    }
    return zone;
  }
}
