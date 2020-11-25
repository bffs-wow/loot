export interface TooltipLine {
  label: string;
  format: string;
}

export interface Source {
  category: string;
  name: string;
  zone: number;
  bossOrder?: number;
  dropChance: number;
}

export interface Item {
  itemId: number;
  name: string;
  icon: string;
  class: string;
  subclass: string;
  sellPrice: number;
  quality: string;
  itemLevel: number;
  requiredLevel: number;
  slot: string;
  tooltip: TooltipLine[];
  itemLink: string;
  contentPhase?: number;
  source: Source;
  uniqueName: string;
}