# Bellos - The Schism Campaign

A static lore site for a D&D campaign set in the world of Bellos, styled 
as a cinematic dark-editorial "universe hub". Pure HTML/CSS/vanilla JS -
no build step - so it deploys directly to GitHub Pages:
https://sirdyson.github.io/bellos-world-hub/

## Structure

```
index.html          Lean semantic shell (the three views live here, empty)
css/style.css       The entire design system
js/main.js          Hash router, state, renderers, animations
data/lore.js        ALL lore content - the only file you edit day to day
assets/img/         Nation artwork
```

## Editing lore

Everything written on the site comes from `data/lore.js`. The value
assigned to `window.BELLOS_LORE` is pure JSON:

- **`nations`** - one entry per nation. Each tab (`overview`, `history`,
  `environments`, `religions`, `life`, `people`, `champions`) is an array
  of strings, one string per paragraph. The first letter of the first
  paragraph is automatically rendered as a gold drop cap.
- **`timeline`** - chronological entries, oldest first. Each has an `id`
  (used in the URL), `era` label, `title`, paragraph array `body`, an
  `image`, and an optional `nation` id that adds an "Explore →" link.
- **`campaignTimeline`** - the session-by-session Chronicle feed. After a
  game session, append one object (oldest first; the site shows newest at
  the top): `session` number, in-game `date` (free text), a punchy
  `title`, a 2–3 sentence `summary`, `discoveredBy`, and an optional
  `nation` id that adds a linked tag plus that nation's artwork. Commit,
  push, done.
- **`tabOrder`** - add or reorder chapter tabs globally here.

Adding a nation: add an entry under `nations`, drop its artwork in
`assets/img/`, and (optionally) add a sigil to the `SIGILS` map at the top
of `js/main.js`. The card grid, routes, and pages are generated.

> Why `lore.js` and not `lore.json`? Browsers block `fetch()` of local
> files over `file://`, so a `.json` file would break double-click
> viewing. Loading the data as a script works identically from disk and
> from GitHub Pages, with no duplication - the payload itself is pure JSON.

## Routes

| URL | View |
| --- | --- |
| `#/nations` | Nation index |
| `#/nations/<id>/<tab>` | A nation chapter (e.g. `#/nations/kul/history`) |
| `#/timeline/<event-id>` | A deep-history entry |
| `#/chronicle` | Session-by-session campaign feed |
| `#/tales` | Theodore's Tales (placeholder) |

## Running locally

Open `index.html` directly, or serve the folder:

```
python -m http.server 8000
```

## Deploying

Push the folder to a GitHub repo and enable **Settings → Pages → Deploy
from a branch**. All asset and data paths are relative, so the site works
at both `user.github.io` roots and `/repo-name/` project paths unchanged.
