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
  "93666": {
    "ITEM_NAME": "Spawn of Horridon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94125": {
    "ITEM_NAME": "Living Sandling",
    "allowedClasses": [

    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94152": {
    "ITEM_NAME": "Son of Animus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94835": {
    "ITEM_NAME": "Ji-Kun Hatchling",
    "allowedClasses": [

    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94867": {
    "ITEM_NAME": "Heart of the Thunder King",
    "allowedClasses": [

    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94995": {
    "ITEM_NAME": "Detonation Cord",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94996": {
    "ITEM_NAME": "Vita-Binder Wrap",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94997": {
    "ITEM_NAME": "Worldbender Waistband",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94998": {
    "ITEM_NAME": "Strap of Murderous Strikes",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94999": {
    "ITEM_NAME": "Longdraw Chain Belt",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95000": {
    "ITEM_NAME": "Jingling Fetishgirdle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95001": {
    "ITEM_NAME": "Bubbling Anima Belt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95002": {
    "ITEM_NAME": "Cracklesnap Clasp",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95003": {
    "ITEM_NAME": "Flare-Forged Greatbelt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95004": {
    "ITEM_NAME": "Starwalker Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95005": {
    "ITEM_NAME": "Treads of Delicate Fascia",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95006": {
    "ITEM_NAME": "Roots of Pain",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95007": {
    "ITEM_NAME": "Twist-Toe Tabi",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95008": {
    "ITEM_NAME": "World-Mote Sabatons",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95009": {
    "ITEM_NAME": "Treads of the Sanguine Volley",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95010": {
    "ITEM_NAME": "Hypersensitive Sollerets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95011": {
    "ITEM_NAME": "Lightning-Walker Clawfeet",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95012": {
    "ITEM_NAME": "Sabatons of the Superior Being",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95013": {
    "ITEM_NAME": "Black Night Thundercloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95014": {
    "ITEM_NAME": "Red Sky Cloudcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95015": {
    "ITEM_NAME": "Grey Wind Mistcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95016": {
    "ITEM_NAME": "White Snow Skycloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95017": {
    "ITEM_NAME": "Yellow Dawn Lightningcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95018": {
    "ITEM_NAME": "Ra-den's Evolving Signet",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95019": {
    "ITEM_NAME": "Ra-den's Summoning Band",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95020": {
    "ITEM_NAME": "Ra-den's Contemplative Loop",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Shaman,
      Class.Rogue,
      Class.Warlock,
      Class.Priest,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95021": {
    "ITEM_NAME": "Ra-den's Swift Seal",
    "allowedClasses": [
      Class.Hunter,
      Class.Druid,
      Class.Monk,
      Class.Mage,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95022": {
    "ITEM_NAME": "Ra-den's Ruinous Ring",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95023": {
    "ITEM_NAME": "Legplates of Lightning Blood",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95024": {
    "ITEM_NAME": "Time-Lost Greaves",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95025": {
    "ITEM_NAME": "Archaic Protector's Legguards",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95026": {
    "ITEM_NAME": "Sparkstring Chain Leggings",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95027": {
    "ITEM_NAME": "Legguards of Awaked Repair",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95028": {
    "ITEM_NAME": "Cosmicfire Legwraps",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95029": {
    "ITEM_NAME": "Kilt of Perpetual Genuflection",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95030": {
    "ITEM_NAME": "Leggings of the Discarded Warning",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95031": {
    "ITEM_NAME": "Legguards of Surreal Visions",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95032": {
    "ITEM_NAME": "Robes of Contagious Time",
    "allowedClasses": [
      Class.Druid,
      Class.Rogue,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95033": {
    "ITEM_NAME": "Chestguard of Coruscating Blades",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95034": {
    "ITEM_NAME": "Scales of Shaped Flesh",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95035": {
    "ITEM_NAME": "Chains of Counted Souls",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95036": {
    "ITEM_NAME": "Nova-Binder Breastplate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95037": {
    "ITEM_NAME": "Planet-Birthed Cuirass",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95038": {
    "ITEM_NAME": "Carapace of the Core",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95039": {
    "ITEM_NAME": "Starburner Robes",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95040": {
    "ITEM_NAME": "Robes of Nova",
    "allowedClasses": [
      Class.Priest,
      Class.Mage,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95059": {
    "ITEM_NAME": "Clutch of Ji-Kun",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95202": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Archer",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95203": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Invoker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95204": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Mender",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95205": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95206": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Protector",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Paladin,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95207": {
    "ITEM_NAME": "Abandoned Zandalari Firecord",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95208": {
    "ITEM_NAME": "Abandoned Zandalari Shadowgirdle",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95209": {
    "ITEM_NAME": "Abandoned Zandalari Silentbelt",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95210": {
    "ITEM_NAME": "Abandoned Zandalari Moonstrap",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95211": {
    "ITEM_NAME": "Abandoned Zandalari Arrowlinks",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95212": {
    "ITEM_NAME": "Abandoned Zandalari Waterchain",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95213": {
    "ITEM_NAME": "Abandoned Zandalari Greatbelt",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95214": {
    "ITEM_NAME": "Abandoned Zandalari Goreplate",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95215": {
    "ITEM_NAME": "Abandoned Zandalari Bucklebreaker",
    "allowedClasses": [
      Class.Warrior,
      Class.DeathKnight,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95216": {
    "ITEM_NAME": "Vaultwalker Sabatons",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95217": {
    "ITEM_NAME": "Locksmasher Greaves",
    "allowedClasses": [
      Class.Paladin,
      Class.Warlock,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95218": {
    "ITEM_NAME": "Columnbreaker Stompers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95219": {
    "ITEM_NAME": "Spiderweb Tabi",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95220": {
    "ITEM_NAME": "Scalehide Spurs",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95221": {
    "ITEM_NAME": "Deeproot Treads",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95222": {
    "ITEM_NAME": "Spiritbound Boots",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95223": {
    "ITEM_NAME": "Silentflame Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95224": {
    "ITEM_NAME": "Home-Warding Slippers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96368": {
    "ITEM_NAME": "Sign of the Bloodied God",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96369": {
    "ITEM_NAME": "Renataki's Soul Charm",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96370": {
    "ITEM_NAME": "Lightning-Eye Hood",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96371": {
    "ITEM_NAME": "Spearman's Jingling Leggings",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96372": {
    "ITEM_NAME": "Static-Shot Shoulderguards",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96373": {
    "ITEM_NAME": "Cloudbreaker Greatbelt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96374": {
    "ITEM_NAME": "Chestplate of Violent Detonation",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96375": {
    "ITEM_NAME": "Bracers of Constant Implosion",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96376": {
    "ITEM_NAME": "Worldbreaker's Stormscythe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96377": {
    "ITEM_NAME": "Jin'rokh's Soulcrystal",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight,
      Class.Monk,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96378": {
    "ITEM_NAME": "Lightningweaver Gauntlets",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96379": {
    "ITEM_NAME": "Al'set's Tormented Leggings",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96380": {
    "ITEM_NAME": "Fissure-Split Shoulderwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96381": {
    "ITEM_NAME": "Robes of Static Bursts",
    "allowedClasses": [
      Class.Priest,
      Class.Warlock,
      Class.Mage
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96382": {
    "ITEM_NAME": "Jin'rokh's Dreamshard",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Paladin,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96383": {
    "ITEM_NAME": "Drape of Booming Nights",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Hunter,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96384": {
    "ITEM_NAME": "Soulblade of the Breaking Storm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96385": {
    "ITEM_NAME": "Horridon's Last Gasp",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96386": {
    "ITEM_NAME": "Infinitely Conducting Bracers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96387": {
    "ITEM_NAME": "Ghostbinder Greatboots",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96388": {
    "ITEM_NAME": "Ionized Yojamban Carapace",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96389": {
    "ITEM_NAME": "Wastewalker's Sandblasted Drape",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96390": {
    "ITEM_NAME": "Talisman of Living Poison",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96391": {
    "ITEM_NAME": "Jalak's Maelstrom Staff",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96392": {
    "ITEM_NAME": "Bindings of Multiplicative Strikes",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96393": {
    "ITEM_NAME": "Sul'lithuz Sandmail",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96394": {
    "ITEM_NAME": "Frozen Warlord's Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96395": {
    "ITEM_NAME": "Bloodlord's Bloodsoaked Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96396": {
    "ITEM_NAME": "Puncture-Proof Greathelm",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96397": {
    "ITEM_NAME": "Horn-Rimmed Doomcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Hunter,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96398": {
    "ITEM_NAME": "Spark of Zandalar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96399": {
    "ITEM_NAME": "Flamecaster's Burning Crown",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96400": {
    "ITEM_NAME": "Vaccinator's Armwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96401": {
    "ITEM_NAME": "Dinomancer's Spiritbinding Spire",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96402": {
    "ITEM_NAME": "Horridon's Tusk Fragment",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96403": {
    "ITEM_NAME": "Petrified Eye of the Basilisk",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96404": {
    "ITEM_NAME": "Venomlord's Totemic Wand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96405": {
    "ITEM_NAME": "Roots of Rampaging Earth",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96406": {
    "ITEM_NAME": "Spaulders of Dinomancy",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96407": {
    "ITEM_NAME": "Legguards of Scintillating Scales",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96408": {
    "ITEM_NAME": "Armplates of the Vanquished Abomination",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96409": {
    "ITEM_NAME": "Bad Juju",
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
  "96410": {
    "ITEM_NAME": "Kura-Kura, Kazra'jin's Skullcleaver",
    "allowedClasses": [
      Class.Rogue, Class.Shaman, Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96411": {
    "ITEM_NAME": "Mar'li's Bloodstained Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96412": {
    "ITEM_NAME": "Zandalari Robes of the Final Rite",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96413": {
    "ITEM_NAME": "Wushoolay's Final Choice",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96414": {
    "ITEM_NAME": "Amun-Thoth, Sul's Spiritrending Talons",
    "allowedClasses": [
      Class.Druid,
      Class.DeathKnight,
      Class.Warrior,
      Class.Shaman,
      Class.Rogue,
      Class.Monk,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96415": {
    "ITEM_NAME": "Robes of Treacherous Ground",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96416": {
    "ITEM_NAME": "Gaze of Gara'jal",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96417": {
    "ITEM_NAME": "Loa-Ridden Bracers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96418": {
    "ITEM_NAME": "Overloaded Bladebreaker Cuirass",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96419": {
    "ITEM_NAME": "Zerat, Malakk's Soulburning Greatsword",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96420": {
    "ITEM_NAME": "Talisman of Angry Spirits",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96421": {
    "ITEM_NAME": "Fortitude of the Zandalari",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96422": {
    "ITEM_NAME": "Shattered Tortoiseshell Longbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96423": {
    "ITEM_NAME": "Rockfall Ribwraps",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96424": {
    "ITEM_NAME": "Grips of Vampiric Cruelty",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96425": {
    "ITEM_NAME": "Beady-Eye Bracers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96426": {
    "ITEM_NAME": "Quakestompers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96427": {
    "ITEM_NAME": "Shoulderguards of Centripetal Destruction",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96428": {
    "ITEM_NAME": "Shell-Coated Wristplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96429": {
    "ITEM_NAME": "Amulet of the Primal Turtle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96430": {
    "ITEM_NAME": "Shellsplitter Greataxe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96431": {
    "ITEM_NAME": "Beakbreaker Greatcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96432": {
    "ITEM_NAME": "Azure Shell Bracers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96433": {
    "ITEM_NAME": "Stonegaze Hood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96434": {
    "ITEM_NAME": "Crystal-Claw Gloves",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96435": {
    "ITEM_NAME": "Shimmershell Cape",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Warlock,
      Class.Warrior,
      Class.Shaman,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96436": {
    "ITEM_NAME": "Tortos' Discarded Shell",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96437": {
    "ITEM_NAME": "Vampire Bat-Hide Bracers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96438": {
    "ITEM_NAME": "Robes of Concussive Shocks",
    "allowedClasses": [
      Class.Druid,
      Class.Rogue,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96439": {
    "ITEM_NAME": "Spaulders of Quaking Fear",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96440": {
    "ITEM_NAME": "Refreshing Abalone Girdle",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96441": {
    "ITEM_NAME": "Tortos' Shellseizers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96442": {
    "ITEM_NAME": "Megaera's Poisoned Fang",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96443": {
    "ITEM_NAME": "Quadra-Head Brooch",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96444": {
    "ITEM_NAME": "Poisonblood Bladeshoulders",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96445": {
    "ITEM_NAME": "Grips of Cinderflesh",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96446": {
    "ITEM_NAME": "Plated Toothbreaker Girdle",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96447": {
    "ITEM_NAME": "Rot-Proof Greatplate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96448": {
    "ITEM_NAME": "Spinescale Seal",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96449": {
    "ITEM_NAME": "Hydraskull Choker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96450": {
    "ITEM_NAME": "Sandals of Arcane Fury",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96451": {
    "ITEM_NAME": "Gleaming-Eye Shoulderpads",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96452": {
    "ITEM_NAME": "Frostborn Wristwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96453": {
    "ITEM_NAME": "Megaera's Shining Eye",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96454": {
    "ITEM_NAME": "Fetish of the Hydra",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96455": {
    "ITEM_NAME": "Breath of the Hydra",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96456": {
    "ITEM_NAME": "Inscribed Bag of Hydra-Spawn",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Warlock,
      Class.Rogue,
      Class.Priest,
      Class.Shaman,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96457": {
    "ITEM_NAME": "Hood of Smoldering Flesh",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96458": {
    "ITEM_NAME": "Links of the Bifurcated Tongue",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96459": {
    "ITEM_NAME": "Chain of Consuming Magic",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96460": {
    "ITEM_NAME": "Ice-Scored Treads",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96461": {
    "ITEM_NAME": "Pinionfeather Greatcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96462": {
    "ITEM_NAME": "Cord of Cacophonous Cawing",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96463": {
    "ITEM_NAME": "Robe of Midnight Down",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96464": {
    "ITEM_NAME": "Giorgio's Caduceus of Pure Moods",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96465": {
    "ITEM_NAME": "Featherflight Belt",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96466": {
    "ITEM_NAME": "Grasp of the Ruthless Mother",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96467": {
    "ITEM_NAME": "Crown of Potentiated Birth",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96468": {
    "ITEM_NAME": "Talonrender Chestplate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96469": {
    "ITEM_NAME": "Egg-Shard Grips",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96470": {
    "ITEM_NAME": "Fabled Feather of Ji-Kun",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96471": {
    "ITEM_NAME": "Ji-Kun's Rising Winds",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96472": {
    "ITEM_NAME": "Durumu's Baleful Gaze",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96473": {
    "ITEM_NAME": "Crimson Bloom Legguards",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96474": {
    "ITEM_NAME": "Links of the Disintegrator",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96475": {
    "ITEM_NAME": "Aberrant Chestguard of Torment",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96476": {
    "ITEM_NAME": "Caustic Spike Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96477": {
    "ITEM_NAME": "Legplates of the Dark Parasite",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96478": {
    "ITEM_NAME": "Treads of the Blind Eye",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96479": {
    "ITEM_NAME": "Artery Rippers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96480": {
    "ITEM_NAME": "Reinforced Mirror-Sheen Cloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96481": {
    "ITEM_NAME": "Durumu's Severed Tentacle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96482": {
    "ITEM_NAME": "Lifedrainer's Sordid Grip",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96483": {
    "ITEM_NAME": "Leggings of Pulsing Blood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96484": {
    "ITEM_NAME": "Chilblain Spaulders",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96485": {
    "ITEM_NAME": "Deadly Glare Cape",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96486": {
    "ITEM_NAME": "Durumu's Captive Eyeball",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96487": {
    "ITEM_NAME": "Ritual Dagger of the Mind's Eye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96488": {
    "ITEM_NAME": "Sandals of the Starving Eye",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96489": {
    "ITEM_NAME": "Vein-Cover Bracers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96490": {
    "ITEM_NAME": "Iceshatter Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96491": {
    "ITEM_NAME": "Legplates of Re-Emergence",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96492": {
    "ITEM_NAME": "Talisman of Bloodlust",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Hunter,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96493": {
    "ITEM_NAME": "Gloves of Cushioned Air",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96494": {
    "ITEM_NAME": "Bracers of Mutagenic Fervor",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96495": {
    "ITEM_NAME": "Synapse-String Handguards",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96496": {
    "ITEM_NAME": "Pathogenic Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96497": {
    "ITEM_NAME": "Black Blood Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96498": {
    "ITEM_NAME": "Metabolically Boosted Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96499": {
    "ITEM_NAME": "Hydra-Scale Bloodcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96500": {
    "ITEM_NAME": "Band of the Scaled Tyrant",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96501": {
    "ITEM_NAME": "Primordius' Talisman of Rage",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Rogue,
      Class.Shaman,
      Class.Priest,
      Class.Warrior,
      Class.Warlock,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96502": {
    "ITEM_NAME": "Acid-Spine Bonemace",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Shaman,
      Class.Rogue,
      Class.Priest,
      Class.Paladin,
      Class.Monk,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96503": {
    "ITEM_NAME": "Robes of Mutagenic Blood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96504": {
    "ITEM_NAME": "Helix-Breaker Gloves",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96505": {
    "ITEM_NAME": "Leggings of Ebon Veins",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96506": {
    "ITEM_NAME": "Bracers of Fragile Bone",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96507": {
    "ITEM_NAME": "Stolen Relic of Zuldazar",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Shaman,
      Class.Priest,
      Class.Rogue,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96508": {
    "ITEM_NAME": "Leggings of the Malformed Sapling",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96509": {
    "ITEM_NAME": "Clear-Mind Helm",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96510": {
    "ITEM_NAME": "Bonemender Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96511": {
    "ITEM_NAME": "Spaulders of Primordial Growth",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96512": {
    "ITEM_NAME": "Greatshield of the Gloaming",
    "allowedClasses": [
      Class.Paladin,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96513": {
    "ITEM_NAME": "Gore-Soaked Gear",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96514": {
    "ITEM_NAME": "Hand of the Dark Animus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96515": {
    "ITEM_NAME": "Hood of the Crimson Wake",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96516": {
    "ITEM_NAME": "Cha-Ye's Essence of Brilliance",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96517": {
    "ITEM_NAME": "Constantly Accelerating Cloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96518": {
    "ITEM_NAME": "Athame of the Sanguine Ritual",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96519": {
    "ITEM_NAME": "Worldbinder Leggings",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96520": {
    "ITEM_NAME": "Anima-Ringed Fingers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96521": {
    "ITEM_NAME": "Matter-Swapped Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96522": {
    "ITEM_NAME": "Crown of the Golden Golem",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96523": {
    "ITEM_NAME": "Delicate Vial of the Sanguinaire",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96524": {
    "ITEM_NAME": "Iron Qon's Boot Knife",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96525": {
    "ITEM_NAME": "Voice of the Quilen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96526": {
    "ITEM_NAME": "Quet'zal's Crackling Cord",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96527": {
    "ITEM_NAME": "Saddle-Scarred Leggings",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96528": {
    "ITEM_NAME": "Dam'ren's Frozen Footguards",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96529": {
    "ITEM_NAME": "Ro'shak's Remembrance",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96530": {
    "ITEM_NAME": "Orb of Arcing Lightning",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96531": {
    "ITEM_NAME": "Spurs of the Storm Cavalry",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96532": {
    "ITEM_NAME": "Ro'shak's Molten Chain",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96533": {
    "ITEM_NAME": "Rein-Binder's Fists",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96534": {
    "ITEM_NAME": "Qon's Flaming Scimitar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96535": {
    "ITEM_NAME": "Wu-Lai, Bladed Fan of the Consorts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96536": {
    "ITEM_NAME": "Robes of the Moon Lotus",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96537": {
    "ITEM_NAME": "Passionfire Choker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Mage,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96538": {
    "ITEM_NAME": "Shield of Twinned Despair",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96539": {
    "ITEM_NAME": "Suen-Wo, Spire of the Falling Sun",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96540": {
    "ITEM_NAME": "Bracers of the Midnight Comet",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96541": {
    "ITEM_NAME": "Girdle of Night and Day",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96542": {
    "ITEM_NAME": "Tidal Force Treads",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96543": {
    "ITEM_NAME": "Gaze of the Twins",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96544": {
    "ITEM_NAME": "Moonjade Necklace",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96545": {
    "ITEM_NAME": "Fingers of the Night",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96546": {
    "ITEM_NAME": "Rune of Re-Origination",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96547": {
    "ITEM_NAME": "Shan-Dun, Breaker of Hope",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96548": {
    "ITEM_NAME": "Fusion Slasher Chestguard",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96549": {
    "ITEM_NAME": "Conduit-Breaker Chain Leggings",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96550": {
    "ITEM_NAME": "Doomed Crown of Lei Shen",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96551": {
    "ITEM_NAME": "Legplates of the Lightning Throne",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96552": {
    "ITEM_NAME": "Legplates of Whipping Ionization",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96553": {
    "ITEM_NAME": "Uroe, Harbinger of Terror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96554": {
    "ITEM_NAME": "Ultimate Protection of the Emperor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96555": {
    "ITEM_NAME": "Soul Barrier",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96556": {
    "ITEM_NAME": "Legwraps of Cardinality",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96557": {
    "ITEM_NAME": "Gloves of the Maimed Vizier",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96558": {
    "ITEM_NAME": "Unerring Vision of Lei Shen",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96559": {
    "ITEM_NAME": "Torall, Rod of the Shattered Throne",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96560": {
    "ITEM_NAME": "Soul Prism of Lei Shen",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96561": {
    "ITEM_NAME": "Lightning-Imbued Chalice",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96562": {
    "ITEM_NAME": "Lei Shen's Orb of Command",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96563": {
    "ITEM_NAME": "Grips of Slicing Electricity",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96564": {
    "ITEM_NAME": "Leggings of the Violent Gale",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96565": {
    "ITEM_NAME": "Lei Shen's Grounded Carapace",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96566": {
    "ITEM_NAME": "Chest of the Crackling Vanquisher",
    "allowedClasses": VANQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96567": {
    "ITEM_NAME": "Chest of the Crackling Conqueror",
    "allowedClasses": CONQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96568": {
    "ITEM_NAME": "Chest of the Crackling Protector",
    "allowedClasses": PROTECTOR_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96599": {
    "ITEM_NAME": "Gauntlets of the Crackling Vanquisher",
    "allowedClasses": VANQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96600": {
    "ITEM_NAME": "Gauntlets of the Crackling Conqueror",
    "allowedClasses": CONQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96601": {
    "ITEM_NAME": "Gauntlets of the Crackling Protector",
    "allowedClasses": PROTECTOR_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96602": {
    "ITEM_NAME": "Invocation of the Dawn",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96603": {
    "ITEM_NAME": "Miracoran, the Vehement Chord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96604": {
    "ITEM_NAME": "Fyn's Flickering Dagger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96605": {
    "ITEM_NAME": "Zeeg's Ancient Kegsmasher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96606": {
    "ITEM_NAME": "Darkwood Spiritstaff",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96607": {
    "ITEM_NAME": "Lost Shoulders of Fire",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96608": {
    "ITEM_NAME": "Lost Shoulders of Healing",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96609": {
    "ITEM_NAME": "Lost Shoulders of Fluidity",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96610": {
    "ITEM_NAME": "Nadagast's Exsanguinator",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96611": {
    "ITEM_NAME": "Jerthud, Graceful Hand of the Savior",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96612": {
    "ITEM_NAME": "Forgotten Mantle of the Moon",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96613": {
    "ITEM_NAME": "Forgotten Mantle of the Sun",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96614": {
    "ITEM_NAME": "Abandoned Spaulders of Arrowflight",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96615": {
    "ITEM_NAME": "Abandoned Spaulders of Renewal",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96616": {
    "ITEM_NAME": "Reconstructed Holy Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96617": {
    "ITEM_NAME": "Reconstructed Furious Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96618": {
    "ITEM_NAME": "Reconstructed Bloody Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96619": {
    "ITEM_NAME": "Greatsword of Frozen Hells",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96620": {
    "ITEM_NAME": "Do-tharak, the Swordbreaker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96621": {
    "ITEM_NAME": "Bo-Ris, Horror in the Night",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96622": {
    "ITEM_NAME": "Visage of the Doomed",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96623": {
    "ITEM_NAME": "Helm of the Crackling Vanquisher",
    "allowedClasses": VANQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96624": {
    "ITEM_NAME": "Helm of the Crackling Conqueror",
    "allowedClasses": CONQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96625": {
    "ITEM_NAME": "Helm of the Crackling Protector",
    "allowedClasses": PROTECTOR_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96631": {
    "ITEM_NAME": "Leggings of the Crackling Vanquisher",
    "allowedClasses": VANQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96632": {
    "ITEM_NAME": "Leggings of the Crackling Conqueror",
    "allowedClasses": CONQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96633": {
    "ITEM_NAME": "Leggings of the Crackling Protector",
    "allowedClasses": PROTECTOR_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96699": {
    "ITEM_NAME": "Shoulders of the Crackling Vanquisher",
    "allowedClasses": VANQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96700": {
    "ITEM_NAME": "Shoulders of the Crackling Conqueror",
    "allowedClasses": CONQ_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96701": {
    "ITEM_NAME": "Shoulders of the Crackling Protector",
    "allowedClasses": PROTECTOR_TOKEN,
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "97127": {
    "ITEM_NAME": "Tia-Tia, the Scything Star",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "97960": {
    "ITEM_NAME": "Dark Quivering Blob",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  }
}