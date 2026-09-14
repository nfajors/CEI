/* ============================================================
   ALUMNI — the predecessors. field = what they studied; business = true
   when that was a business degree (used for the "any major" note).
   ============================================================ */
const ALUMNI = [
  {
    initials: 'HB',
    name: 'Hayes Barnard',
    degree: 'BSBA 1995',
    field: 'Business',
    business: true,
    blurb: 'Founder, chair and CEO of GoodLeap, the largest U.S. fintech focused on home improvement. Also founder of GivePower (clean water/electricity nonprofit serving 2M+ people across 32 countries) and GoodFinch (sustainable asset management). Received an honorary doctorate from Mizzou in spring 2026.'
  },
  {
    initials: 'AC',
    name: 'Andrew Cherng',
    degree: 'MS Applied Mathematics 1972',
    field: 'Mathematics',
    business: false,
    blurb: 'Founder and chairman of Panda Restaurant Group. Built Panda Express into one of the largest and most successful fast-casual Asian dining chains in the United States.'
  },
  {
    initials: 'WF',
    name: 'Wade Foster',
    degree: 'BS IE 2009, MBA 2010',
    field: 'Industrial Engineering',
    business: false,
    blurb: 'Co-founder and CEO of Zapier, a web automation platform connecting over 5,000 apps. Y Combinator alum and remote-work pioneer.'
  },
  {
    initials: 'AG',
    name: 'Alan C. Greenberg',
    degree: 'BA Business 1949',
    field: 'Business',
    business: true,
    blurb: 'Longtime CEO and chairman of Bear Stearns. Played a central role in building the firm into a major Wall Street investment bank known for its trading and client-focused culture.'
  },
  {
    initials: 'RG',
    name: 'Robert Griggs',
    degree: 'BS Agricultural Economics 1977',
    field: 'Agricultural Economics',
    business: false,
    blurb: 'Founder and Chairman of Trinity Products, one of the nation\'s leading producers of large-structure spiralweld steel pipe. Founding sponsor of the Robert and Shelly Griggs Family Innovators Nexus at Mizzou.'
  },
  {
    initials: 'BH',
    name: 'Bryan Helmig',
    degree: 'Finance, attended 2005–2011',
    field: 'Finance',
    business: true,
    blurb: 'Co-founder and CTO of Zapier, the pioneering no-code automation platform connecting thousands of apps for millions of users. Helped scale the company from a Columbia Startup Weekend project into a multi-billion-dollar global leader.'
  },
  {
    initials: 'DJ',
    name: 'Dave Johnson',
    degree: 'BSBA 1978',
    field: 'Business',
    business: true,
    blurb: 'Co-founder of Chicken N Pickle, a fast-growing entertainment and dining concept combining restaurant, sports, and social activities.'
  },
  {
    initials: 'RK',
    name: 'Richard Kinder',
    degree: 'BA 1966, JD 1968',
    field: 'Arts & Law',
    business: false,
    blurb: 'Co-founder and executive chairman of Kinder Morgan, one of North America\'s largest energy infrastructure companies, with an extensive network of pipelines and terminals. A billionaire energy entrepreneur.'
  },
  {
    initials: 'ES',
    name: 'E. Stanley Kroenke',
    degree: 'BSBA 1971, MBA 1973',
    field: 'Business',
    business: true,
    blurb: 'Founder of THF Realty. Owner of the LA Rams, Denver Nuggets, Colorado Avalanche, and Arsenal Football Club.'
  },
  {
    initials: 'JK',
    name: 'Josh Kroenke',
    degree: 'BSBA 2004',
    field: 'Business',
    business: true,
    blurb: 'President and Vice Chairman of the Denver Nuggets and Colorado Avalanche. Oversees sports franchise operations.'
  },
  {
    initials: 'HL',
    name: 'Harry J. Lloyd',
    degree: 'BJ 1950',
    field: 'Journalism',
    business: false,
    blurb: 'Founder of House of Lloyd, a successful direct-sales gift company that served millions of customers. Also developed the upscale Loch Lloyd residential community and country club near Kansas City.'
  },
  {
    initials: 'GM',
    name: 'Greg Maday',
    degree: 'BSBA 1986',
    field: 'Business',
    business: true,
    blurb: 'Chairman and CEO of SpecChem, LLC, a leading manufacturer of concrete-related building products. Co-owner of Sporting Kansas City and co-founder of Homefield Kansas City. Serves on the Trulaske Dean\'s Advisory Board.'
  },
  {
    initials: 'OM',
    name: 'Otto Maly',
    degree: 'BA Biological Sciences 1978',
    field: 'Biological Sciences',
    business: false,
    blurb: 'Chairman of Maly Commercial Realty and President of Kroenke Holdings. Chairman of Bluebird Network. Serves on Trulaske\'s Strategic Development Board.'
  },
  {
    initials: 'LM',
    name: 'Lindsay Mullenger',
    degree: 'BSBA 2010',
    field: 'Business',
    business: true,
    blurb: 'Founder and CEO of Petite Keep, an online retailer of custom, hand-crafted keepsake trunks grown into a multimillion-dollar business. Pitched on ABC\'s "Shark Tank" (Season 16) and secured a rare multi-investor deal. Mom of five.'
  },
  {
    initials: 'KR',
    name: 'Kelsey Raymond',
    degree: 'BSBA 2011',
    field: 'Business',
    business: true,
    blurb: 'Co-founder of Influence & Co. Forbes 30 Under 30. Now Executive Director of Griggs Innovators Nexus.'
  },
  {
    initials: 'RO',
    name: 'Rodger O. Riney',
    degree: 'BS CivE 1968, MBA 1969',
    field: 'Civil Engineering',
    business: false,
    blurb: 'Founder of Scottrade, one of the largest online brokerage firms in the United States. Sold to TD Ameritrade for $4 billion.'
  },
  {
    initials: 'MR',
    name: 'Matthew K. Rose',
    degree: 'BS Marketing 1981',
    field: 'Marketing',
    business: true,
    blurb: 'Longtime chairman, CEO, and president of Burlington Northern Santa Fe (BNSF), one of North America\'s largest freight railroads. Led significant operational growth and strategic development over more than two decades.'
  },
  {
    initials: 'JS',
    name: 'Jeffrey E. Smith',
    degree: 'BSBA 1972',
    field: 'Business',
    business: true,
    blurb: 'Founder and president of JES Holdings, LLC. Affordable housing pioneer with more than 15,000 housing units developed. Founded the Jeffrey E. Smith Institute of Real Estate & Capital Markets at Trulaske.'
  },
  {
    initials: 'RS',
    name: 'Roger W. Straus Jr.',
    degree: 'BJ 1939',
    field: 'Journalism',
    business: false,
    blurb: 'Co-founder and longtime chairman of Farrar, Straus and Giroux, the influential independent publishing house celebrated for literary excellence and a distinguished roster of authors, including many Nobel laureates.'
  },
  {
    initials: 'ST',
    name: 'Steve Trampe',
    degree: 'BSBA Finance & Real Estate 1974',
    field: 'Finance & Real Estate',
    business: true,
    blurb: 'Founder or co-founder of seven companies across five industries. Former Chairman of Sequoia Sciences (plant-based drug discovery), former Chairman of the Building Arts Foundation, former Vice Chairman of Opera America, and founder of Owen Development. Co-founder of Arch Angels. Active mentor and pitch competition judge.'
  },
  {
    initials: 'CT',
    name: 'Chad Troutwine',
    degree: 'JD 1996',
    field: 'Law',
    business: false,
    blurb: 'Co-founder of Veritas Prep and Freakonomics Media. A serial entrepreneur who has produced more than 15 films and owns Torn Label Brewing Company, building ventures across education, media, and consumer products.'
  },
  {
    initials: 'RJ',
    name: 'Robert J. Trulaske, Sr.',
    degree: 'BSBA 1940',
    field: 'Business',
    business: true,
    blurb: 'Founder of True Manufacturing, the world\'s leading manufacturer of commercial refrigeration equipment. The Trulaske College of Business is named in his honor.'
  },
  {
    initials: 'SW',
    name: 'Sam Walton',
    degree: 'BSBA 1940',
    field: 'Business',
    business: true,
    blurb: 'Founder of Walmart, the world\'s largest retailer. Started with a single store in Bentonville, Arkansas and built it into a global empire.'
  }
];
