/* ============================================================
   BEYOND THE GUIDEBOOK — national competitions, startup job boards, and
   accelerators. group: competition | jobs | accelerator-student | accelerator-open
   host: who runs it (or the equity terms, for accelerators).
   ============================================================ */
const BEYOND = [
  {
    name: 'Baylor New Venture Competition',
    url: 'https://hankamer.baylor.edu/baugh-center/new-venture',
    host: 'Baylor University',
    focus: 'Business plan & elevator pitch · global collegiate teams',
    group: 'competition'
  },
  {
    name: 'Collegiate Entrepreneurs\' Organization (CEO)',
    url: 'https://www.joinceo.org/',
    host: 'National network',
    focus: 'Global pitch competition at the national CEO conference',
    group: 'competition'
  },
  {
    name: 'e-Fest (Schulze Entrepreneurship Challenge)',
    url: 'https://efest.biz/',
    host: 'University of St. Thomas',
    focus: 'Undergraduate-focused · top-25 finalists pitch in Minneapolis',
    group: 'competition'
  },
  {
    name: 'Fowler Global Social Innovation Challenge',
    url: 'https://www.fowlergsic.org/',
    host: 'University of San Diego',
    focus: 'Social & environmental ventures · UN SDG focus',
    group: 'competition'
  },
  {
    name: 'Global Student Entrepreneur Awards (GSEA)',
    url: 'https://www.gsea.org/',
    host: 'Entrepreneurs\' Organization',
    focus: 'For students already running a business',
    group: 'competition'
  },
  {
    name: 'MN Cup',
    url: 'https://carlsonschool.umn.edu/mn-cup',
    host: 'University of Minnesota',
    focus: 'Largest statewide competition · strong student division',
    group: 'competition'
  },
  {
    name: 'Next Top Entrepreneur',
    url: 'https://www.terry.uga.edu/entrepreneurship/next-top-entrepreneur/',
    host: 'UGA Terry College',
    focus: 'Open to student teams nationwide',
    group: 'competition'
  },
  {
    name: 'Pitch Dingman Competition',
    url: 'https://www.rhsmith.umd.edu/centers-initiatives/dingman-lamone-center/initiatives-programs/pitch-dingman-competition',
    host: 'University of Maryland',
    focus: 'Shark-Tank-style · $150K+ in prizes',
    group: 'competition'
  },
  {
    name: 'Regnier Venture Creation Challenge',
    url: 'https://info.umkc.edu/regnier/regnier-venture-creation-challenge/',
    host: 'UMKC',
    focus: 'Open to students in MO & surrounding states',
    group: 'competition'
  },
  {
    name: 'Rice Business Plan Competition',
    url: 'https://rbpc.rice.edu/',
    host: 'Rice University',
    focus: 'World\'s largest & richest · $1M+ in prizes (graduate-focused)',
    group: 'competition'
  },
  {
    name: 'TigerLaunch',
    url: 'https://tigerlaunch.com/',
    host: 'Princeton University',
    focus: 'World\'s largest student-run competition · regional + finals',
    group: 'competition'
  },
  {
    name: 'a16z Portfolio Jobs',
    url: 'https://jobs.a16z.com/',
    host: 'Andreessen Horowitz',
    focus: 'Open roles across a16z-backed companies',
    group: 'jobs'
  },
  {
    name: 'Built In',
    url: 'https://builtin.com/jobs',
    host: 'builtin.com',
    focus: 'Tech & startup jobs by city (also remote) with company culture profiles',
    group: 'jobs'
  },
  {
    name: 'First Round Jobs',
    url: 'https://jobs.firstround.com/',
    host: 'First Round Capital',
    focus: 'Open roles across First Round\'s seed-stage portfolio',
    group: 'jobs'
  },
  {
    name: 'Sequoia Portfolio Jobs',
    url: 'https://jobs.sequoiacap.com/jobs/',
    host: 'Sequoia Capital',
    focus: 'Open roles across Sequoia-backed companies',
    group: 'jobs'
  },
  {
    name: 'Wellfound',
    url: 'https://wellfound.com/',
    host: 'formerly AngelList Talent',
    focus: 'Startup-only marketplace; salary & equity shown upfront, apply in one click',
    group: 'jobs'
  },
  {
    name: 'Y Combinator — Work at a Startup',
    url: 'https://www.workatastartup.com/',
    host: 'ycombinator.com',
    focus: 'Jobs at every active YC-backed company; one application reaches hundreds',
    group: 'jobs'
  },
  {
    name: 'Envision Accelerator',
    url: 'https://www.envisionaccelerator.com/',
    host: 'Equity-free',
    focus: 'Grants up to $10K, mentorship & community for young, underrepresented founders. Cohort-based',
    group: 'accelerator-student'
  },
  {
    name: 'Future Founders Fellowship',
    url: 'https://www.futurefounders.com/fellowship/',
    host: 'Equity-free',
    focus: 'Free year-long program for US founders 18–30 (students included). Applications reopen Sept 2026',
    group: 'accelerator-student'
  },
  {
    name: 'Pear Competition',
    url: 'https://pear.vc/programs/dorm/competition/',
    host: '$100K SAFE to winners',
    focus: 'Pear VC\'s competition for student & faculty founders; a fast track into the PearX accelerator',
    group: 'accelerator-student'
  },
  {
    name: '500 Global',
    url: 'https://500.co/',
    host: 'Takes equity',
    focus: 'Flagship 4-month accelerator in Palo Alto; $150K for early-stage tech startups worldwide',
    group: 'accelerator-open'
  },
  {
    name: 'Alchemist Accelerator',
    url: 'https://www.alchemistaccelerator.com/',
    host: 'Takes equity',
    focus: 'Six-month program for enterprise/B2B startups; open worldwide by application',
    group: 'accelerator-open'
  },
  {
    name: 'Entrepreneurs Roundtable Accelerator (ERA)',
    url: 'https://www.eranyc.com/',
    host: 'Takes equity',
    focus: 'NYC\'s largest accelerator; $150K for post-MVP tech startups, two cohorts a year',
    group: 'accelerator-open'
  },
  {
    name: 'Founder Institute',
    url: 'https://fi.co/',
    host: '2.5% equity (warrant)',
    focus: 'World\'s largest pre-seed accelerator; part-time core program in 200+ cities',
    group: 'accelerator-open'
  },
  {
    name: 'MassChallenge',
    url: 'https://masschallenge.org/',
    host: 'Equity-free',
    focus: 'One of the largest equity-free accelerators; open to early-stage startups at any stage',
    group: 'accelerator-open'
  },
  {
    name: 'Techstars',
    url: 'https://www.techstars.com/',
    host: 'Takes equity',
    focus: 'Worldwide mentorship-driven accelerator network; open to founders from any school',
    group: 'accelerator-open'
  },
  {
    name: 'Y Combinator',
    url: 'https://www.ycombinator.com/',
    host: 'Takes equity',
    focus: 'The premier global accelerator; long history of funding student-led teams',
    group: 'accelerator-open'
  }
];
