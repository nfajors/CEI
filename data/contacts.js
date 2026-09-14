/* ============================================================
   CONTACTS — the support network.
   bestFor: one line a student can match themselves to ("You have a
   biomedical idea", "You need a lawyer"). tags: which "Who do I talk to
   first?" doors list this person: curious | idea | legal | research |
   biomed | funding | space | community
   ============================================================ */
const CONTACTS = [
  {
    id: 'anandhi-upendran-phd-rac',
    initials: 'AU',
    name: 'Anandhi Upendran, PhD, RAC',
    title: 'Assistant Teaching Professor & BETA Program Director, Department of Medical Pharmacology and Physiology · Director, Biomedical Innovations · School of Medicine, MU',
    linkedin: 'https://www.linkedin.com/in/anandhi-upendran-402128152/',
    bestFor: 'Biomedical and medical-device ideas; the BETA program',
    tags: ['biomed']
  },
  {
    id: 'andrew-reeves',
    initials: 'DR',
    name: 'Andrew (Drew) Reeves',
    title: 'Director of Transformative Technology for Business & Society (C4TT)',
    linkedin: 'https://www.linkedin.com/in/drewreeves/',
    bestFor: 'Ideas built on emerging technology; the C4TT community',
    tags: ['biomed', 'idea']
  },
  {
    id: 'christine-karslake',
    initials: 'CK',
    name: 'Christine Karslake',
    title: 'Associate Vice Chancellor, Innovation, Entrepreneurship & Commercialization · Missouri S&T · NSF Tech Scout for the State of Missouri',
    linkedin: 'https://www.linkedin.com/in/christinekarslake/',
    bestFor: 'Commercializing research; NSF programs and statewide tech scouting',
    tags: ['biomed', 'funding']
  },
  {
    id: 'david-grant',
    initials: 'DG',
    name: 'David Grant',
    title: 'Executive Director, MU Midwest BioAccelerator',
    linkedin: 'https://www.linkedin.com/in/dave-grant-416a392a/',
    bestFor: 'Life-science and biotech ventures; the Midwest BioAccelerator',
    tags: ['biomed', 'funding']
  },
  {
    id: 'don-seitz',
    initials: 'DS',
    name: 'Don Seitz',
    title: 'Director, Entrepreneurship Legal Clinic & Adjunct Professor',
    linkedin: 'https://www.linkedin.com/in/don-seitz-3b1a4018a/',
    bestFor: 'Forming an entity, contracts, and IP — free legal help for student startups',
    tags: ['legal']
  },
  {
    id: 'greg-bier',
    initials: 'GB',
    name: 'Greg Bier',
    title: 'Entrepreneur-in-Residence, Griggs Innovators Nexus & Professor of Management',
    linkedin: 'https://www.linkedin.com/in/greg-bier-241bb936/',
    bestFor: 'Talking through an early idea with an entrepreneur-in-residence',
    tags: ['idea', 'curious']
  },
  {
    id: 'gwen-gray',
    initials: 'GG',
    name: 'Gwen Gray',
    title: 'Business Research Librarian, MU Libraries · Entrepreneurship research guide & one-on-one help',
    linkedin: 'https://www.linkedin.com/in/gwen-gray-2812bb65',
    bestFor: 'Market sizing, industry data, and competitor research — one-on-one',
    tags: ['research', 'idea']
  },
  {
    id: 'kelsey-raymond',
    initials: 'KR',
    name: 'Kelsey Raymond',
    title: 'Executive Director, Griggs Innovators Nexus',
    linkedin: 'https://www.linkedin.com/in/kelseymeyer1/',
    bestFor: 'Griggs Innovators Nexus programs, space, and Entrepreneur Quest',
    tags: ['idea', 'space', 'curious']
  },
  {
    id: 'nique-fajors',
    initials: 'NF',
    name: 'Nique Fajors',
    title: 'Director, Center for Entrepreneurship & Innovation · Assistant Teaching Professor',
    linkedin: 'https://www.linkedin.com/in/nfajors/',
    bestFor: 'Your first conversation about entrepreneurship, and warm introductions to anyone on this page',
    tags: ['curious', 'funding', 'idea']
  },
  {
    id: 'sheila-grant',
    initials: 'SG',
    name: 'Sheila Grant',
    title: 'Curators\' Distinguished Professor of Chemical & Biomedical Engineering',
    linkedin: 'https://www.linkedin.com/in/sheila-grant-562a382a/',
    bestFor: 'Engineering and biomedical research with commercial potential',
    tags: ['biomed']
  },
  {
    id: 'sophia-rivera-hassemer',
    initials: 'SR',
    name: 'Sophia Rivera Hassemer',
    title: 'Assistant Director of Operations, CEI',
    linkedin: 'https://www.linkedin.com/in/srh26/',
    bestFor: 'CEI programs, the Entrepreneurship Alliance, and getting an appointment',
    tags: ['curious']
  },
  {
    id: 'stephen-mukembo',
    initials: 'SM',
    name: 'Stephen Mukembo',
    title: 'Assistant Professor & Director, McQuinn Center for Entrepreneurial Leadership',
    linkedin: 'https://www.linkedin.com/in/stephen-c-mukembo-ph-d-mba-44b50226/',
    bestFor: 'Agriculture, food, and rural ventures; the McQuinn Center',
    tags: ['idea', 'curious']
  },
  {
    id: 'trish-koetting',
    initials: 'TK',
    name: 'Trish Koetting',
    title: 'Entrepreneurship Program Specialist, REDI',
    linkedin: 'https://www.linkedin.com/in/trish-koetting-ba01ab277/',
    bestFor: 'Columbia\'s business community, the REDI grant, and coworking',
    tags: ['funding', 'space']
  }
];

/* "Who do I talk to first?" — the doors at the top of the Contacts section.
   Each door lists contact ids (from CONTACTS above) in the order to try. */
const DOORS = [
  { id: 'curious', title: "I'm curious. No idea yet.", text: 'Start with a twenty-minute conversation. Tell us your major and what you find interesting; we point you to a first step and a first person.', contacts: ['nique-fajors', 'sophia-rivera-hassemer'] },
  { id: 'idea', title: 'I have an idea and want to test it', text: 'An entrepreneur-in-residence, the Nexus team, and the business librarian will help you find the first ten people to talk to.', contacts: ['greg-bier', 'kelsey-raymond', 'gwen-gray', 'stephen-mukembo'] },
  { id: 'legal', title: 'I need a lawyer or real market data', text: 'Free legal help for student startups, and one-on-one research help for market sizing and competitors.', contacts: ['don-seitz', 'gwen-gray'] },
  { id: 'biomed', title: 'It started in a lab, a clinic, or an engineering project', text: 'The people who move research into companies: biomedical, engineering, life science, and emerging technology.', contacts: ['anandhi-upendran-phd-rac', 'david-grant', 'sheila-grant', 'christine-karslake', 'andrew-reeves'] },
  { id: 'funding', title: 'I need money or a place to work', text: 'Grants, space in the Student Center, coworking downtown, and introductions to investors when you are ready.', contacts: ['kelsey-raymond', 'trish-koetting', 'nique-fajors'] }
];
