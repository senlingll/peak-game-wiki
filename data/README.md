# Today's map data

`today-map.json` is the build-time snapshot for the map-rotation page. The scheduled workflow runs `npm run fetch:today-map` after the observed daily reset and before `npm run build`. The command downloads the PEAK Wiki timer and its `MediaWiki:Maps.json` pool, validates the supported calculation and reset boundary, and writes an explicitly estimated result. It does not execute the downloaded JavaScript. An unavailable or unsupported source produces a pending record.

The rotation is not an official announcement and may become inaccurate after an update. The game session is always the final authority. The static builder reads the saved snapshot without changing its source-fetch time. A mismatched date, expired reset interval, missing source hashes, or future fetch time keeps the card pending. Published route information is static HTML.

The snapshot includes:

- `date`, `map`, `route`, and `biome` for the build-date estimate;
- `currentResetAt` for the reset that selected the sequence and `resetAt` for the next 17:00 UTC reset;
- `estimated: true`, actual `sourceFetchedAt`, source SHA-256 hashes, pool size, and combination index;
- five local `/media/peak-map-*.webp` images in the selected biome order, each marked `illustrative: true`, with a link to the corresponding PEAK Wiki biome page;
- localized alt text and captions identifying the images as biome references, rather than today's exact island or variant, with PEAK Wiki attribution and the CC BY-SA 4.0 license link.

`peak-map-history.json` stores dated community estimates. Legacy rows remain in the file for traceability, but the rendered history requires source hashes and a source-fetch time. It is not a guaranteed future cycle or an official record.

## Biome reference images

The image set covers `shore`, `tropics`, `roots`, `alpine`, `mesa`, `caldera`, `kiln`, `gloom`, and `citadel`. Existing WebP files are reused; their sizes are approximately 13–40 KB each. `buildTodayMapSnapshot` selects the five images automatically when new map data is fetched. Unknown biomes remain unsupported instead of receiving an unrelated fallback image. Stale or pending snapshots never show a current-route carousel.

These are landscape examples, not verified screenshots of the selected daily combination. A non-default variant retains its name in the route data, while the image and its label continue to identify the base biome only.

The rotation source is the PEAK Wiki timer at `https://peak.wiki.gg/wiki/MediaWiki:Common.js`. Images and attribution follow the PEAK Wiki license notice, `CC BY-SA 4.0`: `https://creativecommons.org/licenses/by-sa/4.0/`.

## Official updates

`peak-updates.json` is the build-time source for the PEAK game update article. Run `npm run fetch:updates` to read the official Steam News API and store dated titles and safe title-level summaries. If the feed is unavailable, keep the existing file and let the build publish the last verified entries. Exact patch mechanics remain on the linked official post.
