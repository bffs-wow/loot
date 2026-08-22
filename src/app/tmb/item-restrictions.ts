import { Class } from '../loot-list/models/class.model';

/**
 * This is used to denote which items may be listed by which classes, and if multiples are allowed (for example, non-unique 1h weapons or rings, tier tokens for MS/OS, etc.)
 */
export type ItemRestrictions = {
  [itemId: string]: {
    // Helper property to allow searchability of this file
    ITEM_NAME?: string;
    // For ease of creating this list one of 'allowed' or 'restricted' may be used. Both should not be used together though.
    // For example, if an item is Mage Only, it's easier to just 'Class.Mage' into 'allowedClasses'
    // instead of adding everything except Mage into 'restrictedClasses'
    // If both of these properties are empty or do not exist, the item will be available to all.
    allowedClasses?: Class[];
    restrictedClasses?: Class[];
    // Default 1
    allowedRankings?: number;
  };
};

const ALL_HEALERS: Class[] = [Class.Druid, Class.Priest, Class.Shaman, Class.Paladin, Class.Monk];
const ALL_TANKS: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin, Class.Monk, Class.Druid];
const INT_DPS: Class[] = [Class.Mage, Class.Warlock, Class.Priest, Class.Shaman, Class.Druid];
const SPIRIT_USERS: Class[] = [Class.Priest, Class.Shaman, Class.Monk, Class.Druid];
const AGI_DPS: Class[] = [Class.Rogue, Class.Hunter, Class.Monk, Class.Shaman, Class.Druid];
const STR_DPS: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin];

const PLATE_STR: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin];
const PLATE_INT: Class[] = [Class.Paladin];
const LEATHER_AGI: Class[] = [Class.Rogue, Class.Druid, Class.Monk];
const LEATHER_INT: Class[] = [Class.Druid, Class.Monk];
const CLOTH: Class[] = [Class.Mage, Class.Warlock, Class.Priest];
const MAIL_AGI: Class[] = [Class.Hunter, Class.Shaman];
const MAIL_INT: Class[] = [Class.Shaman];

const VANQ_TOKEN: Class[] = [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid];
const PROTECTOR_TOKEN: Class[] = [Class.Warrior, Class.Hunter, Class.Shaman, Class.Monk];
const CONQ_TOKEN: Class[] = [Class.Paladin, Class.Warlock, Class.Priest];

