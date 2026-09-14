# Editorial cadence

The guidebook stays trustworthy only if someone looks at it on a schedule. This is that schedule. A GitHub workflow (`.github/workflows/editorial-review.yml`) opens an issue with the matching checklist on each date, so nothing depends on memory. Each pass ends with a line in `data/changelog.js`, which updates the "What's new" strip and the footer date on its own.

| When | What | Owner | Time |
|---|---|---|---|
| Every Monday (automatic) | Link check, data validation, calendar-feed rebuild | GitHub Actions | 0 |
| First Monday of the month | The monthly pass | CEI staff | ~30 min |
| 15 August | The fall refresh | CEI director + staff | ~3 hours |
| 15 January | The spring refresh | CEI director + staff | ~3 hours |
| Each June | Outcomes and the annual audit | CEI director | ~half a day |

`SITE.nextReview` in `data/site.js` is the date of the next semester refresh and is shown in the footer.

## The monthly pass

- [ ] Add any wins from the last month to `data/wins.js` (get the founder's OK first). Newest first.
- [ ] Read the "Broken links in the Guidebook" issue if one is open; fix or replace each link in `data/*.js` or `index.html`, then close it.
- [ ] Look at the deadline board: anything now confirmed on a program's site? Set `confirmed: true` and `verifiedOn` in `data/opportunities.js`. Anything closed for good? Remove it.
- [ ] Check the CEI inbox for nominations (founders, wins, resources) and mentor requests that came through the page.
- [ ] Add one line to the top of `data/changelog.js` describing what changed.

## The semester refresh

- [ ] **Mizzou deadlines (A6).** Confirm this semester's dates with each program office and set `confirmed: true`, `verifiedOn: 'YYYY-MM-DD'`:
  - Entrepreneurship Alliance — CEI (business.missouri.edu/student-development/learning-doing/entrepreneurship-alliance)
  - Entrepreneurship Quest — Griggs Innovators Nexus (research.missouri.edu/griggs-innovators-nexus/entrepreneur-quest-student-accelerator)
  - GIN Incubator Office Space — Griggs Innovators Nexus
  - REDI Small Business Grant — REDI (columbiaredi.com/small-business-grant)
  Then run `node scripts/build-ics.mjs` so the calendar feed carries them.
- [ ] **Programs and people.** Anyone new in the support network, anyone gone? Update `data/contacts.js` (and the doors at the bottom of it). New program on campus? Add it to `data/resources.js` with who / cost / time, and to the right phase in `data/phases.js`.
- [ ] **Courses (B10).** Check `data/courses.js` against the current catalog; set `verified: true` where it matches, fix names and credit counts, and update `SITE.reviewed.courses`.
- [ ] **Stories.** Is there a current student who has agreed to be featured? Add them to `data/stories.js` with `student: true`.
- [ ] **Beyond the guidebook.** Skim the national competitions and accelerators in `data/beyond.js` for programs that ended or changed terms; update `SITE.reviewed.beyond`.
- [ ] **AI section.** Re-read the "current frontier" answer in `index.html` (`id="ai"`); update the model names if they have aged, and `SITE.reviewed.ai`.
- [ ] **Dates.** Update `SITE.reviewed.resources`, `SITE.reviewed.deadlines`, and `SITE.nextReview`.
- [ ] Run `node scripts/check-site.mjs`, then add the changelog line.

## The annual close (June)

- [ ] Fill in `OUTCOMES.reported` in `data/wins.js` for the academic year (students served, prize money, ventures launched, mentor conversations, majors represented) and set `OUTCOMES.year`. Tiles appear as soon as a value is not null.
- [ ] Re-run the accessibility and performance audit (`docs/AUDIT.md` explains how) and publish the new numbers there.
- [ ] Review `docs/ANALYTICS.md` against what GA4 actually shows: did the year's targets hold? Reset them.
- [ ] Tag a release (`git tag v2026-27`) so a known-good copy exists.

## Who can edit what

Everything a student sees is in `data/*.js` or `index.html`, edited in the GitHub web editor with no build step. Nothing in `assets/js/` needs to change for content work. If you are unsure, open an issue and label it `editorial`.
