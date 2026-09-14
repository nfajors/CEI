/* ============================================================
   GLOSSARY — plain definitions with the phase they matter most.
   cat: one of the category chips in the glossary section.
   start: true puts the term under the "Start here" chip.
   ============================================================ */
const GLOSSARY = [
  {
    term: 'MVP (Minimum Viable Product)',
    phase: 'Phase 1',
    cat: 'Product & Market',
    start: true,
    def: 'The simplest version of your product that lets you test your core assumption with real users and start learning.',
    eg: 'Airbnb\'s first MVP was a basic site renting three air mattresses in the founders\' apartment.'
  },
  {
    term: 'Product-Market Fit',
    phase: 'Phase 1–2',
    cat: 'Product & Market',
    start: true,
    def: 'The point where you\'re in a good market with a product that satisfies it — demand pulls the product out of you.',
    eg: 'You feel it when customers buy faster than you can build and usage grows on its own.'
  },
  {
    term: 'Customer Discovery',
    phase: 'Phase 1',
    cat: 'Product & Market',
    start: true,
    def: 'Structured conversations with potential customers to validate the problem before building the solution.',
    eg: 'Interviewing 20 small-business owners about how they currently handle payroll before writing any code.'
  },
  {
    term: 'Value Proposition',
    phase: 'Phase 1',
    cat: 'Product & Market',
    start: true,
    def: 'A clear statement of the benefit you deliver, for whom, and why it\'s better than the alternative.',
    eg: '"Bookkeeping software that files your taxes automatically, for freelancers who hate paperwork."'
  },
  {
    term: 'TAM / SAM / SOM',
    phase: 'Phase 1–3',
    cat: 'Product & Market',
    def: 'Total Addressable, Serviceable Available, and Serviceable Obtainable Market — nested estimates of market size from broadest to what you can realistically capture.',
    eg: 'TAM: all US restaurants. SAM: Midwest independents. SOM: 200 you can reach in year one.'
  },
  {
    term: 'Pitch Deck',
    phase: 'Phase 1–3',
    cat: 'Funding & Investors',
    start: true,
    def: 'A short slide presentation (usually 10–12 slides) that tells your startup\'s story to investors or judges.',
    eg: 'Problem, solution, market, traction, team, ask — the classic Sequoia structure.'
  },
  {
    term: 'Traction',
    phase: 'Phase 1–3',
    cat: 'Growth & Strategy',
    start: true,
    def: 'Measurable evidence that your venture is working — users, revenue, growth, or engagement.',
    eg: 'Going from 0 to 1,000 weekly active users in three months is traction.'
  },
  {
    term: 'Runway',
    phase: 'All phases',
    cat: 'Metrics & Money',
    start: true,
    def: 'How many months your company can operate before it runs out of cash at its current burn rate.',
    eg: '$120K in the bank and $10K/month net burn equals 12 months of runway.'
  },
  {
    term: 'Burn Rate',
    phase: 'Phase 3–4',
    cat: 'Metrics & Money',
    def: 'The rate at which a company spends its cash reserves, usually expressed per month.',
    eg: 'Spending $30K and earning $10K in a month means a net burn rate of $20K.'
  },
  {
    term: 'Default Alive / Default Dead',
    phase: 'Phase 3',
    cat: 'Metrics & Money',
    def: 'Whether, on current growth and expenses, you\'d reach profitability before running out of money (alive) or not (dead).',
    eg: 'Paul Graham urges every founder to know which one they are at all times.'
  },
  {
    term: 'Bootstrapping',
    phase: 'All phases',
    cat: 'Funding & Investors',
    start: true,
    def: 'Building a company using personal savings and revenue rather than outside investment.',
    eg: 'Mailchimp grew to a billion-dollar business without ever taking venture capital.'
  },
  {
    term: 'Pre-Seed / Seed',
    phase: 'Phase 3',
    cat: 'Funding & Investors',
    def: 'The earliest formal funding rounds — pre-seed gets you to a prototype, seed gets you to product-market fit.',
    eg: 'A $500K pre-seed round to build the product and hire two engineers.'
  },
  {
    term: 'Series A / B / C',
    phase: 'Phase 4',
    cat: 'Funding & Investors',
    def: 'Progressively larger venture rounds that fund scaling after product-market fit is established.',
    eg: 'A $10M Series A to expand sales and enter new markets.'
  },
  {
    term: 'Angel Investor',
    phase: 'Phase 3',
    cat: 'Funding & Investors',
    def: 'An individual who invests their own money in early-stage startups, often the first outside check.',
    eg: 'A successful local founder writing a $25K angel check into a student venture.'
  },
  {
    term: 'Venture Capital (VC)',
    phase: 'Phase 3–4',
    cat: 'Funding & Investors',
    def: 'Professionally managed funds that invest in high-growth startups in exchange for equity.',
    eg: 'Redbud VC investing in a pre-seed Missouri startup.'
  },
  {
    term: 'Equity',
    phase: 'All phases',
    cat: 'Equity & Deal Terms',
    start: true,
    def: 'Ownership in a company, expressed as shares or a percentage.',
    eg: 'Giving a co-founder 50% equity means they own half the company.'
  },
  {
    term: 'Dilution',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'The reduction in existing owners\' percentage stake when new shares are issued, typically during fundraising.',
    eg: 'Raising a round that issues 20% new shares dilutes every prior owner proportionally.'
  },
  {
    term: 'Cap Table',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'A record of who owns what in the company — founders, investors, and option holders.',
    eg: 'After a seed round, the cap table shows founders at 70%, investors at 20%, option pool at 10%.'
  },
  {
    term: 'SAFE',
    phase: 'Phase 3',
    cat: 'Equity & Deal Terms',
    def: 'Simple Agreement for Future Equity — a common instrument to raise early money that converts to shares in a later round.',
    eg: 'Y Combinator companies often raise on a SAFE before a priced round.'
  },
  {
    term: 'Convertible Note',
    phase: 'Phase 3',
    cat: 'Equity & Deal Terms',
    def: 'Short-term debt that converts into equity at a later financing, often with a discount or valuation cap.',
    eg: 'A $100K note converting to equity at the next round with a 20% discount.'
  },
  {
    term: 'Valuation',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'The estimated worth of a company, used to determine how much equity an investment buys.',
    eg: 'A $1M investment at a $5M pre-money valuation buys roughly 17%.'
  },
  {
    term: 'Term Sheet',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'A non-binding document outlining the key terms of an investment before formal contracts.',
    eg: 'A term sheet specifying amount, valuation, board seats, and investor rights.'
  },
  {
    term: 'Unit Economics',
    phase: 'Phase 2–4',
    cat: 'Metrics & Money',
    def: 'The direct revenues and costs associated with a single unit — one customer or one sale.',
    eg: 'If a customer pays $100 and costs $40 to serve, your contribution margin is $60.'
  },
  {
    term: 'LTV / CAC',
    phase: 'Phase 2–4',
    cat: 'Metrics & Money',
    def: 'Lifetime Value of a customer versus Customer Acquisition Cost — a core measure of business health.',
    eg: 'An LTV of $900 against a CAC of $300 is a healthy 3:1 ratio.'
  },
  {
    term: 'Churn',
    phase: 'Phase 2–4',
    cat: 'Metrics & Money',
    def: 'The rate at which customers stop using or paying for your product over a period.',
    eg: 'Losing 5 of 100 subscribers in a month is 5% monthly churn.'
  },
  {
    term: 'Go-to-Market (GTM)',
    phase: 'Phase 2–3',
    cat: 'Growth & Strategy',
    def: 'The strategy for reaching customers and delivering your product — channels, pricing, and positioning.',
    eg: 'A GTM plan that targets campus clubs first, then expands to other universities.'
  },
  {
    term: 'Pivot',
    phase: 'Phase 1–2',
    cat: 'Growth & Strategy',
    start: true,
    def: 'A structured change in strategy to test a new fundamental hypothesis while keeping what you\'ve learned.',
    eg: 'Slack began as a gaming company before pivoting to its internal chat tool.'
  },
  {
    term: 'Cohort',
    phase: 'All phases',
    cat: 'Growth & Strategy',
    def: 'A group of users or companies grouped by a shared start point, used to analyze behavior over time — also a single class in an accelerator.',
    eg: 'Tracking whether January\'s signups retain better than December\'s.'
  },
  {
    term: 'Accelerator',
    phase: 'Phase 1–3',
    cat: 'Funding & Investors',
    start: true,
    def: 'A fixed-term, cohort-based program offering mentorship, resources, and often capital to speed up startups.',
    eg: 'Y Combinator\'s three-month program ending in a demo day.'
  },
  {
    term: 'Demo Day',
    phase: 'Phase 3',
    cat: 'Funding & Investors',
    def: 'The event ending an accelerator where startups pitch to a room of investors.',
    eg: 'Presenting your traction to 200 investors at the end of the program.'
  },
  {
    term: 'ARR / MRR',
    phase: 'Phase 3–4',
    cat: 'Metrics & Money',
    def: 'Annual and Monthly Recurring Revenue — the predictable subscription revenue a business earns each year or month.',
    eg: '100 customers paying $50/month is $5,000 MRR, or $60,000 ARR.'
  },
  {
    term: 'Gross Margin',
    phase: 'Phase 3–4',
    cat: 'Metrics & Money',
    def: 'The percentage of revenue left after the direct cost of delivering your product or service.',
    eg: 'Selling software for $100 that costs $10 to deliver is a 90% gross margin.'
  },
  {
    term: 'Net Revenue Retention (NRR)',
    phase: 'Phase 4',
    cat: 'Metrics & Money',
    def: 'How much recurring revenue you keep and grow from existing customers over time, including upgrades and churn.',
    eg: 'An NRR above 100% means your existing customers spend more each year, even before adding new ones.'
  },
  {
    term: 'Annual Run Rate',
    phase: 'Phase 3–4',
    cat: 'Metrics & Money',
    def: 'A projection of yearly revenue based on current performance, usually the latest month times twelve.',
    eg: 'A month with $20K revenue implies a $240K annual run rate.'
  },
  {
    term: 'Down Round',
    phase: 'Phase 4',
    cat: 'Equity & Deal Terms',
    def: 'A funding round priced at a lower valuation than the previous one, which dilutes existing shareholders more heavily.',
    eg: 'Raising at a $5M valuation after a prior $8M round is a down round.'
  },
  {
    term: 'Vesting',
    phase: 'Phase 3',
    cat: 'Equity & Deal Terms',
    def: 'Earning equity gradually over time rather than all at once, so founders and employees stay committed.',
    eg: 'A standard schedule vests over four years with a one-year cliff.'
  },
  {
    term: 'Cliff',
    phase: 'Phase 3',
    cat: 'Equity & Deal Terms',
    def: 'An initial period you must complete before any equity vests at all.',
    eg: 'Leaving before your one-year cliff means you walk away with zero shares.'
  },
  {
    term: 'Option Pool',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'Equity set aside to grant future employees, typically 10–20% of the company.',
    eg: 'Investors often require expanding the option pool before a round closes.'
  },
  {
    term: 'Pro Rata Rights',
    phase: 'Phase 4',
    cat: 'Equity & Deal Terms',
    def: 'An investor\'s right to invest in future rounds to maintain their ownership percentage.',
    eg: 'An early investor exercises pro rata rights to keep their 5% stake from diluting.'
  },
  {
    term: 'Liquidation Preference',
    phase: 'Phase 4',
    cat: 'Equity & Deal Terms',
    def: 'A term defining who gets paid first, and how much, when a company is sold or wound down.',
    eg: 'A 1x preference means investors recover their money before founders see proceeds.'
  },
  {
    term: '409A Valuation',
    phase: 'Phase 3–4',
    cat: 'Equity & Deal Terms',
    def: 'An independent appraisal of a private company\'s stock used to set fair option strike prices.',
    eg: 'A fresh 409A is required before issuing new employee stock options.'
  },
  {
    term: 'Moat',
    phase: 'Phase 1–4',
    cat: 'Growth & Strategy',
    def: 'A durable competitive advantage that protects a business from competitors over time.',
    eg: 'Network effects, proprietary data, and switching costs are common moats.'
  },
  {
    term: 'Network Effect',
    phase: 'Phase 2–4',
    cat: 'Growth & Strategy',
    def: 'When a product becomes more valuable as more people use it.',
    eg: 'Each new user makes a marketplace more useful to everyone else on it.'
  },
  {
    term: 'Flywheel',
    phase: 'Phase 2–4',
    cat: 'Growth & Strategy',
    def: 'A self-reinforcing loop where each part of the business accelerates the next.',
    eg: 'More sellers attract more buyers, which attracts more sellers.'
  },
  {
    term: 'North Star Metric',
    phase: 'Phase 2–4',
    cat: 'Growth & Strategy',
    def: 'The single measure that best captures the core value your product delivers to customers.',
    eg: 'For a messaging app, it might be daily messages sent.'
  },
  {
    term: 'Retention',
    phase: 'Phase 2–4',
    cat: 'Growth & Strategy',
    def: 'The share of users who keep coming back over a given period — often more important than new signups.',
    eg: 'If 40% of new users are still active after 30 days, that\'s 30-day retention.'
  },
  {
    term: 'Lean Canvas',
    phase: 'Phase 1',
    cat: 'Product & Market',
    def: 'A one-page business-model template for quickly sketching and testing a startup idea.',
    eg: 'Founders map problem, solution, channels, and revenue on a single Lean Canvas.'
  },
  {
    term: 'Beachhead Market',
    phase: 'Phase 1–2',
    cat: 'Product & Market',
    def: 'A focused initial market you can dominate before expanding to larger ones.',
    eg: 'Facebook\'s beachhead was Harvard students before opening to the world.'
  },
  {
    term: 'Early Adopter',
    phase: 'Phase 1',
    cat: 'Product & Market',
    def: 'A customer willing to try an unfinished product because the problem is painful enough.',
    eg: 'Early adopters tolerate rough edges in exchange for solving an urgent need.'
  },
  {
    term: 'Incubator',
    phase: 'Phase 1',
    cat: 'Growth & Strategy',
    start: true,
    def: 'A program that helps very early founders develop an idea, often with workspace and mentorship but little or no capital.',
    eg: 'An incubator gives a student team desk space and advisors while they build a prototype.'
  },
  {
    term: 'SWOT Analysis',
    phase: 'Phase 1–4',
    cat: 'Growth & Strategy',
    def: 'A simple framework for assessing a venture\'s internal Strengths and Weaknesses and external Opportunities and Threats.',
    eg: 'A founder maps SWOT before a pivot to see where they\'re strong and exposed.'
  },
  {
    term: 'PESTLE Analysis',
    phase: 'Phase 1–4',
    cat: 'Growth & Strategy',
    def: 'A scan of the macro forces shaping a market: Political, Economic, Social, Technological, Legal, and Environmental.',
    eg: 'A health-tech startup runs a PESTLE to anticipate regulatory and demographic shifts.'
  },
  {
    term: 'Porter\'s Five Forces',
    phase: 'Phase 1–4',
    cat: 'Growth & Strategy',
    def: 'A framework for judging an industry\'s attractiveness via five forces: rivalry, new entrants, substitutes, supplier power, and buyer power.',
    eg: 'Strong supplier power and easy substitutes signal a tough industry to enter.'
  },
  {
    term: 'Business Model',
    phase: 'Phase 1–2',
    cat: 'Product & Market',
    start: true,
    def: 'How your venture makes money: who pays, how much, how often, and what it costs you to deliver. Every company has one, even a side hustle.',
    eg: 'A campus meal-prep service charges $60 a week per student, spends $35 on food and containers, and keeps $25. That is the business model in one sentence.'
  },
  {
    term: 'Side Hustle vs. Startup',
    phase: 'Phase 0–1',
    cat: 'Growth & Strategy',
    start: true,
    def: 'A side hustle earns money now, at a scale you can run yourself. A startup is a bet on something that could grow far larger than you, usually with more risk and more outside help. Both count; knowing which one you are building tells you which resources to use.',
    eg: 'Tutoring twenty students a semester is a side hustle. Building a tutoring app for every campus in the SEC is a startup. The guidebook serves both; the accelerators and investors serve the second.'
  },
  {
    term: 'Nondilutive Funding',
    phase: 'Phase 1–3',
    cat: 'Funding & Investors',
    start: true,
    def: 'Money you do not give up ownership for: grants, prizes, competitions, and customer revenue. The best first money for a student venture, because you keep 100% of the company.',
    eg: 'Winning prize money at Entrepreneurship Quest, a REDI Small Business Grant, or an Arch Grants award is nondilutive. A $5,000 angel check for 5% of the company is not.'
  },
  {
    term: 'LLC vs. C-Corp',
    phase: 'Phase 3',
    cat: 'Equity & Deal Terms',
    start: true,
    def: 'The two entity types student founders choose between. An LLC is simple and cheap and suits a small business or side hustle. A Delaware C-Corp is what venture investors expect if you plan to raise money and issue stock.',
    eg: 'A photography business stays an LLC. A software startup that wants angel investment forms a C-Corp so it can issue shares. The MU Law Entrepreneurship Legal Clinic will help you decide for free.'
  },
  {
    term: 'Intellectual Property (IP)',
    phase: 'Phase 1–3',
    cat: 'Equity & Deal Terms',
    start: true,
    def: 'Ideas and creations the law lets you own: patents (inventions), trademarks (names and logos), copyrights (writing, code, designs), and trade secrets. If your venture grows out of MU research or coursework, ask who owns the IP before you build on it.',
    eg: 'A student who invents a new sensor in a university lab talks to MU\'s technology transfer office about a patent and license before pitching it as a company.'
  },
  {
    term: 'NDA (Non-Disclosure Agreement)',
    phase: 'Phase 1–2',
    cat: 'Equity & Deal Terms',
    start: true,
    def: 'A contract that says the other party will keep what you tell them confidential. Useful with a manufacturer or a contractor; almost never signed by investors, mentors, or judges, so do not let the lack of one stop you from talking about your idea.',
    eg: 'An investor at a pitch night politely declines to sign your NDA. That is normal. Ideas are cheap; execution is what they are evaluating.'
  },
  {
    term: 'SBIR / STTR',
    phase: 'Phase 2–3',
    cat: 'Funding & Investors',
    def: 'Federal grant programs (Small Business Innovation Research and Small Business Technology Transfer) that fund early technology development with nondilutive money, often $150,000 to $300,000 in a first phase. Built for science and engineering ventures, including ones spun out of university research.',
    eg: 'A Mizzou engineering team commercializing a lab discovery applies for an NSF SBIR Phase I award while going through NSF I-Corps.'
  }
];
