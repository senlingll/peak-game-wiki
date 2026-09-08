// Official source: https://peak.wiki.gg/wiki/Items
// The page states 134 total items; the active table omits two legacy rows, which remain included here for a complete source-aligned catalog.
export const ITEMS_SOURCE_URL = "https://peak.wiki.gg/wiki/Items";
export const ITEMS_SOURCE_LAST_EDITED = "2026-08-14";

export const itemsCatalog = [
  {
    "name": "Airline Food",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "5",
    "hunger": "−40",
    "bonusStamina": "40",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "airline food food packaged food any "
  },
  {
    "name": "Aloe Vera",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Removes  50 Heat.",
    "search": "aloe vera consumables mesa • removes  50 heat."
  },
  {
    "name": "Ancient Idol",
    "category": "oddities",
    "officialType": [
      "Mystical items"
    ],
    "weight": "40",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [
      "Tomb"
    ],
    "notes": "• Found exclusively inside the Tomb.\n• Grants  Invincibility from any damage or negative status effects (except knockback) while actively held.\n• Prevents consumption of  Bonus stamina while actively held.\n• Can be thrown into the lava of The Kiln to receive the  24 Karat Badge.\n• Cooking: Cannot be cooked.",
    "search": "ancient idol mystical items mesa tomb • found exclusively inside the tomb.\n• grants  invincibility from any damage or negative status effects (except knockback) while actively held.\n• prevents consumption of  bonus stamina while actively held.\n• can be thrown into the lava of the kiln to receive the  24 karat badge.\n• cooking: cannot be cooked."
  },
  {
    "name": "Anti-Rope Cannon",
    "category": "tools",
    "officialType": [
      "Deployables",
      "Mystical items"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Shoots a harpoon that will deploy a length of gravity defying anti-rope on contact with a compatible surface.\n• A dropped anti-rope Cannon can float away!\n• Cooking: Immediately incinerated.",
    "search": "anti-rope cannon deployables mystical items any • shoots a harpoon that will deploy a length of gravity defying anti-rope on contact with a compatible surface.\n• a dropped anti-rope cannon can float away!\n• cooking: immediately incinerated."
  },
  {
    "name": "Anti-Rope Spool",
    "category": "tools",
    "officialType": [
      "Deployables",
      "Mystical items"
    ],
    "weight": "−2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Creates lengths of climbable anti-rope (up to 10 meters) that can be attached to any climbable surface.\n• Anti-rope will defy gravity and float upwards.\n• Each spool contains 12.5 meters of anti-rope.\n• A dropped spool of anti-rope will float upwards!\n• Cooking: Immediately incinerated.",
    "search": "anti-rope spool deployables mystical items any • creates lengths of climbable anti-rope (up to 10 meters) that can be attached to any climbable surface.\n• anti-rope will defy gravity and float upwards.\n• each spool contains 12.5 meters of anti-rope.\n• a dropped spool of anti-rope will float upwards!\n• cooking: immediately incinerated."
  },
  {
    "name": "Anti-Zooka",
    "category": "tools",
    "officialType": [
      "Deployables",
      "Mystical items"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Cooking: Explodes, creating an Anti-Sphere with twice the regular diameter.",
    "search": "anti-zooka deployables mystical items any • cooking: explodes, creating an anti-sphere with twice the regular diameter."
  },
  {
    "name": "Antidote",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "−35",
    "biome": [
      "Tropics",
      "Roots"
    ],
    "location": [],
    "notes": "• Can be used 3 times.\n• Removes  35 Poison.\n• Removes  10 Heat.\n• Removes  35 Spores.\n• Cooking: Explodes, removing up to  20 Poison from all players within 4.8m.",
    "search": "antidote consumables tropics roots • can be used 3 times.\n• removes  35 poison.\n• removes  10 heat.\n• removes  35 spores.\n• cooking: explodes, removing up to  20 poison from all players within 4.8m."
  },
  {
    "name": "Backpack",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Crash Site",
      "Campfires"
    ],
    "notes": "• Found at the crash site and campfires.\n• Can be used to carry 4 additional items.",
    "search": "backpack equipment any crash site campfires • found at the crash site and campfires.\n• can be used to carry 4 additional items."
  },
  {
    "name": "Balloon",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "−5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Lowers gravity by 18% per Balloon for 2 minutes or when 100m has passed.\n• Using 6 Balloons at the same time allows for limited flight.\n• Can be stacked with itself and Balloon Bunches.\n• Passively removes  5 Weight when held, in inventory, or in a  Backpack.\n• Dropped balloons float away!\n• Cooking: Pops.",
    "search": "balloon consumables any • lowers gravity by 18% per balloon for 2 minutes or when 100m has passed.\n• using 6 balloons at the same time allows for limited flight.\n• can be stacked with itself and balloon bunches.\n• passively removes  5 weight when held, in inventory, or in a  backpack.\n• dropped balloons float away!\n• cooking: pops."
  },
  {
    "name": "Balloon Bunch",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "−15",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Lowers gravity by 54% per Balloon Bunch for 2 minutes or when 100m has passed.\n• Using 2 Balloon Bunches at the same time allows for limited flight.\n• Can be stacked with itself and Balloons.\n• Passively removes  15 Weight when held, in inventory, or in a  Backpack.\n• Dropped balloons float away!\n• Cooking: Pops.",
    "search": "balloon bunch consumables any • lowers gravity by 54% per balloon bunch for 2 minutes or when 100m has passed.\n• using 2 balloon bunches at the same time allows for limited flight.\n• can be stacked with itself and balloons.\n• passively removes  15 weight when held, in inventory, or in a  backpack.\n• dropped balloons float away!\n• cooking: pops."
  },
  {
    "name": "Bandages",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Heals  30 Injury.\n• Cooking: No effect.",
    "search": "bandages consumables any • heals  30 injury.\n• cooking: no effect."
  },
  {
    "name": "Basketball",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "• Cooking: Pops.",
    "search": "basketball misc airport • cooking: pops."
  },
  {
    "name": "Beehive",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "10",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "",
    "search": "beehive misc tropics "
  },
  {
    "name": "Big Egg",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Caldera"
    ],
    "location": [],
    "notes": "",
    "search": "big egg misc caldera "
  },
  {
    "name": "Big Lollipop",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Grants infinite stamina temporarily.\n• Cooking: Removes  Drowsy effect.",
    "search": "big lollipop food packaged food any • grants infinite stamina temporarily.\n• cooking: removes  drowsy effect."
  },
  {
    "name": "Bing Bong",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport",
      "Shore"
    ],
    "location": [
      "Photobooth",
      "Crash Site"
    ],
    "notes": "• Can be asked \"Yes\" or \"No\" questions.\n• Can be used for the  Bing Bong Badge.\n• Cooking: Lowers pitch and volume of voice lines.",
    "search": "bing bong misc airport shore photobooth crash site • can be asked \"yes\" or \"no\" questions.\n• can be used for the  bing bong badge.\n• cooking: lowers pitch and volume of voice lines."
  },
  {
    "name": "Binoculars",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Photobooth",
      "Crash Site"
    ],
    "notes": "• Used to see farther.\n• Can be used for the  Astronomy Badge.",
    "search": "binoculars equipment any photobooth crash site • used to see farther.\n• can be used for the  astronomy badge."
  },
  {
    "name": "Bishop",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "bishop misc airport "
  },
  {
    "name": "Black Clusterberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−20",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "",
    "search": "black clusterberry food natural food berries tropics "
  },
  {
    "name": "Blowgun",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Shoots a single dart with these effects on target scout:\n• * Clears all status effects except  Curse.\n• * Inflicts  120 Drowsy.\n• Does not spawn in solo play.\n• Cooking: Replaces  120 Drowsy with  150 Heat.",
    "search": "blowgun consumables any • shoots a single dart with these effects on target scout:\n• * clears all status effects except  curse.\n• * inflicts  120 drowsy.\n• does not spawn in solo play.\n• cooking: replaces  120 drowsy with  150 heat."
  },
  {
    "name": "Blue Berrynana",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−30",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Produces a  Blue Berrynana Peel after eating.",
    "search": "blue berrynana food natural food berries tropics • produces a  blue berrynana peel after eating."
  },
  {
    "name": "Blue Berrynana Peel",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Source: Acquired after eating a  Blue Berrynana.",
    "search": "blue berrynana peel misc tropics • source: acquired after eating a  blue berrynana."
  },
  {
    "name": "Blue Shroomberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Inflicts  5 Spores.\n• Produces a bad effect when eaten.\n• Cooking: Removes  5 Spores effect.",
    "search": "blue shroomberry food natural food berries roots • inflicts  5 spores.\n• produces a bad effect when eaten.\n• cooking: removes  5 spores effect."
  },
  {
    "name": "Bounce Fungus",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Creates a bouncy platform when thrown.",
    "search": "bounce fungus deployables roots • creates a bouncy platform when thrown."
  },
  {
    "name": "Brown Berrynana",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "10",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Gloom"
    ],
    "location": [],
    "notes": "• Produces a  Brown Berrynana Peel after eating.",
    "search": "brown berrynana food natural food berries tropics gloom • produces a  brown berrynana peel after eating."
  },
  {
    "name": "Brown Berrynana Peel",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Gloom"
    ],
    "location": [],
    "notes": "• Source: Acquired after eating a  Brown Berrynana.",
    "search": "brown berrynana peel misc tropics gloom • source: acquired after eating a  brown berrynana."
  },
  {
    "name": "Bugle",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport",
      "Shore"
    ],
    "location": [],
    "notes": "• Plays a musical note when used.\n• Can be used for the  Animal Serenading Badge.\n• Cooking: Adds a pitch modulation varying on times cooked.",
    "search": "bugle equipment airport shore • plays a musical note when used.\n• can be used for the  animal serenading badge.\n• cooking: adds a pitch modulation varying on times cooked."
  },
  {
    "name": "Bugle of Friendship",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Plays a musical note when used.\n• Gives scouts in a large radius infinite Stamina while being played, up to a total of 7.5 seconds.\n• Can be used for the  Animal Serenading Badge.\n• Cannot spawn in solo play.",
    "search": "bugle of friendship equipment any • plays a musical note when used.\n• gives scouts in a large radius infinite stamina while being played, up to a total of 7.5 seconds.\n• can be used for the  animal serenading badge.\n• cannot spawn in solo play."
  },
  {
    "name": "Bugle Shroom",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "",
    "search": "bugle shroom food mushrooms shore tropics mesa "
  },
  {
    "name": "Bugle Shroom (Poisonous)",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "20",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "• After 10 seconds, inflicts&#32; 20 Poison&#32; over 8 seconds.",
    "search": "bugle shroom (poisonous) food mushrooms shore tropics mesa • after 10 seconds, inflicts&#32; 20 poison&#32; over 8 seconds."
  },
  {
    "name": "Bugle?",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore"
    ],
    "location": [],
    "notes": "",
    "search": "bugle? equipment shore ",
    "legacy": true
  },
  {
    "name": "Button Shroom",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "",
    "search": "button shroom food mushrooms shore tropics mesa "
  },
  {
    "name": "Button Shroom (Poisonous)",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "30",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "• After 10 seconds, inflicts&#32; 30 Poison&#32; over 12 seconds.",
    "search": "button shroom (poisonous) food mushrooms shore tropics mesa • after 10 seconds, inflicts&#32; 30 poison&#32; over 12 seconds."
  },
  {
    "name": "Cactus",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Inflicts  20 Thorns.",
    "search": "cactus misc mesa • inflicts  20 thorns."
  },
  {
    "name": "Candlestick",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Gloom",
      "The Citadel"
    ],
    "location": [],
    "notes": "",
    "search": "candlestick equipment gloom the citadel "
  },
  {
    "name": "Chain Launcher",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Creates a length of chain between two points that can be climbed on like a vine.\n• The chain originates from the point where the user fired the launcher.\n• The chain launcher cannot fire a chain upwards.\n• Cooking: Immediately incinerated.",
    "search": "chain launcher deployables any • creates a length of chain between two points that can be climbed on like a vine.\n• the chain originates from the point where the user fired the launcher.\n• the chain launcher cannot fire a chain upwards.\n• cooking: immediately incinerated."
  },
  {
    "name": "Checkpoint Flag",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Creates a single-use respawn checkpoint for the Scout who placed it, saving & restoring all statuses when it was placed.\n• Cooking: Can only be cooked using explosives. Cooking stage increases by two when cooked.",
    "search": "checkpoint flag deployables any • creates a single-use respawn checkpoint for the scout who placed it, saving & restoring all statuses when it was placed.\n• cooking: can only be cooked using explosives. cooking stage increases by two when cooked."
  },
  {
    "name": "Chubby Shroom",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Roots"
    ],
    "location": [],
    "notes": "",
    "search": "chubby shroom food mushrooms shore tropics roots "
  },
  {
    "name": "Cloud Fungus",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Creates a platform when it is thrown at a wall.\n• Creates a platform at the apex of a throw mid-air.",
    "search": "cloud fungus deployables roots • creates a platform when it is thrown at a wall.\n• creates a platform at the apex of a throw mid-air."
  },
  {
    "name": "Cluster Shroom",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "",
    "search": "cluster shroom food mushrooms shore tropics mesa "
  },
  {
    "name": "Cluster Shroom (Poisonous)",
    "category": "food",
    "officialType": [
      "Food",
      "Mushrooms"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "40",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "• After 10 seconds, inflicts&#32; 40 Poison&#32; over 16 seconds.",
    "search": "cluster shroom (poisonous) food mushrooms shore tropics mesa • after 10 seconds, inflicts&#32; 40 poison&#32; over 16 seconds."
  },
  {
    "name": "Coconut",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "12.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Mesa"
    ],
    "location": [],
    "notes": "",
    "search": "coconut misc shore tropics mesa "
  },
  {
    "name": "Compass",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore"
    ],
    "location": [
      "Crash Site"
    ],
    "notes": "• Points towards the PEAK.",
    "search": "compass equipment shore crash site • points towards the peak."
  },
  {
    "name": "Conch",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore"
    ],
    "location": [],
    "notes": "",
    "search": "conch misc shore "
  },
  {
    "name": "Cooked Bird",
    "category": "food",
    "officialType": [
      "Food"
    ],
    "weight": "10",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Caldera",
      "Gloom"
    ],
    "location": [],
    "notes": "• Source: Has a 10% chance to spawn from a  Big Egg instead of an  Egg.",
    "search": "cooked bird food caldera gloom • source: has a 10% chance to spawn from a  big egg instead of an  egg."
  },
  {
    "name": "Cure-All",
    "category": "tools",
    "officialType": [
      "Consumables",
      "Mystical items"
    ],
    "weight": "5",
    "hunger": "−20",
    "bonusStamina": "n/a",
    "poison": "−35",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  35 Poison,  35 Heat,  35 Cold,  35 Drowsy,  35 Injury,  35 Spores,  35 Thorns, and  5 Curse.\n• Cooking: Explodes, removing up to  5 Curse,  10 Hunger, and 20 each of  Poison,  Cold,  Heat,  Drowsy,  Thorns from all players within 4.8m.",
    "search": "cure-all consumables mystical items any • removes  35 poison,  35 heat,  35 cold,  35 drowsy,  35 injury,  35 spores,  35 thorns, and  5 curse.\n• cooking: explodes, removing up to  5 curse,  10 hunger, and 20 each of  poison,  cold,  heat,  drowsy,  thorns from all players within 4.8m."
  },
  {
    "name": "Cursed Skull",
    "category": "tools",
    "officialType": [
      "Consumables",
      "Mystical items"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Use instantly kills the Scout holding it and grants other players  50 Bonus stamina and cleanses all negative status effects aside from  Curse.\n• Can only be found in Ancient Luggage.\n• Cannot spawn in solo play.\n• Cooking: Activates immediately, then explodes with a dynamite explosion.",
    "search": "cursed skull consumables mystical items any • use instantly kills the scout holding it and grants other players  50 bonus stamina and cleanses all negative status effects aside from  curse.\n• can only be found in ancient luggage.\n• cannot spawn in solo play.\n• cooking: activates immediately, then explodes with a dynamite explosion."
  },
  {
    "name": "Dynamite",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [
      "Luggage"
    ],
    "notes": "• Inflicts  52.5 Injury.\n• Cooking: Immediately explodes.",
    "search": "dynamite consumables mesa luggage • inflicts  52.5 injury.\n• cooking: immediately explodes."
  },
  {
    "name": "Egg",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Caldera",
      "Gloom"
    ],
    "location": [],
    "notes": "• Source: Made upon breaking a  Big Egg.\n• Part of the  Gourmand Badge.",
    "search": "egg food natural food caldera gloom • source: made upon breaking a  big egg.\n• part of the  gourmand badge."
  },
  {
    "name": "Energy Drink",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  30 Heat.\n• Inflicts  25 Drowsy.\n• Grants a temporary speed boost.",
    "search": "energy drink food packaged food any • removes  30 heat.\n• inflicts  25 drowsy.\n• grants a temporary speed boost."
  },
  {
    "name": "Faerie Lantern",
    "category": "equipment",
    "officialType": [
      "Equipment",
      "Mystical items"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "−75",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  75 Heat,  150 Cold,  75 Poison,  75 Spores,  150 Drowsy and  75 Injury over 30 seconds from nearby players.\n• Can be extinguished to preserve the remaining fuel.\n• Will stay lit while stowed in a dropped Backpack.\n• Cooking: Explodes, removing up to 25 each of  Poison,  Cold,  Heat,  Drowsy, and  Thorns from all players within 4.8m.",
    "search": "faerie lantern equipment mystical items any • removes  75 heat,  150 cold,  75 poison,  75 spores,  150 drowsy and  75 injury over 30 seconds from nearby players.\n• can be extinguished to preserve the remaining fuel.\n• will stay lit while stowed in a dropped backpack.\n• cooking: explodes, removing up to 25 each of  poison,  cold,  heat,  drowsy, and  thorns from all players within 4.8m."
  },
  {
    "name": "Fanny Pack",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "fanny pack equipment any "
  },
  {
    "name": "First Aid Kit",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "−100",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  100 Poison.\n• Heals  100 Injury.\n• Removes  100 Spores.\n• Takes 5 seconds to use.\n• Cooking: No effect.",
    "search": "first aid kit consumables any • removes  100 poison.\n• heals  100 injury.\n• removes  100 spores.\n• takes 5 seconds to use.\n• cooking: no effect."
  },
  {
    "name": "Flare",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Crash Site",
      "Peak (biome)"
    ],
    "notes": "• Can be lit to display a tall column of colourful smoke matching the colour of the player's scout.\n• Summons the rescue helicopter if used at the PEAK.\n• Cooking: Explodes, dealing up to  20 Injury to all players within 4.8m.",
    "search": "flare consumables any crash site peak (biome) • can be lit to display a tall column of colourful smoke matching the colour of the player's scout.\n• summons the rescue helicopter if used at the peak.\n• cooking: explodes, dealing up to  20 injury to all players within 4.8m."
  },
  {
    "name": "Flying Disc",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Can be thrown at other scouts to bonk them.\n• Can be used for the  Ultimate Badge.",
    "search": "flying disc misc any • can be thrown at other scouts to bonk them.\n• can be used for the  ultimate badge."
  },
  {
    "name": "Fortified Milk",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  50 Heat.\n• Cooking: Adds 10s to invulnerability.",
    "search": "fortified milk food packaged food any • removes  50 heat.\n• cooking: adds 10s to invulnerability."
  },
  {
    "name": "Frog",
    "category": "oddities",
    "officialType": [
      "Enemies"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Gloom"
    ],
    "location": [],
    "notes": "",
    "search": "frog enemies gloom "
  },
  {
    "name": "Frog Legs",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−50",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Gloom"
    ],
    "location": [],
    "notes": "• Obtained by cooking a frog.",
    "search": "frog legs food natural food gloom • obtained by cooking a frog."
  },
  {
    "name": "Glider",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "glider misc any "
  },
  {
    "name": "Gold Prickleberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Removes  10 Heat.\n• Heals  10 Injury.\n• Inflicts  10 Thorns.\n• Cooking: Removes  Poison effect.",
    "search": "gold prickleberry food natural food berries mesa • removes  10 heat.\n• heals  10 injury.\n• inflicts  10 thorns.\n• cooking: removes  poison effect."
  },
  {
    "name": "Granola Bar",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "20",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "granola bar food packaged food any "
  },
  {
    "name": "Green Crispberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "10",
    "biome": [
      "Shore",
      "Tropics",
      "Roots",
      "Mesa",
      "Alpine",
      "Peak"
    ],
    "location": [],
    "notes": "• After 2 seconds, inflicts&#32; 10 Poison&#32; over 4 seconds.\n• Cooking: Removes  Poison effect.",
    "search": "green crispberry food natural food berries shore tropics roots mesa alpine peak • after 2 seconds, inflicts&#32; 10 poison&#32; over 4 seconds.\n• cooking: removes  poison effect."
  },
  {
    "name": "Green Kingberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "5",
    "hunger": "−30",
    "bonusStamina": "n/a",
    "poison": "5",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Inflicts&#32; 5 Poison.\n• Cooking: Removes  Poison effect.",
    "search": "green kingberry food natural food berries tropics • inflicts&#32; 5 poison.\n• cooking: removes  poison effect."
  },
  {
    "name": "Green Shroomberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Inflicts  5 Spores.\n• Produces a bad effect when eaten.\n• Cooking: Removes  5 Spores effect.",
    "search": "green shroomberry food natural food berries roots • inflicts  5 spores.\n• produces a bad effect when eaten.\n• cooking: removes  5 spores effect."
  },
  {
    "name": "Guidebook",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore"
    ],
    "location": [
      "Crash Site"
    ],
    "notes": "• A survival guide to teach basic gameplay.\n• Cooking: Immediately incinerated.",
    "search": "guidebook equipment shore crash site • a survival guide to teach basic gameplay.\n• cooking: immediately incinerated."
  },
  {
    "name": "Half-Coconut",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics"
    ],
    "location": [],
    "notes": "• Removes  30 Heat.\n• Source: Breaking a large  Coconut gives 2x Half-Coconuts.\n• Part of the  Gourmand Badge.",
    "search": "half-coconut food natural food shore tropics • removes  30 heat.\n• source: breaking a large  coconut gives 2x half-coconuts.\n• part of the  gourmand badge."
  },
  {
    "name": "Heat Pack",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Alpine"
    ],
    "location": [],
    "notes": "• Removes  360 Cold.\n• Cooking: Explodes, dealing up to  20 Injury to all players within 4.8m.",
    "search": "heat pack consumables alpine • removes  360 cold.\n• cooking: explodes, dealing up to  20 injury to all players within 4.8m."
  },
  {
    "name": "Honeycomb",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "50",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Roots"
    ],
    "location": [],
    "notes": "• Source: Breaking a  Beehive gives 4x Honeycombs.\n• Part of the  Gourmand Badge.",
    "search": "honeycomb food natural food tropics roots • source: breaking a  beehive gives 4x honeycombs.\n• part of the  gourmand badge."
  },
  {
    "name": "Hot Dog",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−30",
    "bonusStamina": "20",
    "poison": "n/a",
    "biome": [
      "Gloom"
    ],
    "location": [],
    "notes": "• Source: Campfires, amongst cattails in the Gloom.\n• 37.5% chance to appear instead of a  Marshmallow.",
    "search": "hot dog food natural food gloom • source: campfires, amongst cattails in the gloom.\n• 37.5% chance to appear instead of a  marshmallow."
  },
  {
    "name": "Jetpack",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "7.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "jetpack equipment any "
  },
  {
    "name": "King",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "king misc airport "
  },
  {
    "name": "Knight",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "knight misc airport "
  },
  {
    "name": "Lantern",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Alpine"
    ],
    "location": [],
    "notes": "• Removes  150 Cold.\n• Can be extinguished to preserve the remaining fuel.\n• Will stay lit while stowed in a dropped Backpack.\n• Cooking: Explodes, dealing up to  20 Injury to all players within 4.8m.",
    "search": "lantern equipment tropics alpine • removes  150 cold.\n• can be extinguished to preserve the remaining fuel.\n• will stay lit while stowed in a dropped backpack.\n• cooking: explodes, dealing up to  20 injury to all players within 4.8m."
  },
  {
    "name": "Magic Bean",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Roots",
      "Alpine",
      "Mesa"
    ],
    "location": [],
    "notes": "• After 3 seconds from being dropped or thrown it will begin to grow a vine up to 10 metres tall if unobstructed.",
    "search": "magic bean deployables shore tropics roots alpine mesa • after 3 seconds from being dropped or thrown it will begin to grow a vine up to 10 metres tall if unobstructed."
  },
  {
    "name": "Mandrake",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Source: Has a 50% chance to spawn instead of a  Medicinal Root.\n• Hides Stamina bar for 60 seconds when eaten uncooked.\n• Starts screaming when uprooted in 3 second intervals, inflicting  Drowsy on nearby players.\n• * Cooking stops the screaming.\n• Required for the  Cryptogastronomy Badge.\n• Cooking: Disables scream and removes  25 Curse.",
    "search": "mandrake food natural food roots • source: has a 50% chance to spawn instead of a  medicinal root.\n• hides stamina bar for 60 seconds when eaten uncooked.\n• starts screaming when uprooted in 3 second intervals, inflicting  drowsy on nearby players.\n• * cooking stops the screaming.\n• required for the  cryptogastronomy badge.\n• cooking: disables scream and removes  25 curse."
  },
  {
    "name": "Marshmallow",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "marshmallow food natural food any "
  },
  {
    "name": "Medicinal Root",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "−25",
    "biome": [
      "Shore",
      "Tropics",
      "Roots",
      "Mesa"
    ],
    "location": [],
    "notes": "• Removes  25 Poison.\n• Heals  10 Injury.\n• Removes  25 Spores.\n• Cooking: Removes an extra  20 Poison and  20 Spores.",
    "search": "medicinal root food natural food shore tropics roots mesa • removes  25 poison.\n• heals  10 injury.\n• removes  25 spores.\n• cooking: removes an extra  20 poison and  20 spores."
  },
  {
    "name": "Napberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−100",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Alpine"
    ],
    "location": [],
    "notes": "• Inflicts  100 Drowsy.\n• Eating it will remove all status effects except  Curse.",
    "search": "napberry food natural food berries alpine • inflicts  100 drowsy.\n• eating it will remove all status effects except  curse."
  },
  {
    "name": "Orange Winterberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Alpine"
    ],
    "location": [],
    "notes": "• Removes  30 Heat.",
    "search": "orange winterberry food natural food berries alpine • removes  30 heat."
  },
  {
    "name": "Pandora's Lunchbox",
    "category": "tools",
    "officialType": [
      "Consumables",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "0",
    "bonusStamina": "0",
    "poison": "0",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Can be used 3 times.\n• Removes  Poison.\n• Removes  Heat.\n• Removes  Cold.\n• Removes  Drowsy.\n• Heals  Injury.\n• Removes  Spores.\n• Removes  Curse.\n• Randomizes the user's status effects.\n• Cooking: Explodes, applying its effects to all players within 4.8m.",
    "search": "pandora's lunchbox consumables mystical items any • can be used 3 times.\n• removes  poison.\n• removes  heat.\n• removes  cold.\n• removes  drowsy.\n• heals  injury.\n• removes  spores.\n• removes  curse.\n• randomizes the user's status effects.\n• cooking: explodes, applying its effects to all players within 4.8m."
  },
  {
    "name": "Parasol",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots",
      "Mesa"
    ],
    "location": [],
    "notes": "• Protects the player from the harsh sunlight in the Mesa.\n• Slows the player's falling speed while in the air.",
    "search": "parasol equipment roots mesa • protects the player from the harsh sunlight in the mesa.\n• slows the player's falling speed while in the air."
  },
  {
    "name": "Passport",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "−2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "• Customizes the appearance of the player's scout.",
    "search": "passport misc airport • customizes the appearance of the player's scout."
  },
  {
    "name": "Pawn",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "pawn misc airport "
  },
  {
    "name": "Pink Berrynana",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "15",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• After 2 seconds, inflicts&#32; 15 Poison&#32; over 6 seconds.\n• Produces a  Pink Berrynana Peel after eating.\n• Cooking: Removes  Poison effect.",
    "search": "pink berrynana food natural food berries tropics • after 2 seconds, inflicts&#32; 15 poison&#32; over 6 seconds.\n• produces a  pink berrynana peel after eating.\n• cooking: removes  poison effect."
  },
  {
    "name": "Pink Berrynana Peel",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Source: Acquired after eating a  Pink Berrynana.",
    "search": "pink berrynana peel misc tropics • source: acquired after eating a  pink berrynana."
  },
  {
    "name": "Pirate's Compass",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Points to the nearest unopened luggage or unused Ancient Statue.",
    "search": "pirate's compass equipment any • points to the nearest unopened luggage or unused ancient statue."
  },
  {
    "name": "Piton",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Attaches to a climbable surface to provide a point for scouts to grab and rest to regenerate stamina.\n• * Limited to 1 scout at a time.\n• Items from the main inventory can be used while hanging on a placed piton.\n• Cooking: Immediately incinerated.",
    "search": "piton deployables any • attaches to a climbable surface to provide a point for scouts to grab and rest to regenerate stamina.\n• * limited to 1 scout at a time.\n• items from the main inventory can be used while hanging on a placed piton.\n• cooking: immediately incinerated."
  },
  {
    "name": "Portable Stove",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots",
      "Tropics",
      "Alpine",
      "Mesa",
      "Caldera",
      "The Kiln"
    ],
    "location": [],
    "notes": "• Used to cook items.\n• Lasts for 60 seconds after being placed.\n• Cooking: Explodes, dealing up to  20 Injury to all players within 4.8m.",
    "search": "portable stove deployables roots tropics alpine mesa caldera the kiln • used to cook items.\n• lasts for 60 seconds after being placed.\n• cooking: explodes, dealing up to  20 injury to all players within 4.8m."
  },
  {
    "name": "Purple Kingberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "5",
    "hunger": "−30",
    "bonusStamina": "35",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "",
    "search": "purple kingberry food natural food berries tropics "
  },
  {
    "name": "Purple Shroomberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Inflicts  5 Spores.\n• Produces a random effect (good or bad) when eaten.\n• Cooking: Removes  5 Spores effect.",
    "search": "purple shroomberry food natural food berries roots • inflicts  5 spores.\n• produces a random effect (good or bad) when eaten.\n• cooking: removes  5 spores effect."
  },
  {
    "name": "Queen",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "queen misc airport "
  },
  {
    "name": "Red Clusterberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Heals  20 Injury.",
    "search": "red clusterberry food natural food berries tropics • heals  20 injury."
  },
  {
    "name": "Red Crispberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Roots",
      "Mesa",
      "Alpine",
      "Peak"
    ],
    "location": [],
    "notes": "",
    "search": "red crispberry food natural food berries shore tropics roots mesa alpine peak "
  },
  {
    "name": "Red Prickleberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Removes  10 Heat.\n• Inflicts  10 Thorns.\n• Cooking: Removes  Thorns effect.",
    "search": "red prickleberry food natural food berries mesa • removes  10 heat.\n• inflicts  10 thorns.\n• cooking: removes  thorns effect."
  },
  {
    "name": "Red Shroomberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Inflicts  5 Spores.\n• Produces a good effect when eaten.\n• Cooking: Removes  5 Spores effect.",
    "search": "red shroomberry food natural food berries roots • inflicts  5 spores.\n• produces a good effect when eaten.\n• cooking: removes  5 spores effect."
  },
  {
    "name": "Remedy Fungus",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "−35",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  35 Poison.\n• Heals  52.5 Injury.\n• Removes  35 Spores.\n• Creates a cloud of healing smoke when dropped, with a range of 8 meters.\n• * Immediately removes  17.5 Injury.\n• * Removes up to  35 Injury,  35 Poison and  35 Spores (a rate of 2.5/s) over the course of 14 seconds while within the area of effect.",
    "search": "remedy fungus consumables any • removes  35 poison.\n• heals  52.5 injury.\n• removes  35 spores.\n• creates a cloud of healing smoke when dropped, with a range of 8 meters.\n• * immediately removes  17.5 injury.\n• * removes up to  35 injury,  35 poison and  35 spores (a rate of 2.5/s) over the course of 14 seconds while within the area of effect."
  },
  {
    "name": "Rescue Claw",
    "category": "equipment",
    "officialType": [
      "Consumables",
      "Equipment"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Can be used 3 times.\n• Can be used to pull the wielder towards terrain, or pull others towards them.\n• Can be used for the  Disaster Response Badge.\n• Cooking: Immediately incinerated.",
    "search": "rescue claw consumables equipment any • can be used 3 times.\n• can be used to pull the wielder towards terrain, or pull others towards them.\n• can be used for the  disaster response badge.\n• cooking: immediately incinerated."
  },
  {
    "name": "Ritual Dagger",
    "category": "oddities",
    "officialType": [
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "−100",
    "bonusStamina": "100",
    "poison": "−100",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  100 Poison.\n• Removes  100 Heat.\n• Removes  100 Cold.\n• Removes  100 Drowsy.\n• Heals  100 Injury.\n• Removes  100 Spores.",
    "search": "ritual dagger mystical items any • removes  100 poison.\n• removes  100 heat.\n• removes  100 cold.\n• removes  100 drowsy.\n• heals  100 injury.\n• removes  100 spores."
  },
  {
    "name": "Rocketpack",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "rocketpack equipment any "
  },
  {
    "name": "Rook",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Airport"
    ],
    "location": [],
    "notes": "",
    "search": "rook misc airport "
  },
  {
    "name": "Rope Cannon",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Shoots a harpoon that will drop a length of rope on contact with a compatible surface.\n• Cooking: Immediately incinerated.",
    "search": "rope cannon deployables any • shoots a harpoon that will drop a length of rope on contact with a compatible surface.\n• cooking: immediately incinerated."
  },
  {
    "name": "Rope Spool",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Creates lengths of climbable rope (up to 10 meters) that can be attached to any climbable surface.\n• Rope is affected by gravity.\n• Each spool contains 12.5 meters of rope.\n• Cooking: Immediately incinerated.",
    "search": "rope spool deployables any • creates lengths of climbable rope (up to 10 meters) that can be attached to any climbable surface.\n• rope is affected by gravity.\n• each spool contains 12.5 meters of rope.\n• cooking: immediately incinerated."
  },
  {
    "name": "Scorchberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Roots",
      "Alpine"
    ],
    "location": [],
    "notes": "• Inflicts  25 Heat.",
    "search": "scorchberry food natural food berries tropics roots alpine • inflicts  25 heat."
  },
  {
    "name": "Scorpion",
    "category": "food",
    "officialType": [
      "Enemies",
      "Food"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Obtained by cooking a scorpion manually or with a  Dynamite explosion.\n• Cannot be eaten raw.\n• Can be held, but not placed into any inventory slot.",
    "search": "scorpion enemies food mesa • obtained by cooking a scorpion manually or with a  dynamite explosion.\n• cannot be eaten raw.\n• can be held, but not placed into any inventory slot."
  },
  {
    "name": "Scout Cannon",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "10",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Inflicts  50 Injury.\n• When used, places down a cannon.\n• Once you are inside the cannon after the fuse has been lit, you will get launched out and get sent flying.\n• Cooking: Explodes identically to  Dynamite but does not apply the extra damage from being held.",
    "search": "scout cannon deployables any • inflicts  50 injury.\n• when used, places down a cannon.\n• once you are inside the cannon after the fuse has been lit, you will get launched out and get sent flying.\n• cooking: explodes identically to  dynamite but does not apply the extra damage from being held."
  },
  {
    "name": "Scout Cookies",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "5",
    "hunger": "−10",
    "bonusStamina": "10",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Can be used 4 times.",
    "search": "scout cookies food packaged food any • can be used 4 times."
  },
  {
    "name": "Scout Effigy",
    "category": "tools",
    "officialType": [
      "Consumables",
      "Mystical items"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Used to resurrect a dead scout at the target location.\n• Cannot spawn in solo play.",
    "search": "scout effigy consumables mystical items any • used to resurrect a dead scout at the target location.\n• cannot spawn in solo play."
  },
  {
    "name": "Scout's Ambition",
    "category": "equipment",
    "officialType": [
      "Amulets",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "scout's ambition amulets mystical items any "
  },
  {
    "name": "Scout's Generosity",
    "category": "equipment",
    "officialType": [
      "Amulets",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Scout Statue"
    ],
    "notes": "",
    "search": "scout's generosity amulets mystical items any scout statue "
  },
  {
    "name": "Scout's Honor",
    "category": "oddities",
    "officialType": [
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Peak"
    ],
    "location": [
      "Peak_(biome)#Stone_Scout"
    ],
    "notes": "",
    "search": "scout's honor mystical items peak peak_(biome)#stone_scout "
  },
  {
    "name": "Scout's Initiative",
    "category": "equipment",
    "officialType": [
      "Amulets",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Scout Statue"
    ],
    "notes": "",
    "search": "scout's initiative amulets mystical items any scout statue "
  },
  {
    "name": "Scout's Tenacity",
    "category": "equipment",
    "officialType": [
      "Amulets",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "−60",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  60 Poison.\n• Removes  60 Heat.\n• Removes  60 Cold.\n• Removes  60 Drowsy.\n• Heals  60 Injury.\n• Removes  60 Spores.",
    "search": "scout's tenacity amulets mystical items any • removes  60 poison.\n• removes  60 heat.\n• removes  60 cold.\n• removes  60 drowsy.\n• heals  60 injury.\n• removes  60 spores."
  },
  {
    "name": "Scoutmaster's Bugle",
    "category": "equipment",
    "officialType": [
      "Equipment",
      "Mystical items",
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "100",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• User and nearby scouts gain  100 Bonus stamina.\n• Summons the Scoutmaster for two minutes and marks the user as his target.\n• Much rarer than other mystical items.",
    "search": "scoutmaster's bugle equipment mystical items consumables any • user and nearby scouts gain  100 bonus stamina.\n• summons the scoutmaster for two minutes and marks the user as his target.\n• much rarer than other mystical items."
  },
  {
    "name": "Scroll",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [
      "Campfire"
    ],
    "notes": "• Can be opened to reveal a torn page.",
    "search": "scroll misc any campfire • can be opened to reveal a torn page."
  },
  {
    "name": "Shelf Fungus",
    "category": "tools",
    "officialType": [
      "Deployables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Creates a platform when it is thrown at a wall.",
    "search": "shelf fungus deployables any • creates a platform when it is thrown at a wall."
  },
  {
    "name": "Small Egg",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Gloom"
    ],
    "location": [],
    "notes": "",
    "search": "small egg misc gloom "
  },
  {
    "name": "Snowball",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Alpine"
    ],
    "location": [],
    "notes": "",
    "search": "snowball misc alpine "
  },
  {
    "name": "Sports Drink",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "30",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Removes  200 Heat.",
    "search": "sports drink food packaged food any • removes  200 heat."
  },
  {
    "name": "Strange Gem",
    "category": "equipment",
    "officialType": [
      "Amulets",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Peak"
    ],
    "location": [],
    "notes": "",
    "search": "strange gem amulets mystical items peak "
  },
  {
    "name": "Sunscreen",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [],
    "notes": "• Can be used 3 times.\n• Sprays a cloud of sunscreen that gives temporary protection from the harsh sunlight in the Mesa for 90 seconds.\n• * Protection is giving to any player that enters the cloud.\n• Cooking: Explodes, applying the sunscreen effect to all players within 4.8m.",
    "search": "sunscreen consumables mesa • can be used 3 times.\n• sprays a cloud of sunscreen that gives temporary protection from the harsh sunlight in the mesa for 90 seconds.\n• * protection is giving to any player that enters the cloud.\n• cooking: explodes, applying the sunscreen effect to all players within 4.8m."
  },
  {
    "name": "The Book of Bones",
    "category": "tools",
    "officialType": [
      "Consumables",
      "Mystical items"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Inflicts  25 Curse.\nRemoves all status effects except  Curse and  Petrify and prevents gaining any further (see the full page for details).\n• Cooking: No effect.",
    "search": "the book of bones consumables mystical items any • inflicts  25 curse.\nremoves all status effects except  curse and  petrify and prevents gaining any further (see the full page for details).\n• cooking: no effect."
  },
  {
    "name": "The Early Worm",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food"
    ],
    "weight": "0",
    "hunger": "−5",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Gloom"
    ],
    "location": [],
    "notes": "• Removes  100 Drowsy.\n• Source: Can be found on the surface of the Gloom.\n• Cooking: No additional bonuses are gained and the worm stops moving.",
    "search": "the early worm food natural food gloom • removes  100 drowsy.\n• source: can be found on the surface of the gloom.\n• cooking: no additional bonuses are gained and the worm stops moving."
  },
  {
    "name": "Tick",
    "category": "food",
    "officialType": [
      "Food"
    ],
    "weight": "2.5",
    "hunger": "−20",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• Consuming as food does not inflict poison.",
    "search": "tick food tropics • consuming as food does not inflict poison."
  },
  {
    "name": "Torch",
    "category": "equipment",
    "officialType": [
      "Equipment"
    ],
    "weight": "0",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Mesa"
    ],
    "location": [
      "Tomb"
    ],
    "notes": "• Found only inside the Tomb.\n• Provides temporary light source.",
    "search": "torch equipment mesa tomb • found only inside the tomb.\n• provides temporary light source."
  },
  {
    "name": "Trail Mix",
    "category": "food",
    "officialType": [
      "Food",
      "Packaged food"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "10",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "",
    "search": "trail mix food packaged food any "
  },
  {
    "name": "Warp Compass",
    "category": "equipment",
    "officialType": [
      "Equipment",
      "Mystical items"
    ],
    "weight": "5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Can be used 3 times.",
    "search": "warp compass equipment mystical items any • can be used 3 times.",
    "legacy": true
  },
  {
    "name": "Warp Fungus",
    "category": "tools",
    "officialType": [
      "Consumables"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Any"
    ],
    "location": [],
    "notes": "• Teleports user to where it lands.",
    "search": "warp fungus consumables any • teleports user to where it lands."
  },
  {
    "name": "Yellow Berrynana",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−15",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Gloom"
    ],
    "location": [],
    "notes": "• Produces a  Yellow Berrynana Peel after eating.",
    "search": "yellow berrynana food natural food berries tropics gloom • produces a  yellow berrynana peel after eating."
  },
  {
    "name": "Yellow Berrynana Peel",
    "category": "oddities",
    "officialType": [
      "Misc"
    ],
    "weight": "2.5",
    "hunger": "n/a",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Tropics",
      "Gloom"
    ],
    "location": [],
    "notes": "• Source: Acquired after eating a  Yellow Berrynana.",
    "search": "yellow berrynana peel misc tropics gloom • source: acquired after eating a  yellow berrynana."
  },
  {
    "name": "Yellow Clusterberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "10",
    "poison": "n/a",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "",
    "search": "yellow clusterberry food natural food berries tropics "
  },
  {
    "name": "Yellow Crispberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−5",
    "bonusStamina": "10",
    "poison": "n/a",
    "biome": [
      "Shore",
      "Tropics",
      "Roots",
      "Alpine",
      "Mesa",
      "Peak"
    ],
    "location": [],
    "notes": "",
    "search": "yellow crispberry food natural food berries shore tropics roots alpine mesa peak "
  },
  {
    "name": "Yellow Kingberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "5",
    "hunger": "−30",
    "bonusStamina": "n/a",
    "poison": "25",
    "biome": [
      "Tropics"
    ],
    "location": [],
    "notes": "• After 3 seconds, inflicts&#32; 25 Poison&#32; over 10 seconds.\n• Cooking: Removes  Poison effect.",
    "search": "yellow kingberry food natural food berries tropics • after 3 seconds, inflicts&#32; 25 poison&#32; over 10 seconds.\n• cooking: removes  poison effect."
  },
  {
    "name": "Yellow Shroomberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−10",
    "bonusStamina": "n/a",
    "poison": "n/a",
    "biome": [
      "Roots"
    ],
    "location": [],
    "notes": "• Inflicts  5 Spores.\n• Produces a good effect when eaten.\n• Cooking: Removes  5 Spores effect.",
    "search": "yellow shroomberry food natural food berries roots • inflicts  5 spores.\n• produces a good effect when eaten.\n• cooking: removes  5 spores effect."
  },
  {
    "name": "Yellow Winterberry",
    "category": "food",
    "officialType": [
      "Food",
      "Natural food",
      "Berries"
    ],
    "weight": "2.5",
    "hunger": "−30",
    "bonusStamina": "35",
    "poison": "n/a",
    "biome": [
      "Alpine"
    ],
    "location": [],
    "notes": "• Removes  50 Heat.\n• Heals  20 Injury.\n• Part of the  Gourmand Badge.",
    "search": "yellow winterberry food natural food berries alpine • removes  50 heat.\n• heals  20 injury.\n• part of the  gourmand badge."
  }
];
