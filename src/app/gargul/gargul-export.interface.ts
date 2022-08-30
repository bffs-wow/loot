/**
 * Helper type for each item in the wishlists array.
 * This is stringified as an entry like:
 * `applepi|1|1|9391`
 */
export interface WishListEntry {
  itemId: number;
  characterName: string;
  offspec: boolean;
  order: number;
  /**
   * 1 = prio; 2 = wishlist
   */
  wishListOrPrio: '1' | '2';
  raidGroupId: number;
}

export interface Wishlists {
  [itemId: number]: string[];
}
export interface Groups {
  [raidGroupId: number]: string;
}
export interface Notes {
  [itemId: number]: string;
}
export interface Tiers {
  [itemId: number]: string;
}
export interface GargulExport {
  wishlists: Wishlists;
  groups: Groups;
  loot: string;
  notes: Notes;
  tiers: Tiers;
}
