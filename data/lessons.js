/* ============================================================
   LESSONS — short video lessons ("Watch" in the knowledge hub).
     { title, source, minutes (text), url, what (one line on what you get),
       youtube (optional YouTube video id — when present the card embeds a
       click-to-play player instead of linking out), phase (0-4) }
   To add a CEI recording: upload it to YouTube, then add an entry with
   its id. Nothing loads from YouTube until a visitor presses play.
   ============================================================ */
const LESSONS = [
  {
    title: 'How to Build a Startup',
    source: 'Steve Blank · Udacity (free)',
    minutes: 'Two- to five-minute segments',
    url: 'https://www.udacity.com/course/how-to-build-a-startup--ep245',
    what: 'The customer-development method behind NSF I-Corps, taught by the person who wrote it. Start with the first lesson, then jump to "Customer Discovery".',
    phase: 1
  },
  {
    title: 'YC Startup School',
    source: 'Y Combinator (free)',
    minutes: '10–25 minutes each',
    url: 'https://www.startupschool.org/',
    what: 'Short lessons on ideas, talking to users, launching, and getting your first customers, by the people who fund them.',
    phase: 1
  },
  {
    title: 'How to Start a Startup',
    source: 'Stanford CS183B · Sam Altman and guests',
    minutes: '20 lectures, about 50 minutes',
    url: 'https://startupclass.samaltman.com/',
    what: 'The classic course: ideas, team, product, growth, fundraising, with Paul Graham, Peter Thiel, and the founders of Airbnb and Stripe.',
    phase: 2
  },
  {
    title: 'Stanford eCorner',
    source: 'Stanford Technology Ventures Program',
    minutes: 'Clips of 2–10 minutes',
    url: 'https://ecorner.stanford.edu/',
    what: 'Thousands of short clips from founders and investors, searchable by topic. Good for one idea on the walk between classes.',
    phase: 0
  },
  {
    title: 'MIT 15.390 New Enterprises',
    source: 'MIT OpenCourseWare (free)',
    minutes: 'Full lectures',
    url: 'https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/',
    what: 'The 24 steps of Disciplined Entrepreneurship, lecture by lecture. Pairs with the book on the Founder\'s Bookshelf.',
    phase: 2
  },
  {
    title: 'Y Combinator on YouTube',
    source: 'Y Combinator',
    minutes: '10–40 minutes',
    url: 'https://www.youtube.com/c/ycombinator',
    what: 'Office hours, founder interviews, and the "How to" series. Search the channel for the question you have this week.',
    phase: 3
  }
];
