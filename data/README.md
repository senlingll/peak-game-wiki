# Today's map data

`today-map.json` is the build-time source for the map-rotation page. The scheduled workflow runs `npm run fetch:today-map` after the observed daily reset and before `npm run build`. The fetcher tries `peak.skydler.me` first because it exposes the current biome array in its public JavaScript, then falls back to the dated Steam community guide when the primary source is unavailable. It writes only a current result with explicit map fields. Keep it empty when neither source can be verified; the builder will render a pending card instead of guessing.

To publish a result, fill the fields below and run `npm run build`:

```json
{
  "date": "2026-08-22",
  "map": "Map name from the source",
  "route": "Route or cycle from the source",
  "biome": "Verified biome",
  "resetAt": "2026-08-23T00:00:00Z",
  "updatedAt": "2026-08-22T08:00:00Z",
  "sourceFetchedAt": "2026-08-22T08:00:00Z",
  "source": {
    "label": "PEAK Map Today",
    "url": "https://peak.skydler.me/"
  },
  "fallbackSource": {
    "label": "Steam Community daily map guide",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3553972295"
  },
  "media": [
    {
      "type": "image",
      "biome": "Shore",
      "url": "https://example.com/verified-map.webp",
      "alt": "Verified PEAK Shore map route for August 22, 2026",
      "caption": "Community-sourced map entry, checked on August 22, 2026."
    }
  ]
}
```

`date` must match the UTC build date and a published source must have an `http` or `https` URL. A record becomes a verified entry only when at least two of the map/route/biome values are present. A dated media-only community post may still show its source image/video while those location fields remain pending. `resetAt` is optional only when the reset time cannot be verified. Supported media types are `image` and `video`; `media` is an array and may contain one card per verified biome, while media is never used to infer a route. The Steam fallback is accepted only when its current cycle and explicit biome fields are present in HTML; the fetcher does not OCR images or infer names from an unlabeled screenshot.

For local network access through a proxy, set `TODAY_MAP_PROXY` before running the fetch command, for example `TODAY_MAP_PROXY=http://127.0.0.1:10808 npm run fetch:today-map` or the equivalent PowerShell environment variable. GitHub Actions does not set this local-only proxy and uses its own runner network.
