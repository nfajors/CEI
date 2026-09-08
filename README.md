# The Entrepreneur's Guidebook · Trulaske CEI

A guidebook for students at the University of Missouri from the Center for Entrepreneurship & Innovation at the Robert J. Trulaske, Sr. College of Business. It is an evolving platform, open to every major.

## Layout

| Path | What it is |
|---|---|
| `index.html` | The whole guidebook: markup, styles, and scripts in one page. |
| `assets/img/` | Photos and logos (served as files so browsers cache them). |
| `assets/vendor/qrcode-generator.js` | QR code library (MIT, Kazuhiko Arase) used by the share block and the printable flyer. |
| `.github/workflows/link-check.yml` | Weekly check of every outbound link; opens an issue when one breaks. |

## Editing the content that changes most

All of these live in the `<script>` block near the bottom of `index.html`, each with a comment explaining the format:

- **What's new / last updated** — add a line at the top of `CHANGELOG`. The footer date and the "What's new" strip read from it.
- **"Last reviewed" stamps** — `SECTION_REVIEWED`. One date per section; every stamp on the page reads from here.
- **Deadline board** — `OPPORTUNITIES`. Set `confirmed: true` once a date is verified and the countdown and calendar button switch on.
- **Student venture board** — `VENTURES` (empty until real ventures are added) and `VENTURE_FORM_URL`.
- **Saved founder path steps** — `PATH_STEPS`.

Resource cards, Playbook questions, glossary terms, and alumni are plain HTML in their sections. Glossary terms carry `data-start="1"` to appear under the ★ Start here filter; alumni cards carry `data-major="business|other"` for the alumni filter.

## Publishing

The page's permanent address is set in the `<link rel="canonical">` and Open Graph tags in the `<head>` and in the JSON-LD block below them. Update those when the guidebook moves to its Mizzou home. The QR code and share links encode whatever address the page is actually served from, so they need no change.