export const ITEM_RESTRICTIONS: ItemRestrictions = {
  "99712": {
    "ITEM_NAME": "Leggings of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99713": {
    "ITEM_NAME": "Leggings of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99714": {
    "ITEM_NAME": "Chest of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99715": {
    "ITEM_NAME": "Chest of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99716": {
    "ITEM_NAME": "Chest of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Warrior,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99717": {
    "ITEM_NAME": "Shoulders of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99718": {
    "ITEM_NAME": "Shoulders of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99719": {
    "ITEM_NAME": "Shoulders of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99720": {
    "ITEM_NAME": "Gauntlets of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99721": {
    "ITEM_NAME": "Gauntlets of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99722": {
    "ITEM_NAME": "Gauntlets of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99723": {
    "ITEM_NAME": "Helm of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99724": {
    "ITEM_NAME": "Helm of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99725": {
    "ITEM_NAME": "Helm of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99726": {
    "ITEM_NAME": "Leggings of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103734": {
    "ITEM_NAME": "Zoid's Molten Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103753": {
    "ITEM_NAME": "Seebo's Sainted Touch",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103764": {
    "ITEM_NAME": "Marco's Crackling Gloves",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103770": {
    "ITEM_NAME": "Drape of the Omega",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103781": {
    "ITEM_NAME": "Keengrip Arrowpullers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103791": {
    "ITEM_NAME": "Gauntlets of Discarded Time",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103800": {
    "ITEM_NAME": "Turtleshell Greatcloak",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103818": {
    "ITEM_NAME": "Romy's Reliable Grips",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103832": {
    "ITEM_NAME": "Siid's Silent Stranglers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103846": {
    "ITEM_NAME": "Aeth's Swiftcinder Cloak",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103854": {
    "ITEM_NAME": "Kalaena's Arcane Handwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103859": {
    "ITEM_NAME": "Crimson Gauntlets of Death",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103935": {
    "ITEM_NAME": "Cape of the Alpha",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103960": {
    "ITEM_NAME": "Brave Niunai's Cloak",
    "allowedClasses": [
      Class.Druid,
      Class.Priest,
      Class.Mage,
      Class.Paladin,
      Class.Shaman,
      Class.Monk,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104158": {
    "ITEM_NAME": "Blackfuse Bombling",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104162": {
    "ITEM_NAME": "Droplet of Y'Shaarj",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104165": {
    "ITEM_NAME": "Kovok",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104253": {
    "ITEM_NAME": "Kor'kron Juggernaut",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104411": {
    "ITEM_NAME": "Immerseus' Crystalline Eye",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104412": {
    "ITEM_NAME": "Trident of Corrupted Waters",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104413": {
    "ITEM_NAME": "Hood of Blackened Tears",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104414": {
    "ITEM_NAME": "Puddle Punishers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104415": {
    "ITEM_NAME": "Bubble-Burst Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104416": {
    "ITEM_NAME": "Chestplate of Congealed Corrosion",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104417": {
    "ITEM_NAME": "Corruption-Rotted Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104418": {
    "ITEM_NAME": "Treads of Unchained Hate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104419": {
    "ITEM_NAME": "Bracers of Sordid Sleep",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104420": {
    "ITEM_NAME": "Pauldrons of Violent Eruption",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104421": {
    "ITEM_NAME": "Encapsulated Essence of Immerseus",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104422": {
    "ITEM_NAME": "Bolt-Burster Grips",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104423": {
    "ITEM_NAME": "Ichor-Dripping Shoulderpads",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104424": {
    "ITEM_NAME": "Hood of Swirling Senses",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104425": {
    "ITEM_NAME": "Cloak of Misguided Power",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104426": {
    "ITEM_NAME": "Purified Bindings of Immerseus",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104427": {
    "ITEM_NAME": "Seal of Eternal Sorrow",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104428": {
    "ITEM_NAME": "Salt Water Sandals",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104429": {
    "ITEM_NAME": "Bracers of Purified Spirit",
    "allowedClasses": [
      Class.Monk,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104430": {
    "ITEM_NAME": "Soul-Soaked Gloves",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104431": {
    "ITEM_NAME": "Greatbelt of Living Waters",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104432": {
    "ITEM_NAME": "Waterwalker Greatboots",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104433": {
    "ITEM_NAME": "Death Lotus Crossbow",
    "allowedClasses": [
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104434": {
    "ITEM_NAME": "Softfoot's Last Resort",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104435": {
    "ITEM_NAME": "Stonetoe's Tormented Treads",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104436": {
    "ITEM_NAME": "Grips of Unending Anguish",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104437": {
    "ITEM_NAME": "Poisonbinder Girth",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104438": {
    "ITEM_NAME": "Darkfallen Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104439": {
    "ITEM_NAME": "Shockstriker Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104440": {
    "ITEM_NAME": "Sorrowpath Signet",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104441": {
    "ITEM_NAME": "Gloomwrap Greatcloak",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104442": {
    "ITEM_NAME": "Rook's Unlucky Talisman",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104443": {
    "ITEM_NAME": "Sha-Seared Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104444": {
    "ITEM_NAME": "Robes of the Tendered Heart",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104445": {
    "ITEM_NAME": "Shoulderpads of Dou Dou Chong",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104446": {
    "ITEM_NAME": "Lifebane Bracers",
    "allowedClasses": [
      Class.Priest,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104447": {
    "ITEM_NAME": "Petrified Pennyroyal Ring",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104448": {
    "ITEM_NAME": "Purehearted Cricket Cage",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104449": {
    "ITEM_NAME": "Shoulders of the Roiling Inferno",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104450": {
    "ITEM_NAME": "Sabatons of Defilement",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104451": {
    "ITEM_NAME": "Shoulderguards of Dark Meditations",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104452": {
    "ITEM_NAME": "Grips of the Fallen Council",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104453": {
    "ITEM_NAME": "Gaze of Echoing Despair",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104454": {
    "ITEM_NAME": "Norushen's Shortblade",
    "allowedClasses": [
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104455": {
    "ITEM_NAME": "Reality Ripper Ring",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104456": {
    "ITEM_NAME": "Robes of the Blackened Watcher",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104457": {
    "ITEM_NAME": "Gloves of the Golden Protector",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104458": {
    "ITEM_NAME": "Leggings of Unabashed Anger",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104459": {
    "ITEM_NAME": "Quarantine Shoulderguards",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104460": {
    "ITEM_NAME": "Bracers of Blind Hatred",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104461": {
    "ITEM_NAME": "Rage-Blind Greathelm",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104462": {
    "ITEM_NAME": "Drape of the Despairing Pit",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104463": {
    "ITEM_NAME": "Fusion-Fire Core",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104464": {
    "ITEM_NAME": "Xifeng, Longblade of the Titanic Guardian",
    "allowedClasses": [
      Class.Warrior,
      Class.Paladin,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104465": {
    "ITEM_NAME": "Bracers of Broken Causation",
    "allowedClasses": [
      Class.Priest,
      Class.Warlock,
      Class.Mage
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104466": {
    "ITEM_NAME": "Blight Hurlers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104467": {
    "ITEM_NAME": "Sash of the Last Guardian",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104468": {
    "ITEM_NAME": "Rime-Rift Shoulders",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104469": {
    "ITEM_NAME": "Untainted Guardian's Chain",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104470": {
    "ITEM_NAME": "Norushen's Enigmatic Barrier",
    "allowedClasses": [
      Class.Paladin,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104471": {
    "ITEM_NAME": "Boots of Broken Reliance",
    "allowedClasses": [
      Class.Monk,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104472": {
    "ITEM_NAME": "Confident Grips",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104473": {
    "ITEM_NAME": "Bracers of Final Serenity",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104474": {
    "ITEM_NAME": "Shadow-Binder's Kilt",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104475": {
    "ITEM_NAME": "Wristplates of Broken Doubt",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104476": {
    "ITEM_NAME": "Assurance of Consequence",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104477": {
    "ITEM_NAME": "Necklace of Fading Light",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104478": {
    "ITEM_NAME": "Prismatic Prison of Pride",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104479": {
    "ITEM_NAME": "Gaze of Arrogance",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Warlock,
      Class.Mage
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104480": {
    "ITEM_NAME": "Self-Reflecting Mask",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104481": {
    "ITEM_NAME": "Crown of Boastful Words",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104482": {
    "ITEM_NAME": "Greaves of Sublime Superiority",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104483": {
    "ITEM_NAME": "Greatsword of Pride's Fall",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104484": {
    "ITEM_NAME": "Choker of the Final Word",
    "allowedClasses": [
      Class.Warrior,
      Class.DeathKnight,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104485": {
    "ITEM_NAME": "Shield of Mockery",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104486": {
    "ITEM_NAME": "Dagryn's Discarded Longbow",
    "allowedClasses": [
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104487": {
    "ITEM_NAME": "Swift Serpent Signet",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104488": {
    "ITEM_NAME": "Unrepentant Heels",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104489": {
    "ITEM_NAME": "Korgra's Venom-Soaked Gauntlets",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104490": {
    "ITEM_NAME": "Cannoneer's Multipocket Gunbelt",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104491": {
    "ITEM_NAME": "Dagryn's Fuselight Bracers",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104492": {
    "ITEM_NAME": "Thranok's Shattering Helm",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104493": {
    "ITEM_NAME": "Arcsmasher Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104494": {
    "ITEM_NAME": "Krugruk's Rigid Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104495": {
    "ITEM_NAME": "Evil Eye of Galakras",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104496": {
    "ITEM_NAME": "Galakrond Control Band",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104497": {
    "ITEM_NAME": "Bone-Inlaid Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104498": {
    "ITEM_NAME": "Scalebane Bracers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104499": {
    "ITEM_NAME": "Flameslinger's Fiery Cowl",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104500": {
    "ITEM_NAME": "Skydancer Boots",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104501": {
    "ITEM_NAME": "Shoulderpads of Pulsing Protection",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104502": {
    "ITEM_NAME": "Extinguished Ember of Galakras",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104503": {
    "ITEM_NAME": "Drakebinder Greatstaff",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104504": {
    "ITEM_NAME": "Dragonmaw Emergency Strap",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104505": {
    "ITEM_NAME": "Grips of Tidal Force",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104506": {
    "ITEM_NAME": "Smoldering Drakescale Bracers",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104507": {
    "ITEM_NAME": "Windfire Legplates",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104508": {
    "ITEM_NAME": "Seismic Bore",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104509": {
    "ITEM_NAME": "Laser Burn Bracers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104510": {
    "ITEM_NAME": "Ricocheting Shoulderguards",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104511": {
    "ITEM_NAME": "Minelayer's Padded Boots",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104512": {
    "ITEM_NAME": "Precision Cutters",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104513": {
    "ITEM_NAME": "Demolisher's Reinforced Belt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104514": {
    "ITEM_NAME": "Wall-Borer Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104515": {
    "ITEM_NAME": "Tar-Coated Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104516": {
    "ITEM_NAME": "Earthbreaker's Steaming Chestplate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104517": {
    "ITEM_NAME": "Juggernaut's Ignition Keys",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104518": {
    "ITEM_NAME": "Juggernaut's Focusing Crystal",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin,
      Class.Monk,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104519": {
    "ITEM_NAME": "Belt of Ominous Trembles",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104520": {
    "ITEM_NAME": "Leggings of Furious Flame",
    "allowedClasses": [
      Class.Priest,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104521": {
    "ITEM_NAME": "Bracers of the Broken Fault",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104522": {
    "ITEM_NAME": "Earthripper Gloves",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104523": {
    "ITEM_NAME": "Shock Pulse Robes",
    "allowedClasses": [
      Class.Priest,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104524": {
    "ITEM_NAME": "Laser-Slice Signet",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104525": {
    "ITEM_NAME": "Juggernaut's Power Core",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104526": {
    "ITEM_NAME": "Castlebreaker Bracers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104527": {
    "ITEM_NAME": "Treads of Autonomic Motion",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104528": {
    "ITEM_NAME": "Cavemaker Wristguards",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104529": {
    "ITEM_NAME": "Borer Drill Boots",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104530": {
    "ITEM_NAME": "Poisonmist Nightcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104531": {
    "ITEM_NAME": "Haromm's Talisman",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104532": {
    "ITEM_NAME": "Damron's Belt of Darkness",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104533": {
    "ITEM_NAME": "Riou's Vigilant Leggings",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104534": {
    "ITEM_NAME": "Haromm's Horrifying Helm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104535": {
    "ITEM_NAME": "Wolf-Rider Spurs",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104536": {
    "ITEM_NAME": "Breastplate of Shamanic Mirrors",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104537": {
    "ITEM_NAME": "Ashen Wall Girdle",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104538": {
    "ITEM_NAME": "Bloodclaw Band",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104539": {
    "ITEM_NAME": "Haromm's Frozen Crescent",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104540": {
    "ITEM_NAME": "Ring of the Iron Tomb",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104541": {
    "ITEM_NAME": "Toxic Tornado Treads",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104542": {
    "ITEM_NAME": "Iron Wolf Hood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104543": {
    "ITEM_NAME": "Ashflare Pendant",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Priest,
      Class.Monk,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104544": {
    "ITEM_NAME": "Kardris' Toxic Totem",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104545": {
    "ITEM_NAME": "Kardris' Scepter",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104546": {
    "ITEM_NAME": "Darkfang Mask",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104547": {
    "ITEM_NAME": "Belt of the Iron Prison",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104548": {
    "ITEM_NAME": "Shoulderguards of Foul Streams",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104549": {
    "ITEM_NAME": "Shackles of Stinking Slime",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104550": {
    "ITEM_NAME": "Shoulderplates of Gushing Geysers",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104551": {
    "ITEM_NAME": "Nazgrim's Gutripper",
    "allowedClasses": [
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104552": {
    "ITEM_NAME": "Sandals of Two Little Bees",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104553": {
    "ITEM_NAME": "Nazgrim's Burnished Insignia",
    "allowedClasses": [
      Class.Priest,
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104554": {
    "ITEM_NAME": "Arcweaver Spell Sword",
    "allowedClasses": [
      Class.Monk,
      Class.Paladin,
      Class.Warlock,
      Class.Mage
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104555": {
    "ITEM_NAME": "Shoulderguards of the Righteous Stand",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104556": {
    "ITEM_NAME": "Robes of the Warrior's Fall",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104557": {
    "ITEM_NAME": "Ravager's Pathwalkers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104558": {
    "ITEM_NAME": "Crown of Tragic Truth",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104559": {
    "ITEM_NAME": "Gar'tok, Strength of the Faithful",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104560": {
    "ITEM_NAME": "Bulwark of the Fallen General",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104561": {
    "ITEM_NAME": "Spaulders of Kor'kron Fealty",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104562": {
    "ITEM_NAME": "Ring of Restless Energy",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104563": {
    "ITEM_NAME": "Kor'kron Hand Cannon",
    "allowedClasses": [
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104564": {
    "ITEM_NAME": "Halberd of Inner Shadows",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104565": {
    "ITEM_NAME": "Lazahk's Lost Shadowrap",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104566": {
    "ITEM_NAME": "Wristguards of Ruination",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104567": {
    "ITEM_NAME": "Malkorok's Giant Stompers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104568": {
    "ITEM_NAME": "Blood Rage Bracers",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104569": {
    "ITEM_NAME": "Legplates of Willful Doom",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104570": {
    "ITEM_NAME": "Malkorok's Tainted Dog Tags",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104571": {
    "ITEM_NAME": "Malkorok's Skullcleaver",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104572": {
    "ITEM_NAME": "Vial of Living Corruption",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104573": {
    "ITEM_NAME": "Miasmic Skullbelt",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104574": {
    "ITEM_NAME": "Hood of Perpetual Implosion",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104575": {
    "ITEM_NAME": "Robes of Riven Dreams",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104576": {
    "ITEM_NAME": "Frenzied Crystal of Rage",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Priest,
      Class.Shaman,
      Class.Warlock,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104577": {
    "ITEM_NAME": "Black-Blooded Drape",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104578": {
    "ITEM_NAME": "Seal of Sullen Fury",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104579": {
    "ITEM_NAME": "Visage of the Monstrous",
    "allowedClasses": [
      Class.Paladin,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104580": {
    "ITEM_NAME": "Boots of Perilous Infusion",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104581": {
    "ITEM_NAME": "Bracers of Averted Fatality",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104582": {
    "ITEM_NAME": "Ebon Blood Chestguard",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104583": {
    "ITEM_NAME": "Terrorguard Chestplate",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104584": {
    "ITEM_NAME": "Sigil of Rampage",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104585": {
    "ITEM_NAME": "Enchanted Shao-Tien Saber",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104586": {
    "ITEM_NAME": "Pandaren Roofsprinters",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104587": {
    "ITEM_NAME": "Mantid Carapace Augments",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104588": {
    "ITEM_NAME": "Arrowflight Girdle",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104589": {
    "ITEM_NAME": "Ancient Archer's Chestguard",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104590": {
    "ITEM_NAME": "Helm of the Night Watchman",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104591": {
    "ITEM_NAME": "Untarnishable Greatbelt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104592": {
    "ITEM_NAME": "Ominous Mogu Greatboots",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104593": {
    "ITEM_NAME": "Seal of the Forgotten Kings",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104594": {
    "ITEM_NAME": "Ancient Mogu Tower Shield",
    "allowedClasses": [
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104595": {
    "ITEM_NAME": "Avool's Ancestral Bracers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104596": {
    "ITEM_NAME": "Mantid Vizier's Robes",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104597": {
    "ITEM_NAME": "Lost Necklace of the Mogu Empress",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104598": {
    "ITEM_NAME": "Immaculately Preserved Wand",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104599": {
    "ITEM_NAME": "Klaxxi Grips of Rejuvenation",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104600": {
    "ITEM_NAME": "Shado-Pan Reliquary Kilt",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104601": {
    "ITEM_NAME": "Chitin-Link Chain Belt",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104602": {
    "ITEM_NAME": "Bracers of the Pristine Purifier",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104603": {
    "ITEM_NAME": "Plate Belt of the War-Healer",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104604": {
    "ITEM_NAME": "Mogu Mindbender's Greaves",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104605": {
    "ITEM_NAME": "Hvitserk's Formidable Shanker",
    "allowedClasses": [
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104606": {
    "ITEM_NAME": "Gleaming Eye of the Devilsaur",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104607": {
    "ITEM_NAME": "Montak's Grips of Scorching Breath",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104608": {
    "ITEM_NAME": "Akolik's Acid-Soaked Robes",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104609": {
    "ITEM_NAME": "Festering Primordial Globule",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104610": {
    "ITEM_NAME": "Signet of the Dinomancers",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104611": {
    "ITEM_NAME": "Thok's Acid-Grooved Tooth",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104612": {
    "ITEM_NAME": "Icy Blood Chestplate",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104613": {
    "ITEM_NAME": "Thok's Tail Tip",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104614": {
    "ITEM_NAME": "Britomart's Jagged Pike",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104615": {
    "ITEM_NAME": "Devilfang Band",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104616": {
    "ITEM_NAME": "Ticking Ebon Detonator",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104617": {
    "ITEM_NAME": "Fusespark Gloves",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104618": {
    "ITEM_NAME": "Lever of the Megantholithic Apparatus",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104619": {
    "ITEM_NAME": "Dysmorphic Samophlange of Discontinuity",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104620": {
    "ITEM_NAME": "Bomber's Blackened Wristwatch",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104621": {
    "ITEM_NAME": "Bracers of Infinite Pipes",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104622": {
    "ITEM_NAME": "Powder-Stained Totemic Treads",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104623": {
    "ITEM_NAME": "Calixian Bladebreakers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104624": {
    "ITEM_NAME": "Asgorathian Blood Seal",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104625": {
    "ITEM_NAME": "Siegecrafter's Forge Hammer",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104626": {
    "ITEM_NAME": "Blackfuse's Blasting Cord",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104627": {
    "ITEM_NAME": "Hisek's Reserve Longbow",
    "allowedClasses": [
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104628": {
    "ITEM_NAME": "Kil'ruk's Band of Ascendancy",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104629": {
    "ITEM_NAME": "Korven's Crimson Crescent",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104630": {
    "ITEM_NAME": "Bracers of Sonic Projection",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104631": {
    "ITEM_NAME": "Rik'kal's Bloody Scalpel",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104632": {
    "ITEM_NAME": "Iyyokuk's Hereditary Seal",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104633": {
    "ITEM_NAME": "Amber Parasite Wraps",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104634": {
    "ITEM_NAME": "Chestguard of Toxic Injections",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104635": {
    "ITEM_NAME": "Gauntlets of Insane Calculations",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104636": {
    "ITEM_NAME": "Skeer's Bloodsoaked Talisman",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104637": {
    "ITEM_NAME": "Kil'ruk's Furious Blade",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104638": {
    "ITEM_NAME": "Kor'kron Spire of Supremacy",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104639": {
    "ITEM_NAME": "Cord of Black Dreams",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104640": {
    "ITEM_NAME": "Kor'kron Elite Skullmask",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104641": {
    "ITEM_NAME": "Chestguard of Relentless Tyranny",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104642": {
    "ITEM_NAME": "Penetrating Gaze of Y'Shaarj",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104643": {
    "ITEM_NAME": "Shoulderguards of Intended Power",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104644": {
    "ITEM_NAME": "Legplates of Unthinking Strife",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104645": {
    "ITEM_NAME": "Spaulders of the Fallen Warchief",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104646": {
    "ITEM_NAME": "Tusks of Mannoroth",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104647": {
    "ITEM_NAME": "Greathelm of the Warchief",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104648": {
    "ITEM_NAME": "Xal'atoh, Desecrated Image of Gorehowl",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104649": {
    "ITEM_NAME": "Curse of Hubris",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104650": {
    "ITEM_NAME": "Belt of the Broken Pact",
    "allowedClasses": [
      Class.Priest,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104651": {
    "ITEM_NAME": "Ebon Ritual Hood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104652": {
    "ITEM_NAME": "Black Blood of Y'Shaarj",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104653": {
    "ITEM_NAME": "Horned Mace of the Old Ones",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104654": {
    "ITEM_NAME": "Revelations of Y'Shaarj",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Shaman,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104655": {
    "ITEM_NAME": "Seal of Karmic Return",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104656": {
    "ITEM_NAME": "Hopeglow Spaulders",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104657": {
    "ITEM_NAME": "Cowl of Smoking Dreams",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104658": {
    "ITEM_NAME": "Chestplate of Fallen Passion",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104659": {
    "ITEM_NAME": "Mantle of Looming Darkness",
    "allowedClasses": [
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105856": {
    "ITEM_NAME": "Echoes of War",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105866": {
    "ITEM_NAME": "Essence of the Cursed Protector",
    "allowedClasses": [
      Class.Hunter,
      Class.Monk,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105867": {
    "ITEM_NAME": "Essence of the Cursed Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105868": {
    "ITEM_NAME": "Essence of the Cursed Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Rogue,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  }
}