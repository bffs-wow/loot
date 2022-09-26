export interface BaseWowItem {
  item_id: number;
}

export interface CsvItem {
  name: string;
  id: number;
  instance_name: string;
  source_name: string;
  guild_note: string;
  prio_note: string;
  tier: string;
  tier_label: string;
  created_at: string;
  updated_at: string;
}

export enum InventoryType {
  Head = 1,
  Neck = 2,
  Shoulder = 3,
  // Shirt
  Body = 4,
  Chest = 5,
  Waist = 6,
  Legs = 7,
  Feet = 8,
  Wrist = 9,
  Hand = 10,
  Finger = 11,
  Trinket = 12,
  // One-Hand
  Weapon = 13,
  Shield = 14,
  Ranged = 15,
  Cloak = 16,
  TwoHandWeapon = 17,
  Bag = 18,
  Tabard = 19,
  // Same as chest
  Robe = 20,
  MainHandWeapon = 21,
  OffHandWeapon = 22,
  // Held in off-hand
  Holdable = 23,
  Ammo = 24,
  Thrown = 25,
  // No clue
  RangedRight = 26,
  Quiver = 27,
  Relic = 28,
}

/**
 * These are the inventory slots which are restricted by a listing rule (i.e. 1 weapon per 3 slots on wishlist)
 */
export const weaponSlots: InventoryType[] = [
  InventoryType.Weapon,
  InventoryType.Shield,
  InventoryType.Ranged,
  InventoryType.TwoHandWeapon,
  InventoryType.MainHandWeapon,
  InventoryType.OffHandWeapon,
  InventoryType.Holdable,
  InventoryType.Thrown,
  InventoryType.RangedRight,
  InventoryType.Relic,
];
