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
  url: 'https://nfajors.github.io/CEI/',
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
  nominationUrl: null,     // C5 — a form for nominating a founder, a win, or a resource
  /* One sentence used by the share buttons and the printable flyer. */
  shareText: "You don't need an idea, a business major, or money to start. Here's how Mizzou students go from curious to founder.",
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

  /* Primary navigation: four dropdown groups and one standalone tab, the
     pattern MIT's Martin Trust Center uses (a few grouped menus, with the
     flagship accelerator as its own item). The page runs in the same order.
       Group:  { label, items: [ ...links ] }
       Link:   { id, label, desc }  id = section id on the page; label is
               the short name (also used by the outcome tiles); desc is the
               one line shown under it in the dropdown.
               action: 'assessment' instead of id opens the self-assessment.
       Tab:    { id, label, accent }  a top-level link; accent gives it its
               own colour (the EA tab).
     Sections that are hidden (an empty venture board) drop out on their own. */
  nav: [
    { label: 'Start here', items: [
      { id: 'phases', label: 'Phases', desc: 'Curious to company in five phases. Start with Phase 0' },
      { action: 'assessment', label: 'Find my phase', desc: 'A 30-second self-assessment' },
      { id: 'path', label: 'My Path', desc: 'Your founder checklist, saved on this device' }
    ] },
    { label: 'Programs', items: [
      { id: 'ea', label: 'Entrepreneurship Alliance', desc: 'CEI\'s eight-week accelerator and $40K final', accent: 'ea' },
      { id: 'deadlines', label: 'Deadlines', desc: 'Grants, competitions, and accelerators open now' },
      { id: 'resources', label: 'Resources', desc: 'Every Mizzou program, searchable by phase' },
      { id: 'courses', label: 'Courses', desc: 'Classes for credit, the minor, and the certificate' },
      { id: 'beyond', label: 'Beyond Mizzou', desc: 'National competitions, accelerators, job boards' }
    ] },
    { label: 'Learn', items: [
      { id: 'howto', label: 'Playbook', desc: 'Thirteen hard questions, answered by the best in venture' },
      { id: 'tools', label: 'Workbench', desc: 'Runway, unit economics, and equity calculators' },
      { id: 'ai', label: 'AI for founders', desc: 'Papers, models, podcasts, and the Prompt Studio' },
      { id: 'knowledge', label: 'Knowledge', desc: 'Books, essays, channels, and short video lessons' },
      { id: 'glossary', label: 'Glossary', desc: 'Speak founder: seventy-nine terms, defined plainly' }
    ] },
    { label: 'People', items: [
      { id: 'contacts', label: 'Contacts', desc: 'Who to talk to first, and the whole support network' },
      { id: 'alumni', label: 'Alumni', desc: 'Founders who started where you are' },
      { id: 'ventures', label: 'Ventures', desc: 'Student companies building now' },
      { id: 'outcomes', label: 'Outcomes', desc: 'Wins and what the guidebook adds up to' }
    ] },
    { id: 'ea', label: 'EA', accent: 'ea', title: 'Leslie Flegel Entrepreneurship Alliance' }
  ]
};
