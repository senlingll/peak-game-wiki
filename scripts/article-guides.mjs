export const articleOrder = [
  'peak-biomes-list',
  'peak-game-update',
  'what-is-peak-game',
  'peak-map-rotation-schedule',
  'peak-levels-biomes-difficulty',
  'peak-game-tips',
  'how-to-play-peak',
  'rescue-claw',
  'rope-chain',
  'room-codes',
];

const officialNewsUrl = 'https://store.steampowered.com/news/app/3527290';
const rescueClawPatchUrl = 'https://store.steampowered.com/news/app/3527290/view/716788653799506284';

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
        afterTable: 'For official biome announcements and patch context, read the [[link:peak-game-update|update log]].',
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
      ['peak-game-update', 'Read the update log'],
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
          'This distinction matters most when the title contains new biome or route language. The official feed can establish that Gloom, Citadel, Caldera, or The Kiln was mentioned in an update. It cannot, without a current route record, answer which sequence your lobby will show after the reset. For reset timing and recent dated entries, see the [[link:peak-map-rotation-schedule|rotation schedule]]. For a source-backed roster of these names, see the [[link:peak-biomes-list|biomes list]].',
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
      ['peak-biomes-list', 'Browse the biomes roster'],
    ],
  },

  'what-is-peak-game': {
    slug: 'what-is-peak-game',
    meta: {
      title: 'What Is PEAK Game? Beginner\'s Guide to Gameplay & Maps',
      description: "New to PEAK? Learn what the game is, how it works, how the map rotation changes the route, and how to check today's active map before your first climb.",
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
      ['peak-biomes-list', 'Browse the biomes roster'],
    ],
  },

  'peak-levels-biomes-difficulty': {
    slug: 'peak-levels-biomes-difficulty',
    meta: {
      title: 'PEAK Levels, Biomes & Difficulty: Complete Guide',
      description: 'How many levels are in PEAK? Learn the biome order, the Ascents difficulty system, and how the daily map rotation changes what you climb today.',
      schema: 'A source-aware guide to PEAK levels, biome order, the Ascents difficulty system, and the build-time daily map route.',
    },
    published: '2026-09-03',
    primaryKeyword: 'PEAK levels',
    eyebrow: 'Progression guide - route layers explained',
    h1: 'PEAK Levels, Biomes & Difficulty \u2013 Explained',
    intro: `If you are trying to work out how to display level information in the PEAK game, the short answer is that PEAK levels are best read as route context rather than a traditional XP bar. PEAK uses three connected ideas - a climb route, a biome label, and an Ascent difficulty modifier. This guide gives the useful answer first, then points to the [[link:peak-biomes-list|biomes list]] for deeper terrain notes. The current five-position climb is confirmed in-game for this dated build snapshot; the exact names and order are written below from build-time route data and can change after a reset or update.`,
    answerLabel: 'The short answer',
    answer: 'PEAK does not use one permanent player-level total as the main way to describe progress. The current maintained game-facing route roster contains nine named biome labels (confirmed in-game for this snapshot): Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, and Citadel. The current daily record displays five route positions (confirmed in-game for this snapshot). Those positions describe the climb context, while Ascents are separate difficulty modifiers that can add debuffs. Treat the counts as dated evidence, not promises that every future patch will use the same structure.',
    tocLabel: 'On this page',
    tocFaq: 'Levels FAQ',
    heroImage: {
      src: '/media/peak-levels-biomes-difficulty.webp',
      alt: 'Editorial illustration of a PEAK climb rising through coastal, tropical, alpine, and volcanic terrain',
      caption: 'Editorial illustration - PEAK progression is easier to read as route layers than as a conventional player-level bar.',
      width: 1200,
      height: 800,
    },
    sections: [
      {
        id: 'biomes-and-levels',
        title: 'PEAK levels and biomes: the current route vocabulary',
        paragraphs: [
          'In PEAK, the word level is useful shorthand, but it can blur together several different things. A biome is a named regional context, a route is the sequence your run presents, and an Ascent changes the pressure applied to that run. None of those labels should be turned into a conventional character-level ladder without a source that says so.',
          'The table below records the nine named biome labels currently exposed by the maintained route data (confirmed in-game for this snapshot). It is a reference roster, not a claim that every run contains every name or that the list is a permanent order. The terrain notes are deliberately practical: use them to decide what to inspect, then let the current session confirm the actual geometry and hazards.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK route screenshot showing terrain and a climbing decision near a hazard',
          caption: 'Official Steam screenshot - the visible route is the final authority for the climb in front of you.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Current named biome roster - nine labels confirmed in-game for this maintained snapshot',
          headers: ['Biome', 'Route role', 'Risk to inspect', 'Useful first question'],
          rows: [
            ['Shore', 'Opening coastal context.', 'Check edges and elevation changes.', 'Where is the first safe pause?'],
            ['Tropics', 'Vegetated island context.', 'Check sight lines and climb paths.', 'Which route keeps a retreat open?'],
            ['Roots', 'Organic or root-focused context.', 'Watch narrow passages and awkward movement.', 'Can the team regroup before the next squeeze?'],
            ['Alpine', 'High-elevation or mountain context.', 'Protect stamina on exposed climbs.', 'Where is the next safe rest?'],
            ['Mesa', 'Rocky plateau context.', 'Compare direct and recoverable paths.', 'What is safer if plan A fails?'],
            ['Caldera', 'Volcanic-basin context.', 'Verify heat, lava, and current hazards.', 'What resource protects the next commitment?'],
            ['The Kiln', 'Late or volcanic route label.', 'Inspect the current path and exits.', 'Where is the next recovery point?'],
            ['Gloom', 'Darker or low-visibility context.', 'Set visual callouts and a retreat rule.', 'What can the team still see?'],
            ['Citadel', 'Structured, monumental context.', 'Slow down and save tools for the final push.', 'Could the next move create a rescue problem?'],
          ],
        },
      },
      {
        id: 'ascents-difficulty',
        title: 'The Ascents difficulty system',
        paragraphs: [
          'Ascents are best understood as difficulty modifiers layered over a climb, not as extra biomes or extra player levels. When an Ascent is active, the game applies its listed handicap or debuff to the run. That means a familiar route can still require a different plan: the biome tells you the broad setting, while the Ascent changes the cost of mistakes and the value of recovery resources.',
          'The exact modifier shown in the current game should outrank an old guide. This page therefore explains the system without inventing a permanent tier count or a universal ranking of which Ascent is hardest. Read the selection screen, note the version, and treat any community shorthand as a lead to verify rather than as an official rule.',
        ],
        bullets: [
          ['Read the active modifier', 'Check the Ascent description before choosing equipment or pushing harder.'],
          ['Separate route from difficulty', 'The biome gives context; the Ascent changes the pressure on that route.'],
          ['Replan recovery', 'Reserve food, climbing utility, and a retreat for the displayed penalty.'],
          ['Record the version', 'A dated note separates current effects from old community advice.'],
        ],
      },
      {
        id: 'daily-rotation-levels',
        title: 'How the daily map rotation changes the levels',
        kind: 'today-map',
        paragraphs: [
          `The quickest answer to “What level is PEAK today?” is the dated route record below. Open ${todayMapLink("check today's PEAK map rotation")} to see the same build-time map, route, biome, reset, and source fields used by the main daily page. The content is written into static HTML, so the answer is available before any client-side JavaScript runs.`,
          'At publication, the route has five positions (confirmed in-game for this dated snapshot). Recent records place Roots, Alpine, or Mesa in the middle; the maintained source also names Caldera and The Kiln. Rotation changes today\'s route, not the biome vocabulary.',
          'Use the rotation as a dated starting point, not a promise for every lobby or future patch. After reset, compare the sequence with the game and read the active Ascent. The map page tells you what is active; this guide explains why it matters.',
        ],
      },
      {
        id: 'read-level-information',
        title: 'How to read a PEAK level before you climb',
        paragraphs: [
          'If you searched for how to display level information in the PEAK game, use the screen in front of you as a route brief rather than forcing the run into a single level number. Read the biome label, the current route position, the visible terrain, and the active Ascent together. That combination answers what you need to prepare for next.',
          'Separate confirmed information from a useful prediction. The game-facing label and dated route record are evidence; a guess about a hazard, item location, or exact difficulty is only a planning hypothesis until the current session confirms it. This keeps old screenshots and community shorthand from becoming false guarantees.',
        ],
        bullets: [
          ['Read the label', 'Record the biome and route name exactly as the current source or game displays them.'],
          ['Inspect the commitment', 'Find the first climb, gap, visibility problem, or hazard that will change movement.'],
          ['Reserve recovery', 'Choose a rest point and retreat rule before a narrow route removes your options.'],
          ['Date the note', 'Keep the build date beside the observation so a later update can be compared fairly.'],
        ],
      },
      {
        id: 'next-steps',
        title: 'Next steps for learning PEAK progression',
        paragraphs: [
          'Build a reliable model by combining the current route with stable vocabulary. Start with [[link:what-is-peak-game|what PEAK is]], then follow [[link:how-to-play-peak|our first-run beginner walkthrough]]. Compare the [[link:peak-biomes-list|full biomes list]], and open the [[link:peak-game-update|update log]] when a patch may matter. For today\'s answer, return to the [[link:map-rotation|daily map page]]. For practical first-climb preparation, continue with our [[link:peak-game-tips|PEAK game tips]].',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK levels, biomes, and difficulty FAQ',
      items: [
        ['How many levels are in PEAK?', 'PEAK has no permanent conventional player-level total. The maintained roster contains nine named biomes (confirmed in-game for this snapshot), and the daily record shows five route positions (also confirmed in-game). These are route facts, not an XP ladder.'],
        ['What are the biomes in PEAK?', 'The current roster is Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, and Citadel. Daily order can change, so use the game and dated map record instead of a permanent schedule.'],
        ['What is the Ascents difficulty system?', 'Ascents add a difficulty modifier or debuff to a climb. The biome describes route context; the active Ascent changes the pressure or handicap. Read the current in-game description because effects can change.'],
        ['What level is PEAK today?', `There is no universal daily player-level number. Check ${todayMapLink("today's active map")} for the route and biome sequence, then read the Ascent in-game. The dated card is a reference; your session is the final authority.`],
        ['Is PEAK a difficult game?', 'It can be demanding because route reading, stamina, equipment, recovery, and teamwork interact. Difficulty also depends on the active Ascent and terrain. A lower-pressure first run with a retreat plan is more useful than an absolute rating.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'How this levels guide is maintained',
      body: 'The named roster and dated route claims use this site\'s maintained PEAK Map Today data, with game-facing route labels as the current reference. The official PEAK Steam page and Steam news feed add update context. Check current UI wording, Ascent effects, hazards, and the active route in-game.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Wiki timer source', 'https://peak.wiki.gg/wiki/MediaWiki:Common.js'],
        ['Official Steam news feed', officialNewsUrl],
      ],
    },
    related: [
      ['peak-biomes-list', 'Compare the full biomes list'],
      ['map-rotation', "Check today's PEAK map"],
      ['what-is-peak-game', 'Start with what PEAK is'],
      ['peak-game-update', 'Read the update log'],
      ['peak-game-tips', 'Use the PEAK game tips'],
    ],
    relatedLabel: 'Related PEAK guides',
  },

  'peak-game-tips': {
    slug: 'peak-game-tips',
    meta: {
      title: 'PEAK Game Tips: 12 Things to Know Before You Climb',
      description: 'New to PEAK? These 12 essential tips cover stamina, hunger, cooking, ropes vs chains, co-op survival, cold, and route planning before your first climb.',
      schema: 'A practical PEAK game tips guide covering stamina, hunger, cooking, climbing tools, cold, co-op survival, and the daily map route.',
    },
    published: '2026-09-04',
    primaryKeyword: 'peak game tips',
    eyebrow: 'Field guide - first-climb decisions',
    h1: 'PEAK Game Tips \u2013 Survive Your First Climb',
    intro: 'PEAK is a solo or co-op climbing roguelike: you cross changing terrain and biome contexts to reach the summit. These PEAK game tips cover first-climb decisions - safe grabs, stamina and hunger, cooking, ropes or chains, co-op calls, cold, and [[link:map-rotation#today-map|today\'s PEAK map rotation]]. For context, start with [[link:what-is-peak-game|what PEAK is]].',
    answerLabel: 'The short answer',
    answer: 'To get farther in PEAK, protect the next safe pause. Use short grabs, stop before stamina is empty, eat before hunger is urgent, cook useful food, and carry the right tool. In co-op, call boosts, stay close enough to recover one another, and protect the Scout. Check the route after each reset; preparation beats speed.',
    tocLabel: 'On this page',
    tocFaq: 'Tips FAQ',
    heroImage: {
      src: '/media/peak-game-tips.webp',
      alt: 'PEAK climbers sharing food and climbing equipment while one teammate helps another on a steep route',
      caption: 'Editorial illustration - a successful climb combines route reading, food, equipment, and teamwork.',
      width: 1024,
      height: 576,
    },
    sections: [
      {
        id: 'master-the-basics',
        title: 'Master the basics first',
        paragraphs: [
          'Tip 1 is foundational: hold the left mouse button to grab a climbable surface, then release before the move becomes a panic choice. Practice short grabs on safe ground so you can see the next handhold and reposition on narrow ledges.',
          'Tips 2 and 3 protect the resources that quietly end a run. Stamina is both movement budget and recovery margin. Hunger is a planning signal: eat before it becomes urgent, keep a reserve for detours or rescue, and do not spend your last energy to save seconds.',
        ],
        bullets: [
          ['Tip 1 - Learn the grab', 'Hold left click to grip, then release with a safe next move in mind.'],
          ['Tip 2 - Protect stamina', 'Pause on reliable ground and keep energy for the next commitment or retreat.'],
          ['Tip 3 - Watch hunger', 'Treat food as route planning, not a last-second button.'],
        ],
      },
      {
        id: 'cook-your-food',
        title: 'Cook your food',
        paragraphs: [
          'Tip 4: cook when you have safe ground and time. Cooking can improve the value of a food find, while eating everything raw wastes an easy opportunity. Benefits can vary by item and version, so read the current in-game description.',
          'Prepare before a long exposed section and keep enough for the return or a downed teammate. A cooking stop never replaces checking the next hazard.',
        ],
        bullets: [
          ['Tip 4 - Cook before the hard push', 'Use a safe pause to improve food value before the route needs it.'],
        ],
      },
      {
        id: 'ropes-vs-chains',
        title: 'Ropes vs chains',
        paragraphs: [
          'Tip 5: a rope is a portable line you place; a chain is a line aid already attached to the terrain. Use a dependable chain when one is available. Save a rope for a gap, awkward approach, or backup connection.',
          'Check the attachment point and the next landing, not just the item name. Interactions can change with updates, so follow the current prompt.',
        ],
        bullets: [
          ['Tip 5 - Match the line to the terrain', 'Use an available chain and save a rope for extra reach or recovery.'],
        ],
      },
      {
        id: 'prepare-before-climbing',
        title: 'Prepare before you climb',
        paragraphs: [
          'Tips 6 and 7 happen before the serious climb. Search nearby for coconuts and other supplies while returning is easy; take enough for the first objective, then leave instead of draining stamina for a perfect inventory.',
          'Treat weight and slots as trade-offs. Pack for the next obstacle, assign food a purpose, and avoid four players carrying the same narrow tool. A light, explainable loadout is easier to replace after a mistake.',
        ],
        bullets: [
          ['Tip 6 - Gather close supplies', 'Collect nearby coconuts and useful food before an easy return disappears.'],
          ['Tip 7 - Pack for the next problem', 'Balance weight, food, route utility, and recovery.'],
        ],
      },
      {
        id: 'play-with-a-team',
        title: 'Play with a team',
        paragraphs: [
          'The official Steam description supports solo play and co-op groups of up to four. Stay close enough to share route information and help, but avoid stacking on one unsafe edge. Name the next meeting point and who tests the route.',
          'Tip 8: agree on the next objective. Tip 9: before a boost, confirm a usable handhold or landing; never boost into unchecked terrain. Tip 10: protect recovery. A Scout can reduce bad commitments, and the current Scout revive option may return a downed teammate when its on-screen condition is met. Announce who is recovering whom and verify the prompt after updates. When a teammate is in a compromised position, review the [[link:rescue-claw|Rescue Claw teammate-safety guide]] before relying on the tool.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'PEAK teammates coordinating a climb and sharing equipment beside a bright mountain route',
          caption: 'Official Steam screenshot - co-op progress depends on shared route calls and deliberate assistance.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Tip 8 - Move as a group', 'Call the next objective and regroup before a risky section splits the team.'],
          ['Tip 9 - Boost with a plan', 'Check the landing before using a team assist.'],
          ['Tip 10 - Protect recovery', 'Let the Scout or helper work safely while the team holds the route.'],
        ],
      },
      {
        id: 'watch-the-cold',
        title: 'Watch the cold',
        paragraphs: [
          'Tip 11: cold is a route-and-time problem. Avoid standing still in exposed areas, move toward the cover or warmer area shown by the current game, and keep stamina for the crossing. The answer to how to avoid the cold in PEAK game is to plan the exposed segment before entering it.',
          'Keep food and recovery options ready. Warming effects and thresholds are version-sensitive, so use current descriptions instead of assuming one consumable always cancels cold.',
        ],
        bullets: [
          ['Tip 11 - Cross cold sections with a plan', 'Scout the route, keep stamina for the crossing, and verify warming options.'],
        ],
      },
      {
        id: 'plan-with-todays-map',
        title: 'Plan your route with today\'s map',
        kind: 'today-map',
        paragraphs: [
          `Tip 12: check ${todayMapLink("today's PEAK map rotation")} before starting. The daily route can change which biome context appears first, so yesterday\'s loadout may not fit today\'s climb. Use the dated build-time card below, then confirm the live route after the reset.`,
          'The map sets preparation priorities; the session reveals the exact rest point, hazard, or rescue problem. Compare its date, source, reset status, and route fields before turning a daily note into a plan.',
          'Start with the next known terrain, add food and recovery margin, then keep one flexible option for what the map cannot show.',
        ],
        bullets: [
          ['Tip 12 - Check before leaving camp', 'Use the daily route to prepare, then let the live game confirm the path.'],
        ],
      },
      {
        id: 'build-a-run-routine',
        title: 'Turn the 12 tips into a repeatable routine',
        paragraphs: [
          'Use the twelve tips as a short loop: check nearby supplies, choose a light loadout, agree on the first objective, and identify the next safe pause. During the climb, use short grabs, protect stamina, announce boosts, and stop when the team no longer has a clear recovery option.',
          'After a run, record what actually happened instead of rebuilding the route from memory. Keep the date, map context, useful tool, and decision that caused trouble. A dated observation is more useful than a confident rule that only fits one seed, patch, or team.',
        ],
      },
      {
        id: 'next-steps',
        title: 'Next steps for better PEAK runs',
        paragraphs: [
          'Once these habits feel natural, compare the route with our [[link:peak-biomes-list|biomes list]] and return to the [[link:map-rotation|daily map page]] before your next attempt. For a complete first-run walkthrough, read [[link:how-to-play-peak|our complete beginner\'s guide]], then [[link:what-is-peak-game|learn what PEAK is]]. For the broader route and difficulty picture, read our [[link:peak-levels-biomes-difficulty|levels and difficulty guide]].',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK game tips FAQ',
      items: [
        ['Is PEAK a difficult game?', 'PEAK can be difficult because climbing, stamina, hunger, equipment, cold, route reading, and teamwork interact. Start with safe pauses and a recovery plan.'],
        ['How do I get farther in PEAK?', 'Gather nearby supplies, cook useful food, match tools to terrain, pause before stamina is empty, and communicate the next move. Stay close enough to help in co-op.'],
        ['How do I avoid the cold in PEAK?', 'Scout exposed sections, keep moving, save stamina for the crossing, and use current warming or protective options. Item effects can change after updates.'],
        ['How should you play PEAK?', 'Treat PEAK as a route-and-resource problem: read the next climb, choose a safe pause, spend utility deliberately, and adapt to the current session.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'Keep tips tied to the current game',
      body: 'Platform and group-size facts come from the official PEAK Steam page. Daily route context is build-time map data. Verify item, cold, Scout revive, rope, and chain behavior in the current game after updates.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Wiki timer source', 'https://peak.wiki.gg/wiki/MediaWiki:Common.js'],
        ['Official Steam news feed', officialNewsUrl],
      ],
    },
    related: [
      ['map-rotation', "Check today's PEAK map"],
      ['what-is-peak-game', 'Start with the beginner guide'],
      ['peak-biomes-list', 'Browse the biome reference'],
      ['peak-game-update', 'Review current update context'],
      ['peak-levels-biomes-difficulty', 'Understand levels and difficulty'],
    ],
    relatedLabel: 'Related PEAK guides',
  },

  'how-to-play-peak': {
    slug: 'how-to-play-peak',
    meta: {
      title: "How to Play PEAK (Beginner's Basics)",
      description: "New to PEAK and not sure where to begin? Learn controls, climb loop, death and failure, solo vs co-op, and why today's map rotation matters before you start.",
      schema: 'A source-aware beginner guide to playing PEAK, including the opening, climbing controls, run loop, failure, co-op, cold, and daily map preparation.',
    },
    published: '2026-09-04',
    primaryKeyword: 'how to play PEAK',
    eyebrow: 'Beginner guide - from the plane to the summit',
    h1: "How to Play PEAK – Beginner's Basics",
    intro: 'PEAK is a climbing game you can play alone or with a group, where each run asks you to reach the summit across changing terrain. If you want the wider premise before learning the controls, start with [[link:what-is-peak-game|our introduction to what PEAK is]]. This page explains how to play PEAK from the first moments near the crashed plane to route planning, recovery, failure, and the next attempt.',
    answerLabel: 'The short answer',
    answer: 'To play PEAK, inspect the route, climb in short controlled moves, rest before stamina is exhausted, and use food or recovery supplies before a mistake becomes unrecoverable. Move from one biome context toward the summit while keeping a safe pause and retreat option in mind. In co-op, communicate the next move and stay close enough to help; before every run, [[link:map-rotation#today-map|check today\'s PEAK map]] and then confirm the live route in the game.',
    tocLabel: 'On this page',
    tocFaq: 'Beginner FAQ',
    heroImage: {
      src: '/media/how-to-play-peak.webp',
      alt: 'Beginner PEAK climbers planning a mountain route beside a crashed plane with ropes, food, and medical supplies',
      caption: 'Editorial illustration - learn the route, protect stamina, prepare supplies, and help the team before pushing toward the summit.',
      width: 1254,
      height: 1254,
    },
    sections: [
      {
        id: 'what-is-peak',
        title: 'What is PEAK?',
        paragraphs: [
          'PEAK is a climbing adventure built around repeated attempts on a mountain route. Whether you travel solo or cooperate with other players, the goal is to read the terrain, manage supplies, and reach the summit. Think in safe decisions rather than speed, and treat current game prompts as the final reference after an update.',
        ],
      },
      {
        id: 'the-basics',
        title: 'The basics: start, controls, and the climb loop',
        paragraphs: [
          'A run begins around the crashed plane. Search nearby while returning is easy, then identify the first safe stop uphill. The summit is the destination, but your immediate goal is the next stable place.',
          'Follow the current control menu. With the default PC controls, hold the left mouse button to grab a climbable surface. Climbing consumes stamina, so settle on safe ground and recover before committing again.',
          'The core loop is climb, recover, resupply, and advance. Food supports the next stretch, medical supplies protect a recovery plan, and climbing tools solve obstacles. Repeat that loop through each biome without assuming one fixed layout or item placement.',
        ],
        bullets: [
          ['Read before grabbing', 'Move the camera, identify the next hold and landing, and avoid committing without an exit.'],
          ['Protect a stamina margin', 'Pause on dependable ground before exhaustion removes your ability to correct a mistake.'],
          ['Spend supplies for a purpose', 'Use food, medical items, and climbing tools to solve the next known problem rather than carrying or consuming them without a plan.'],
        ],
      },
      {
        id: 'death-and-failure',
        title: 'Death and failure: what happens when a run goes wrong',
        paragraphs: [
          'A fall, hazard, or exhausted recovery plan can remove a climber from the attempt. In solo play, that may end the run; in co-op, the game may offer teammate recovery or revive options. Follow the current on-screen state because those conditions can change.',
          'After failure, identify one cause: a bad landing, empty stamina, missing food, a split team, or a tool spent too early. Change one preparation choice on the next run instead of memorizing the whole seed.',
        ],
      },
      {
        id: 'solo-vs-coop',
        title: 'Solo vs co-op: how your plan changes',
        paragraphs: [
          'Solo play gives you control over pace and inventory, but every route and recovery decision belongs to you. Carry balanced supplies, stop earlier, and avoid moves that depend on help. Use the official Steam listing for current play-mode support.',
          'In co-op, agree on the next stop, avoid crowding narrow ledges, and report low stamina or supplies. Teammates can scout, share items, assist movement, and respond to a downed player when allowed. Stay close enough for a helper to reach you safely. For a focused recovery option, see the [[link:rescue-claw|Rescue Claw co-op save guide]] before the next climb.',
        ],
      },
      {
        id: 'daily-map-rotation',
        title: 'Check the daily map rotation before you play',
        kind: 'today-map',
        paragraphs: [
          'PEAK uses a changing route, so yesterday\'s remembered line may not describe today\'s climb. Before leaving the starting area, [[link:map-rotation#today-map|check today\'s PEAK map]] for the dated route and biome context written into this site at build time. Then compare that snapshot with the live game after the reset.',
          'Use the map to ask which biome appears early and where cold, visibility, or terrain may change preparation. Keep one flexible tool available if the route differs. The session confirms the exact path; the daily page supplies the starting brief.',
          'If older advice disagrees with the current game, trust the active session and review the update date. Rotation changes today\'s climb, while the basic loop remains useful.',
        ],
      },
      {
        id: 'next-steps',
        title: 'What to learn after your first PEAK run',
        paragraphs: [
          'Once the basic loop makes sense, turn each question into a focused reference. Use our [[link:peak-game-tips|practical PEAK tips]] for stamina, food, ropes, teamwork, and cold. Read the [[link:peak-levels-biomes-difficulty|levels, biomes, and difficulty guide]] to separate route positions from Ascents, then check the [[link:achievements|PEAK achievements guide]] when you want structured goals beyond reaching the summit.',
          'Keep the order simple: practice safely, check the route, prepare for the next biome, and review one mistake. This is more dependable than copying another seed or patch.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'How to play PEAK FAQ',
      items: [
        ['What devices can you play PEAK on?', 'The official Steam listing currently documents the Windows PC version. Check the official store and developer announcements for current platform support before buying or organizing a cross-platform group.'],
        ['Is PEAK PC only?', 'The verified store source for this guide is the Windows PC release on Steam. Platform availability can change, so this page does not treat an older platform list as a permanent promise.'],
        ['How do I avoid the cold in PEAK?', 'Scout an exposed cold section before entering, keep moving toward cover or a safer area shown by the game, and reserve stamina for the crossing. Use current warming or protection descriptions because item effects and thresholds can change.'],
        ['Is PEAK a difficult game?', 'It can be demanding because climbing, stamina, supplies, terrain, failure, and teamwork interact. Beginners make it more manageable by using short moves, safe pauses, a recovery margin, and a route check before each attempt.'],
      ],
    },
    source: {
      eyebrow: 'Sources and limits',
      title: 'Keep this beginner guide tied to the current game',
      body: 'The official PEAK Steam page is the source for the game premise, Windows availability, and solo or co-op support. Daily route context comes from this site\'s maintained build-time map record. Controls, cold, item behavior, revive conditions, hazards, and exact routes can change, so current in-game prompts and official update notes take priority.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Official Steam news feed', officialNewsUrl],
        ['PEAK Wiki timer source', 'https://peak.wiki.gg/wiki/MediaWiki:Common.js'],
      ],
    },
    related: [
      ['map-rotation', "Check today's PEAK map"],
      ['what-is-peak-game', 'Learn what PEAK is'],
      ['peak-game-tips', 'Use practical PEAK tips'],
      ['peak-levels-biomes-difficulty', 'Understand levels and difficulty'],
      ['achievements', 'Plan achievement goals'],
    ],
    relatedLabel: 'Continue learning PEAK',
  },

  'rescue-claw': {
    slug: 'rescue-claw',
    lang: 'en',
    category: 'guides',
    meta: {
      title: 'PEAK Rescue Claw Guide: Range, Pulls & Co-op Saves',
      description: 'Learn how to get Rescue Claw in PEAK, aim it at teammates, understand its unlisted range, and check achievement impact with the official 2.04.a patch note.',
      schema: 'A source-aware PEAK Rescue Claw guide covering the official 2.04.a luggage context, teammate targeting, unlisted range, achievement uncertainty, and co-op recovery planning.',
    },
    published: '2026-09-05',
    primaryKeyword: 'PEAK Rescue Claw',
    eyebrow: 'Co-op rescue guide - official 2.04.a context',
    h1: 'PEAK Rescue Claw Guide: Range, Teammate Pulls & Co-op Saves',
    intro: `Rescue Claw is PEAK's co-op recovery tool for a teammate who has fallen, been caught in a bad position, or needs a safer chance to reconnect with the route. The official 2.04.a note describes how using it on a friend changes the post-claw moment; this guide keeps that source-backed detail separate from field advice. For the wider climb loop, start with [[link:how-to-play-peak|the beginner climb guide]] and use [[link:peak-game-tips|co-op survival tips]] before treating a rescue as the plan.`,
    answerLabel: 'The short answer',
    answer: 'Use Rescue Claw when a teammate needs help reconnecting with terrain. Find it in the luggage context described by the official THE KILN update, aim at the friend, activate the current in-game prompt, and keep a stable recovery position ready. The source confirms a shorter ragdoll window after the claw completes, but it does not publish an exact range, a guaranteed landing, or an achievement trigger.',
    tocLabel: 'On this page',
    tocFaq: 'Rescue Claw FAQ',
    heroImage: {
      src: '/media/rescue-claw-guide.webp',
      alt: 'Editorial illustration of one PEAK climber using a claw line to help a teammate reach a mountain ledge',
      caption: 'Editorial illustration - Rescue Claw is a team-recovery decision, not a guaranteed landing.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'what-rescue-claw-does',
        title: 'What Rescue Claw does for a co-op team',
        paragraphs: [
          'A rescue tool has a different job from a route tool. When a teammate falls below the next safe hold, gets caught on a bad edge, or leaves the Scout in an exposed position, the team needs a way to turn a failed movement choice into another chance to grab terrain. Rescue Claw belongs in that recovery conversation: the carrier chooses the moment, the teammate communicates their next hold, and the rest of the group protects the route.',
          'The official patch language is narrower than many community summaries. Patch 2.04.a says that using Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes. That confirms a friend-targeted co-op interaction and a recovery benefit after completion; it does not justify a promise that every rescue succeeds.',
        ],
        bullets: [
          ['Recognize the rescue', 'Use the tool when the next decision is about recovering a teammate, not simply reaching higher ground.'],
          ['Call the hold', 'Have the teammate name the surface or ledge they are trying to reach before the attempt.'],
          ['Protect the carrier', 'Keep the person operating the claw on terrain where a second rescue is not immediately required.'],
        ],
      },
      {
        id: 'how-to-get-rescue-claw',
        title: 'How to get Rescue Claw in PEAK',
        paragraphs: [
          'The official acquisition context is the luggage spawner in THE KILN. In Patch 2.04.a, THE KILN IS BACK, the developers wrote: "Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage." The practical takeaway is to inspect the luggage opportunities the current route presents, especially the spawner named by the note.',
          'That sentence does not identify a Rescue Claw-specific coordinate, refresh timer, drop percentage, or guaranteed appearance. If the tool is not in the luggage you find, record the route and build rather than treating one run as proof of a permanent spawn rule. The current game and official update posts outrank an old list.',
        ],
        bullets: [
          ['Search the named luggage context', 'Check the luggage spawner associated with the current route and update context.'],
          ['Keep expectations bounded', 'The patch changes luggage context; it does not promise that every search produces Rescue Claw.'],
          ['Check the current build', 'Use the live game and current official notes when an older item list disagrees.'],
        ],
      },
      {
        id: 'how-to-use-rescue-claw',
        title: 'How to aim and use Rescue Claw on a teammate',
        paragraphs: [
          'Treat the use as a coordinated handoff. The carrier should stand where the route remains recoverable, face the teammate, and aim at the intended friend before activating the current prompt. The teammate should call the hold or ledge they are trying to reach, while the rest of the group avoids creating a second emergency.',
          'The official 2.04.a wording is the key behavior to remember: "Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes." In other words, plan around the moment after completion. Do not promise a teleport, a guaranteed catch, or a fixed pull direction when the official note does not say those things.',
          'Use the tool when a gap, a short fall, or a Scout in trouble has created a recovery decision rather than a normal climbing decision. A rescue attempt still needs a receiver, a visible recovery surface, and a safe position for the person operating the tool. These are team practices, not published range or success guarantees.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Official Steam screenshot of PEAK teammates coordinating a climb on a steep route',
          caption: 'Official Steam screenshot - spacing and clear route calls give a rescue attempt room to work.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Before activating', 'Name the teammate, the intended recovery surface, and the person responsible for the attempt.'],
          ['During the pull', 'Keep the team still enough to communicate and avoid turning one emergency into several.'],
          ['After completion', 'Let the teammate reconnect with terrain before the group resumes the route.'],
        ],
      },
      {
        id: 'rescue-claw-range',
        title: 'How far does Rescue Claw reach?',
        paragraphs: [
          'The official PEAK sources used for this page do not publish a precise Rescue Claw range. This guide will not repeat a community measurement as confirmed data, and it will not turn a visual estimate into a promise. The direct answer to "what is the Rescue Claw range?" is: verify the current targeting behavior in the game; no official number is available here.',
          'For a field check, test from a stable position with the teammate and a recoverable surface in view. Move closer if the current prompt does not accept the target, and avoid testing at the edge of a real attempt. Keep notes tied to the game version because a later patch may change behavior. This is a cautious method, not a published measurement.',
          'Range is also a poor substitute for route planning. A long reach cannot make an unsafe landing safe, and a short reach may still be valuable when a teammate is just below a ledge. Read the route first, then decide whether a Rescue Claw attempt is worth the remaining recovery options.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Official Steam screenshot showing a PEAK climbing route where teams must read the next safe position',
          caption: 'Official Steam screenshot - inspect the route and recovery space before relying on an item.',
          width: 1200,
          height: 675,
        },
      },
      {
        id: 'rescue-claw-achievements',
        title: 'Does Rescue Claw affect an achievement?',
        paragraphs: [
          'The official 2.04.a announcement does not state that using Rescue Claw unlocks an achievement, badge, or special reward. It discusses the friend interaction and the shorter ragdoll window, but it does not define an achievement condition. This page therefore makes no claim that a teammate pull counts for a particular unlock.',
          'If you are testing a suspected goal, record the exact action, mode, teammate state, route context, and current version, then check the platform result. Treat a community report as a lead until the current game or official Steam record confirms it. For the difference between platform achievements and in-game progress, use the [[link:achievements|PEAK achievement guide]].',
          'A failed unlock is not proof that the tool is broken. The condition may be unrelated, version-sensitive, or simply undocumented in the patch note. Keep the rescue advice and the achievement hypothesis separate so a useful co-op technique does not become a false promise.',
        ],
      },
      {
        id: 'rescue-claw-rope-tools',
        title: 'Rescue Claw vs rope tools in a loadout',
        paragraphs: [
          'Rescue Claw is a response tool: it belongs in the plan for what happens when a teammate needs a recovery chance. A rope tool is a route-preparation choice: it belongs in the plan for how the team will approach the next obstacle. Do not spend a rescue slot just because a rope route looks awkward, and do not assume a rope replaces a teammate-recovery plan. These are role distinctions for planning, not a claim about hidden item stats.',
          'Compare the current item cards in the homepage database: the [[link:home#database|Rescue Claw item card]], the [[link:home#database|Anti-Rope Cannon entry]], and the [[link:home#database|Rope Shooter entry]]. The cards keep the names and broad team or route roles together, while exact effects should still be checked in-game.',
          `Before you leave, choose who carries recovery, who calls the route, and what the team does if the next move fails. Then check ${todayMapLink("today's PEAK map")} so the loadout starts from the current route context. A route with awkward gaps may justify different preparation from a route where the immediate risk is a separated teammate.`,
        ],
        bullets: [
          ['Route tool', 'Prepare for the terrain you expect to cross.'],
          ['Recovery tool', 'Keep a clear plan for a teammate who loses the intended line.'],
          ['Version check', 'Re-read the current item prompt and official update context after a patch.'],
        ],
      },
      {
        id: 'rescue-claw-checklist',
        title: 'A simple Rescue Claw co-op checklist',
        paragraphs: [
          'Use this short call before an attempt: identify the target, name the landing, confirm the carrier position, activate once the current prompt accepts the friend, then wait for the teammate to reattach before the group moves. If any step is unclear, pause and rebuild the position.',
          'This checklist is experience-based guidance, not an official sequence. It keeps the team from treating the claw as a panic button and makes the unverified parts visible. The official patch supplies the interaction detail; the team supplies timing, communication, and judgment.',
        ],
        bullets: [
          ['1. Target', 'Call the friend who needs the recovery attempt.'],
          ['2. Landing', 'Agree on the surface the teammate will try to grab after completion.'],
          ['3. Position', 'Keep the carrier on a stable, recoverable part of the route.'],
          ['4. Confirm', 'Use the current in-game prompt and let the teammate reconnect before moving on.'],
        ],
      },
      {
        id: 'next-steps',
        title: 'Next steps after learning Rescue Claw',
        paragraphs: [
          'Rescue Claw works best as one part of a route plan, not as permission to take a bad jump. Before the next run, read the [[link:peak-game-tips|co-op survival tips]], review the [[link:how-to-play-peak|beginner climb guide]], and [[link:map-rotation#today-map|check today\'s PEAK map]] for the current route context. Then return to the game and verify the prompt, target, and landing in the version you are actually playing.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'Rescue Claw FAQ',
      items: [
        ['How far does Rescue Claw reach in PEAK?', 'The official sources used here do not publish an exact range. Test the current targeting behavior from a stable position in-game, and do not treat a community measurement as official.'],
        ['Can Rescue Claw grab teammates?', 'Yes. The official 2.04.a note explicitly describes using Rescue Claw on a friend and says the friend is easier to grab onto something after the claw completes. It does not promise a guaranteed catch or define every targeting condition.'],
        ['Does Rescue Claw affect an achievement?', 'No achievement effect is confirmed by the official 2.04.a announcement. It describes the teammate interaction, not an achievement condition, so check the current game and Steam record before making that claim.'],
      ],
    },
    source: {
      eyebrow: 'Official source and limits',
      title: 'What Patch 2.04.a confirms',
      body: 'The primary source for this guide is the official Steam post THE KILN IS BACK (Patch 2.04.a). It documents the luggage change and says: "Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes." It does not publish a precise range, coordinate, refresh rate, drop rate, or achievement condition; those claims are intentionally left open.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', rescueClawPatchUrl],
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
      ],
    },
    related: [
      ['map-rotation', "Check today's PEAK map"],
      ['peak-game-tips', 'Prepare for co-op rescues'],
      ['how-to-play-peak', 'Review the climb basics'],
      ['achievements', 'Check achievement context'],
    ],
    relatedLabel: 'Related PEAK guides',
  },

  'rope-chain': {
    slug: 'rope-chain',
    lang: 'en',
    category: 'guides',
    meta: {
      title: 'PEAK Rope & Chain Guide: Spools, Launchers & Mechanics',
      description: 'Learn how to use rope in PEAK, tell Rope Spool from Anti-Rope Spool, use Chain Launcher, judge rope length, and understand current stamina rules.',
      schema: 'A source-aware PEAK rope and chain guide covering rope tools, Chain Launcher context, length limits, stamina changes, and route planning.',
    },
    published: '2026-09-06',
    primaryKeyword: 'PEAK rope and chain guide',
    eyebrow: 'Rope and chain mechanics - source-aware guide',
    h1: 'PEAK Rope & Chain Guide: How Ropes, Spools & Chains Work',
    intro: 'Ropes and chains both help a PEAK team move through difficult terrain, but they are not the same object. A rope is a flexible, placeable climbing aid, while a chain is a more fixed bridge between points. This guide separates confirmed official changes from community notes, then links the tool choices back to the current [[link:map-rotation#today-map|daily map route]]. For the wider vocabulary, compare the [[link:peak-biomes-list|PEAK biomes list]] before planning a climb.',
    answerLabel: 'The short answer',
    answer: 'Use rope when you need a flexible vertical aid or a prepared line for a teammate. Use chain when a fixed span can make a gap traversable. The current official record confirms a vertical boost when jumping off a rope or chain, slightly higher stamina cost while climbing a rope, and no longer prompts the chain you are already climbing as an interactable. The distance-based magnet penalty from the earlier patch was reverted in 2.02.a.',
    tocLabel: 'On this page',
    tocFaq: 'Rope and chain FAQ',
    heroImage: {
      src: '/media/peak-coop-climb.webp',
      alt: 'PEAK teammates climbing together while a rope route helps connect a steep section',
      caption: 'Official Steam screenshot - treat a rope or chain as part of a route decision, not a substitute for a safe hold.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'how-to-use-rope',
        title: 'How to use a rope in PEAK',
        paragraphs: [
          'A rope is most useful when the team has already identified a surface, ledge, or descent line worth connecting. Equip the rope tool, aim at the placeable target, and watch the in-game preview before committing. The exact handoff can depend on the item and current prompt, so use the game display as the final control reference rather than assuming every rope tool behaves identically.',
          'The core movement is simple: attach or place the line, grab it, and climb while keeping enough stamina to finish the next movement. A rope can give a player a more readable route through a vertical section, and a prepared line can let a teammate follow a decision that would otherwise require another risky jump. It is route preparation, not a guarantee that the next landing is safe.',
          'One official movement change still matters. Patch 2.01.a says, "Jumping off a rope or chain will now properly give you a vertical boost." That means leaving the line can be part of the move into a nearby hold, but the boost does not remove the need to read the target and leave enough stamina for the grab. The same patch says, "Climbing a rope now costs sliiiiiiightly more stamina." The change is deliberately small in the official wording; plan for a slightly higher rope-climb cost without inventing a value.',
          'The rope-tool names are easy to mix up. Rope Spool is the ordinary spool concept players use to place a rope downward from a stable position. Anti-Rope Spool is a different item with an anti-rope role; it is not a spare Rope Spool and should not be treated as one. The homepage [[link:home#database|item database]] keeps those entries separate so the team can check the current item wording before a run.',
          'Rope Shooter and Anti-Rope Cannon belong to the same planning conversation but are not interchangeable labels. Use the [[link:home#database|Rope Shooter card]] and [[link:home#database|Anti-Rope Cannon card]] for their maintained site descriptions, then verify the current prompt in the game. Some placement habits come from community testing rather than official patch notes, so this page marks those habits as practical guidance instead of presenting them as developer specifications.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'PEAK climbers sharing a steep route where a rope can support team movement',
          caption: 'Official Steam screenshot - place a line for the route the team actually intends to use.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Read the preview', 'Confirm the target and likely landing before placing or firing a rope.'],
          ['Budget the climb', 'A rope climb uses stamina, and the official 2.01.a note describes that cost as slightly higher.'],
          ['Name the tool', 'Rope Spool and Anti-Rope Spool are separate items with different planning roles.'],
          ['Leave deliberately', 'A jump off a rope or chain can provide a vertical boost, but the next hold still matters.'],
        ],
      },
      {
        id: 'chain-launcher',
        title: 'Chain Launcher: what it does',
        paragraphs: [
          'Chain is the other half of the rope-versus-chain distinction. In normal route language, a chain behaves like a fixed span between two points: it is something the team can climb or use to move across a gap rather than a flexible line that hangs from a selected length. This is a practical distinction for reading terrain, not a claim that the two objects share the same physics.',
          'The Chain Launcher is the tool to consider when a team needs to create that kind of connection from a firing point toward a targeted surface. The community wiki describes it as creating a chain between the player and a targeted surface when fired. That description comes from the [[link:home#database|Chain Launcher item entry]] and community documentation, not from the official 2.01.a or 2.02.a patch text. Keep the source boundary visible when explaining the item to new players.',
          'In practice, a chain is valuable when the next safe decision is horizontal or when the gap separates two readable pieces of terrain. Aim with the route in mind, leave room for the climber to grab the resulting line, and call out which side the team is using. The launcher can change how the group approaches a gap, but it does not make an unverified surface safe or promise an unlimited span. The current game remains the authority for the prompt, connection, and traversal behavior.',
          'Do not use “chain” and “rope” as shorthand for the same item family. A Rope Shooter or Anti-Rope Cannon is a rope-tool choice; Chain Launcher is the chain-tool choice. If the team says “bring the rope,” name the actual item before the climb so a flexible line is not confused with a chain bridge or with Anti-Rope Spool.',
        ],
        bullets: [
          ['Start from the route', 'Choose a connection that leads to a visible, recoverable surface.'],
          ['Call the far side', 'Tell the team which ledge or wall the chain is meant to serve.'],
          ['Keep the boundary clear', 'The two-point Chain Launcher behavior is community-documented, not an official patch quote.'],
        ],
      },
      {
        id: 'rope-length',
        title: 'Rope length and chain length: what is confirmed?',
        paragraphs: [
          'Players often search for a PEAK rope length formula or ask how far a chain launcher can reach. The official announcements used for this guide do not publish a precise rope length, chain length, maximum span, inventory total, or distance equation. This page therefore does not turn a community measurement into official data. If a length matters to a real attempt, use the current in-game preview and leave a recovery option instead of trusting an old number.',
          'A useful field test is qualitative: find a stable starting position, point at the intended surface, and check whether the preview reaches the route you can actually see. Test the line before the team commits to a jump. If the connection is shorter than expected, change the position or route rather than stretching the claim. This is a play method, not a hidden formula.',
          'Community pages may list measurements for Rope Spool, Rope Shooter, or Chain Launcher. They can help you form a question, but the source label matters. The maintained [[link:home#database|homepage database]] gives the item names and broad roles; the game build you are playing decides what the prompt accepts. Record the version beside any personal test because a later patch can change behavior without preserving an old measurement.',
          'Length is also not the same as usefulness. A short line can be enough to make a next hold readable or to give a teammate a controlled exit. A longer-looking line can still be poor preparation if it ends over an unsafe surface. Route geometry, stamina, visibility, and the position of the rest of the team are more reliable planning inputs than a single number copied from a different build.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK route view where the next safe surface determines whether a rope or chain is useful',
          caption: 'Official Steam screenshot - judge a line by the reachable route and recovery space, not an unverified length claim.',
          width: 1200,
          height: 675,
        },
      },
      {
        id: 'common-mistakes',
        title: 'Common rope and chain mistakes',
        paragraphs: [
          'The most important stamina clarification concerns “magnet-ing” from far away. Patch 2.01.a introduced a small stamina penalty for reaching from far away to a rope or chain. Patch 2.02.a then explicitly said that the distance-based stamina cost for starting to grab a rope had been reverted. In the current rule described by that later official note, do not tell players that the old distance penalty is still active. The earlier patch is history; 2.02.a is the correction.',
          'The official 2.01.a note also says, "The chain you\'re currently climbing is no longer prompted as an interactable when you\'re on it." This is a prompt and interaction clarification, not proof that chains and ropes work identically. When the team is already on a chain, read the current display and use the movement input that the game presents instead of waiting for the chain to be offered as a fresh interactable.',
          'Another common error is asking which line is always cheaper or better. The official notes do not publish a universal rope-versus-chain stamina ranking, and the route determines whether vertical climbing or a horizontal crossing is the real cost. A line that saves a risky jump may be the sensible choice even if it takes time or stamina to use. Keep the comparison tied to the current terrain and build.',
          'Finally, do not promise that a rope or chain can be placed forever, that every surface accepts every tool, or that a displayed preview guarantees a successful catch. Those claims require current in-game confirmation. The responsible answer to an undocumented mechanic is to verify it in the version at hand and label community observations as observations.',
        ],
        bullets: [
          ['Old magnet rule', 'The distance-based grab penalty from 2.01.a was reverted in 2.02.a.'],
          ['Current chain prompt', 'A chain already being climbed is no longer prompted as an interactable in the 2.01.a note.'],
          ['No universal winner', 'Rope and chain solve different route problems, so “cheaper” depends on the climb.'],
          ['No invented limits', 'Use the current preview and game behavior for length, placement, and span questions.'],
        ],
      },
      {
        id: 'route-checklist',
        title: 'A practical rope and chain route checklist',
        paragraphs: [
          'Start by checking [[link:map-rotation#today-map|today\'s PEAK map rotation]]. The daily route changes the terrain you will read, the gaps you will approach, and the reason a tool might be worth carrying. A route-focused loadout is more useful than treating Rope Spool, Rope Shooter, Anti-Rope Cannon, and Chain Launcher as interchangeable answers to every obstacle.',
          'Before the team leaves a stable position, identify the next surface, the person placing or firing the line, and the recovery plan if the connection is not accepted. Use short callouts such as “vertical rope,” “chain across,” or the exact item name. This reduces the chance that one player is preparing a flexible rope while another is waiting for a chain bridge.',
          'During the move, let the climber finish the intended action before the group changes the plan. Remember the official vertical boost when leaving a rope or chain, but do not jump simply because the boost exists. The useful question is whether the next hold is visible and reachable with the remaining recovery options. After a patch, repeat the prompt check because update notes can change a familiar interaction.',
        ],
        bullets: [
          ['1. Check the route', 'Use the daily map entry, then confirm the active route in the game.'],
          ['2. Name the obstacle', 'Decide whether the problem is a vertical climb, a gap, or teammate access.'],
          ['3. Name the tool', 'Choose the specific rope or chain item and its carrier.'],
          ['4. Confirm recovery', 'Keep a safe hold, a fallback position, or a teammate plan before committing.'],
        ],
      },
      {
        id: 'next-steps',
        title: 'Next steps for safer climbs',
        paragraphs: [
          'Rope and chain mechanics make more sense when they are part of a complete climb plan. Read the [[link:peak-game-tips|practical PEAK tips]] for stamina, supplies, and co-op decisions, then review [[link:how-to-play-peak|how to play PEAK]] if the basic climb loop is still unfamiliar. When you are ready to choose a route, [[link:map-rotation#today-map|check today\'s PEAK map]] and compare its terrain with the current tool prompts. For region names and route vocabulary, return to the [[link:peak-biomes-list|biomes list]].',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK Rope and Chain FAQ',
      items: [
        ['How do you use a rope in PEAK?', 'Equip the relevant rope tool, aim at a valid surface, confirm the current in-game preview or prompt, then grab and climb the placed line. Use the route and the game display as the final authority because Rope Spool, Rope Shooter, and Anti-Rope Cannon are different tools.'],
        ['Does magnet-ing from far away still cost stamina in PEAK?', 'The distance-based stamina penalty introduced in Patch 2.01.a was reverted in Patch 2.02.a. Do not describe that old penalty as a current rule; verify the current build if the prompt behaves differently.'],
        ['What is the Chain Launcher in PEAK?', 'It is a chain-focused traversal item. Community documentation describes it as creating a chain between the player and a targeted surface, while the official patch notes used here confirm general chain movement changes rather than publishing that full item description.'],
        ['How long are PEAK ropes and chains?', 'The official sources used here do not publish a precise rope length, chain length, or formula. Check the current in-game preview and treat community measurements as non-official observations tied to a particular build.'],
      ],
    },
    source: {
      eyebrow: 'Official sources and community boundary',
      title: 'What this guide can confirm',
      body: 'The official movement facts come from Patch 2.01.a and Patch 2.02.a. Patch 2.01.a confirms the vertical boost after jumping from a rope or chain, a slightly higher rope-climb stamina cost, the chain interaction prompt change, and the then-new distance penalty. Patch 2.02.a confirms that the distance-based grab penalty was reverted. The Chain Launcher connection description is attributed to community documentation at peak.wiki.gg; the official notes do not publish precise rope or chain length values.',
      links: [
        ['Patch 2.01.a: Frog cooldown and bug fixes', 'https://store.steampowered.com/news/app/3527290/view/1840944183777904'],
        ['Patch 2.02.a: balance changes', 'https://store.steampowered.com/news/app/3527290/view/1840944183789494'],
        ['PEAK community wiki: Equipment', 'https://peak.wiki.gg/wiki/Equipment'],
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
      ],
    },
    related: [
      ['map-rotation', "Check today's PEAK map"],
      ['peak-game-tips', 'Prepare with practical tips'],
      ['how-to-play-peak', 'Review the climb basics'],
      ['peak-biomes-list', 'Browse the biomes list'],
    ],
    relatedLabel: 'Related PEAK guides',
  },

  'room-codes': {
    slug: 'room-codes',
    lang: 'en',
    category: 'guides',
    meta: {
      title: 'PEAK Multiplayer & Room Codes Guide: Co-op, Crossplay & Join Codes',
      description: 'Learn how PEAK room codes work, how to join friends through Steam or JOIN GAME, how many players can climb together, and what crossplay status means today.',
      schema: 'A source-aware PEAK multiplayer and room codes guide covering co-op invites, JOIN GAME, player count, crossplay plans, matchmaking, and lobby privacy.',
    },
    published: '2026-09-09',
    primaryKeyword: 'PEAK room codes',
    eyebrow: 'Multiplayer field guide - co-op and join codes',
    h1: 'PEAK Multiplayer & Room Codes Guide: Co-op, Crossplay & Join Codes',
    intro: 'PEAK multiplayer supports Steam friend invites and room codes for joining a lobby. This guide explains where to copy a code, where a friend enters it, how the four-player limit works, and how to read the current crossplay status without confusing a future console plan with a feature that is already live.',
    answerLabel: 'The short answer',
    answer: 'PEAK has room codes. In a lobby, open the pause menu to copy the code; the joining player enters it through JOIN GAME on the main menu. Steam invites still work, and the official store page supports a host plus up to three other scouts. The current playable version is on Steam/PC, while Landfall describes console support and cross-platform play as work in progress. There is no random matchmaking, and solo offline play is available.',
    tocLabel: 'On this page',
    tocFaq: 'Multiplayer FAQ',
    heroImage: {
      src: '/media/peak-coop-climb.webp',
      alt: 'PEAK teammates coordinating an online co-op climb on a steep island route',
      caption: 'Official Steam screenshot - co-op progress depends on a shared route and a clear way to join the lobby.',
      width: 1200,
      height: 675,
    },
    sections: [
      {
        id: 'room-codes',
        title: 'How PEAK room codes work',
        paragraphs: [
          'Patch 2.04.a added room codes to PEAK. The official announcement says that a player in a lobby should see a room code in the pause menu, where it can be copied and sent to friends. A separate option can hide the code for streamers who do not want it visible on screen.',
          'The sharing flow has two roles. The host opens the pause menu, copies the code, and sends it through the player’s usual private channel. The joining player opens the main menu, chooses JOIN GAME, and enters that code. Keep the code private when the lobby is meant for a specific group.',
          'The same announcement describes room codes as preparation for cross-platform play once the console ports are out. That makes the code a direct way to identify and join a lobby; it is not a public queue that automatically finds strangers. Existing Steam invite methods continue to work as well.',
        ],
        bullets: [
          ['Host', 'Open the lobby pause menu, copy the room code, and share it with the intended players.'],
          ['Joining player', 'Use JOIN GAME on the main menu and enter the code you received.'],
          ['Privacy', 'Use the in-game option to hide the room code when streaming or sharing a lobby publicly.'],
        ],
      },
      {
        id: 'join-co-op',
        title: 'How to join a PEAK co-op game',
        paragraphs: [
          'The official Steam description presents PEAK as friends-only multiplayer: a player can invite up to three other scouts through Steam, or play alone. The 2.04.a announcement adds room codes without removing the existing invitation flow, so choose the route that matches how your group is coordinating.',
          'If a friend sends a Steam invite, accept it through Steam and follow the current game prompt. If the group is sharing a code, use JOIN GAME from the main menu. The exact menu layout can change with updates, so treat the labels visible in your current build as the final interface reference rather than relying on an old screenshot.',
          'A room code is most useful when the host and joining player are already coordinating directly. It does not replace the need to agree on who is hosting, which lobby the group is using, or whether the next climb should follow the current [[link:map-rotation#today-map|daily map route]]. For the basic climb loop, review [[link:how-to-play-peak|how to play PEAK]].',
        ],
        image: {
          src: '/media/peak-climb-ridge.webp',
          alt: 'PEAK climbers moving together along a narrow ridge during a co-op route',
          caption: 'Editorial route context - joining the lobby is only the first step; the team still needs a shared climb plan.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Choose one host', 'Decide which lobby the group is joining before sending invites or a code.'],
          ['Use the current labels', 'Room-code and invitation menus can change; follow the interface in the running build.'],
          ['Plan the route', 'After joining, confirm the team’s route and next objective before leaving camp.'],
        ],
      },
      {
        id: 'player-count',
        title: 'How many players can play PEAK together?',
        paragraphs: [
          'The official Steam description says multiplayer is friends-only and allows an invitation to up to three other scouts. In practical terms, that means one host plus three other players, for a four-player co-op group. A smaller group is fine; the game can also be played solo.',
          'Landfall’s FAQ confirms that single-player is available offline. You do not need to fill every place before starting a climb, and a solo run should not be described as an incomplete multiplayer lobby. The player-count answer is separate from the question of which platforms can connect.',
          'For a group run, agree on a host and a communication channel before the first invite. The team can then use a Steam invitation or a room code depending on what the host shares. Once everyone is in, keep the route discussion focused on the next safe decision rather than treating the lobby size as a strategy by itself.',
        ],
        bullets: [
          ['Four-player maximum', 'One host plus up to three other scouts is the clear limit in the official store wording.'],
          ['Smaller groups work', 'You can start with fewer players instead of waiting for a full lobby.'],
          ['Solo is supported', 'Landfall’s FAQ says single-player can be played offline.'],
        ],
      },
      {
        id: 'crossplay-status',
        title: 'PEAK crossplay: current status and future plan',
        paragraphs: [
          'Do not collapse two different answers into one. The currently documented playable version for this guide is the Steam/PC version. Landfall’s official FAQ says the team is working on bringing PEAK to consoles and that PEAK is going to be cross-platform, with more news promised later in the year.',
          'Patch 2.04.a explains why room codes were added: the announcement describes them as the way players will be able to play cross-platform once the console ports are out. That is a future-facing purpose, not proof that a mixed PC-and-console session is already available today.',
          'The safe planning rule is simple: organize a current PC session through Steam friends or the room-code flow, then recheck the official game and platform announcements before promising a cross-platform lobby. Do not label the game permanently “not cross-platform,” and do not advertise crossplay as already live without a current official release notice.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK route view showing a team preparing for the next section of a changing map',
          caption: 'Editorial route context - platform status and the active map are separate checks before a group starts climbing.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Current session', 'Treat Steam/PC as the currently documented playable platform for this guide.'],
          ['Official plan', 'Console support and cross-platform play are described as work in progress.'],
          ['Do not overpromise', 'Recheck official announcements before arranging a mixed-platform game.'],
        ],
      },
      {
        id: 'matchmaking-and-teammates',
        title: 'Matchmaking, Steam friends, and finding teammates',
        paragraphs: [
          'A room code is not the same thing as matchmaking. Landfall’s FAQ says PEAK has no matchmaking and is Steam-friends only. A code identifies a lobby that someone is already hosting; it does not create a public queue or choose a team for you.',
          'Use Steam friends when you already know who is climbing. When you need teammates, the official FAQ points players to the developer’s Discord as a community place to find people. Treat that Discord as a way to meet other players, not as an in-game matchmaking feature or a promise that a group will be available at every moment.',
          'After a group forms, choose one host, decide whether the code or an invite is the shared entry point, and state the route goal before the run. The [[link:items|PEAK item catalog]] can help the team name equipment consistently, while the [[link:achievements|achievement guide]] is useful when a run has a platform-progress goal as well as a summit goal.',
        ],
        bullets: [
          ['Known group', 'Use Steam friends and the host’s invitation or room code.'],
          ['Need teammates', 'Use the official Discord as a community contact point, not as random matchmaking.'],
          ['Before launch', 'Agree on the host, entry method, route, and communication channel.'],
        ],
      },
      {
        id: 'lobby-privacy',
        title: 'How to stop random players joining your lobby',
        paragraphs: [
          'Landfall’s FAQ includes a specific answer for the case where a random player joins a lobby without an invitation. The official steps are to set Lobby Mode to Invite Only, set the Steam profile to Private, and then create the lobby again after changing those settings.',
          'If someone is already inside the lobby, the host can kick that player. The FAQ also says that a kicked player cannot rejoin that host’s game. This is a lobby-privacy measure, not a matchmaking setting, so it should be handled before sharing a room code outside the intended group.',
          'For a private climb, check the lobby mode first, keep the Steam profile setting in mind, and share the code only with the players who should enter. If the code has appeared in a public stream or post, hide it in the game and make a fresh lobby rather than assuming the old code is private again.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'PEAK co-op teammates gathered on a shared route before continuing the climb',
          caption: 'Official Steam screenshot - a predictable lobby makes team communication easier before the climb begins.',
          width: 1200,
          height: 675,
        },
        bullets: [
          ['Set Invite Only', 'Change Lobby Mode before creating the private lobby.'],
          ['Review Steam privacy', 'Set the Steam profile to Private when following the official FAQ’s prevention steps.'],
          ['Re-host', 'Create the lobby again after changing the settings.'],
          ['Remove an intruder', 'The host can kick a random player, who cannot rejoin that host’s game.'],
        ],
      },
      {
        id: 'connection-troubleshooting',
        title: 'Official connection troubleshooting',
        paragraphs: [
          'When an invite or room-code join fails, use the current Landfall FAQ as the source-backed troubleshooting list. It covers the types of checks the developers want players to try, including Steam maintenance, verifying the game files, firewall or antivirus exclusions, VPN-related checks, cFosSpeed, and mod or installation issues.',
          'These checks are not a claim that every failure has one universal cause. Work through the relevant item in the official FAQ, then try the invitation or JOIN GAME flow again. If the issue remains unclear, use the official PEAK Discord or Steam community as the next place to report the exact platform, lobby method, and visible error rather than inventing a PEAK-specific fix.',
          'A useful report includes whether the host used a Steam invite or a room code, whether the joining player reached JOIN GAME, whether the lobby was Invite Only, and what the current game displayed. That context separates a private-lobby problem from a connection or platform-status question without promising a workaround the official source does not document.',
        ],
        bullets: [
          ['Start with the official FAQ', 'Use its current connection and Photon troubleshooting section.'],
          ['Record the entry method', 'Note whether the session used a Steam invite or JOIN GAME with a code.'],
          ['Report the visible state', 'Include the platform, lobby settings, and exact message when asking the community.'],
        ],
      },
      {
        id: 'co-op-checklist',
        title: 'A simple PEAK co-op checklist',
        paragraphs: [
          'Before the host starts, decide who is hosting and whether the group will enter through a Steam invitation or a room code. If you are using a code, copy it from the pause menu and share it privately. If the lobby should stay closed, set Invite Only and review the Steam privacy setting before re-hosting.',
          'After everyone joins, confirm the current route with [[link:map-rotation#today-map|today’s PEAK map]], then make one short plan for the first climb. Use the [[link:items|item catalog]] to settle names for route tools, food, and recovery supplies. If the run also targets a platform achievement, check the [[link:achievements|achievement guide]] before committing to a special objective.',
          'Keep the join process and the climb process separate. A successful code entry only proves that the player reached the lobby. It does not prove the route is safe, the platform plan is current, or that the team has agreed on who scouts, who carries recovery, and when to stop pushing upward.',
        ],
        bullets: [
          ['1. Choose the host', 'Name one lobby and one communication channel.'],
          ['2. Choose the entry method', 'Use a Steam invite or share the room code privately.'],
          ['3. Protect the lobby', 'Use Invite Only and the official Steam privacy steps when needed.'],
          ['4. Plan the climb', 'Check the daily route, name the equipment, and agree on the first safe objective.'],
        ],
      },
      {
        id: 'next-steps',
        title: 'Next steps for a better co-op run',
        paragraphs: [
          'Once the group can join reliably, the useful work moves to the route. Read [[link:how-to-play-peak|how to play PEAK]] for the basic climb loop, check [[link:map-rotation#today-map|today’s map]] before leaving camp, and use the [[link:items|item catalog]] when the team needs a shared name for equipment. For platform progress, continue to the [[link:achievements|achievement guide]].',
        ],
      },
    ],
    faq: {
      eyebrow: 'Quick answers',
      title: 'PEAK Multiplayer and Room Codes FAQ',
      items: [
        ['Does PEAK have room codes?', 'Yes. Patch 2.04.a added room codes. The host copies the code from the lobby pause menu, and the joining player enters it through JOIN GAME on the main menu.'],
        ['How do PEAK room codes work?', 'The host shares the lobby code with the intended players. They enter it through JOIN GAME. Room codes identify a lobby; they are not a random matchmaking queue.'],
        ['Does PEAK support crossplay?', 'The currently documented playable version is on Steam/PC. Landfall says console support is in progress and PEAK is going to be cross-platform, so treat crossplay as a planned feature rather than an already-live mixed-platform session.'],
        ['How many players can play PEAK together?', 'The official store description supports a host plus up to three other scouts, for four players in a co-op group. Solo offline play is also available.'],
        ['Does PEAK have matchmaking?', 'No. Landfall’s FAQ describes PEAK as Steam-friends only with no matchmaking. Use Steam friends, room-code sharing, or the official Discord to find teammates.'],
        ['How do I stop random players joining my PEAK lobby?', 'Set Lobby Mode to Invite Only, set your Steam profile to Private, and create the lobby again. The host can kick a player, and the official FAQ says a kicked player cannot rejoin that host’s game.'],
      ],
    },
    source: {
      eyebrow: 'Official sources and current-status limits',
      title: 'What this multiplayer guide can confirm',
      body: 'Room-code behavior, the JOIN GAME entry point, the future cross-platform purpose, and continued Steam invitation support come from the official Patch 2.04.a announcement. Player-count and online/offline play details come from the official PEAK Steam page. Landfall’s FAQ supplies the current matchmaking, platform-plan, Discord, lobby-privacy, and connection-troubleshooting guidance. Platform availability and interface labels can change, so confirm the current official pages before organizing a mixed-platform session.',
      links: [
        ['Official PEAK Steam page', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Patch 2.04.a: THE KILN IS BACK', 'https://store.steampowered.com/news/app/3527290/view/716788653799506284'],
        ['Landfall official PEAK FAQ', 'https://landfall.se/peak-faq'],
        ['Official PEAK Discord', 'https://discord.gg/peakgame'],
      ],
    },
    related: [
      ['items', 'Browse the PEAK item catalog'],
      ['how-to-play-peak', 'Review how to play PEAK'],
      ['map-rotation', "Check today's PEAK map"],
      ['achievements', 'Plan achievement goals'],
    ],
    relatedLabel: 'Related PEAK guides',
  },
};
