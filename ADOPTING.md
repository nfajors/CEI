# Adopting this guidebook at another university

The guidebook is a single static page with all of its content in plain data files. Another center can stand up its own edition in an afternoon without touching the code. This is how.

## What you get

- A phased front door for students (Phase 0 "Curious" through Phase 4 "Growth"), a saved personal path, a deadline board with a calendar feed, founder calculators, a searchable resource index with eligibility / cost / time on every card, a glossary, a playbook, a support network with "who do I talk to first" doors, alumni stories, a wins feed, an outcomes dashboard, sharing tools, and a printable flyer.
- Nothing to install or build. GitHub Pages (or any static host) serves it.
- Analytics through a GA4 tag, with the event plan in `docs/ANALYTICS.md`.

## Steps

1. **Fork or copy the repository.** Turn on GitHub Pages for the `main` branch (Settings → Pages). Your edition is live at `https://<you>.github.io/<repo>/`.
2. **Set your identity** in `data/site.js`: name, center, college, university, email, phone, address, feedback form, the permanent `url`, and the menu. Then update the same address in the `<head>` of `index.html`, `robots.txt`, and `sitemap.xml`; `node scripts/check-site.mjs` tells you if they disagree.
3. **Replace the content**, one file at a time. Each file's header comment explains its fields:
   - `data/phases.js` — phase titles, descriptions, next steps, photos, and which resources each phase shows (`PATH_STEPS` is the saved checklist)
   - `data/resources.js` — your programs, with who / cost / time and `anyMajor`
   - `data/opportunities.js` — your deadlines (leave `confirmed: false` until verified)
   - `data/contacts.js` — your people and the doors
   - `data/alumni.js`, `data/stories.js`, `data/wins.js` — your predecessors, stories, wins, and the outcomes you report
   - `data/courses.js`, `data/glossary.js`, `data/knowledge.js`, `data/lessons.js`, `data/beyond.js` — keep, trim, or replace; most of it is not Mizzou-specific
   - `data/changelog.js` — start fresh with one line
4. **Rewrite the prose that names Mizzou.** Search `index.html` for "Mizzou", "Trulaske", "Columbia", and "Missouri": the hero, the section ledes, the first-year Playbook answers, and the flyer. The ten founder-questions and the AI section are general and can stay.
5. **Swap the images** in `assets/img/` (the logo, a hero photo, one photo per phase, a recent-win photo; 900×600 works) and update the `photo` entries in `data/phases.js` and `data/wins.js`. Replace `assets/img/favicon.svg` and `apple-touch-icon.png`.
6. **Brand colors** are the tokens at the top of `assets/css/guidebook.css` (`--gold`, `--black`, and their tints). Change those five lines and the whole page follows. If you change the fonts, update the Google Fonts link in `index.html`.
7. **Analytics.** Replace `G-YLCMBLMEYF` in the `<head>` of `index.html` with your GA4 measurement ID, or delete that block. The `track()` helper no-ops if the tag is missing.
8. **Keep the two workflows** in `.github/workflows/`: the weekly link check and the editorial reminders. Adjust the review dates in `editorial-review.yml` and the checklist in `EDITORIAL.md` to your calendar.

## What to keep untouched

`assets/js/` is the behaviour; you should not need to edit it. If your data files validate (`node scripts/check-site.mjs`) the page renders.

## Credit and licence

The guidebook was built by the Center for Entrepreneurship & Innovation at the Robert J. Trulaske, Sr. College of Business, University of Missouri. Keep the "Adapted from" line in the footer of your edition. Photographs and the college logo are Mizzou's and are not included in the permission to reuse; replace them. The QR library in `assets/vendor/` is MIT-licensed (Kazuhiko Arase). Before publishing an edition, check the licence file in this repository (the CEI chooses it) and follow its terms.
