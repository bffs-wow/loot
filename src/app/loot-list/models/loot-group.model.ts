import { Raider, WishlistItem } from 'src/app/tmb/models/tmb.interface';
import { LootRanking } from './ranking.model';

export interface LootGroup {
  points: number;
  rankings: LootRanking[];
}
