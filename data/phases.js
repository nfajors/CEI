/* ============================================================
   PHASES — the five stages of the path (0 = Curious, before you have
   an idea). `extra` names a <template> in index.html that is cloned into
   the phase's right column (Phase 0 carries the Semester Math calculator).
   `cta` (optional) adds a button under Next Steps: action 'mentor' opens
   the mentor booking link (SITE.bookingUrl, or an email to the CEI). Each phase lists its resources by id (see data/resources.js).
   PHASE_TITLES is read by the self-assessment and the Founder Path;
   PATH_STEPS is the saved checklist for each phase (Founder Path).
   ============================================================ */
const PHASE_TITLES = {
  0: { title: 'Curious', sub: 'Find out if this is for you' },
  1: { title: 'Opportunity Discovery', sub: 'Find a problem worth solving' },
  2: { title: 'Customer & Model Validation', sub: 'Prove people want it and will pay' },
  3: { title: 'Venture Launch', sub: 'Stand it up legally and operationally' },
  4: { title: 'Growth & Scaling', sub: 'Grow responsibly and sustainably' },
};

/* ============================================================
   2. MY FOUNDER PATH
   Steps are drawn from each phase's Next Steps plus the resources
   already listed in that phase.
   ============================================================ */
const PATH_STEPS = {
  1: [
    'Visit the Griggs Innovators Nexus in person',
    'Talk to ten people who have the problem',
    'Apply to Entrepreneurship Quest (EQ)',
    'Book time with an Entrepreneur-in-Residence',
    "Start the Founder's Bookshelf in the Knowledge Hub",
    'Write the problem down in one sentence'
  ],
  2: [
    'Run customer-discovery interviews (NSF I-Corps teaches the method)',
    'Join the Entrepreneurship Alliance',
    'Draft your positioning statement',
    'Enter a pitch competition to test your story',
    'Present at 1 Million Cups Columbia',
    'Decide what evidence would prove you wrong'
  ],
  3: [
    'Form the entity with the MU Law Entrepreneurship Legal Clinic',
    'Build your first pitch deck (see The Playbook)',
    'Pitch to Allen Angel Fund or Centennial Investors',
    'Apply for an MTC investment or a grant',
    'Move into the Missouri Innovation Center',
    'Put a vesting schedule in writing with your co-founders'
  ],
  4: [
    'Know whether you are default alive or default dead',
    'Set your North Star metric',
    'Apply to Y Combinator or Techstars',
    'List your raise on AngelList',
    'Begin conversations with growth-stage funds',
    'Make your first key hire deliberately'
  ]
};

/* The phase blocks on the page. `resources` lists ids from data/resources.js
   in display order. `photo` is a file in assets/img (900×600). */
