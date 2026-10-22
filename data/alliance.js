/* ============================================================
   LESLIE FLEGEL ENTREPRENEURSHIP ALLIANCE — the EA tab (id="ea").
   Read by assets/js/render.js (renderAlliance). Everything a student in
   the program needs, from applying to getting paid, in one place.

   HOW TO MAINTAIN THIS FILE
   - Each spring, update `cohort`, `dates`, and `verifiedOn`.
   - After each Monday workshop, fill in that week in `weeks` from the
     recap email: set `recap: true` and add `summary`, `goals`, `rules`,
     and `due` (any of them can be left out). Until a week has a recap it
     shows "Recap coming" with its date.
   - `guide` links connect the workshop to the rest of the guidebook.
     Each is { to, label } where `to` is an element id on this page:
       howto-…   a Playbook question (index.html, id="howto")
       term-…    a glossary term: 'term-' + the term in lowercase with
                 dashes, e.g. 'Pitch Deck' -> 'term-pitch-deck'
       wb…       a workbench calculator: wbRunway, wbUnit, wbEquity
       phase-N   a phase block
     The target gets a "Taught in the Leslie Flegel EA" line pointing back
     here, so the link works in both directions. scripts/check-site.mjs
     fails if a target does not exist.
   - Week dates are the spring 2026 cohort's, the one the recaps describe.
   - Never put applicant names or team details here; this page is public.
   ============================================================ */
