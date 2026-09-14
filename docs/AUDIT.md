# Accessibility and performance audit

Published with the September 2026 upgrade. Re-run at each annual close (see `EDITORIAL.md`) and after any change to `assets/css/guidebook.css` or `assets/js/`.

## Summary (14 September 2026)

| Check | Tool | Result |
|---|---|---|
| Accessibility | axe-core 4.10 (WCAG 2.0/2.1/2.2 A and AA rules, plus best practices) | **0 violations**, 47 rule groups passing |
| Accessibility | Lighthouse 12.2 | **100** |
| SEO | Lighthouse 12.2 | **100** |
| Best practices | Lighthouse 12.2 | **93** (the two deductions are sandbox network errors, below) |
| Performance | Lighthouse 12.2, simulated mobile | **77** in the audit sandbox; see the note on conditions |

Lighthouse measured **461 KiB transferred at load** (the four phase photos load lazily as you scroll); with every photo loaded the whole page is about 580 KiB (index.html 101 KiB, CSS 73 KiB, scripts 140 KiB including the 55 KiB QR library, images 265 KiB), down from a single 766 KiB HTML file that embedded every image and had to be fully downloaded before anything rendered. Cumulative layout shift is 0 and total blocking time is 50 ms.

### Conditions

The audit ran against a local static server inside a sandbox where `fonts.googleapis.com` and `googletagmanager.com` are unreachable. Lighthouse counted those two blocked requests as console errors (the best-practices deduction) and waited on the font stylesheet before painting, which inflates first contentful paint (2.0 s), largest contentful paint (3.9 s), and speed index. On GitHub Pages with the fonts and tag reachable, expect first paint well under a second on a fast connection; re-run against the live address to confirm and replace these numbers.

## What was fixed in this audit

- The phase pill on resource cards was `#a3a3a3` on white (2.5:1); now `#666666` (5.7:1).
- The stories strip's heading skipped from `h1` to `h3`; it is now an `h2`.
- Small text links (door names, story and win links, course and phase calls to action, knowledge-hub links) were 15–18 px tall; each now has a 24 px or taller hit area (WCAG 2.5.8).
- The footer logo was stretched (a fixed height without `width: auto`).
- The "who do I talk to first" container carried an `aria-label` without a role; it is now a labelled region.
- At 400 px width the mentor-booking button forced a horizontal scroll; it now wraps. The page has no horizontal overflow at phone width.
- The QR-code library now loads deferred so it never blocks first paint.

Already in place before this audit and kept: a skip link, visible keyboard focus on every interactive element, `prefers-reduced-motion` support, `aria-expanded` and `aria-controls` on every accordion, labelled form fields, `alt` text on every image, a print stylesheet, and single-section printing.

## Known limits

- **DOM size.** The page has about 4,200 elements (60 glossary terms, 38 resource cards in two grids, 13 Playbook answers). Lighthouse flags anything over 800. It is one long page by design; splitting it would cost the single-page search and the saved path. Revisit if the resource index passes roughly 60 entries.
- **Images** are 900×600 JPEGs at quality 80 (32–53 KiB each, lazy-loaded below the fold). Serving WebP or AVIF with a `<picture>` fallback would save about 12 KiB in total; not worth the maintenance cost for content editors who upload photos.
- **No minification or compression step** is applied in the repository, by design (no build step). GitHub Pages compresses responses with gzip on the way out.
- **Color-contrast checks marked "incomplete"** by axe (137 nodes) are elements over photographs or gradients that the tool cannot evaluate automatically (photo captions, the hero). They use white or gold text over a black gradient of at least 75% opacity; spot-checked by hand.

## How to re-run

Serve the folder (`python3 -m http.server 8123`) and, with Node 22:

```
npm install playwright-core axe-core lighthouse      # once, anywhere
node -e "const {chromium}=require('playwright-core');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('http://127.0.0.1:8123/index.html');await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});const r=await p.evaluate(()=>axe.run());console.log(r.violations);await b.close()})()"
npx lighthouse http://127.0.0.1:8123/index.html --only-categories=performance,accessibility,best-practices,seo --view
```

Run the Lighthouse pass against the live address as well (`npx lighthouse https://nfajors.github.io/cei/ --view`); those are the numbers to publish here.

## Statement

The Center for Entrepreneurship & Innovation wants every Mizzou student to be able to use this guidebook. If something on the page does not work with your screen reader, keyboard, or magnifier, email cei@missouri.edu and say which section; it will be fixed and the fix will be noted in "What's new".
