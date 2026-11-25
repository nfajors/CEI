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
   - `materials` are the workshop files, kept in assets/ea/. Slide decks
     are posted only in CEI-branded public versions; handouts, templates,
     and calculators can go up as they are.
       { label, file, type, size, note (optional, e.g. which slides) }
     They also appear together under "Workshop files".
   - `misc` is the Miscellaneous block at the end of the tab: talks and
     decks that belong with the EA but are not one week's workshop.
       { label, file, type, size, about, guide (optional) }
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
   - Week dates and titles are the spring 2027 schedule. The recaps describe
     the spring 2026 sessions on the same topics; replace each one as the
     2027 workshop runs. Week 4 (pricing and scaling) is new in 2027, so its
     summary describes what the night covers; replace it with a recap after it runs.
   - Never put applicant names or team details here; this page is public.
   ============================================================ */
const ALLIANCE = {
  name: 'Leslie Flegel Entrepreneurship Alliance',
  short: 'EA',
  cohort: 'Spring 2027',
  programUrl: 'https://business.missouri.edu/student-development/learning-doing/entrepreneurship-alliance',
  // The "Scan to Apply" QR on the spring 2027 recruiting slide opens this form.
  applyUrl: 'https://airtable.com/app4LkFA6G9yvhL13/pag6abyWP2OEtAAoK/form',
  verifiedOn: '2026-11-24',
  // Shown under "Workshop files" until CEI's branded slide decks are posted.
  slidesNote: 'Workshop slides go up as CEI-branded versions are ready; Weeks 1 to 4 and Week 6 are posted. For the other weeks, ask cei@missouri.edu.',

  lede: 'CEI\'s flagship accelerator: eight Monday-night workshops each spring that take you from an idea to launch, with mentors, dinner, a cohort of founders from every corner of campus, and $40,000 in awards for the top five businesses at the final. This tab has the whole program in one place, and every workshop links to the parts of the guidebook that go deeper.',

  facts: [
    { value: '8', label: 'Monday-night workshops' },
    { value: '$40K', label: 'In awards for the top five' },
    { value: '10 + 4', label: 'Minutes to pitch, then judge Q&A' },
    { value: 'Free', label: 'Open to any Mizzou student. Dinner included' }
  ],

  /* The cohort that is recruiting now. */
  dates: [
    { when: 'Dec 11, 2026', what: 'Applications close', note: 'Applications open the first week of the fall semester. Apply as a solo founder or as a team.' },
    { when: 'Mon, Feb 8, 2027', what: 'Workshop 1', note: 'Then every Monday, 5:30 to 8 pm, for eight workshops.' },
    { when: 'Mon, Mar 29, 2027', what: 'No workshop', note: 'Spring break, between Weeks 7 and 8.' },
    { when: 'Fri, Apr 9, 2027', what: 'Final Pitch Competition', note: 'Pitches to the judges, their deliberation, then the winners\' luncheon.' }
  ],

  /* The program in brief (the "Who it is for" block). */
  about: [
    { title: 'Who can apply', text: 'Any Mizzou undergraduate or graduate student with a startup or business idea. Teams are encouraged but not required.' },
    { title: 'When to apply', text: 'Applications open the first week of the fall semester and close before finals. The program runs each spring.' },
    { title: 'Credit', text: 'The EA is not a course: you do not receive college credit or a grade for it.' },
    { title: 'Mentors', text: 'You learn alongside the cohort, get one-on-one mentoring from founders, investors, and experienced entrepreneurs, and meet EA alumni.' }
  ],

  /* Awards and judging at the final. Starting with the spring 2027 cohort,
     only the top five businesses receive an award. */
  awards: {
    intro: 'Starting with the spring 2027 cohort, awards go to the top five businesses at the final pitch competition. Everyone else completes the program without a cash award.',
    places: [
      { place: '1st', amount: '$20,000' },
      { place: '2nd', amount: '$10,000' },
      { place: '3rd', amount: '$5,000' },
      { place: '4th', amount: '$2,500' },
      { place: '5th', amount: '$2,500' }
    ],
    total: '$40,000',
    funders: 'Program costs, including the awards, are covered by the Eisenhart Family Foundation and the Steen Venture Fund.',
    criteria: [
      { name: 'Problem and opportunity', points: 15, text: 'A clear, real problem; evidence that customers have it; a sense of the market\'s size.' },
      { name: 'Solution and value proposition', points: 15, text: 'How the product or service solves the problem, and why customers would choose it over alternatives.' },
      { name: 'Customer and market validation', points: 20, text: 'Customer interviews, surveys, pre-sales, pilots, or other proof gathered during the program.' },
      { name: 'Business model and viability', points: 20, text: 'How the business makes money, realistic costs and pricing, and a credible path to sustainability.' },
      { name: 'Use of award funds', points: 10, text: 'A specific plan for the money and the milestone it would help reach.' },
      { name: 'Founder and team execution', points: 10, text: 'Progress made during the eight weeks, and the team\'s ability to carry the plan forward.' },
      { name: 'Pitch delivery and Q&A', points: 10, text: 'A clear, well-organized presentation within the time limit, and thoughtful answers to the judges\' questions.' }
    ],
    scale: [
      { band: 'Exceptional', range: '90 to 100% of the points', text: 'Clear, specific, and backed by strong evidence.' },
      { band: 'Strong', range: '70 to 89%', text: 'Solid, with minor gaps.' },
      { band: 'Developing', range: '50 to 69%', text: 'Ideas are present but lack evidence or detail.' },
      { band: 'Limited', range: 'Below 50%', text: 'Missing, unclear, or unsupported.' }
    ],
    sheet: { label: 'Judge scoring sheet', file: 'assets/ea/ea-judge-scoring-sheet.pdf', type: 'PDF', size: '30 KB', note: 'Score your own practice pitches the way the judges will' },
    guide: [{ to: 'ea-week-6', label: 'Week 6: Learning to pitch' }, { to: 'howto-pitch-deck', label: 'How do I build my first pitch deck?' }]
  },

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
    { n: 1, date: '2027-02-08', title: 'The Business Model Canvas and customer segments',
      summary: 'The first night, and the one-page map every EA venture works from for the next eight weeks. The Business Model Canvas, from Strategyzer, breaks a business into nine building blocks, so you can see the whole of it, and its weakest assumption, on a single sheet. The value proposition canvas then zooms in on the two blocks that matter most: what you offer, and who it is for. Then the customer side gets narrowed: from "everyone" down to the first customers who feel the problem most.',
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
      more: [
        { head: 'Customer segments', items: [
          'The end user and the customer are not always the same person: the one who uses the product may not be the one who pays for it. Know both.',
          'You cannot sell to everyone, so define the customer narrowly. Behavior (how they buy and how they use a product) usually tells you more than demographics, which tend to be too simple, or geography, which matters only when your reach is limited.',
          'Segment by the problem and the job the customer is trying to get done, not only by age or income.',
          'The technology adoption life cycle: innovators and early adopters buy early because their pain is big; the mainstream market waits for a complete, reliable solution. The gap between the two is the chasm.',
          'Pick a beachhead: one segment small enough to win and big enough to matter, then widen.',
          'Then go and talk to them. Interviews settle what a whiteboard cannot.'
        ] }
      ],
      materials: [
        { label: 'Start with the problem (slides)', file: 'assets/ea/ea-week1-start-with-the-problem.pptx', type: 'PowerPoint', size: '200 KB', note: 'Where opportunities come from, the problem statement and its three common mistakes, "We help X do Y by doing Z," and where both sentences land on the canvas' },
        { label: 'Blank canvas to print', file: 'assets/ea/ea-week1-blank-business-model-canvas.pdf', type: 'PDF', size: '40 KB', note: 'Strategyzer, CC BY-SA 3.0. Prints on A3 or tabloid' }
      ],
      guide: [
        { to: 'term-business-model', label: 'Business Model' },
        { to: 'term-lean-canvas', label: 'Lean Canvas' },
        { to: 'term-value-proposition', label: 'Value Proposition' },
        { to: 'term-product-market-fit', label: 'Product-Market Fit' },
        { to: 'howto-problem', label: 'How do I find a problem worth solving?' },
        { to: 'term-early-adopter', label: 'Early Adopter' },
        { to: 'term-beachhead-market', label: 'Beachhead Market' },
        { to: 'howto-first-customers', label: 'How do I secure my first ten customers?' },
        { url: 'https://www.strategyzer.com/library/the-business-model-canvas', label: 'The canvas, free from Strategyzer' }
      ] },
    { n: 2, date: '2027-02-15', title: 'Market research and customer interviews',
      summary: 'Moving from general ideas to data-backed proof of where your target customers live, spend, and behave. Gwen Gray, the business research librarian at MU Libraries, walks through the campus research tools and the guide built for the EA, and then you put them to work on your own venture and your customer interviews.',
      agenda: [
        '5:30 Welcome, a recap of last week, and this week\'s focus.',
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
        { label: 'Find your beachhead (slides)', file: 'assets/ea/ea-week2-find-your-beachhead.pptx', type: 'PowerPoint', size: '230 KB', note: 'Four ways to segment, scoping up and down, Bevel and Square, and choosing one beachhead and two backups' },
        { label: 'Go talk to customers (slides)', file: 'assets/ea/ea-week2-go-talk-to-customers.pptx', type: 'PowerPoint', size: '450 KB', note: 'The fieldwork plan, recruiting, a cold email that works, gold words, pass lines, and two interview drills' },
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
    { n: 3, date: '2027-02-22', title: 'Prototypes and MVP testing',
      summary: 'Finding out whether customers want it before you build it. The order is idea, customer, build, brand: find the customer before you build, and do not fall in love with your product or service.',
      covers: [
        'Prototyping is building quick, inexpensive, rough study models to learn about the desirability, feasibility, and viability of a value proposition and a business model. This week is about desirability.',
        'Prototype to communicate, get feedback, stress-test the idea, build empathy for the customer, build excitement, and brainstorm.',
        'Types: low-fidelity mock-ups, static prototypes (screens that look real with little or no interaction), scale models, and storyboards of the customer\'s experience.',
        'Ask "what if" of the business model: what if it were free, a subscription, a bundle, do-it-yourself like IKEA, a luxury item, or deliberately scarce?',
        'Write desirability hypotheses: "We believe our customers have these jobs, pains, and gains" and "We believe our product solves them." Then test each one.',
        'Tests, roughly from cheapest up: a survey (Mizzou has Qualtrics), a landing page that collects emails (WordPress, Mailchimp), A/B tests of your pitch, features, design, and price, a letter of intent, a mock sale, and crowdfunding.',
        'Hardware founders can often build a first proof of concept by repurposing open-source devices instead of designing a custom system.',
        'Before you prototype, write down what must be true and map each assumption on two axes: how much it hurts if you are wrong, and how little evidence you have. Test the top-right corner first, with a pass line you set in advance.',
        'Climb the truth curve only as far as you need: conversations, then mockups, then concierge and Wizard of Oz tests (you deliver the service by hand), then a working MVP. What people say is not what they do.'
      ],
      materials: [
        { label: 'Test the riskiest assumption first (slides)', file: 'assets/ea/ea-week3-test-the-riskiest-assumption.pptx', type: 'PowerPoint', size: '205 KB', note: 'Twelve questions that surface assumptions, the risk and uncertainty map, pass lines, the truth curve, and concierge tests' }
      ],
      guide: [
        { to: 'term-mvp-minimum-viable-product', label: 'MVP (Minimum Viable Product)' },
        { to: 'howto-pmf', label: 'How do I know if I have product-market fit?' },
        { to: 'howto-pricing', label: 'How do I price my product?' },
        { to: 'term-customer-discovery', label: 'Customer Discovery' },
        { url: 'https://missouri.qualtrics.com', label: 'Mizzou Qualtrics, for surveys' }
      ] },
    { n: 4, date: '2027-03-01', title: 'Pricing and scaling',
      summary: 'New in 2027. Week 3 ends with willingness-to-pay tests; this week turns what they showed into a price, checks whether one customer makes you money, and asks what breaks when you have ten times the customers. The numbers you leave with feed the break-even and projections in Week 5.',
      covers: [
        'Price is the fastest lever you have. On a $20 product that costs $12 to make, a 10% price rise lifts what you keep on each sale by 25%; 10% more customers lifts it by 10%, and you have to go and find them.',
        'Your price lives between your cost to deliver (the floor) and the value to the customer (the ceiling). Competitors\' prices are a reference point. Price on value and capture a fraction of it; cost plus a markup is the common mistake.',
        'Value math: add up what you save or earn the customer each month, using numbers from your interviews, then charge a fraction of it.',
        'Charge along a value metric that grows with the customer\'s value: per seat or location, per use, per outcome, a subscription, a device plus refills, or freemium.',
        'Good, better, best: three tiers, with the top one anchoring the middle one you want most customers to pick.',
        'Ask four price questions (too expensive to consider, expensive but worth it, a bargain, too cheap to trust), then try to sell: a deposit, a pre-order, or a letter of intent is the evidence that counts.',
        'Test one price at a time and start high: a price ladder, split landing-page traffic, or a pre-order. Discounting down is easy; raising prices later is hard.',
        'Unit economics: price, gross margin, the cost to win a customer (CAC), payback, lifetime, and lifetime value (LTV). Rules of thumb: LTV at least 3 times CAC, and CAC earned back inside 12 months.',
        'Scaling means revenue grows faster than cost. Doing the work by hand breaks even early but barely grows; ask what breaks first at 10 times the customers: founder time, suppliers, acquisition, support, cash, or quality.'
      ],
      goals: ['Leave with a price (or three tiers), your gross margin per customer, your cost to win one, and one price test with a pass line. Bring them to Week 5.'],
      materials: [
        { label: 'Pricing and scaling (slides)', file: 'assets/ea/ea-week4-pricing-and-scaling.pptx', type: 'PowerPoint', size: '305 KB', note: 'Value-based pricing, the value metric, tiers, price questions and tests, unit economics, and what breaks at 10 times the customers' }
      ],
      guide: [
        { to: 'howto-pricing', label: 'How do I price my product?' },
        { to: 'wbUnit', label: 'Unit economics calculator' },
        { to: 'term-unit-economics', label: 'Unit Economics' },
        { to: 'term-gross-margin', label: 'Gross Margin' },
        { to: 'term-ltv-cac', label: 'LTV / CAC' },
        { to: 'term-cac-payback-period', label: 'CAC Payback Period' },
        { to: 'term-churn', label: 'Churn' }
      ] },
    { n: 5, date: '2027-03-08', title: 'Financial projections, B.A.I.L.L., and legal structure',
      summary: 'Two halves: the people a business needs on its side, and the numbers. A local banker talks about the relationship with your bank and how small-business loans work, then a short course in accounting, then a work session on your own projections.',
      agenda: [
        '5:30 Welcome. Introduce yourself, your idea, and the evening\'s guests.',
        '5:40 Meet "your" banker: why the relationship matters, small-business loans, and Q&A.',
        '6:15 Dinner and a break.',
        '6:45 Accounting basics for entrepreneurs.',
        '7:05 Work session: your 1-year and 5-year projections.'
      ],
      covers: [
        'B.A.I.L.L.: the five relationships every business needs. A Banker, an Accountant, an Insurance agent, a Lawyer, and a Landlord. This week starts with the banker.',
        'Revenue is money in. Expenses are money out, either fixed (they do not change with volume) or variable (they do). Profit is revenue minus expenses, and profit margin is profit divided by revenue.',
        'The break-even point is where revenue equals expenses. Use it to set sales targets and to see what a change in price or cost does.',
        'Worked example: a subscription news site with $70 a month in fixed costs (hosting, internet, marketing), $2 to win each subscriber, and $50 per article. At $8 a month and 5 articles, it breaks even at 54 subscribers.',
        'A second example: 3D-printed trinkets that sell for $10 and cost $1 to make, with $170 a month in internet and co-working rent and an $800 printer. Each sale contributes $9, so 19 sales a month cover the monthly costs, and about 89 more pay for the printer.',
        'Cash comes and goes three ways: operating (day-to-day cash, receivables and payables, taxes), investing (equipment, land, securities), and financing (loans and long-term debt).'
      ],
      goals: ['Build a 1-year projection by month and a 5-year projection by year. The profit-and-loss template has a sheet for each.'],
      materials: [
        { label: 'Break-even calculator', file: 'assets/ea/ea-week5-break-even-calculator.xlsx', type: 'Excel', size: '9 KB', note: 'Three calculators: price, subscribers, open-ended' },
        { label: 'Profit-and-loss template', file: 'assets/ea/ea-week5-profit-and-loss-template.xlsx', type: 'Excel', size: '9 KB', note: 'Monthly for year 1, annual for 5 years' }
      ],
      guide: [
        { to: 'term-break-even-point', label: 'Break-Even Point' },
        { to: 'term-cash-flow', label: 'Cash Flow' },
        { to: 'term-financial-projections-pro-forma', label: 'Financial Projections (Pro Forma)' },
        { to: 'wbUnit', label: 'Unit economics calculator' },
        { to: 'wbRunway', label: 'Runway & default alive calculator' },
        { to: 'term-unit-economics', label: 'Unit Economics' },
        { to: 'term-gross-margin', label: 'Gross Margin' },
        { to: 'term-burn-rate', label: 'Burn Rate' },
        { to: 'howto-runway', label: 'How do I manage runway and stay alive?' },
        { to: 'term-llc-vs-c-corp', label: 'LLC vs. C-Corp: choosing a legal structure' },
        { to: 'res-mu-law-entrepreneurship-legal-clinic', label: 'The L in B.A.I.L.L.: MU Law Entrepreneurship Legal Clinic' },
        { to: 'res-missouri-sbdc', label: 'Missouri SBDC: free small-business advising' }
      ] },
    { n: 6, date: '2027-03-15', title: 'Learning to pitch',
      summary: 'Turning six weeks of work into ten minutes. The pitch that wins is one the judges can follow: a clear story, slides that show instead of tell, and answers that hold up under questions.',
      covers: [
        'Graphics: replace slides full of bullets with one clear visual.',
        'The murder board: before the real thing, pitch to a panel whose job is to tear it apart with the hardest questions they can find.',
        'Practice, out loud and on a timer, until the ten minutes are comfortable.',
        'Every EA pitch follows the Sequoia Capital template; the rules for the final are in Week 7.',
        'Seven criteria, 100 points: build the deck around how the judges score it (Awards and judging, below).'
      ],
      materials: [
        { label: 'Learning to pitch (slides)', file: 'assets/ea/ea-week6-learning-to-pitch.pptx', type: 'PowerPoint', size: '285 KB', note: 'The Sequoia deck slide by slide, how the judges score, the murder board, judge Q&A, and the rules for the final' }
      ],
      guide: [
        { to: 'howto-pitch-deck', label: 'How do I build my first pitch deck?' },
        { to: 'term-pitch-deck', label: 'Pitch Deck' },
        { to: 'term-traction', label: 'Traction' },
        { to: 'term-tam-sam-som', label: 'TAM / SAM / SOM' },
        { to: 'wbUnit', label: 'Unit economics calculator' },
        { to: 'ea-week-7', label: 'Week 7: the rules for the final' },
        { to: 'ea-awards', label: 'How the judges score the final' }
      ] },
    { n: 7, date: '2027-03-22', title: 'Test pitch and alumni feedback',
      summary: 'Every team gives its full pitch and gets feedback from EA alumni. The work then is to take it to heart, refine the deck, and practice out loud over spring break: there is no workshop the following Monday. Every EA pitch is built on the Sequoia Capital template, the same framework the Playbook walks through.',
      rules: [
        'Follow the order of the Sequoia template. Do not move sections around.',
        'Include, at minimum, every slide in the template.',
        'Add slides if you have more to show.',
        'You may include up to 10 to 15 seconds of video if it helps.',
        'You get 10 minutes to present, then 4 minutes of judge Q&A.',
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
        { to: 'howto-raise', label: 'How do I raise my first capital?' },
        { to: 'ea-awards', label: 'How the judges score the final' }
      ] },
    { n: 8, date: '2027-04-05', title: 'Final run-through',
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
      'The final follows the Week 8 run-through, in Cornell Hall 205. Each business gets 15 minutes: 10 to pitch, 4 for the judges\' questions, and 1 to change over. You are stopped at 10 minutes.',
      'Three judges score every pitch on the seven criteria under Awards and judging. CEI staff choose the panel, and it changes every year; past judges have included Kelsey Raymond, Executive Director of the Griggs Innovators Nexus.',
      'After the last pitch, the judges deliberate in private. Each judge may revise their own scores after comparing the pitches, then signs and submits a final sheet. Scores are not final until then.',
      'CEI averages the judges\' scores and breaks any ties, the CEI director confirms the ranking, and the top five are announced at the winners\' luncheon right after the competition.',
      'The Monday after the final is a short debrief for the whole cohort, under an hour (no dinner). Bring feedback on the program: what to keep, what to add, what to stop. If you placed in the top five, this is also where CEI collects what it needs to pay your award to your business.'
    ],
    guide: [{ to: 'ea-awards', label: 'Awards and judging' }, { to: 'wins', label: 'Past EA winners in the wins feed' }, { to: 'phase-3', label: 'Phase 3: what comes after the money' }]
  },

  /* Miscellaneous: decks that go with the program but are not one
     workshop. Trulaske College of Business talks, in PowerPoint. */
  misc: {
    title: 'Miscellaneous',
    sub: 'Talks from the Trulaske College of Business that sit outside the eight workshops. Read one before you apply, between Mondays, or after the final.',
    items: [
      { label: 'Find a Problem Worth Solving', file: 'assets/ea/ea-misc-find-a-problem-worth-solving.pptx', type: 'PowerPoint', size: '185 KB',
        about: 'For before you apply, or for anyone without an idea yet. Mine your own experience (with an AI interview prompt to help), frame one problem, and put it on a single Problem Gallery slide. Every field on the slide maps to a question on the EA application, and a blank slide to copy is at the end.',
        guide: [{ to: 'howto-problem', label: 'How do I find a problem worth solving?' }, { to: 'howto-cofounder-campus', label: 'How do I find a co-founder on campus?' }] },
      { label: 'What Makes a Great Entrepreneur?', file: 'assets/ea/ea-misc-what-makes-a-great-entrepreneur.pptx', type: 'PowerPoint', size: '85 KB',
        about: 'Five lessons from Ben Horowitz on The a16z Show: the low point is part of the job, build around what your customer actually needs, bet on world-class strengths, widen the lens on talent, and AI changes who gets to build.',
        guide: [{ to: 'howto-cofounder-campus', label: 'How do I find a co-founder on campus?' }, { to: 'howto-lead', label: 'How do I lead as the company grows?' }] },
      { label: 'How to Build a One-Person Services-as-Software Company', file: 'assets/ea/ea-misc-one-person-services-as-software-company.pptx', type: 'PowerPoint', size: '545 KB',
        about: 'Based on Alex Vacca: sell an outcome and use AI to deliver most of it. Picking a niche and an offer, a 12-week roadmap to first clients, and pricing.',
        guide: [{ to: 'howto-first-customers', label: 'How do I secure my first ten customers?' }, { to: 'howto-pricing', label: 'How do I price my product?' }] },
      { label: 'AI As A Superpower', file: 'assets/ea/ea-misc-ai-as-a-superpower.pptx', type: 'PowerPoint', size: '175 KB',
        about: 'Why AI meets the four tests of a superpower (speed, capability, consistency, and cost), how competitive advantage moved from strength to wisdom, and short-, middle-, and long-term actions for students.',
        guide: [{ to: 'ai', label: 'AI for founders, in the guidebook' }] },
      { label: 'Who Will Make a Great Leader?', file: 'assets/ea/ea-misc-who-will-make-a-great-leader.pptx', type: 'PowerPoint', size: '720 KB',
        about: 'David Deming\'s research on HBR IdeaCast: testing for teamwork, management, and leadership, and why the people most eager to manage did worse than managers picked at random. Useful when you pick a co-founder or your first hire.',
        guide: [{ to: 'howto-hires', label: 'How do I make my first key hires?' }, { to: 'howto-equity', label: 'How do I choose a co-founder and split equity?' }] }
    ]
  }
};
