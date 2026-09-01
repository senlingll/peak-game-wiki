export const articleOrder = [
  'peak-biomes-list',
  'peak-game-update',
  'what-is-peak-game',
  'peak-map-rotation-schedule',
];

const officialNewsUrl = 'https://store.steampowered.com/news/app/3527290';

const todayMapLink = (label = "today's PEAK map") => `[[link:map-rotation#today-map|${label}]]`;

export const articleGuides = {
  'peak-biomes-list': {
    slug: 'peak-biomes-list',
    meta: {
      title: 'PEAK Biomes List: All Biomes, Maps & Terrain Guide',
      description: "Complete PEAK biomes list - every biome, its maps, terrain and tips. Check today's active biome on our daily map, updated every reset for clear route planning.",
      schema: 'A source-aware PEAK biomes list covering the named biome roster, map relationships, terrain-reading advice, equipment planning, and the current daily map entry.',
    },
    published: '2026-08-31',
    primaryKeyword: 'peak biomes list',
    eyebrow: 'Biome reference - source-aware roster',
    h1: 'PEAK Biomes List',
    intro: `This PEAK biomes list names every biome currently exposed by the maintained map sources, explains how biome labels relate to routes, and keeps a build-time doorway to ${todayMapLink()}. The roster is useful for learning the vocabulary of PEAK; the dated map block is the part to check before a real climb.`,
    answerLabel: 'The short answer',
    answer: 'The current source-backed PEAK biome roster contains Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, and Citadel. A biome is a regional label in the route context, not automatically a complete map, a fixed stage count, or a promise that the same order will appear every day. Use the table for orientation, then confirm the active route in the game and compare it with the dated daily entry on this site.',
    tocLabel: 'On this page',
    tocFaq: 'Biome FAQ',
    heroImage: {
      src: '/media/peak-map-route.webp',
      alt: 'PEAK route screenshot showing a climber planning a path across difficult terrain',
      caption: 'Official Steam screenshot - route context helps turn a biome name into a practical plan.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'biome-roster',
        title: 'The complete PEAK biomes list',
        paragraphs: [
          'The names below are the current roster recognized by the daily-map fetcher and public map source. The terrain notes are planning lenses: they tell you what to inspect without claiming exact hazards, loot tables, or fixed stage layouts.',
          'Map, route, and biome are related but not interchangeable. A source may expose a biome sequence without every landmark. Use the biome for broad context, then read the actual session to decide where to spend stamina, pause, and carry utility.',
        ],
        table: {
          caption: 'PEAK biome roster and cautious terrain-planning notes',
          headers: ['Biome', 'Where it appears', 'Terrain lens', 'Planning approach'],
          rows: [
            ['Shore', 'Any source-listed route that includes Shore', 'Start by checking open approaches, edges, and elevation changes rather than assuming a fixed shoreline layout.', 'Scout the first commitment and keep the team together while the route shape becomes clear.'],
            ['Tropics', 'Any source-listed route that includes Tropics', 'Use the label as a warm, vegetated island context; verify the actual visibility, climbs, and hazards in the current run.', 'Prioritize route reading and pacing before committing shared utility.'],
            ['Roots', 'Any source-listed route that includes Roots', 'Look for organic or root-covered route features, but do not treat the name as a complete hazard guide.', 'Leave room to reposition and record which passage changed the team plan.'],
            ['Alpine', 'Any source-listed route that includes Alpine', 'Expect an elevated or mountain-style context from the label, then confirm exposed climbs and safe rests in-game.', 'Protect stamina and decide where the next reliable pause will be.'],
            ['Mesa', 'Any source-listed route that includes Mesa', 'Read the route as a plateau or rock-form context only after checking the current geometry and line of travel.', 'Compare the shortest visible path with the safest recoverable path.'],
            ['Caldera', 'Any source-listed route that includes Caldera', 'The name signals a volcanic-basin context; exact heat, lava, and hazard behavior must be checked against the current version.', 'Keep recovery options available before taking a route that narrows the return path.'],
            ['The Kiln', 'Any source-listed route that includes The Kiln', 'Treat the name as a distinct late-game or volcanic route context, not as proof of one fixed layout.', 'Confirm the next safe rest and avoid spending the team\'s last utility on scouting.'],
            ['Gloom', 'Any source-listed route that includes Gloom', 'Use the label to anticipate a darker or lower-visibility reading problem, then verify what the current route actually shows.', 'Agree on visual callouts and keep a clear retreat rule.'],
            ['Citadel', 'Any source-listed route that includes Citadel', 'Read Citadel as a structured, monumental route context; the active path and obstacles still come from the current session.', 'Slow down at major decisions and preserve tools for the final commitment.'],
          ],
        },
      },
      {
        id: 'terrain-and-strategy',
        title: 'How to use a biome label without overclaiming',
        paragraphs: [
          'A useful PEAK biomes list should help with the next decision, not pretend a label reveals every object or hazard. Confirm the biome, date, and surrounding route, then separate what the game showed from what the name suggests. This keeps field notes updateable.',
          'An Alpine label can point attention toward elevation and rest points, but cannot prove a specific climb, item location, or enemy behavior. Apply the same caution to Gloom, Caldera, and The Kiln. For mechanics, the current game and official notes outrank an old screenshot.',
        ],
        bullets: [
          ['Confirm the label', 'Record the biome and route exactly as the current source or game presents them.'],
          ['Inspect the first risk', 'Look for the climb, gap, visibility issue, or hazard that changes movement first.'],
          ['Plan around recovery', 'Choose a pause and a turn-back rule before a narrow route removes options.'],
          ['Date the observation', 'Keep the build date and game version beside any terrain or equipment note.'],
        ],
      },
      {
        id: 'biomes-and-maps',
        title: 'How biomes and maps relate in PEAK',
        paragraphs: [
          'Map, route, biome, and stage work better as separate layers. A map is the navigable space; a route is the path or sequence context; a biome is the broad regional label; a stage or landmark may be smaller than all three. Keeping them separate prevents a PEAK biomes list from promising a fixed map order.',
          'The daily source exposes a biome sequence, not a permanent world chart. A dated record answers what that source reported, not what every lobby, patch, or future reset will use. The table below therefore describes evidence and use, not invented one-to-one map assignments.',
        ],
        table: {
          caption: 'Evidence layers to keep separate when reading PEAK maps',
          headers: ['Layer', 'What it can tell you', 'What it cannot prove alone'],
          rows: [
            ['Biome label', 'The broad regional name attached to a source entry or route.', 'Every hazard, item location, or exact geometry in the current run.'],
            ['Map or route entry', 'The dated sequence or visual context reported by a source.', 'A permanent daily schedule unless the game or official notes confirm one.'],
            ['In-game session', 'The final state your group must navigate right now.', 'What a different patch or lobby will show tomorrow.'],
            ['Patch note', 'An official change title and any details stated in that post.', 'A complete unofficial tier list or a mechanic not mentioned by the post.'],
          ],
        },
      },
      {
        id: 'today-biome',
        title: 'Which biome is active today?',
        kind: 'today-map',
        paragraphs: [
          `The dated snapshot below connects this PEAK biomes list to the current search intent. It is written into the HTML at build time. If the card is pending, confirm the route in your game rather than treating an old community image as current.`,
          `A daily result expires; the roster above remains useful. Use the current sequence to decide what to inspect, then return to the session for exact geometry and hazards.`,
        ],
      },
      {
        id: 'biome-loadout',
        title: 'Equipment and team strategy by biome context',
        paragraphs: [
          'A biome name should change priorities, not force a rigid tier list. Start with route utility for the next decision, reserve food or stamina support for the next push, and assign recovery responsibility before a risky section. Item value can change with balance updates, so this is a method, not a permanent-stat claim.',
          'Before the climb, write the first risk, its supporting resource, and the stop point. Afterward add the date, biome, route, and result. This creates a useful record without turning one observation into a universal rule.',
        ],
        bullets: [
          ['Route first', 'Pack for the first commitment visible in the session, not for an imagined biome stereotype.'],
          ['Share roles', 'State who carries recovery or route utility so an item is usable when pressure rises.'],
          ['Keep a margin', 'Do not spend every resource before the return path or next safe rest is known.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK biomes list FAQ',
      items: [
        ['How many biomes are in PEAK?', 'This guide currently tracks nine named biomes: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, and Citadel. Recheck the game and official updates after major patches.'],
        ['Do PEAK biomes change every day?', 'The daily route or biome sequence can change with the map rotation. Use the dated source and current game rather than inferring a fixed schedule from one record.'],
        ['Are PEAK biomes the same as maps?', 'No. A biome is a broad regional label, while a map or route is the space or sequence your source or session presents. A single source entry can contain multiple biome labels.'],
        ['Where can I check the active biome?', `Use ${todayMapLink('map rotation guide')} first, then confirm the route in-game. The card stays pending when dated data cannot be verified.`,],
        ['Where can I learn what PEAK is?', 'Start with our [[link:what-is-peak-game|what PEAK is]] guide for the core loop, maps, rotation vocabulary, and a beginner checklist.'],
        ['What is the best gear for every biome?', 'There is no responsible one-size-fits-all answer without verified item effects and the current route. Inspect the first risk, assign recovery responsibility, and check official changes before relying on an old recommendation.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'How this PEAK biomes list is maintained',
      body: 'The biome names come from the maintained daily-map source and official PEAK update context. Terrain and strategy notes are deliberately framed as cautious planning guidance. The current game session remains the final authority for exact geometry, hazards, item effects, and changes not stated by an official source.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Official Steam news feed', officialNewsUrl],
      ],
    },
    related: [
      ['map-rotation', "Check today's PEAK map"],
      ['what-is-peak-game', 'Read what PEAK is'],
      ['peak-map-rotation-schedule', 'See the rotation schedule'],
    ],
  },

  'peak-game-update': {
    slug: 'peak-game-update',
    meta: {
      title: 'PEAK Game Update Log: Patch Notes, Maps & Changes',
      description: "Stay up to date with every PEAK game update - new maps, patch notes and rotation changes, with today's map always at the top. Check changes before climbing.",
      schema: 'A dated PEAK game update log connecting official patch-note titles to map rotation context, current daily-map data, and version-aware planning.',
    },
    published: '2026-08-31',
    primaryKeyword: 'peak game update',
    eyebrow: 'Version desk - official titles first',
    h1: 'PEAK Game Update Log',
    intro: `Looking for a PEAK game update? Start with ${todayMapLink("today's map")} for the current build-time route, then use this log to place official patch-note titles and biome announcements in date order. Each entry is limited to what the official Steam news feed confirms; the full post remains the source for exact mechanics.`,
    answerLabel: 'The short answer',
    answer: 'The latest confirmed entries in this PEAK game update log are Patch Notes 2.03.a on August 27, 2026, the Gloom and Citadel announcement on August 24, and Patch 2.02.a on August 18. Earlier entries include the Frog cooldown and bug-fix patch, The Final Ascent, and the final biome announcement. This page records titles, dates, and conservative summaries, then connects them to the daily map and route-planning pages.',
    tocLabel: 'On this page',
    tocFaq: 'Update FAQ',
    heroImage: {
      src: '/media/peak-final-ascent.webp',
      alt: 'Official PEAK Final Ascent artwork used as update context',
      caption: 'Official Steam artwork - a dated update anchor, not a substitute for patch details.',
      width: 1280,
      height: 600,
    },
    sections: [
      {
        id: 'today-after-update',
        title: 'Check today\'s map after a PEAK game update',
        kind: 'today-map',
        paragraphs: [
          'The route answer belongs at the top because a patch can change the context in which an old map note was written. The build-time card below shows the current dated record when a source and location fields are available. It is a snapshot, not a promise that every lobby or future reset will match it.',
          'When the card is verified, compare its date with your game version and use it to orient the route. When it is pending, open the game and confirm the current route directly. This keeps a PEAK game update page useful even during the short period between an update landing and a source being checked.',
        ],
      },
      {
        id: 'official-update-log',
        title: 'Confirmed PEAK game update entries',
        kind: 'updates',
        paragraphs: [
          'The table is generated from a small, versioned data file seeded from the official Steam News API. The source file stores the official title, publication date, a restrained title-level summary, and the Steam news feed link. It does not invent a full patch summary when the post has not been independently transcribed.',
          'The log is intentionally compact. A player can identify the relevant version quickly, open the first-party post for exact notes, and then use the map or schedule pages to understand what to recheck. When a new official item is fetched during a build, it is placed at the top by date so the page remains a living reference.',
        ],
      },
      {
        id: 'what-update-changes',
        title: 'How a PEAK game update can affect the map rotation',
        paragraphs: [
          'An update and a daily rotation answer different questions. A patch note describes a version event; the rotation describes the route context being reported for a particular date. A biome announcement may explain why a new area is worth checking, but the announcement alone does not prove that it is the active route in every session. Read the update first, then check dated map data and confirm in-game.',
          'This distinction matters most when the title contains new biome or route language. The official feed can establish that Gloom, Citadel, Caldera, or The Kiln was mentioned in an update. It cannot, without a current route record, answer which sequence your lobby will show after the reset. For reset timing and recent dated entries, see the [[link:peak-map-rotation-schedule|rotation schedule]].',
        ],
        bullets: [
          ['Version check', 'Write down the patch title and date before reusing an older route note.'],
          ['Route check', 'Compare the dated map record with the route shown by the current session.'],
          ['Mechanic check', 'Use the complete official post for exact changes rather than inferring from a headline.'],
          ['Field-note check', 'Mark advice as observed, official, or unverified so it can be corrected later.'],
        ],
      },
      {
        id: 'read-patch-notes',
        title: 'A practical way to read PEAK patch notes',
        paragraphs: [
          'Start with the official date and title, then pull out only the statements that change a player decision. A change to a cooldown may affect when a team commits. A new biome announcement may affect what terminology players use when they search for maps. A bug-fix title may be important for reliability without changing the route itself. The page should tell these apart instead of calling every update a new map.',
          'After reading, test one assumption in a normal run and record the result with the game version. Do not turn one successful or failed attempt into proof of a universal rule. This small loop - source, session, dated note - gives a PEAK game update log practical value without exceeding what the source supports.',
          'Keep the update date and the map-record date in separate fields. The first tells you when the official information was published; the second tells you when the route was observed. Comparing those two dates helps explain why an older community tip may still describe a real route while no longer describing the current version.',
        ],
        bullets: [
          ['1. Identify the official post', 'Use the linked Steam feed and preserve the exact title and date.'],
          ['2. Classify the change', 'Separate patch notes, content announcements, bug fixes, and community context.'],
          ['3. Recheck the route', 'Open the current map entry and confirm the active sequence in-game.'],
          ['4. Update the note', 'Add the version, evidence, and any uncertainty to the next build.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK game update FAQ',
      items: [
        ['How often does PEAK get updates?', 'The official Steam news feed is the reliable record of release announcements and patch posts. Do not assume a fixed weekly or monthly cadence from a short run of entries; check the feed for the current pattern.'],
        ['Does a PEAK game update change the map?', 'An update can change content, route context, or mechanics, but a patch title alone does not prove the daily sequence. Check the dated map record and confirm the active route in-game after updating.'],
        ['Where are the latest PEAK patch notes?', `This log summarizes confirmed titles and links to the official feed. For a current route, open ${todayMapLink("today's map")}; for reset context, use the [[link:peak-map-rotation-schedule|rotation schedule]].`],
        ['Is every entry a complete patch summary?', 'No. Entries are deliberately title-level when a full, source-backed transcription is not available. Open the official Steam post for exact mechanics, numbers, and implementation details.'],
        ['How does the update log stay current?', 'The build workflow can fetch the official Steam News API, compare titles and dates with the stored data, and prepend new confirmed entries. The generated page never depends on client-side JavaScript to reveal the log.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'Official updates before community summaries',
      body: 'Dates and titles in this PEAK game update log are sourced from the official Steam news feed. The daily route comes from the maintained build-time map source. Community explanations can add useful experience, but they should be labeled separately and checked against the current game before becoming a definitive rule.',
      links: [
        ['Official Steam news feed', officialNewsUrl],
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
      ],
    },
    related: [
      ['map-rotation', "Open today's map"],
      ['peak-map-rotation-schedule', 'Read the rotation schedule'],
      ['what-is-peak-game', 'Start with the beginner guide'],
    ],
  },

  'what-is-peak-game': {
    slug: 'what-is-peak-game',
    meta: {
      title: 'What Is PEAK Game? Beginner\'s Guide to Gameplay & Maps',
      description: "New to PEAK? Learn what the game is, how it works, its map rotation system and how to check today's map - a complete beginner guide to your first climb.",
      schema: 'A beginner guide explaining what PEAK is, its co-op climbing loop, route and equipment decisions, map rotation vocabulary, and how to check the daily map.',
    },
    published: '2026-09-01',
    primaryKeyword: 'what is peak game',
    eyebrow: 'Beginner guide - the first climb explained',
    h1: 'What Is PEAK Game?',
    intro: `What is PEAK game? It is a cooperative climbing and survival game on Steam where players read terrain, manage resources, and help one another reach a summit. This guide explains the loop in plain language, then shows ${todayMapLink("today's active map")} and the vocabulary you need before your first run.`,
    answerLabel: 'The short answer',
    answer: 'PEAK is a co-op climbing game for Windows on Steam. You can play solo or with a group of up to four players, according to the official store description. The central challenge is not simply moving upward: the team must read a changing route, choose when to spend climbing utility, manage food and stamina, and recover from mistakes. Maps and biome labels provide context, but the current game session is the final source for the route in front of you.',
    tocLabel: 'On this page',
    tocFaq: 'Beginner FAQ',
    heroImage: {
      src: '/media/peak-coop-climb.webp',
      alt: 'PEAK players coordinating a climb with shared equipment',
      caption: 'Official Steam screenshot - PEAK is built around route reading and team decisions.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'what-peak-is',
        title: 'What is PEAK game in one sentence?',
        paragraphs: [
          'PEAK is a climbing-focused co-op game in which the route itself creates the pressure. The official Steam page describes solo play and multiplayer co-op for groups of up to four. The game is therefore easy to summarize as “climb together,” but that phrase leaves out the useful part: each ascent asks the group to decide how far to push, what to carry, and who can help when a plan fails.',
          'This is an independent guide, so official facts and practical advice are kept separate. The platform, co-op classification, and player-count statement come from Steam. The recommendations below are field-note methods for making decisions in a route-based game; they are not a claim that every team must use one loadout or one path.',
        ],
        bullets: [
          ['Platform', 'The official store lists PEAK for Windows on Steam.'],
          ['Modes', 'The store lists single-player, multiplayer, co-op, and online co-op categories.'],
          ['Group size', 'The official description supports a group of up to four players.'],
        ],
      },
      {
        id: 'core-gameplay-loop',
        title: 'How the PEAK gameplay loop works',
        paragraphs: [
          'A typical run begins with a route decision rather than a combat build. The group looks at the next climb, gap, hazard, or uncertain passage, then decides how much time to spend scouting. Climbing tools and recovery options have value because they protect decisions under pressure. Food and stamina-related resources matter because a route that looks short can become expensive when the team detours or waits for a safer move.',
          'Team communication is part of the mechanic even when the game does not show a formal role system. One player may lead the visual read, another may carry a useful tool, and everyone benefits when the stopping point is agreed in advance. A strong beginner habit is to say what the next commitment is, what resource protects it, and what would make the group turn back.',
        ],
        image: {
          src: '/media/what-is-peak-game-beginner-flow.webp',
          alt: 'PEAK beginner flow showing route scouting, equipment preparation, and the first climb',
          caption: 'Editorial diagram - a PEAK attempt can start by agreeing on the route, preparing equipment, and then climbing.',
          width: 1024,
          height: 1024,
        },
        table: {
          caption: 'The decisions behind a PEAK climb',
          headers: ['Decision', 'Question to ask', 'Why it matters'],
          rows: [
            ['Route', 'What is the next commitment?', 'A clear target prevents the team from spending resources on every visible possibility.'],
            ['Equipment', 'Who can use the tool when needed?', 'Shared inventory only helps when ownership and timing are understood.'],
            ['Pacing', 'Where is the next safe pause?', 'A planned pause protects stamina and gives the group a reset point.'],
            ['Recovery', 'What is our turn-back rule?', 'A retreat plan keeps one mistake from becoming a full-run rescue.'],
          ],
        },
      },
      {
        id: 'maps-and-rotation',
        title: 'PEAK maps, biomes, and the rotation system',
        paragraphs: [
          `New players often search for ${todayMapLink('how the map rotation works')} because map, route, and biome language can blur together. A map is the space you navigate, a route is the path or sequence context, and a biome is a broad regional label. The daily rotation makes the question time-sensitive: a dated sequence can help you plan, but it should not replace the route shown by your current session.`,
          `To see ${todayMapLink("today's active map")}, open the daily entry and check its date, source, route, and reset status. If data is pending, trust the current game over an undated screenshot. The map page also explains how to separate a daily answer from evergreen planning advice, which is the key distinction behind a useful PEAK wiki.`,
          `For the broader vocabulary, read our [[link:peak-biomes-list|biomes list]]. It names the current source-backed roster while clearly marking the difference between a biome label and a complete map assignment.`,
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK route screenshot with a player using a rope beside a hazardous climb',
          caption: 'Official Steam screenshot - the visible route and hazard are more useful than treating a biome name as a fixed map.',
          width: 1200,
          height: 675,
        },
      },
      {
        id: 'beginner-start',
        title: 'How to start your first PEAK run',
        paragraphs: [
          'You do not need a memorized tier list to begin. Use a short loop that works whether the route is familiar or new. The goal is to create one shared decision at a time and keep enough margin to recover. Once the group has a few dated observations, it can refine its route notes without confusing experience with an official rule.',
          'The same loop works in solo and co-op runs, but the communication burden changes. Alone, you must make the route call and recovery decision yourself. With a group, say the next commitment and pause point aloud so players do not spend shared resources under different assumptions. A checkpoint is a coordination habit, not a guarantee that the terrain is safe.',
        ],
        image: {
          src: '/media/peak-climb-ridge.webp',
          alt: 'PEAK player approaching a high ridge on a low-visibility route',
          caption: 'Official Steam screenshot - choose the next move from the visible route, then confirm the resource and safe pause point.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['1. Confirm the session', 'Check who is playing, what route the game shows, and whether everyone understands the first objective.'],
          ['2. Scout before committing', 'Look at the first meaningful climb or hazard before spending the item that could protect it.'],
          ['3. Assign utility', 'Say who carries route support, food, or recovery responsibility instead of leaving it implicit.'],
          ['4. Choose a pause', 'Identify a place to regroup and a clear condition for turning back.'],
          ['5. Record one note', 'After the attempt, save the date, route, version, and the decision that mattered most.'],
        ],
      },
      {
        id: 'updates-and-next-steps',
        title: 'How updates fit into the beginner picture',
        paragraphs: [
          `If you searched what is PEAK game because a new biome or patch appeared, start with the [[link:peak-game-update|latest updates]] page. It keeps official titles and dates separate from community interpretation, so a new player can tell whether a headline announces content, changes a mechanic, or simply fixes a bug.`,
          'After an update, repeat the same beginner loop: read the official title, check the current map, test one route assumption, and record what changed. That approach is more durable than memorizing a recommendation that may have been written for an earlier version.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'What is PEAK game? FAQ',
      items: [
        ['Is PEAK a multiplayer game?', 'Yes. The official Steam listing includes multiplayer, co-op, and online co-op, and its description supports groups of up to four players. PEAK also supports solo play according to the same source.'],
        ['What do you do in PEAK?', 'You climb through changing route contexts, read terrain, manage equipment and resources, and coordinate with the group. The exact hazards and item effects depend on the current game and version.'],
        ['How does the PEAK map rotation work?', `A dated route or biome sequence can change over time. Read ${todayMapLink('the daily map')} for the current build-time record, then confirm the active route in your session because a static page cannot replace the game state.`,],
        ['How many players can play PEAK together?', 'The official Steam description supports a group of up to four players. Check the current store and patch information if platform or multiplayer support changes.'],
        ['Is PEAK a survival game or a climbing game?', 'The most useful short description is a co-op climbing and survival game: climbing is the central movement challenge, while resource and recovery decisions create the survival pressure.'],
        ['What should beginners bring in PEAK?', 'Start with the smallest set that protects the next visible decision: route utility, food or stamina support as needed, and a recovery plan. Do not treat one unverified tier list as universal.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'A beginner guide grounded in current sources',
      body: 'Platform, mode, co-op, and player-count facts come from the official PEAK Steam page. Map and reset details are build-time records maintained for this site. Practical climbing advice is labeled as guidance and should be rechecked after updates or when the current session differs.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Official Steam news feed', officialNewsUrl],
      ],
    },
    related: [
      ['map-rotation', "Check today's active map"],
      ['peak-biomes-list', 'Browse the biomes list'],
      ['peak-game-update', 'Read the latest updates'],
      ['peak-map-rotation-schedule', 'See reset times'],
    ],
  },

  'peak-map-rotation-schedule': {
    slug: 'peak-map-rotation-schedule',
    meta: {
      title: "PEAK Map Rotation Schedule: Reset Times & Today's Map",
      description: "When does the PEAK map reset? See the full rotation schedule, reset times and today's active map - updated daily with clear UTC and local-time conversions.",
      schema: 'A source-aware PEAK map rotation schedule with build-time reset conversion, current map data, recent verified records, and patch-aware caveats.',
    },
    published: '2026-08-31',
    primaryKeyword: 'peak map rotation schedule',
    eyebrow: 'Schedule reference - reset data at build time',
    h1: 'PEAK Map Rotation Schedule',
    intro: `Need the PEAK map rotation schedule right now? Start with ${todayMapLink("today's PEAK map")} for the dated route entry, then use the reset-time conversion and recent records below. The schedule is a source-aware planning aid: it does not claim a permanent cycle when official updates or the game itself provide no such guarantee.`,
    answerLabel: 'The short answer',
    answer: 'The current build-time record uses a reset at 17:00 UTC, which is 01:00 the next day in China Standard Time, 02:00 in Japan and Korea, 19:00 in Central European Summer Time, 18:00 in British Summer Time, 13:00 in US Eastern Daylight Time, and 10:00 in US Pacific Daylight Time. Check the dated record below because the source timestamp and daylight-saving conversion matter. The map sequence is also read from build data, not guessed from a permanent calendar.',
    tocLabel: 'On this page',
    tocFaq: 'Schedule FAQ',
    heroImage: {
      src: '/media/peak-map-route.webp',
      alt: 'PEAK route screenshot illustrating a map rotation planning decision',
      caption: 'Official Steam screenshot - a schedule is useful when it leads to a verified route check.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'today-schedule-entry',
        title: 'Today\'s PEAK map and next reset',
        kind: 'today-map',
        paragraphs: [
          'The live-looking answer belongs in a static HTML block so search engines and readers can see it without running browser JavaScript. The card below is generated from the same build-time data used by the main map page. It includes the date, sequence, reset status, source, and media when those fields are verified.',
          'If a source has not been checked for the build date, the card stays pending. That is an important part of this PEAK map rotation schedule: a blank or pending result is more accurate than a made-up seed, a copied screenshot, or a stale reset countdown.',
        ],
      },
      {
        id: 'reset-times',
        title: 'PEAK reset times in UTC and local time',
        kind: 'reset-times',
        paragraphs: [
          'The site treats the reset timestamp as data, not as a universal promise. The current verified record is 17:00 UTC, and the conversion table below makes the same instant easier to use across common player time zones. A local clock may show a different calendar date, especially in Asia-Pacific zones where the reset arrives after midnight.',
          'Daylight-saving rules can change local display for Europe and North America. UTC is the stable comparison point. When your clock differs from the table, compare the ISO timestamp in the daily map source and your own time-zone setting rather than assuming the route is late.',
        ],
        table: {
          caption: 'Current build-time reset conversion for the verified map record',
          headers: ['Reference zone', 'Current conversion', 'Reading note'],
          rows: [
            ['UTC', '17:00', 'Use this as the stable source-time reference.'],
            ['China Standard Time (UTC+8)', '01:00 next day', 'The reset falls after midnight in mainland China.'],
            ['Japan / Korea (UTC+9)', '02:00 next day', 'Japan and Korea share the same offset here.'],
            ['Central European Summer Time (UTC+2)', '19:00', 'Summer-time offset; winter local time is one hour earlier.'],
            ['British Summer Time (UTC+1)', '18:00', 'Summer-time offset; winter local time is one hour earlier.'],
            ['US Eastern Daylight Time (UTC-4)', '13:00', 'Daylight-time example; standard time is one hour earlier.'],
            ['US Pacific Daylight Time (UTC-7)', '10:00', 'Daylight-time example; standard time is one hour earlier.'],
          ],
        },
      },
      {
        id: 'rotation-pattern',
        title: 'Does PEAK have a fixed rotation schedule?',
        paragraphs: [
          'Do not infer a permanent weekly sequence from a handful of daily records. A source can prove what it reported on a particular date, while a patch can introduce a biome, remove a route context, or alter how a rotation is presented. The responsible answer is that the schedule follows the current game and maintained source; any fixed cycle must be confirmed by official documentation or a longer, verified record.',
          'This is why the page separates reset time from rotation pattern. A reset can happen at a recurring observed time while the sequence changes. Conversely, a content update can change the available route context without changing the clock. Keep both facts dated and check the official update feed before treating an older pattern as current.',
        ],
        bullets: [
          ['Clock', 'Use the verified ISO reset timestamp and convert it to your time zone.'],
          ['Sequence', 'Read the dated biome or route record; do not fill missing days by interpolation.'],
          ['Patch context', 'Check official notes when a new biome or route announcement appears.'],
          ['Session check', 'Confirm the route in-game after the reset and after a major update.'],
        ],
      },
      {
        id: 'recent-rotation-records',
        title: 'Recent verified PEAK rotation records',
        kind: 'history',
        paragraphs: [
          'The table below is maintained as a dated record rather than a prediction engine. Each row is added only when the daily fetcher has a matching build date, a safe source URL, and enough location fields to identify the route context. A future build can add the next row without rewriting the explanatory sections.',
          'Use recent rows to compare observations, not to assume that the next day will repeat the previous order. The record is especially useful for checking whether a route note belongs to the current version and for spotting when a patch has changed the available context.',
        ],
      },
      {
        id: 'schedule-and-patches',
        title: 'How patch notes fit into the schedule',
        paragraphs: [
          'A reset schedule tells you when to check; patch notes tell you what may have changed around that check. If the route looks different after an update, open the [[link:peak-game-update|patch notes]] and compare the post date with the map record. Keep the two sources separate: a patch headline does not substitute for the current route, and a daily route does not explain every mechanic change.',
          'For a practical pre-climb routine, check the current date, read the reset timestamp in your own time zone, open the route, and agree on the first decision with your group. This turns the PEAK map rotation schedule into a small habit that survives changes to the map pool.',
        ],
        bullets: [
          ['Before reset', 'Finish the current run and note the version if a route observation matters.'],
          ['At reset', 'Refresh the dated map entry and compare the ISO timestamp with your local clock.'],
          ['After an update', 'Read official patch notes before reusing a route or equipment recommendation.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK map rotation schedule FAQ',
      items: [
        ['How often does the PEAK map change?', 'The site records a daily build-time entry when it can be verified, but the available route sequence and cadence should be confirmed from the current game and source. Do not turn one observed sequence into a permanent cycle.'],
        ['What time does the PEAK map reset?', 'The current verified record uses 17:00 UTC. That is 01:00 the next day in China Standard Time, 02:00 in Japan and Korea, 19:00 CEST, 18:00 BST, 13:00 US Eastern Daylight Time, and 10:00 US Pacific Daylight Time. Recheck the dated ISO timestamp after updates or daylight-saving changes.'],
        ['Where is today\'s PEAK map?', `Open ${todayMapLink("today's PEAK map")} for the current source-backed entry. The main map page remains the canonical daily answer and shows pending status when no dated location data is verified.`,],
        ['Does PEAK use a fixed rotation cycle?', 'A fixed cycle should not be assumed without current official confirmation. The schedule page preserves dated observations and explains how patches can change the route context.'],
        ['Why does my reset time look different?', 'Your local time zone or daylight-saving offset may differ from the reference. Compare your clock with the ISO reset timestamp in UTC and then confirm the active route in-game.'],
        ['Where can I find PEAK patch notes?', 'Use the official Steam news feed or this site\'s [[link:peak-game-update|patch notes]] page, which records official titles and dates before adding cautious route context.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'A dated schedule, not a guessed calendar',
      body: 'Reset and route values are injected from the maintained data/today-map.json record. Recent rows come from the verified map history file. Official Steam news provides update context. The game session remains the final source when a reset, route, or patch does not match an older record.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Official Steam news feed', officialNewsUrl],
      ],
    },
    related: [
      ['map-rotation', "Open today's PEAK map"],
      ['peak-game-update', 'Read the patch notes'],
      ['what-is-peak-game', 'Learn the map vocabulary'],
    ],
  },
};
