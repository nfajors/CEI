/* ============================================================
   RESOURCES — every card in the phase grids and the searchable index.
   One entry per resource (no duplicates). Which phase grids show a card
   is decided by PHASES[].resources in data/phases.js.
   Fields:
     id         stable slug, used by PHASES[].resources and by deep links
     name, url  card title and destination (use a mailto: for an intro request)
     tag        type shown on the card and in the Type filter
     throughout true = relevant in every phase ("Throughout" in the index)
     blurb      one or two sentences
     keywords   extra search words (acronyms, people, places)
     who        eligibility in a few words ("MU students, any major")
     cost       "Free", "$25/mo", "Takes equity", "Varies"
     time       "8 weeks", "Weekly, 1 hr", "Rolling"
     anyMajor   true when the program is open to every MU student
     mizzou     true for Mizzou-run programs (the ones we can confirm)
   ============================================================ */
const RESOURCES = [
  {
    id: 'center-for-entrepreneurship-and-innovation',
    name: 'Center for Entrepreneurship & Innovation (CEI)',
    url: 'https://business.missouri.edu/centers-institutes/center-entrepreneurship-and-innovation',
    tag: 'Core',
    throughout: false,
    blurb: 'Trulaske\'s home for entrepreneurial resources, mentorship, and programs.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'griggs-innovators-nexus',
    name: 'Griggs Innovators Nexus',
    url: 'https://research.missouri.edu/griggs-innovators-nexus',
    tag: 'Core',
    throughout: false,
    blurb: 'The hub of Mizzou\'s entrepreneurial community in the MU Student Center — collaborative workspaces, retail storefronts, incubator offices, and programming.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'entrepreneurship-quest-accelerator',
    name: 'Entrepreneurship Quest Accelerator',
    url: 'https://research.missouri.edu/griggs-innovators-nexus/entrepreneur-quest-student-accelerator',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Intensive accelerator program offering courses, mentorship, networking, and $40,000 in prize money for student-led ventures.',
    keywords: 'eq',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'entrepreneurship-alliance',
    name: 'Entrepreneurship Alliance',
    url: 'https://business.missouri.edu/student-development/learning-doing/entrepreneurship-alliance',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'CEI\'s flagship eight-week accelerator taking student founders from idea to launch with mentorship and a chance to pitch for seed funding.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'technology-venture-studio-by-redbud-vc',
    name: 'Technology Venture Studio by Redbud VC',
    url: 'https://research.missouri.edu/griggs-innovators-nexus/technology-venture-studio-redbud-vc',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Griggs Innovators Nexus studio developing student founders with mentorship, networks, and capital. Sponsored by Redbud VC and EquipmentShare.',
    keywords: 'develops entrepreneurs into knowledge from world-class education financing scale kelsey raymond',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'mu-law-entrepreneurship-legal-clinic',
    name: 'MU Law Entrepreneurship Legal Clinic',
    url: 'https://law.missouri.edu/elc/',
    tag: 'Support',
    throughout: false,
    blurb: 'Free legal services for student startups — incorporation, IP, and contracts.',
    keywords: 'intellectual property',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'redi',
    name: 'REDI',
    url: 'https://columbiaredi.com/',
    tag: 'Support',
    throughout: true,
    blurb: 'Regional Economic Development Inc. — Columbia\'s economic development organization. Connects entrepreneurs with the local business ecosystem, offers research and innovation support, and runs the annual REDI Small Business Grant.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'missouri-innovation-center',
    name: 'Missouri Innovation Center (MIC)',
    url: 'https://www.missouriinnovation.com/',
    tag: 'Incubator',
    throughout: false,
    blurb: 'Business incubator for high-growth startups in mid-Missouri — workspace, mentorship, and direct connections to investors.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'missouri-sbdc',
    name: 'Missouri SBDC',
    url: 'https://sbdc.missouri.edu/',
    tag: 'Support',
    throughout: false,
    blurb: 'Free consulting, training, and resources for small businesses and startups across Missouri.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'codefi',
    name: 'Codefi',
    url: 'https://codefiworks.com/',
    tag: 'Support',
    throughout: false,
    blurb: 'Missouri nonprofit supporting founders with startup resources, AI training, software development, and grant funding.',
    keywords: 'codefiworks foundation rural innovation legal services weekend partner not mizzou affiliated',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'missouri-startup-weekend',
    name: 'Missouri Startup Weekend',
    url: 'https://www.mosw.io/',
    tag: 'Event',
    throughout: true,
    blurb: '54-hour event where developers, designers, and business builders form teams and launch startups in front of judges — all in one weekend.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'pitch-competitions',
    name: 'Pitch Competitions',
    url: 'https://airtable.com/appKJ8iWWwDoskkYY/shrh76kDXji6efx3r',
    tag: 'Competition',
    throughout: false,
    blurb: 'Active calendar of Mizzou and regional pitch competitions with cash prizes and funding opportunities.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'mizzou-startup-community',
    name: 'Mizzou Startup Community',
    url: 'https://www.mizzoustartups.com/',
    tag: 'Community',
    throughout: true,
    blurb: 'Online platform connecting Mizzou entrepreneurs, alumni, and mentors.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'collegiate-entrepreneurs-organization',
    name: 'Collegiate Entrepreneurs\' Organization (CEO)',
    url: 'https://engage.missouri.edu/feeds?type=club&type_id=35576&tab=about',
    tag: 'Student Org',
    throughout: true,
    blurb: 'The only student organization on campus dedicated to entrepreneurs. The first stop for building your peer network at Mizzou.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'creative-mornings-columbia',
    name: 'Creative Mornings Columbia',
    url: 'https://creativemornings.com/cities/COU',
    tag: 'Event',
    throughout: true,
    blurb: 'Monthly breakfast lecture series for Columbia\'s creative and entrepreneurial community.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: '1-million-cups-columbia',
    name: '1 Million Cups Columbia',
    url: 'https://www.1millioncups.com/s/account/0014W00002AqQdfQAF/columbia-mo',
    tag: 'Event',
    throughout: true,
    blurb: 'Weekly gathering where local entrepreneurs present their work to the community and receive feedback.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'mosourcelink',
    name: 'MOSourceLink',
    url: 'https://www.mosourcelink.com',
    tag: 'Networking',
    throughout: true,
    blurb: 'Connection to Missouri\'s entire small business support network across the state.',
    keywords: 'statewide resource navigator partners',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'columbia-chamber-of-commerce',
    name: 'Columbia Chamber of Commerce',
    url: 'https://comochamber.com',
    tag: 'Networking',
    throughout: true,
    blurb: 'Local business community and networking hub for Columbia-based ventures.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'main-street-summit',
    name: 'Main Street Summit',
    url: 'https://www.mainstreetsummit.com/',
    tag: 'Event',
    throughout: true,
    blurb: 'Annual entrepreneurship conference in Columbia featuring speakers, panels, and networking, with a strong investor presence each year.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'trulaske-alumni-entrepreneurs',
    name: 'Trulaske Alumni Entrepreneurs',
    url: 'https://business.missouri.edu/centers-institutes/center-entrepreneurship-and-innovation',
    tag: 'Mentorship',
    throughout: true,
    blurb: 'Connect with Trulaske alumni founders and operators for mentorship and introductions.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'trulaske-vcs-and-angels',
    name: 'Trulaske VCs & Angels',
    url: 'https://business.missouri.edu/centers-institutes/center-entrepreneurship-and-innovation',
    tag: 'Funding',
    throughout: false,
    blurb: 'Network of Trulaske alumni who are venture capitalists and angel investors.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'redbud-vc',
    name: 'Redbud VC',
    url: 'https://redbud.vc/',
    tag: 'VC',
    throughout: false,
    blurb: 'Missouri-based venture capital firm investing in pre-seed and seed-stage startups.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'missouri-technology-corporation',
    name: 'Missouri Technology Corporation (MTC)',
    url: 'https://www.missouritechnology.com/',
    tag: 'State',
    throughout: false,
    blurb: 'State-funded organization providing capital and support for Missouri-based technology startups.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'allen-angel-fund',
    name: 'Allen Angel Fund',
    url: 'https://business.missouri.edu/student-development/learning-doing/allen-angel-capital-education-program',
    tag: 'Student Fund',
    throughout: false,
    blurb: 'Trulaske\'s student-managed angel investment fund. Real capital, real deals, real students.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'gin-retail-program',
    name: 'GIN Retail Program',
    url: 'https://research.missouri.edu/griggs-innovators-nexus/retail-space-for-students',
    tag: 'Retail',
    throughout: false,
    blurb: 'Griggs Innovators Nexus retail program for student consumer-product ventures.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'gin-incubator-office-space',
    name: 'GIN Incubator Office Space',
    url: 'https://research.missouri.edu/griggs-innovators-nexus/incubator-office-space-for-students',
    tag: 'Incubator',
    throughout: false,
    blurb: 'Rent-free 100-sq-ft office space in the MU Student Center, awarded competitively for an academic year — ideal for e-commerce and software ventures.',
    keywords: 'griggs innovators nexus square foot ecommerce',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'centennial-investors',
    name: 'Centennial Investors',
    url: 'https://www.centennialinvestors.com/',
    tag: 'VC',
    throughout: false,
    blurb: 'Early-stage venture capital firm focused on Midwest entrepreneurs and ventures.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'st-louis-arch-angels',
    name: 'St. Louis Arch Angels',
    url: 'https://www.stlouisarchangels.com/',
    tag: 'Angel',
    throughout: false,
    blurb: 'Network of accredited investors funding early-stage Missouri-region startups, typically $50,000–$500,000 per round — a range often underserved by institutional VCs. Since 2005: $122.7M invested across 156+ ventures. Recent exit: Acera Surgical, acquired by Solventum for up to $850M.',
    keywords: '50000 500000 million steve trampe co-founder',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'arch-grants',
    name: 'Arch Grants',
    url: 'https://archgrants.org/programs/startup-competition/',
    tag: 'Grant',
    throughout: false,
    blurb: '$75,000 equity-free grants (plus $25,000 relocation) for early-stage startups that headquarter in St. Louis for at least one year. Idea-stage through pre-Series A.',
    keywords: '75000',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'redi-small-business-grant',
    name: 'REDI Small Business Grant',
    url: 'https://columbiaredi.com/small-business-grant/',
    tag: 'Grant',
    throughout: false,
    blurb: 'Equity-free grants — a $50,000 pool split among eight entrepreneurs (two $10,000, six $5,000). Open to any entrepreneur with a City of Columbia business license. Funded by the City, administered by REDI. Next cycle: spring 2027.',
    keywords: 'non-dilutive funding 50000 5000 10000 locally owned for-profit boone county missouri grow',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'y-combinator',
    name: 'Y Combinator',
    url: 'https://www.ycombinator.com/',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'The most prestigious startup accelerator in the world. Three-month program in the Bay Area.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'techstars',
    name: 'Techstars',
    url: 'https://www.techstars.com/',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Global network of accelerators, mentors, and investors with vertical-specific programs.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'permanent-equity',
    name: 'Permanent Equity',
    url: 'https://permanentequity.com/',
    tag: 'Investment',
    throughout: false,
    blurb: 'Investment firm focused on acquiring and growing operating businesses for the long term.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'angellist',
    name: 'AngelList',
    url: 'https://www.angellist.com/',
    tag: 'Platform',
    throughout: false,
    blurb: 'Platform connecting startups with investors, syndicates, and operating talent.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'nsf-i-corps',
    name: 'NSF I-Corps',
    url: 'https://new.nsf.gov/funding/initiatives/i-corps',
    tag: 'Federal',
    throughout: false,
    blurb: 'National Science Foundation program teaching academic founders to commercialize research. MU is part of the Great Lakes regional hub.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'gener8tor',
    name: 'gener8tor',
    url: 'https://www.gener8tor.com/',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Midwest-focused accelerator network with programs across multiple states. Strong for B2B SaaS, fintech, and consumer ventures.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'capital-factory',
    name: 'Capital Factory',
    url: 'https://www.capitalfactory.com/',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Texas-based accelerator and venture community. Active in deep tech, defense, energy, and software.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  },
  {
    id: 'founder-institute',
    name: 'Founder Institute',
    url: 'https://fi.co/',
    tag: 'Accelerator',
    throughout: false,
    blurb: 'Pre-seed accelerator with chapters globally. Structured 4-month curriculum for first-time founders building from scratch.',
    who: '',
    cost: '',
    time: '',
    anyMajor: false
  }
];
