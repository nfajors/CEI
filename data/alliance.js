/* ============================================================
   LESLIE FLEGEL ENTREPRENEURSHIP ALLIANCE — the EA tab (id="ea").
   Read by assets/js/render.js (renderAlliance). Everything a student in
   the program needs, from applying to getting paid, in one place.

   HOW TO MAINTAIN THIS FILE
   - Each spring, update `cohort`, `dates`, and `verifiedOn`.
   - Each week in `weeks` can carry any of: `summary` (a paragraph),
     `agenda` (how the night ran), `covers` (what it teaches), `goals`,
     `rules`, `due`, `more` (extra headed lists: { head, items }),
     `swap` (an "Instead of… / Ask…" table: { instead, ask }),
     `materials`, and `guide`. A week with no summary
     shows "Recap coming" with its date.
   - `materials` are the workshop files, kept in assets/ea/:
       { label, file, type, size, note (optional, e.g. which slides) }
     They also appear together under "Workshop files".
   - `guide` links connect the workshop to the rest of the guidebook.
     Each is { to, label } where `to` is an element id on this page:
       howto-…   a Playbook question (index.html, id="howto")
       term-…    a glossary term: 'term-' + the term in lowercase with
                 dashes, e.g. 'Pitch Deck' -> 'term-pitch-deck'
       wb…       a workbench calculator: wbRunway, wbUnit, wbEquity
       phase-N   a phase block
       contact-… a person in the support network (data/contacts.js)
     Or { url, label } for a page outside the guidebook.
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
    { n: 1, date: '2026-02-02', title: 'Clarifying your idea: the Business Model Canvas',
      summary: 'The first night, and the one-page map every EA venture works from for the next eight weeks. The Business Model Canvas, from Strategyzer, breaks a business into nine building blocks, so you can see the whole of it, and its weakest assumption, on a single sheet. The value proposition canvas then zooms in on the two blocks that matter most: what you offer, and who it is for.',
      agenda: [
        '5:30 Welcome. Go around and introduce yourself.',
        '5:45 Warm-up: a round or two of the game Products.',
        '6:00 Introduce the idea you are developing, in 30 seconds to a minute.',
        '6:15 A walk through the Business Model Canvas and what to think about for your own idea.',
        '6:30 Dinner and a break.',
        '6:45 Work session: fill out the canvas for your venture.',
        '7:05 Swap tables: explain your idea and ask for feedback and blind spots.'
      ],
      covers: [
        'A startup is a business built around an innovation; a small business is an activity for profit. Both are entrepreneurship: running a new business.',
        'Success = idea × execution × market × team × luck. Because it is a product, a zero in any one of them makes the whole thing zero.',
        'Customer segments: the groups of people or organizations you aim to reach and serve.',
        'Value propositions: the bundle of products and services that creates value for a specific segment.',
        'Channels and customer relationships: how you reach each segment to deliver that value, and the kind of relationship you build with it.',
        'Revenue streams: the cash you earn from each segment.',
        'Key resources, key activities, and key partners: the assets, the work, and the suppliers and partners that make the model run.',
        'Cost structure: everything it costs to operate the model.',
        'The value proposition canvas: on the customer\'s side, the jobs they are trying to get done, their pains, and the gains they want; on yours, your products and services, pain relievers, and gain creators. Product-market fit is where the two sides match.',
        'Focus on the customer\'s problem. Sell pain relievers, not vitamins: a migraine, not a nice-to-have.',
        'Avoid the startup loop of despair (idea, build, brand, and only then look for a customer). Go idea, customer, build, brand, starting with one customer who has a big problem.'
      ],
      materials: [
        { label: 'The Business Model Canvas', file: 'assets/ea/ea-week1-business-model-canvas.pdf', type: 'PDF', size: '2.8 MB', note: 'The first-night slides' },
        { label: 'Blank canvas to print', file: 'assets/ea/ea-week1-blank-business-model-canvas.pdf', type: 'PDF', size: '40 KB', note: 'Strategyzer, CC BY-SA 3.0. Prints on A3 or tabloid' },
        { label: 'Review, prototyping, desirability, and pitching', file: 'assets/ea/ea-week3-prototyping-desirability-pitching.pdf', type: 'PDF', size: '5.4 MB', note: 'Slides 2 to 5 review the canvas' }
      ],
      guide: [
        { to: 'term-business-model', label: 'Business Model' },
        { to: 'term-lean-canvas', label: 'Lean Canvas' },
        { to: 'term-value-proposition', label: 'Value Proposition' },
        { to: 'term-product-market-fit', label: 'Product-Market Fit' },
        { to: 'howto-problem', label: 'How do I find a problem worth solving?' },
        { url: 'https://www.strategyzer.com/library/the-business-model-canvas', label: 'The canvas, free from Strategyzer' }
      ] },
    { n: 2, date: '2026-02-09', title: 'Customer segments',
      summary: 'Narrowing "everyone" down to the first customers who feel the problem most. The canvas starts on the customer side for a reason: every other block depends on who the customer is.',
      agenda: [
        '5:30 Introduce your idea again. Get used to talking about it.',
        '5:40 A warm-up on the topic.',
        '5:55 What a customer segment is, and how to find yours.',
        '6:30 Dinner and a break.',
        '7:00 Work session: evaluate your customer segments, then swap tables to give and get feedback.'
      ],
      covers: [
        'The end user and the customer are not always the same person: the one who uses the product may not be the one who pays for it. Know both.',
        'You cannot sell to everyone, so define the customer narrowly. Behavior (how they buy and how they use a product) usually tells you more than demographics, which tend to be too simple, or geography, which matters only when your reach is limited.',
        'Segment by the problem and the job the customer is trying to get done, not only by age or income.',
        'The technology adoption life cycle: innovators and early adopters buy early because their pain is big; the mainstream market waits for a complete, reliable solution. The gap between the two is the chasm.',
        'Pick a beachhead: one segment small enough to win and big enough to matter, then widen.',
        'Then go and talk to them. Interviews settle what a whiteboard cannot.'
      ],
      materials: [
        { label: 'The Business Model Canvas', file: 'assets/ea/ea-week1-business-model-canvas.pdf', type: 'PDF', size: '2.8 MB', note: 'Slides 20 and 21 are customer definitions' },
        { label: 'Review, prototyping, desirability, and pitching', file: 'assets/ea/ea-week3-prototyping-desirability-pitching.pdf', type: 'PDF', size: '5.4 MB', note: 'Slide 7 is the adoption life cycle' }
      ],
      guide: [
        { to: 'term-early-adopter', label: 'Early Adopter' },
        { to: 'term-beachhead-market', label: 'Beachhead Market' },
        { to: 'term-customer-discovery', label: 'Customer Discovery' },
        { to: 'howto-first-customers', label: 'How do I secure my first ten customers?' }
      ] },
    { n: 3, date: '2026-02-16', title: 'Prototypes and tests: desirability',
      summary: 'Finding out whether customers want it before you build it. The order is idea, customer, build, brand: find the customer before you build, and do not fall in love with your product or service.',
      covers: [
        'Prototyping is building quick, inexpensive, rough study models to learn about the desirability, feasibility, and viability of a value proposition and a business model. This week is about desirability.',
        'Prototype to communicate, get feedback, stress-test the idea, build empathy for the customer, build excitement, and brainstorm.',
        'Types: low-fidelity mock-ups, static prototypes (screens that look real with little or no interaction), scale models, and storyboards of the customer\'s experience.',
        'Ask "what if" of the business model: what if it were free, a subscription, a bundle, do-it-yourself like IKEA, a luxury item, or deliberately scarce?',
        'Write desirability hypotheses: "We believe our customers have these jobs, pains, and gains" and "We believe our product solves them." Then test each one.',
        'Tests, roughly from cheapest up: a survey (Mizzou has Qualtrics), a landing page that collects emails (WordPress, Mailchimp), A/B tests of your pitch, features, design, and price, a letter of intent, a mock sale, and crowdfunding.',
        'From the slides: hardware founders who built their first proof of concept by repurposing open-source devices instead of designing a custom system.'
      ],
      materials: [ { label: 'Review, prototyping, desirability, and pitching', file: 'assets/ea/ea-week3-prototyping-desirability-pitching.pdf', type: 'PDF', size: '5.4 MB', note: 'Slides 6 to 43 cover prototyping and testing' }
      ],
      guide: [
        { to: 'term-mvp-minimum-viable-product', label: 'MVP (Minimum Viable Product)' },
        { to: 'howto-pmf', label: 'How do I know if I have product-market fit?' },
        { to: 'howto-pricing', label: 'How do I price my product?' },
        { to: 'term-customer-discovery', label: 'Customer Discovery' },
        { url: 'https://missouri.qualtrics.com', label: 'Mizzou Qualtrics, for surveys' }
      ] },
    { n: 4, date: '2026-02-23', title: 'Market research and customer discovery',
      summary: 'Moving from general ideas to data-backed proof of where your target customers live, spend, and behave. Gwen Gray, the business research librarian, walks through the MU Libraries research guide built for the EA, and then you put it to work on your own venture.',
      agenda: [
        '5:30 Welcome, a recap of Week 3, and this week\'s focus.',
        '5:45 Warm-up, "The Mystery Customer": a quick table challenge naming the demographic and psychographic traits of a non-obvious customer segment.',
        '6:00 The customer lens: in 30 seconds to a minute, state your idea and who you assume your primary customer is.',
        '6:15 Market research with Gwen Gray: a live walk-through of the library guide, finding demographic data, industry reports, consumer behavior, and market data.',
        '6:45 Dinner and a break.',
        '7:00 Work session: use the guide to find where your customers are, their demographic profile, the market size, geographic density, and their online and offline habits.',
        '7:35 Swap tables: explain what you found, and ask for feedback and blind spots.'
      ],
      covers: [
        'Demographics describe who customers are (age, income, education, family); psychographics describe how they think and what they value. You need both.',
        'Size the market two ways, top-down from industry data and bottom-up from what you can actually sell, and compare: TAM, SAM, and SOM.',
        'Map the competition, including the option customers use most: doing nothing.',
        'Frameworks for organizing what you find: SWOT, PESTLE, and Porter\'s Five Forces.'
      ],
      goals: ['Leave with evidence instead of assumptions: where your customers are, who they are, how many there are, and how they spend their time online and off.'],
      more: [
        { head: 'Interviewing customers', items: [
          'Every interview should answer three questions: why is there a problem, what causes it, and what solution does the customer imagine?',
          'Keep three things apart in your notes, in the customer\'s own words: the problem (what they are trying to get done), the issues (what falls short in how they solve it today), and success (the concrete outcome they want).',
          'Share your thinking, but do not sell. "I love it," "Brilliant idea," and "Let me know when you launch" are false positives: the person is reacting to your pitch, not describing a problem they have.',
          'It is qualitative, not a vote. The one person in ten who says something different may matter more than the nine who agree.',
          'After each interview, put the key ideas on sticky notes and sort them into problems, issues, and success. When all the interviews are done, rank them by importance.',
          'Common mistakes: mixing customer segments, mixing up problem and success, being too generic, holding on to your assumptions, not listening, skipping follow-up questions, rushing, and not preparing and practicing your questions.',
          'Interviews are one of six ways to learn about customers described in Strategyzer\'s Value Proposition Design. The others are desk research, watching people in the real world, using the product yourself, building with customers, and running experiments.'
        ] }
      ],
      swap: [
        { instead: 'How much would you pay?', ask: 'Talk me through the last time you had a problem with …' },
        { instead: 'Do you like my idea?', ask: 'How much grief, time, or effort is this problem causing you?' },
        { instead: 'Would you buy this product?', ask: 'Show me how you currently solve, or try to solve, this problem.' },
        { instead: '', ask: 'Who else should I talk to to learn more about this problem?' }
      ],
      materials: [
        { label: 'Interviewing potential customers', file: 'assets/ea/ea-week4-interviewing-potential-customers.pdf', type: 'PDF', size: '70 KB', note: 'Questions to ask, and mistakes to avoid' }
      ],
      guide: [
        { url: 'https://libraryguides.missouri.edu/entrepreneurshipalliance', label: 'MU Libraries research guide for the EA' },
        { to: 'contact-gwen-gray', label: 'Gwen Gray, business research librarian' },
        { to: 'howto-problem', label: 'How do I find a problem worth solving?' },
        { to: 'term-customer-discovery', label: 'Customer Discovery' },
        { to: 'term-tam-sam-som', label: 'TAM / SAM / SOM' },
        { to: 'term-swot-analysis', label: 'SWOT Analysis' },
        { to: 'term-pestle-analysis', label: 'PESTLE Analysis' },
        { to: 'term-porter-s-five-forces', label: 'Porter\'s Five Forces' }
      ] },
    { n: 5, date: '2026-03-02', title: 'Accounting basics and financial projections',
      summary: 'Two halves: the advisers a business needs on its side, starting with a banker, and the numbers. A local banker talks about the relationship with your bank and how small-business loans work, then a short course in accounting, then a work session on your own projections.',
      agenda: [
        '5:30 Welcome. Introduce yourself, your idea, and the evening\'s guests.',
        '5:40 Meet "your" banker: why the relationship matters, small-business loans, and Q&A.',
        '6:15 Dinner and a break.',
        '6:45 Accounting basics for entrepreneurs.',
        '7:05 Work session: your 1-year and 5-year projections.'
      ],
      covers: [
        'Revenue is money in. Expenses are money out, either fixed (they do not change with volume) or variable (they do). Profit is revenue minus expenses, and profit margin is profit divided by revenue.',
        'The break-even point is where revenue equals expenses. Use it to set sales targets and to see what a change in price or cost does.',
        'Worked example: a subscription news site with $70 a month in fixed costs (hosting, internet, marketing), $2 to win each subscriber, and $50 per article. At $8 a month and 5 articles, it breaks even at 54 subscribers.',
        'A second example: 3D-printed trinkets that sell for $10 and cost $1 to make, with $170 a month in internet and co-working rent and an $800 printer. Each sale contributes $9, so 19 sales a month cover the monthly costs, and about 89 more pay for the printer.',
        'Cash comes and goes three ways: operating (day-to-day cash, receivables and payables, taxes), investing (equipment, land, securities), and financing (loans and long-term debt).'
      ],
      goals: ['Build a 1-year projection by month and a 5-year projection by year. The profit-and-loss template has a sheet for each.'],
      materials: [
        { label: 'Accounting basics', file: 'assets/ea/ea-week5-accounting-basics.pptx', type: 'PowerPoint', size: '200 KB' },
        { label: 'Break-even calculator', file: 'assets/ea/ea-week5-break-even-calculator.xlsx', type: 'Excel', size: '9 KB', note: 'Three calculators: price, subscribers, open-ended' },
        { label: 'Profit-and-loss template', file: 'assets/ea/ea-week5-profit-and-loss-template.xlsx', type: 'Excel', size: '9 KB', note: 'Monthly for year 1, annual for 5 years' }
      ],
      guide: [
        { to: 'wbUnit', label: 'Unit economics calculator' },
        { to: 'wbRunway', label: 'Runway & default alive calculator' },
        { to: 'term-unit-economics', label: 'Unit Economics' },
        { to: 'term-gross-margin', label: 'Gross Margin' },
        { to: 'term-burn-rate', label: 'Burn Rate' },
        { to: 'howto-runway', label: 'How do I manage runway and stay alive?' }
      ] },
    { n: 6, date: '2026-03-09', title: 'Learning to pitch',
      summary: 'Turning six weeks of work into ten minutes. The pitch that wins is one the judges can follow: a clear story, slides that show instead of tell, and answers that hold up under questions.',
      covers: [
        'Graphics: replace slides full of bullets with one clear visual. The slides show before-and-after makeovers.',
        'The murder board: before the real thing, pitch to a panel whose job is to tear it apart with the hardest questions they can find.',
        'Practice, out loud and on a timer, until the ten minutes are comfortable.',
        'Every EA pitch follows the Sequoia Capital template; the rules for the final are in Week 7.'
      ],
      materials: [ { label: 'Review, prototyping, desirability, and pitching', file: 'assets/ea/ea-week3-prototyping-desirability-pitching.pdf', type: 'PDF', size: '5.4 MB', note: 'Slides 44 to 49 are pitch advice' }
      ],
      guide: [
        { to: 'howto-pitch-deck', label: 'How do I build my first pitch deck?' },
        { to: 'term-pitch-deck', label: 'Pitch Deck' },
        { to: 'term-traction', label: 'Traction' },
        { to: 'ea-week-7', label: 'Week 7: the rules for the final' }
      ] },
    { n: 7, date: '2026-03-16', title: 'Pitch feedback and the Sequoia deck',
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
    { n: 8, date: '2026-03-30', title: 'Final run-through',
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
