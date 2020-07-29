export enum Raid {
  MC = 'Molten Core',
  BWL = 'Blackwing Lair',
  Ony = "Onyxia's Lair",
  AQ40 = "Temple of Ahn'Qiraj",
}
export interface Loot {
  // for wowhead tooltips
  id: string;
  name: string;
  raiderName?: string;
  /**
   * Unique naming convention used in the sheet to allow ranking multiple items
   */
  sheetName?: string;
  source: Raid;
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
