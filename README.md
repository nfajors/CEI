# The Entrepreneur's Guidebook · Trulaske CEI

A guidebook for students at the University of Missouri from the Center for Entrepreneurship & Innovation at the Robert J. Trulaske, Sr. College of Business. It is an evolving platform, open to every major.

Live page: https://nfajors.github.io/cei/

## Layout

| Path | What it is |
|---|---|
| `index.html` | The page: markup only. Long-form editorial (the Playbook, the AI section) is written here; every list is rendered from `data/`. |
| `data/*.js` | **The content you edit.** One plain JavaScript list per file, each with a comment explaining its fields. No build step: edit, save, refresh. |
| `assets/css/guidebook.css` | All styles (Mizzou black-and-gold tokens at the top). |
| `assets/js/render.js` | Turns `data/*.js` into the page. Runs before the other scripts. |
| `assets/js/guidebook.js` | Core behaviour: navigation, accordions, printing, search and filters, the self-assessment, the Prompt Studio, and the GA4 event calls. |
| `assets/js/features.js` | The five return-visit features: What's New, My Founder Path, the Deadline board, the Founder Workbench, and the Student Venture board. All state stays in the visitor's browser. |
| `assets/img/` | Photos and the college logo, served as files so browsers cache them. |
| `assets/vendor/qrcode-generator.js` | QR code library (MIT, Kazuhiko Arase) used by the share block and the printable flyer; loads deferred. |
| `scripts/check-site.mjs` | Validates the data files and checks that the permanent address is the same everywhere. Run before committing. |
| `scripts/build-ics.mjs` | Builds `deadlines.ics`, the subscribable calendar of confirmed deadlines. |
| `deadlines.ics` | The calendar feed itself (rebuilt weekly by the link-check workflow). |
| `.github/workflows/link-check.yml` | Mondays: checks every outbound link (opens an issue on failures), validates data, rebuilds the feed. Also runs on pull requests. |
| `.github/workflows/editorial-review.yml` | Opens the monthly and semester review issues with the checklist from `EDITORIAL.md`. |
| `EDITORIAL.md` | The editorial cadence: what to check monthly, each semester, and each June. |
| `ADOPTING.md` | How another university stands up its own edition. |
| `docs/ANALYTICS.md` | The GA4 event plan and what success looks like. |
| `docs/AUDIT.md` | The published accessibility and performance audit, and how to re-run it. |
| `docs/PERMANENT-HOME.md` | The permanent address, how to move it safely, and a ready-to-adapt award nomination. |

## Where each editable list lives

| Want to change… | Edit |
|---|---|
| Name, URL, email, phone, "last reviewed" dates, the menu, the mentor-booking / newsletter / nomination links | `data/site.js` |
| Phase titles, descriptions, next steps, photos, which resources each phase shows; the Founder Path checklist (`PATH_STEPS`) | `data/phases.js` |
| Resource cards (phase grids and the searchable index) | `data/resources.js` |
| Deadline board | `data/opportunities.js` — set `confirmed: true` once a date is verified and the countdown and calendar button switch on |
| What's New strip and the footer "Updated" stamp | `data/changelog.js` — add a line at the top |
| Student venture board | `data/ventures.js` — the section stays hidden until `VENTURES` has an entry |
| Glossary | `data/glossary.js` — `start: true` puts a term under "Start here" |
| Knowledge hub | `data/knowledge.js` |
| National competitions, job boards, accelerators | `data/beyond.js` |
| Alumni stories | `data/alumni.js` |
| Support network and the "who do I talk to first" doors | `data/contacts.js` |
| Stories under the hero | `data/stories.js` |
| Wins feed, Recent Win card, and the outcomes dashboard | `data/wins.js` |
| Courses, the minor, and the certificate | `data/courses.js` |
| Short video lessons | `data/lessons.js` |

The Playbook questions and the AI section are prose and live in `index.html` under `id="howto"` and `id="ai"`.

## Before you commit

```
node scripts/check-site.mjs   # data files valid, permanent address consistent
node scripts/build-ics.mjs    # refresh the calendar feed after editing deadlines
```

## Working locally

Open `index.html` in a browser, or serve the folder (`python3 -m http.server`) so the data files load over HTTP. There is nothing to install.
