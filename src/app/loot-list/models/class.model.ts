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
  Paladin = 'Paladin',
  DeathKnight = 'Death Knight',
}

export function parseClass(val: string) {
  switch (val) {
    case Class.Druid:
      return Class.Druid;
    case Class.Hunter:
      return Class.Hunter;
    case Class.Mage:
      return Class.Mage;
    case Class.Paladin:
      return Class.Paladin;
    case Class.Priest:
      return Class.Priest;
    case Class.Rogue:
      return Class.Rogue;
    case Class.Shaman:
      return Class.Shaman;
    case Class.Warlock:
      return Class.Warlock;
    case Class.Warrior:
      return Class.Warrior;
    case Class.DeathKnight:
      return Class.DeathKnight;
    default:
      return Class.Unknown;
  }
}
