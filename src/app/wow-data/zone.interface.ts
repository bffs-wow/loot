import { Source } from './item.interface';

export interface Zone {
  zoneId: number;
  name: string;
  slug: string;
  itemSources: Source[];
}
