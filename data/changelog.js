/* ============================================================
   WHAT'S NEW + NEW BADGES — read by assets/js/features.js.
   EDITING: add a line at the top of CHANGELOG whenever the guidebook
   changes. Newest first. Dates are ISO (YYYY-MM-DD). The footer
   "Updated …" stamp and the What's New strip both read from it.
   ============================================================ */
const CHANGELOG = [
  { date: '2026-07-30', text: 'Anandhi Upendran (BETA Program Director, School of Medicine) joined the support network.' },
  { date: '2026-07-28', text: 'New: a deadline board, a saved founder path, three founder calculators, and a student venture board.' },
  { date: '2026-06-17', text: 'Added national accelerators, startup job boards, and twelve student pitch competitions to Beyond the Guidebook.' },
  { date: '2026-06-01', text: 'The Playbook expanded to ten questions, and the AI section was reviewed against the current model landscape.' },
  { date: '2026-04-03', text: 'AODO MedTech won $7,000 at the Entrepreneurship Alliance Final.' }
];

/* Resources added recently, by exact card title -> ISO date.
   Anything dated within the last 45 days gets a NEW badge automatically.
   EDITING: add an entry here when you add a resource card. */
const RESOURCE_ADDED = {};
