import { Attendance } from './attendance.model';
import { Ranking } from './ranking.model';
import { LootReceipt, EligibleLoot, Loot } from './loot.model';

export enum Class {
  Unknown = 'Unknown',
  Warrior = 'Warrior',
  Priest = 'Priest',
  Warlock = 'Warlock',
  Rogue = 'Rogue',
  Shaman = 'Shaman',
  Druid = 'Druid',
  Hunter = 'Hunter',
  Mage = 'Mage',
}
const classItems = {
  'Bindings of Transcendence': Class.Priest,
  'Pauldrons of Wrath': Class.Warrior,
  'Nemesis Spaulders': Class.Warlock,
  'Bloodfang Chestpiece': Class.Rogue,
  'Greaves of Ten Storms': Class.Shaman,
  'Stormrage Belt': Class.Druid,
  "Dragonstalker's Belt": Class.Hunter,
  'Netherwind Belt': Class.Mage,
};
/**
 * Determine the class of the raider based on the loot they are eligible for.
 */
export function findClass(raider: Raider) {
  const loot = [...raider.receivedLoot, ...raider.pendingLoot];
  const classLoot = loot.find((l) => !!classItems[l.name]);
  return classItems[classLoot.name] || Class.Unknown;
}

export interface Raider {
  name: string;
  class: Class;
  attendancePoints: number;
  attendance: Attendance[];
  rankings: Ranking[];
  receivedLoot: LootReceipt[];
  pendingLoot: EligibleLoot[];
}
