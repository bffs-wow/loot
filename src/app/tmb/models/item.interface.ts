export interface BaseWowItem {
  item_id: number;
}

export interface CsvItem extends BaseWowItem {
  instance_name: string;
  source_name: string;
  item_name: string;
  item_quality: string;
  url: string;
}
