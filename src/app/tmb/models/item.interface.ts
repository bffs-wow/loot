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
