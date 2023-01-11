import { BaseWowItem, InventoryType } from './item.interface';

// 'pivot' values
export interface AuditRecord extends BaseWowItem {
  character_id: number;
  id: number;
  added_by: number;
  type: string;
  order: number;
  note: string;
  officer_note?: any;
  is_offspec: number;
  raid_group_id?: number;
  raid_id?: any;
  received_at: Date;
  created_at: Date;
  updated_at?: Date;
  is_received?: number;
  list_number?: number;
}

export interface ReceivedItem extends BaseWowItem {
  id: number;
  parent_id?: number;
  parent_item_id?: number;
  expansion_id: number;
  name: string;
  weight?: number;
  quality: number;
  inventory_type: InventoryType;
  added_by_username: string;
  raid_group_name: string;
  raid_name?: any;
  raid_slug?: any;
  instance_id?: number;
  guild_tier?: number;
  pivot: AuditRecord;
}

export function isReceivedItem(item: any): item is ReceivedItem {
  if (item.item_id && item.raid_name) {
    return true;
  }
  return false;
}

export interface SecondaryRaidGroup {
  id: number;
  name: string;
  color: string;
  pivot: AuditRecord;
}

export interface PrioItem extends BaseWowItem {
  id: number;
  parent_id?: any;
  parent_item_id?: any;
  expansion_id: number;
  name: string;
  weight: number;
  quality: number;
  inventory_type: InventoryType;
  added_by_username: string;
  instance_id: number;
  guild_tier: number;
  pivot: AuditRecord;
}

export interface WishlistItem extends BaseWowItem {
  id: number;
  parent_id?: number;
  parent_item_id?: number;
  expansion_id: number;
  name: string;
  weight: number;
  quality: number;
  inventory_type: InventoryType;
  item_source_id?: number;
  instance_id?: number;
  instance_name: string;
  instance_order?: number;
  added_by_username: string;
  guild_tier?: number;
  list_number: number;
  pivot: AuditRecord;
  /**
   * For this wishlist item, this represents the total score the raider has to receive this item.
   * This is calculated as attendance points + the inverse of the ordering.
   */
  raider_points: number;
  /**
   * This is the inverse of the ordering (i.e. 1 = 50, 50 = 1)
   */
  ranking_points: number;
}

export interface Raider {
  id: number;
  member_id?: number;
  guild_id: number;
  name: string;
  slug: string;
  level: number;
  race: string;
  class: string;
  archetype: string;
  spec: string;
  spec_label?: any;
  profession_1: string;
  profession_2: string;
  rank?: any;
  rank_goal?: any;
  raid_group_id?: number;
  is_alt: number;
  public_note: string;
  inactive_at?: any;
  username: string;
  member_slug: string;
  discord_username: string;
  discord_id: string;
  is_wishlist_unlocked?: number;
  is_received_unlocked?: number;
  raid_group_name: string;
  raid_group_color: string;
  officer_note: string;
  raid_count: number;
  benched_count: number;
  attendance_percentage: number;
  display_archetype: string;
  display_class: string;
  display_profession1: string;
  display_profession2: string;
  display_race: string;
  display_spec: string;
  sub_archetype: string;
  received: ReceivedItem[];
  secondary_raid_groups: SecondaryRaidGroup[];
  prios: PrioItem[];
  wishlist: WishlistItem[];
  /**
   * Our calculated attendance points (attendance_percentage * raid_count)
   */
  attendance_points: number;
  /**
   * Wishlisted items which have not yet been received.
   */
  eligible_loot: WishlistItem[];
}
