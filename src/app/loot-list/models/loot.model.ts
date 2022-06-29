import { Item } from 'src/app/wow-data/item.interface';

export interface Loot extends Item {
  raiderName?: string;
  /**
   * Unique naming convention used in the sheet to allow ranking multiple items
   */
  sheetName?: string;
  /**
   * Some items can be traded for other items - the other piece of loot is set here
   */
  tradeInItem?: Loot;
}

/**
 * A record indicating a raider received a piece of loot
 */
export interface LootReceipt extends Loot {
  date: Date;
}

export interface EligibleLoot extends Loot {
  points: number;
  /**
   * Raiders are eligible for loot even not on their list based on their attendance points.
   * It is useful to know if an item falls into this condition or not. i.e. mostly for off-spec,
   * knowing if someone actually listed an item versus just being eligible for it.
   */
  onList: boolean;
}

/**
 * Represents a grouping of loot with tied points.
 */
export interface LootGroup {
  points: number;
  rankings: EligibleLoot[];
  /**
   * See `EligibleLoot.onList` - if all items in this group are not on anyone's list, we show a special flag indicating lower desire for this item
   */
  allUnlisted: boolean;
}
