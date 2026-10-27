# Mohammad Azaz — Website

Bilingual (Bangla / English) personal site for Mohammad Azaz, researcher, urban policy advocate and environmental organiser.

- **Stack:** Vue 3, vue-router 4, Vite 6, plain CSS (no UI framework)
- **Dev server:** `npm run dev` → http://localhost:5176
- **Build:** `npm run build` (output in `dist/`)

Full project documentation and progress log: [`docs/DOCUMENTATION.md`](docs/DOCUMENTATION.md)

## Quick start

```bash
npm install
npm run dev
```

## Structure

```
src/
  views/        Home (landing), About, Research, Books, Media
  components/   ItemCard, SectionHead, SiteHeader, SiteFooter
  data/         bio.json, items.json (generated from docs/)
  assets/img/   images used by the inner pages
  assets/design/ landing-page assets exported from Figma (+ talks video)
  i18n.js       language state, dictionary, t()
  styles.css    all styles; landing page rules are prefixed .ld-
scripts/        build-bio.mjs, build-items.mjs (docx text → JSON)
docs/           client content (docx, extracted text) and DOCUMENTATION.md
```
