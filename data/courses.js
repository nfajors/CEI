/* ============================================================
   COURSES — "Learn it for credit": courses, the minor, and the
   certificate. `verified` should be true only after someone has checked
   the entry against the current MU catalog or with an advisor; while
   false the card shows a "confirm in the catalog" mark instead of
   stating credit counts as fact. Update SITE.reviewed.courses when you
   re-check the list.
     { name, kind (course | minor | certificate | program), open (who can
       take it), credits (string or null), text, url, verified }
   The catalog search below is a stable entry point; replace it with the
   program page once you have confirmed the URL.
   ============================================================ */
const CATALOG_SEARCH = 'https://catalog.missouri.edu/search/?P=entrepreneurship';

const COURSES = [
  {
    name: 'Introductory entrepreneurship courses (Trulaske, MANGMT)',
    kind: 'course',
    open: 'Any major; check prerequisites',
    credits: null,
    text: "Trulaske's management department teaches the introduction to entrepreneurship and the courses that follow it — opportunity evaluation, the business model, and launching a venture. Course numbers and prerequisites change; the catalog has the current list.",
    url: CATALOG_SEARCH,
    verified: false
  },
  {
    name: 'Entrepreneurship minor or certificate',
    kind: 'certificate',
    open: 'Non-business majors included',
    credits: null,
    text: 'A short, structured sequence that fits alongside almost any degree and shows up on your transcript. Ask an advisor which of the minor or the certificate fits your program and how many of its credits you may already have.',
    url: CATALOG_SEARCH,
    verified: false
  },
  {
    name: 'Allen Angel Capital Education Program',
    kind: 'program',
    open: 'By application',
    credits: 'For credit',
    text: 'Students evaluate real deals and invest a real fund alongside experienced angels. The closest thing on campus to a venture-capital apprenticeship.',
    url: 'https://business.missouri.edu/student-development/learning-doing/allen-angel-capital-education-program',
    verified: true
  },
  {
    name: 'McQuinn Center for Entrepreneurial Leadership (CAFNR)',
    kind: 'program',
    open: 'Any major; agriculture, food, and rural ventures',
    credits: null,
    text: 'Entrepreneurship coursework and programs in the College of Agriculture, Food and Natural Resources. Start with a conversation with the director.',
    url: '#contact-stephen-mukembo',
    verified: true
  },
  {
    name: 'Entrepreneurship Legal Clinic (School of Law)',
    kind: 'course',
    open: 'Law students (the clinic serves any student founder)',
    credits: 'Law credit',
    text: 'Law students earn credit advising real student startups on entity formation, contracts, and IP. If you are not a law student, this is where your free legal help comes from.',
    url: 'https://law.missouri.edu/elc/',
    verified: true
  }
];
