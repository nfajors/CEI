# A permanent home, and a nomination

The guidebook is only useful if its address never changes. This page records where it lives, how to move it without breaking a single link, and how to nominate it (and the people in it).

## Where it lives

| What | Value | Where it is set |
|---|---|---|
| Permanent address | `https://nfajors.github.io/cei/` | `SITE.url` in `data/site.js`, mirrored in the `<head>` of `index.html`, `robots.txt`, and `sitemap.xml` (`node scripts/check-site.mjs` fails if they disagree) |
| Calendar feed | `https://nfajors.github.io/cei/deadlines.ics` | built by `scripts/build-ics.mjs` from `data/opportunities.js` |
| Source | `https://github.com/nfajors/CEI` | `SITE.repoUrl` |

The share buttons, QR codes, and the printed flyer encode whatever address the page is actually served from, so they stay right when the page moves.

## Giving it a Mizzou address (recommended)

A `business.missouri.edu` or `missouri.edu` address is what students trust and what the college can put on a poster. Two ways, from easiest to most permanent:

1. **A redirect from the CEI website.** Ask the Trulaske web team for a short link on the CEI page (for example `business.missouri.edu/cei/guidebook`) that forwards to the permanent address above. Nothing here changes; every printed QR code keeps working.
2. **A custom domain on GitHub Pages.** If Mizzou IT can delegate a hostname (for example `guidebook.cei.missouri.edu`):
   - add a file named `CNAME` at the root of this repository containing only that hostname;
   - ask IT to point the hostname at GitHub Pages (a `CNAME` DNS record to `nfajors.github.io`);
   - in the repository settings, under Pages, enter the custom domain and turn on "Enforce HTTPS";
   - change `SITE.url` in `data/site.js` and the matching lines in the `<head>` of `index.html`, `robots.txt`, and `sitemap.xml`, then run `node scripts/check-site.mjs`;
   - GitHub keeps redirecting the old `github.io` address to the new one, so old links and QR codes survive.

Either way, once the address is settled, request that the CEI page on business.missouri.edu links to it under its own heading, so search engines and advisers find it.

## Keeping a copy

- Ask the Wayback Machine to save the page after each big update: open `https://web.archive.org/save/` followed by the permanent address. The archive keeps an independent copy students can reach if the site is ever down.
- The repository itself is the archive of every edit. Tag a release each semester (`v2026-fall`) so a known-good copy is one click away.

## Nominating the guidebook

Entrepreneurship-center associations give awards for exactly this kind of work, and a nomination is also the fastest way to get the guidebook adopted elsewhere (see `ADOPTING.md`). Candidates, by deadline order in a typical year:

- **GCEC (Global Consortium of Entrepreneurship Centers) Excellence Awards** — categories change yearly; "Outstanding Student Engagement and Leadership" and "Exceptional Activities in Entrepreneurship Across Disciplines" fit. Usually due late spring for the fall conference.
- **USASBE (United States Association for Small Business and Entrepreneurship) Excellence in Entrepreneurship Education awards** — due in the fall for the January conference.
- **Deshpande Symposium** — recognition for university entrepreneurship programs; spring.

A 120-word nomination to adapt:

> *The Entrepreneur's Guidebook* is a single, free, open-source page that takes a University of Missouri student from "merely curious" to founder. It organizes every program, deadline, tool, and person in Mizzou's entrepreneurship ecosystem into five phases, beginning with Phase 0 for students who have no idea yet, and says plainly who each program is for, what it costs, and how much time it takes. Students keep a saved path, a deadline calendar, and founder calculators on their own device; the CEI edits plain data files with no build step. Every list is open to any major. Built by the Center for Entrepreneurship & Innovation at the Trulaske College of Business, and shared so that any university can adopt it in an afternoon.

## Nominating people

Students and staff can nominate a founder, a win, or a resource from the "Nominate someone" block at the bottom of the page. Nominations arrive by email at the CEI inbox (or through the form set in `SITE.nominationUrl`). Get the nominee's written OK before adding them to `data/stories.js`, `data/wins.js`, or `data/contacts.js`.
