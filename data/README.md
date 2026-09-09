# Today's map data

`today-map.json` is the build-time snapshot for the map-rotation page. The scheduled workflow runs `npm run fetch:today-map` after the observed daily reset and before `npm run build`. The command performs no network request: it applies the locally maintained community reverse-engineered rotation script from the PEAK Wiki timer and writes an explicitly estimated result.

The rotation is not an official announcement. The daily pool expanded after Patch 2.04.a, so the estimate may become inaccurate after an update. The game session is always the final authority. The static builder also computes the same snapshot directly from the rotation module, so the published HTML does not depend on client-side JavaScript or an external daily-map service.

The snapshot includes:

- `date`, `map`, `route`, and `biome` for the build-date estimate;
- `currentResetAt` for the reset that selected the sequence and `resetAt` for the next 17:00 UTC reset;
- `estimated: true` and the PEAK Wiki timer attribution;
- local `/media/peak-map-*.webp` images, with the original PEAK Wiki attribution and CC BY-SA 4.0 license link rendered by the page.

`peak-map-history.json` stores dated observations produced by the same estimate. It is a reference history, not a guaranteed future cycle and not an official record.

The rotation source is the PEAK Wiki timer at `https://peak.wiki.gg/wiki/MediaWiki:Common.js`. Images and attribution follow the PEAK Wiki license notice, `CC BY-SA 4.0`: `https://creativecommons.org/licenses/by-sa/4.0/`.

## Official updates

`peak-updates.json` is the build-time source for the PEAK game update article. Run `npm run fetch:updates` to read the official Steam News API and store dated titles and safe title-level summaries. If the feed is unavailable, keep the existing file and let the build publish the last verified entries. Exact patch mechanics remain on the linked official post.
