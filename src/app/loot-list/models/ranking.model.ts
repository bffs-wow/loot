import { Loot } from './loot.model';

export interface Ranking {
  raider: string;
  itemName: string;
  ranking: number;
  loot: Loot;
}