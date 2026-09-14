/* ============================================================
   DEADLINE BOARD DATA — read by assets/js/features.js (renderDeadlines).
   -----------------------------------------------------------------
   HOW TO MAINTAIN THIS LIST
   Each entry needs: name, org, url, type, phase, and a cycle.
     cycle: 'rolling'  -> applications open year-round, no countdown
     cycle: 'annual'   -> opens/closes are 'MM-DD', repeating every year
     cycle: 'dated'    -> closesOn is a single 'YYYY-MM-DD'
   confirmed: true  -> a date you have verified on the program's site.
                       Shows a live countdown and an "Add to calendar" button.
   confirmed: false -> the program's usual cycle only. Shown in italics as
                       unconfirmed, and the calendar button stays disabled,
                       because putting an unverified date in someone's
                       calendar is worse than showing none.
   Verify a date, flip confirmed to true, and the countdown turns on.
   verifiedOn: ISO date you last checked the program's page (maintainers only;
   it is not shown). The Mizzou entries at the top are the ones to confirm
   each August and January — see EDITORIAL.md for the checklist.
   Entries are grouped by geography; the order on the board is computed.
   ============================================================ */
const OPPORTUNITIES = [
  // --- Mizzou and mid-Missouri ---
  { name: 'Entrepreneurship Alliance', org: 'Trulaske CEI', type: 'Accelerator', phase: 2,
    // Direct link to the application form; the program page is on the resource card.
    url: 'https://airtable.com/app4LkFA6G9yvhL13/pag6abyWP2OEtAAoK/form',
    cycle: 'dated', closesOn: '2026-12-11', confirmed: true, verifiedOn: '2026-09-14',
    note: "CEI's flagship eight-week accelerator, open to any major. Applications for the spring 2027 cohort close December 11, 2026 — this link opens the application form." },
  { name: 'Entrepreneurship Quest (EQ) Accelerator', org: 'Griggs Innovators Nexus', type: 'Accelerator', phase: 1,
    url: 'https://research.missouri.edu/griggs-innovators-nexus/entrepreneur-quest-student-accelerator',
    cycle: 'dated', closesOn: '2026-09-03', confirmed: true, verifiedOn: '2026-09-14',
    note: '$40,000 in prize money for student-led ventures, any major. Applications for 2026 closed September 3; the next cohort\'s dates will be posted here once GIN publishes them.' },
  { name: 'GIN Incubator Office Space', org: 'Griggs Innovators Nexus', type: 'Grant', phase: 3,
    url: 'https://research.missouri.edu/griggs-innovators-nexus/incubator-office-space-for-students',
    cycle: 'annual', opens: '03-01', closes: '04-30', confirmed: false, verifiedOn: null,
    note: 'Rent-free 100 sq ft in the MU Student Center, awarded for the academic year. Confirm the application window with GIN.' },
  { name: 'REDI Small Business Grant', org: 'REDI · City of Columbia', type: 'Grant', phase: 3,
    url: 'https://columbiaredi.com/small-business-grant/',
    cycle: 'annual', opens: '02-01', closes: '03-31', confirmed: false, verifiedOn: null,
    note: 'A $50,000 pool split among eight entrepreneurs; requires a City of Columbia business license. Confirm the cycle with REDI.' },

  // --- Missouri and regional ---
  { name: 'Arch Grants Startup Competition', org: 'Arch Grants · St. Louis', type: 'Grant', phase: 3,
    url: 'https://archgrants.org/programs/startup-competition/',
    cycle: 'annual', opens: '01-15', closes: '03-15', confirmed: false,
    note: '$75,000 equity-free, plus $25,000 relocation. Requires HQ in St. Louis for a year.' },
  { name: 'Regnier Venture Creation Challenge', org: 'UMKC', type: 'Competition', phase: 2,
    url: 'https://info.umkc.edu/regnier/regnier-venture-creation-challenge/',
    cycle: 'annual', opens: '01-01', closes: '02-28', confirmed: false,
    note: 'Open to students in Missouri and surrounding states.' },
  { name: 'Missouri Technology Corporation', org: 'State of Missouri', type: 'State', phase: 3,
    url: 'https://www.missouritechnology.com/', cycle: 'rolling', confirmed: true,
    note: 'State capital for Missouri technology startups. Contact ahead of a raise.' },

  // --- National competitions ---
  { name: 'Rice Business Plan Competition', org: 'Rice University', type: 'Competition', phase: 3,
    url: 'https://rbpc.rice.edu/', cycle: 'annual', opens: '11-01', closes: '02-01', confirmed: false,
    note: "World's largest and richest student competition. Graduate-focused, $1M+ in prizes." },
  { name: 'TigerLaunch', org: 'Princeton University', type: 'Competition', phase: 1,
    url: 'https://tigerlaunch.com/', cycle: 'annual', opens: '10-01', closes: '12-15', confirmed: false,
    note: "World's largest student-run competition. Regional rounds feed the final." },
  { name: 'e-Fest (Schulze Entrepreneurship Challenge)', org: 'University of St. Thomas', type: 'Competition', phase: 2,
    url: 'https://efest.biz/', cycle: 'annual', opens: '10-15', closes: '12-31', confirmed: false,
    note: 'Undergraduate-only. Top 25 finalists pitch in Minneapolis.' },
  { name: 'Pitch Dingman Competition', org: 'University of Maryland', type: 'Competition', phase: 2,
    url: 'https://www.rhsmith.umd.edu/centers-initiatives/dingman-lamone-center/initiatives-programs/pitch-dingman-competition',
    cycle: 'annual', opens: '09-15', closes: '11-01', confirmed: false,
    note: 'Shark-Tank-style format, $150K+ in prizes.' },
  { name: 'MN Cup', org: 'University of Minnesota', type: 'Competition', phase: 2,
    url: 'https://carlsonschool.umn.edu/mn-cup', cycle: 'annual', opens: '03-01', closes: '04-30', confirmed: false,
    note: 'Largest statewide competition in the country, with a strong student division.' },
  { name: 'Baylor New Venture Competition', org: 'Baylor University', type: 'Competition', phase: 2,
    url: 'https://hankamer.baylor.edu/baugh-center/new-venture', cycle: 'annual', opens: '10-01', closes: '01-15', confirmed: false,
    note: 'Business plan and elevator pitch tracks, open to global collegiate teams.' },
  { name: 'Global Student Entrepreneur Awards (GSEA)', org: "Entrepreneurs' Organization", type: 'Competition', phase: 3,
    url: 'https://www.gsea.org/', cycle: 'annual', opens: '08-01', closes: '10-31', confirmed: false,
    note: 'For students already running a revenue-generating business.' },
  { name: 'Fowler Global Social Innovation Challenge', org: 'University of San Diego', type: 'Competition', phase: 2,
    url: 'https://www.fowlergsic.org/', cycle: 'annual', opens: '11-01', closes: '02-15', confirmed: false,
    note: 'Social and environmental ventures, framed around the UN SDGs.' },

  // --- Accelerators ---
  { name: 'Pear Competition', org: 'Pear VC', type: 'Accelerator', phase: 2,
    url: 'https://pear.vc/programs/dorm/competition/', cycle: 'annual', opens: '01-15', closes: '03-15', confirmed: false,
    note: '$100K SAFE to winners, and a fast track into PearX. Built for student and faculty founders.' },
  { name: 'Future Founders Fellowship', org: 'Future Founders', type: 'Accelerator', phase: 1,
    url: 'https://www.futurefounders.com/fellowship/', cycle: 'annual', opens: '09-01', closes: '10-31', confirmed: false,
    note: 'Equity-free, year-long, for US founders 18–30.' },
  { name: 'Y Combinator', org: 'Y Combinator', type: 'Accelerator', phase: 4,
    url: 'https://www.ycombinator.com/', cycle: 'rolling', confirmed: true,
    note: 'Applications are accepted continuously; batches have their own cut-offs. Apply late rather than not at all.' },
  { name: 'Techstars', org: 'Techstars', type: 'Accelerator', phase: 4,
    url: 'https://www.techstars.com/', cycle: 'rolling', confirmed: true,
    note: 'Programs run on separate calendars by city and vertical — check the one you want.' },
  { name: 'MassChallenge', org: 'MassChallenge', type: 'Accelerator', phase: 3,
    url: 'https://masschallenge.org/', cycle: 'annual', opens: '01-01', closes: '03-31', confirmed: false,
    note: 'One of the largest equity-free accelerators.' },
  { name: 'Founder Institute', org: 'Founder Institute', type: 'Accelerator', phase: 1,
    url: 'https://fi.co/', cycle: 'rolling', confirmed: true,
    note: 'Part-time pre-seed program running in 200+ cities, with cohorts starting through the year.' },
  { name: 'NSF I-Corps', org: 'National Science Foundation', type: 'Federal', phase: 2,
    url: 'https://new.nsf.gov/funding/initiatives/i-corps', cycle: 'rolling', confirmed: true,
    note: 'MU is part of the Great Lakes regional hub. Cohorts run through the year.' }
];
