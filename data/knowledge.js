/* ============================================================
   KNOWLEDGE HUB — curated reading and watching. An item without a url is
   listed as a plain title (a book). note: short label after a book title.
   ============================================================ */
const KNOWLEDGE = [
  {
    icon: '❖', title: 'Founder\'s Bookshelf', sub: 'Start here',
    items: [
      { text: 'All In Startup · Diana Kander', url: 'https://dianakander.com/books/' },
      { text: 'Talking to Humans · Constable', url: null, note: 'customer discovery' },
      { text: 'Business Model Generation · Osterwalder & Pigneur', url: null, note: 'design the model' },
      { text: 'Disciplined Entrepreneurship · Aulet', url: null },
      { text: 'The Lean Startup · Ries', url: null },
      { text: 'Zero to One · Thiel', url: null },
      { text: 'Founders at Work · Livingston', url: null },
      { text: 'The Hard Thing About Hard Things · Horowitz', url: null },
      { text: 'Crossing the Chasm · Moore', url: null },
      { text: 'Hooked · Eyal', url: null }
    ]
  },
  {
    icon: '◆', title: 'Methodology', sub: 'The founder\'s canon',
    items: [
      { text: 'Disciplined Entrepreneurship (Aulet)', url: 'https://www.amazon.com/Disciplined-Entrepreneurship-Steps-Successful-Startup/dp/1118692284' },
      { text: 'MIT Entrepreneurship 101 (free edX)', url: 'https://www.edx.org/learn/entrepreneurship/massachusetts-institute-of-technology-entrepreneurship-101-who-is-your-customer' },
      { text: 'MIT 15.390 New Enterprises', url: 'https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/' },
      { text: 'Stanford eCorner', url: 'https://ecorner.stanford.edu/' },
      { text: 'Steve Blank · Lean LaunchPad', url: 'https://steveblank.com/category/lean-launchpad/' }
    ]
  },
  {
    icon: '▶', title: 'YouTube Channels', sub: 'Watch & learn',
    items: [
      { text: 'Stanford eCorner', url: 'https://www.youtube.com/user/ecorner' },
      { text: 'This Week in Startups', url: 'https://www.youtube.com/c/thisweekin' },
      { text: 'Y Combinator', url: 'https://www.youtube.com/c/ycombinator' },
      { text: 'a16z', url: 'https://www.youtube.com/@a16z' }
    ]
  },
  {
    icon: '✎', title: 'Foundational Essays', sub: 'Read deeply',
    items: [
      { text: 'Paul Graham Essays', url: 'https://paulgraham.com/articles.html' },
      { text: 'Ethan Mollick · One Useful Thing', url: 'https://www.oneusefulthing.org/' },
      { text: 'Khosla Ventures', url: 'https://www.khoslaventures.com/entrepreneurs' },
      { text: 'Sequoia Capital', url: 'https://www.sequoiacap.com/stories/' },
      { text: 'First Round Review', url: 'https://review.firstround.com/' }
    ]
  },
  {
    icon: '⚐', title: 'Research & Data', sub: 'Know the market',
    items: [
      { text: 'AngelList State of Startups', url: 'https://www.angellist.com/blog/the-state-of-u-s-early-stage-venture-and-startups-h1-25' },
      { text: 'NVCA Research', url: 'https://nvca.org/research/' },
      { text: 'PitchBook Reports', url: 'https://pitchbook.com/news/reports' },
      { text: 'Resources at the Mizzou Library', url: 'https://libraryguides.missouri.edu/entrepreneurshipalliance/intro' },
      { text: 'Crunchbase', url: 'https://www.crunchbase.com/' },
      { text: 'Techmeme · Tech News', url: 'https://www.techmeme.com/' },
      { text: 'PitchBook', url: 'https://pitchbook.com/' }
    ]
  }
];