const PHASES = [
  {
    n: 0, id: 'phase-0',
    title: 'Curious', sub: 'Find out if this is for you',
    desc: 'Most founders did not start with an idea. They started by showing up somewhere, asking a question, or reading one thing. Nothing in this phase needs an application, a business major, or money. Pick one thing to do this week.',
    next: ['Sit in on 1 Million Cups or a CEO meeting — no pitch required', 'Read the three first-year questions at the top of the Playbook', 'Run the semester math, then book twenty minutes with the CEI'],
    photo: null,
    extra: 'semesterMathTpl',
    cta: { label: 'Book twenty minutes with a mentor', action: 'mentor' },
    resources: ['collegiate-entrepreneurs-organization', '1-million-cups-columbia', 'creative-mornings-columbia', 'griggs-innovators-nexus', 'center-for-entrepreneurship-and-innovation', 'mizzou-startup-community', 'trulaske-alumni-entrepreneurs']
  },
  {
    n: 1, id: 'phase-1',
    title: 'Opportunity Discovery', sub: 'Find a problem worth solving',
    desc: "Every venture starts with a problem worth pursuing. Use Mizzou's earliest-stage resources to explore ideas, talk to people, and pressure-test whether the opportunity is real before you build anything.",
    next: ['Visit the Griggs Innovators Nexus in person', 'Apply to Entrepreneurship Quest (EQ)', "Start the Founder's Bookshelf in the Knowledge Hub"],
    photo: { src: 'assets/img/phase1-student-pitch.jpg', alt: 'A student presenting at the Spring 2026 Pitch Competition', caption: 'A student presenting at the Spring 2026 Pitch Competition.', position: 'center 35%' },
    resources: ['center-for-entrepreneurship-and-innovation', 'griggs-innovators-nexus', 'entrepreneurship-quest-accelerator', 'entrepreneurship-alliance', 'technology-venture-studio-by-redbud-vc', 'mu-law-entrepreneurship-legal-clinic', 'redi', 'gin-incubator-office-space', 'missouri-sbdc', 'codefi', 'missouri-startup-weekend', 'pitch-competitions']
  },
  {
    n: 2, id: 'phase-2',
    title: 'Customer & Model Validation', sub: 'Prove people want it and will pay',
    desc: 'Before you build, prove the problem is real and the business can work. Test demand with real customers, sharpen your model, and use the programs designed to validate — not just cheerlead — your idea.',
    next: ['Run customer-discovery interviews (NSF I-Corps teaches the method)', 'Join the Entrepreneurship Alliance', 'Enter a pitch competition to test your story'],
    photo: { src: 'assets/img/phase2-kelsey-raymond-judging.jpg', alt: 'Kelsey Raymond, Executive Director of Griggs Innovators Nexus, talking with student teams as an Entrepreneurship Alliance judge', caption: 'Kelsey Raymond, Executive Director of Griggs Innovators Nexus, engages with student teams as an EA judge.', position: 'center 40%' },
    resources: ['mizzou-startup-community', 'collegiate-entrepreneurs-organization', 'creative-mornings-columbia', '1-million-cups-columbia', 'nsf-i-corps', 'columbia-chamber-of-commerce', 'main-street-summit', 'trulaske-alumni-entrepreneurs']
  },
  {
    n: 3, id: 'phase-3',
    title: 'Venture Launch', sub: 'Stand it up legally and operationally',
    desc: "With demand validated, it's time to formally launch — form the entity, secure early capital, and put the operational foundation in place. Mid-Missouri has a deeper funding and support stack than most assume.",
    next: ['Pitch to Allen Angel Fund or Centennial Investors', 'Apply for an MTC investment or a grant', 'Move into the Missouri Innovation Center'],
    photo: { src: 'assets/img/phase3-ea-2026-second-place.jpg', alt: 'The second-place winner at the 2026 Entrepreneurship Alliance Final with his parents and Dean Balaji Rajagopalan', caption: '2nd place winner at EA 2026 shares a moment with his parents and the Dean.', position: 'center 25%' },
    resources: ['redbud-vc', 'missouri-technology-corporation', 'missouri-innovation-center', 'allen-angel-fund', 'gin-retail-program', 'centennial-investors', 'st-louis-arch-angels', 'arch-grants', 'redi-small-business-grant', 'trulaske-vcs-and-angels']
  },
  {
    n: 4, id: 'phase-4',
    title: 'Growth & Scaling', sub: 'Grow responsibly and sustainably',
    desc: 'With a working venture, the question becomes how to grow it well. National accelerators, growth-stage capital, and the platforms that put your venture in front of global investors — pursued at a pace your business can sustain.',
    next: ['Apply to Y Combinator or Techstars', 'List your raise on AngelList', 'Begin conversations with growth-stage funds'],
    photo: { src: 'assets/img/phase4-student-presents.jpg', alt: 'A Trulaske student presents her venture at the Spring 2026 Pitch Competition', caption: 'A Trulaske student presents her venture at the Spring 2026 Pitch Competition.', position: 'center 5%' },
    resources: ['y-combinator', 'techstars', 'permanent-equity', 'angellist', 'gener8tor', 'capital-factory', 'founder-institute']
  }
];
