/* ============================================================
   SPOTLIGHT — the gold-and-black band between the stories and The Path.
   One program at a time, picked by the CEI. Read by assets/js/render.js
   (renderSpotlight). Set SPOTLIGHT to null and the band disappears.
   Fields:
     eyebrow     small gold label above the title
     title       the program's name; titleGold is the gold half of the headline
     lede        two or three sentences: what it is and why it matters here
     facts       up to four { value, label } tiles
     steps       how to start, in order (short sentences)
     fit         who it is for, in one sentence (shown under the steps)
     cta         { label, url } — the program's own site
     more        optional { label, to } — a section id on this page
     resource    optional id in data/resources.js; "See the card" jumps to it
     verifiedOn  ISO date you last checked the facts (maintainers only)
   ============================================================ */
const SPOTLIGHT = {
  eyebrow: 'Spotlight · Federal funding',
  title: "America's Seed Fund",
  titleGold: 'from the National Science Foundation',
  lede: "NSF's SBIR/STTR program funds startups turning science and engineering into products, and it takes no equity and expects no repayment. Grants are made to the company, not the university, and research coming out of Mizzou labs is exactly what the program was built for.",
  facts: [
    { value: '$305K', label: 'Phase I, for 6 to 18 months of R&D' },
    { value: '$1.25M', label: 'Phase II, for companies that complete Phase I' },
    { value: '0%', label: 'Equity taken. Nothing to repay' },
    { value: 'Nov 4', label: 'Next full-proposal deadline, 2026. Pitch first' }
  ],
  steps: [
    'Form the company. Awards go to a U.S. for-profit small business, with fewer than 500 employees, at least 51% owned by U.S. citizens or permanent residents.',
    'Submit a Project Pitch on seedfund.nsf.gov: a short description of the technology, the market, and the risk. It is free, short, and reviewed by an NSF program director.',
    'If NSF invites you, write the full Phase I proposal. No invitation, no proposal.',
    'Plan your principal investigator early: they must be employed more than half-time by the company during the award.'
  ],
  fit: 'Best for ventures with real technical risk, often coming out of university research. NSF I-Corps is the usual first step, and the CEI can help you decide if you are ready.',
  cta: { label: 'Visit seedfund.nsf.gov', url: 'https://seedfund.nsf.gov/' },
  more: { label: 'See it on the deadline board', to: 'deadlines' },
  resource: 'nsf-seed-fund',
  verifiedOn: '2026-10-06'
};
