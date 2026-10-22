/* ============================================================
   WHAT'S NEW + NEW BADGES — read by assets/js/features.js.
   EDITING: add a line at the top of CHANGELOG whenever the guidebook
   changes. Newest first. Dates are ISO (YYYY-MM-DD). The footer
   "Updated …" stamp and the What's New strip both read from it.
   ============================================================ */
const CHANGELOG = [
  { date: '2026-10-22', text: 'All eight <a href="#ea-weeks">EA workshops</a> are now on the EA tab, from the Business Model Canvas to the final run-through, with the workshop slides, a break-even calculator, and a profit-and-loss template to download.' },
  { date: '2026-10-22', text: 'A simpler menu: fifteen links became four dropdowns (Start here, Programs, Learn, People) plus the EA tab, each link with a line on what you will find. The page now runs in the same order.' },
  { date: '2026-10-22', text: 'New: <a href="#ea">the EA tab</a>. The Leslie Flegel Entrepreneurship Alliance in one place: spring 2027 dates, what the application asks, and the eight workshops week by week, each linked to the Playbook questions, glossary terms, and calculators that go deeper.' },
  { date: '2026-10-06', text: 'In the spotlight: <a href="#spotlight">America\'s Seed Fund</a>, NSF\'s SBIR/STTR program. Up to $305,000 in equity-free funding for deep-tech startups, with the November 4 deadline on the board.' },
  { date: '2026-10-06', text: 'Corrected prize amounts: Entrepreneurship Quest has a $30,000 prize pool, and the Leslie Flegel Entrepreneurship Alliance awards $40,000.' },
  { date: '2026-10-06', text: 'The Entrepreneurship Alliance is now the Leslie Flegel Entrepreneurship Alliance, honoring S. Leslie Flegel (AB 1959), who grew Source Interlink from $2 million to $2 billion in sales and has long backed entrepreneurship at Trulaske. He now appears among <a href="#alumni">the alumni founders</a>.' },
  { date: '2026-09-14', text: 'A front door for the curious: Phase 0, a semester-math calculator, three first-year Playbook questions, who-to-talk-to doors, mentor booking, courses for credit, a wins feed, an outcomes dashboard, a calendar feed for deadlines, and eligibility, cost, and time on every resource.' },
  { date: '2026-07-30', text: 'Anandhi Upendran (BETA Program Director, School of Medicine) joined the support network.' },
  { date: '2026-07-28', text: 'New: a deadline board, a saved founder path, three founder calculators, and a student venture board.' },
  { date: '2026-06-17', text: 'Added national accelerators, startup job boards, and twelve student pitch competitions to Beyond the Guidebook.' },
  { date: '2026-06-01', text: 'The Playbook expanded to ten questions, and the AI section was reviewed against the current model landscape.' },
  { date: '2026-04-03', text: 'AODO MedTech won $7,000 at the Entrepreneurship Alliance Final.' }
];

/* Resources added recently, by exact card title -> ISO date.
   Anything dated within the last 45 days gets a NEW badge automatically.
   EDITING: add an entry here when you add a resource card. */
const RESOURCE_ADDED = {
  "America's Seed Fund (NSF SBIR/STTR)": '2026-10-06'
};