const ALLIANCE = {
  name: 'Leslie Flegel Entrepreneurship Alliance',
  short: 'EA',
  cohort: 'Spring 2027',
  programUrl: 'https://business.missouri.edu/student-development/learning-doing/entrepreneurship-alliance',
  // The "Scan to Apply" QR on the spring 2027 recruiting slide opens this form.
  applyUrl: 'https://airtable.com/app4LkFA6G9yvhL13/pag6abyWP2OEtAAoK/form',
  verifiedOn: '2026-10-22',

  lede: 'CEI\'s flagship accelerator: eight Monday-night workshops that take you from an idea to a funded pitch, with dinner, a cohort of founders from every corner of campus, and up to $40,000 in startup funds for the winners. This tab has the whole program in one place, and every workshop links to the parts of the guidebook that go deeper.',

  facts: [
    { value: '8', label: 'Monday-night workshops' },
    { value: '$40K', label: 'In startup funds for winners' },
    { value: '10 + 3', label: 'Minutes to pitch, then judge Q&A' },
    { value: 'Free', label: 'Open to any major. Dinner included' }
  ],

  /* The cohort that is recruiting now. */
  dates: [
    { when: 'Dec 11, 2026', what: 'Applications close', note: 'Apply as a solo founder or as a team.' },
    { when: 'Mon, Feb 8, 2027', what: 'Workshop 1', note: 'Then every Monday, 5:30 to 8 pm, for eight workshops.' },
    { when: 'Fri, Apr 9, 2027', what: 'Final Pitch Competition', note: 'A morning of pitches to judges, then the awards luncheon.' }
  ],

  /* What the application asks (the fields on the form). */
  application: [
    { q: 'Your idea', hint: 'What you are building, in plain words.', guide: [{ to: 'howto-problem', label: 'How do I find a problem worth solving?' }] },
    { q: 'Target market', hint: 'Who has the problem, and how many of them there are.', guide: [{ to: 'term-beachhead-market', label: 'Beachhead Market' }, { to: 'term-tam-sam-som', label: 'TAM / SAM / SOM' }] },
    { q: 'Motivation', hint: 'Why this problem, and why you care about it.' },
    { q: 'Value', hint: 'What changes for the customer if you succeed.', guide: [{ to: 'term-value-proposition', label: 'Value Proposition' }] },
    { q: 'Why you (and your team)?', hint: 'What you bring that someone else would not.', guide: [{ to: 'howto-cofounder-campus', label: 'How do I find a co-founder on campus?' }] },
    { q: 'Obstacles', hint: 'What could stop you. Honest answers read better than confident ones.' },
    { q: 'About you', hint: 'Expected graduation, major, and the names, majors, and years of any teammates.' }
  ],
  applicationNote: 'The spring 2026 cohort drew 24 applications, and about half came from outside the business school: criminal justice, neuroscience, biology, and civil, biomedical, biological, and industrial engineering among them.',

  /* How every Monday runs, and what it takes to pitch at the end. */
  format: [
    { title: 'Goals and lecture', text: '45 to 60 minutes on the week\'s goals and a lecture on the topic.' },
    { title: 'Dinner', text: 'A short break. CEI buys dinner, and the room is food-friendly if you want to bring your own.' },
    { title: 'Work session', text: 'You work through the week\'s goals in a group setting, with the rest of the cohort.' }
  ],
  requirements: [
    'Attend every Monday. If you are sick or have a family emergency, tell CEI and they will try to record the session for you.',
    'Complete each week\'s goals.',
    'Work with the cohort, not just alongside it.'
  ],
  requirementsNote: 'All three are required to pitch for funding at the final.',

  /* Once you are accepted, before Workshop 1. */
  beforeWeek1: [
    { text: 'Put every Monday and the final on your calendar, and clear the whole morning of the final.' },
    { text: 'Every person on your team fills out the dietary form CEI sends, even with no allergies. It is due the Friday before Workshop 1.' },
    { text: 'Send CEI the names and emails of everyone on your team, and any other address you want the emails to go to.' },
    { text: 'Teams: agree on formal roles and each person\'s percentage of ownership, and put it in a document everyone signs. No money is paid out until CEI has it.',
      guide: [{ to: 'howto-equity', label: 'How do I choose a co-founder and split equity?' }, { to: 'wbEquity', label: 'Equity & dilution calculator' }, { to: 'term-vesting', label: 'Vesting' }] }
  ],

  /* The eight workshops. */
  weeks: [
    { n: 1, date: '2026-02-02', title: 'Workshop 1', recap: false },
    { n: 2, date: '2026-02-09', title: 'Workshop 2', recap: false },
    { n: 3, date: '2026-02-16', title: 'Workshop 3', recap: false },
    { n: 4, date: '2026-02-23', title: 'Workshop 4', recap: false },
    { n: 5, date: '2026-03-02', title: 'Workshop 5', recap: false },
    { n: 6, date: '2026-03-09', title: 'Workshop 6', recap: false },
    { n: 7, date: '2026-03-16', title: 'Pitch feedback and the Sequoia deck', recap: true,
      summary: 'Teams pitched and got feedback. The work now is to take it to heart, refine the deck, and practice out loud, over spring break if that is when you have the time. Every EA pitch is built on the Sequoia Capital template, the same framework the Playbook walks through.',
      rules: [
        'Follow the order of the Sequoia template. Do not move sections around.',
        'Include, at minimum, every slide in the template.',
        'Add slides if you have more to show.',
        'You may include up to 10 to 15 seconds of video if it helps.',
        'You get 10 minutes to present, then 3 minutes of judge Q&A.',
        'You get a 2-minute and a 1-minute warning, and you are cut off at 10 minutes.'
      ],
      due: [
        'Ask CEI for a letter of excused absence now if the final clashes with a class. Send your professors\' names and contact details.',
        'Family, guests, and mentors who want to come to the final fill out the RSVP form CEI sends.'
      ],
      guide: [
        { to: 'howto-pitch-deck', label: 'How do I build my first pitch deck?' },
        { to: 'term-pitch-deck', label: 'Pitch Deck' },
        { to: 'term-traction', label: 'Traction' },
        { to: 'term-tam-sam-som', label: 'TAM / SAM / SOM' },
        { to: 'howto-raise', label: 'How do I raise my first capital?' }
      ] },
    { n: 8, date: '2026-03-30', title: 'Final run-through', recap: true,
      summary: 'A full run-through of every pitch in Cornell Hall 205, the room where the final happens. Two days later the deck is locked.',
      due: [
        'Final slides are due that Wednesday at 6 pm. PowerPoint (.pptx) only: not Canva, not PDF. Email them to cei@missouri.edu.',
        'No edits are accepted after the deadline, and a team that does not submit on time does not pitch.',
        'On the day, arrive at Cornell Hall 205 between 9 and 9:15 am, no later, and stay for the whole event.',
        'Dress for your business. Company T-shirts are welcome; otherwise business casual or professional, unless that does not fit what you do. You are pitching for startup funds.'
      ],
      guide: [
        { to: 'howto-pitch-deck', label: 'How do I build my first pitch deck?' },
        { to: 'wbUnit', label: 'Unit economics calculator' },
        { to: 'wbRunway', label: 'Runway & default alive calculator' }
      ] }
  ],

  /* The final, and getting paid. */
  final: {
    title: 'Final Pitch Competition',
    steps: [
      'Pitches run from 9:30 am to about 12:30 pm, then the awards luncheon. Expect to finish around 1:30 or 2 pm.',
      'Judges have included Kelsey Raymond, Executive Director of the Griggs Innovators Nexus.',
      'The Monday after the final is a short debrief, under an hour (no dinner). CEI covers what it needs to pay your business, so come: it is how you receive your funding. Bring feedback on the program: what to keep, what to add, what to stop.'
    ],
    guide: [{ to: 'wins', label: 'Past EA winners in the wins feed' }, { to: 'phase-3', label: 'Phase 3: what comes after the money' }]
  }
};
