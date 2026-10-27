# Project documentation and progress log

_Last updated: 2026-10-27_

## 1. Overview

A bilingual researcher portfolio for Mohammad Azaz. Five routes (`/`, `/about`, `/research`, `/books`, `/media`), no backend. Content comes from the client's Word document (`docs/Azaz bhai website.docx`), extracted to `docs/content-extracted.txt` and turned into JSON by the scripts in `scripts/`.

## 2. Tech and conventions

| Area | Choice |
| --- | --- |
| Framework | Vue 3 (`<script setup>`), vue-router 4 |
| Build | Vite 6, dev port 5176 |
| Styling | One global `src/styles.css`; landing-page rules use the `.ld-` prefix |
| i18n | Hand-rolled: `lang` ref in `src/i18n.js`, persisted in `localStorage` (`azaz-lang`), `t('a.b')` dot-path lookup |
| Fonts | Zodiak + Ranade (Fontshare), Poppins, Hind Siliguri (Bangla), Cormorant Garamond / Instrument Sans (inner pages) |

## 3. Content pipeline

1. `docs/Azaz bhai website.docx` → `docs/content-extracted.txt` (manual extraction).
2. `node scripts/build-bio.mjs` → `src/data/bio.json` (Bangla + English paragraphs).
3. `node scripts/build-items.mjs` → `src/data/items.json` (resources, videos, publications, books, articles). Fields are picked by **line number** in the extracted text, so editing and re-extracting the docx shifts lines and silently breaks the output. Once the site is live, treat `items.json` as the source of truth.

## 4. Landing page (this session's work)

Rebuilt from the Figma frame **Landing** (node `8:2137`, 1440×1080). Implemented in `src/views/Home.vue` with styles under `/* landing */` in `src/styles.css`.

### Sections
- **Cover** — portrait, black and white by default, full colour on hover (0.5s fade).
- **Nav bar** — Home / About / Research / Books / Media & Writing, En/Bn toggle, search box (visual only, not wired up).
- **Headline + bio** — yellow headline block, bio paragraph from `bio.json`, "Read the full profile" button.
- **Themes menu** — eight links; hover = pink-red (`#ea3357`) background, light-blue italic text, arrow switches to the straight right arrow.
- **Ticker** — red strip, continuous marquee from `items.json` titles.
- **Publications / Research / News Media** — green panel; the cover images scroll as a slow vertical ticker (45s loop), horizontal on phones.
- **Books** — three equal-size covers; hovering one brings it forward and shows its title and a five-line summary from the Books page. Description sits inside the cover so the panel never resizes.
- **Talks in Press Media** — blue panel with `gemini_generated_video_84b8b154.mp4`; plays on hover, pauses on leave (autoplays quietly on touch screens unless reduced motion is set).
- **Footer strip** — social icons (links are `#` placeholders), Privacy Terms, Contact, FAQ.

### Hover rules
All text turns italic on hover **except** the language toggle, the "Mohammad Azaz" title, the tagline, and the bio text/button. The headline drops from 52px to 47px when italic so it stays four lines and does not stretch the layout.

### Responsive strategy (adaptive, three layouts)
| Viewport | Behaviour |
| --- | --- |
| **≥ 900px (desktop)** | The 1440×1080 design is scaled uniformly (JS in `Home.vue`) to fit the viewport height with no scrolling. Extra width is given to the fr-based columns so the page runs edge to edge; media (video, book covers, publication images, icons) keep their design size. The page is locked from scrolling only on `/` (`html.ld-noscroll`). |
| **600–899px (tablet)** | Scrolling page. Cover beside headline and bio, four-column themes row, Publications and Books side by side, Talks full width. |
| **< 600px (phone)** | Scrolling single column. Swipeable nav row with pinned language toggle, search, cover, headline, bio, two-column themes, horizontal Publications ticker, full-width Books and video, stacked footer. Tapping a book cover shows its description. |

### Figma assets
Exported to `src/assets/design/`. Photos were converted to WebP (about 15 MB → 0.9 MB). The talks video is the only large file (3.4 MB).

## 5. Known issues and open items

- **Social links** in the footer are `#`; real profile URLs needed.
- **Search box** is visual only.
- **"Liberations War"** is a typo in the Figma file; the site uses "Liberation War".
- **Cover photo on touch screens** stays black and white (no hover). Could be switched to colour on touch.
- **Inner pages** (About, Research, Books, Media) still use the earlier visual design and the old `src/assets/img/*.png` files (about 20 MB). They need compressing and, ideally, restyling to match the landing page.
- **Dead CSS** from the old hero (`.hero`, `.hero-grid`, `.portrait-ph`, `.btn`) can be removed once the inner pages are restyled.
- **SEO / hosting:** per-route titles, Open Graph tags, a favicon and an SPA rewrite rule (for example `vercel.json`) are still to do.
- The `build-items.mjs` fragility described in section 3.
- **Not yet tested:** the phone and tablet layouts were built but not verified in a rendered browser; desktop was tested at 1920×951 only.

## 6. Dev notes

- If styles look missing on the dev server after a bulk rewrite of `styles.css`, Vite may be serving a stale copy — restart `npm run dev`.
- Figma source: frame `Landing` (`8:2137`); the hover state for the themes menu is node `23:325`.

## 7. Change log

- Analysed the project and listed performance, SEO and content-pipeline issues.
- Replaced the mosaic home page with the Figma landing design; hid the global header/footer on `/`.
- Added Fontshare fonts, Figma assets (WebP-compressed) and the talks video.
- Added hover behaviours: cover colour reveal, themes menu, italic text, books captions, video play.
- Added the Publications image ticker and equal-size book covers.
- Made the desktop view fit the viewport with no scroll and edge-to-edge width.
- Added adaptive tablet and phone layouts.
- Tested the desktop view in the browser (layout, hovers, language switch, route navigation).
