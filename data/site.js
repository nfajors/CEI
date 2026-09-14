/* ============================================================
   SITE — one place for the guidebook's identity, addresses, and dates.
   Everything on the page that names the center, the URL, the email, or
   a "last reviewed" date reads from here (see stampSite in
   assets/js/render.js). To adopt this guidebook for another school,
   start with this file — see ADOPTING.md.
   ============================================================ */
const SITE = {
  name: "The Entrepreneur's Guidebook",
  tagline: 'From curious to founder at Mizzou',
  org: 'Center for Entrepreneurship & Innovation',
  orgShort: 'CEI',
  college: 'Robert J. Trulaske, Sr. College of Business',
  university: 'University of Missouri',
  universityShort: 'Mizzou',
  brand: 'Trulaske CEI',

  /* Permanent address of this page. The canonical tag, share links, the
     calendar feed, and the sitemap all read from here. */
  url: 'https://nfajors.github.io/cei/',
  repoUrl: 'https://github.com/nfajors/CEI',

  email: 'cei@missouri.edu',
  phone: '573-882-6688',
  phoneHref: 'tel:+15738826688',
  address: 'Trulaske College of Business · University of Missouri · Columbia, MO 65211',
  orgUrl: 'https://business.missouri.edu/centers-institutes/center-entrepreneurship-and-innovation',
  feedbackUrl: 'https://forms.gle/GhbcUXu9vD3FwZgL7',

  /* Optional services. Leave null and the page falls back to a prefilled
     email to `email` above; paste a URL and the buttons switch over. */
  bookingUrl: null,        // C2 — a Calendly / Microsoft Bookings page for 20-minute mentor slots
  newsletterUrl: null,     // C7 — a sign-up form for the deadline email
  ventureFormUrl: null,    // set in data/ventures.js (VENTURE_FORM_URL); mirrored here for adopters

  /* "Last reviewed" stamps, one per section that carries one (A5).
     ISO dates. Update the date when you re-verify the section. */
  reviewed: {
    ai: '2026-06-01',
    beyond: '2026-06-17',
    resources: '2026-09-14',
    deadlines: '2026-09-14',
    courses: '2026-09-14'
  },
  /* When the next scheduled review is due (see EDITORIAL.md). */
  nextReview: '2027-01-15',

  /* Primary navigation. id = section id on the page. Sections that are
     hidden (an empty venture board) drop out of the menu automatically. */
  nav: [
    { id: 'phases', label: 'Phases' },
    { id: 'path', label: 'My Path' },
    { id: 'deadlines', label: 'Deadlines' },
    { id: 'howto', label: 'How-To' },
    { id: 'ai', label: 'AI' },
    { id: 'tools', label: 'Tools' },
    { id: 'resources', label: 'Resources' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'courses', label: 'Courses' },
    { id: 'glossary', label: 'Glossary' },
    { id: 'beyond', label: 'Beyond' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'alumni', label: 'Alumni' },
    { id: 'contacts', label: 'Contacts' }
  ]
};
