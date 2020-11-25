import { Item } from 'src/app/wow-data/item.interface';


export interface Loot extends Item {
  raiderName?: string;
  /**
   * Unique naming convention used in the sheet to allow ranking multiple items
   */
  sheetName?: string;
}

/**
 * A record indicating a raider received a piece of loot
 */
export interface LootReceipt extends Loot {
  date: Date;
}

export interface EligibleLoot extends Loot {
  points: number;
}

/**
 * Represents a grouping of loot with tied points.
 */
export interface LootGroup {
  points: number;
  rankings: EligibleLoot[];
}
