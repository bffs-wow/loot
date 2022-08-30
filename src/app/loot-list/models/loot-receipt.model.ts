import { Raider, ReceivedItem } from 'src/app/tmb/models/tmb.interface';

export interface LootReceipt {
  item: ReceivedItem;
  raider: Raider;
}
