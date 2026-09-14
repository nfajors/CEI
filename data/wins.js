/* ============================================================
   WINS — the rolling wins feed (and the "Recent Win" card, which shows
   the newest entry that has a photo). Newest first. Dates are ISO:
   'YYYY-MM-DD', or 'YYYY-MM' / 'YYYY' when that is all you know.
     { date, who, what, detail (optional), to (section id or URL, optional),
       photo (optional: { src, alt }), student (true for current students) }
   Add a win the day it happens; the feed shows the newest eight.
   Submissions arrive through the "Tell us about a win" link (mailto, or
   SITE.nominationUrl when a form exists).
   ============================================================ */
const WINS = [
  {
    date: '2026-04-03',
    who: 'AODO MedTech',
    what: 'won $7,000 at the Entrepreneurship Alliance Final',
    detail: 'A Trulaske student team turned an idea into investment-ready capital through the Entrepreneurship Alliance pitch competition. This is what Phase 3 looks like in practice.',
    to: 'phase-3',
    photo: { src: 'assets/img/aodo-medtech-win.jpg', alt: 'The AODO MedTech team accepts a $7,000 award at the Entrepreneurship Alliance Final' },
    student: true,
    event: 'Entrepreneurship Alliance Final'
  },
  {
    date: '2026-04-03',
    who: 'The 2026 Entrepreneurship Alliance cohort',
    what: 'pitched to a room of investors and alumni at the spring final',
    detail: 'Eight weeks from idea to a final pitch in front of judges, including Kelsey Raymond of the Griggs Innovators Nexus.',
    to: 'phase-2',
    student: true,
    event: 'Entrepreneurship Alliance Final'
  },
  {
    date: '2026-05',
    who: 'Hayes Barnard (BSBA 1995)',
    what: 'received an honorary doctorate from Mizzou',
    detail: 'Founder, chair, and CEO of GoodLeap, and founder of GivePower and GoodFinch.',
    to: 'alumni'
  },
  {
    date: '2025',
    who: 'Lindsay Mullenger (BSBA 2010)',
    what: 'closed a multi-investor deal for Petite Keep on Shark Tank',
    detail: 'Season 16. Custom keepsake trunks grown into a multimillion-dollar business.',
    to: 'alumni'
  }
];

/* ============================================================
   OUTCOMES — the dashboard. Two kinds of tile:
     computed  — filled from the page itself (resources, open deadlines,
                 people, wins); nothing to maintain.
     reported  — numbers only the CEI knows. Fill them in each summer;
                 a tile with value null is not shown, so the dashboard
                 never displays a placeholder.
   `year` labels the reporting period for the reported tiles.
   ============================================================ */
const OUTCOMES = {
  year: '2025–26',
  reported: [
    { key: 'students', label: 'Students in CEI programs', value: null, note: 'Entrepreneurship Alliance and Quest cohorts, workshops, and one-on-ones' },
    { key: 'prizes', label: 'Prize money awarded to students', value: null, prefix: '$', note: 'Pitch competitions and program awards, this academic year' },
    { key: 'ventures', label: 'Student ventures launched', value: null, note: 'Ventures with a registered entity or first revenue' },
    { key: 'mentors', label: 'Mentor conversations', value: null, note: 'Twenty-minute sessions booked through the guidebook' },
    { key: 'majors', label: 'Majors represented', value: null, note: 'Distinct degree programs among participants' }
  ]
};
