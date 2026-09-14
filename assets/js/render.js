/* ============================================================
   RENDER — turns the editable lists in data/*.js into the page.
   Runs synchronously at the end of <body>, before assets/js/guidebook.js,
   so everything the core script counts, filters, or wires (outbound-click
   tracking, the resource index, the glossary) already exists in the DOM.
   ============================================================ */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function byId(id) { return document.getElementById(id); }
function resourceById(id) { return RESOURCES.find(function (r) { return r.id === id; }); }
function isExternal(url) { return /^https?:/i.test(url || ''); }
function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

/* ---------- site identity (data/site.js) ---------- */
function stampSite() {
  document.querySelectorAll('[data-site]').forEach(function (el) {
    var key = el.getAttribute('data-site');
    var val = SITE[key];
    if (val == null) return;
    if (el.tagName === 'A' && key === 'email') { el.href = 'mailto:' + val; el.textContent = val; }
    else if (el.tagName === 'A' && key === 'phone') { el.href = SITE.phoneHref; el.textContent = val; }
    else if (el.tagName === 'A') { el.href = val; }
    else el.textContent = val;
  });
  document.querySelectorAll('[data-reviewed]').forEach(function (el) {
    var iso = SITE.reviewed[el.getAttribute('data-reviewed')];
    if (!iso) return;
    var d = new Date(iso + 'T12:00:00');
    el.textContent = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    el.setAttribute('datetime', iso);
  });
}

/* ---------- navigation (SITE.nav) ---------- */
function renderNav() {
  var items = SITE.nav.filter(function (n) { var el = byId(n.id); return el && !el.hidden; });
  var links = byId('navLinks'), mobile = byId('mobileMenuLinks'), foot = byId('footerNav');
  if (links) links.innerHTML = items.map(function (n) {
    return '<button onclick="scrollToSection(\'' + n.id + '\')">' + esc(n.label) + '</button>';
  }).join('');
  if (mobile) mobile.innerHTML = items.map(function (n) {
    return '<button onclick="mobileNav(\'' + n.id + '\')">' + esc(n.label) + '</button>';
  }).join('');
  if (foot) foot.innerHTML = items.concat([{ id: 'feedback', label: 'Feedback' }]).map(function (n) {
    return '<li><button onclick="scrollToSection(\'' + n.id + '\')">' + esc(n.label) + '</button></li>';
  }).join('');
}

/* ---------- resource cards (data/resources.js) ---------- */
function phaseLabel(r) {
  if (r.throughout) return 'Throughout';
  if (!r.phases.length) return '';
  if (r.phases.length === 1) return 'Phase ' + r.phases[0];
  return 'Phases ' + r.phases.join(' & ');
}
function resourceMeta(r) {
  var bits = [];
  if (r.who) bits.push('<span><b>Who</b> ' + esc(r.who) + '</span>');
  if (r.cost) bits.push('<span><b>Cost</b> ' + esc(r.cost) + '</span>');
  if (r.time) bits.push('<span><b>Time</b> ' + esc(r.time) + '</span>');
  return bits.length ? '<div class="rc-meta">' + bits.join('') + '</div>' : '';
}
function resourceCard(r, master) {
  var ext = isExternal(r.url);
  var attrs = ext ? ' target="_blank" rel="noopener"' : '';
  var search = [r.name, r.blurb, r.tag, r.keywords, r.who, r.cost, r.anyMajor ? 'any major open to all students' : ''].join(' ').toLowerCase();
  var anyMajor = r.anyMajor ? '<span class="pill-open">Any major</span>' : '';
  if (master) {
    var phase = r.throughout ? 'all' : r.phases.join(' ');
    return '<a href="' + esc(r.url) + '"' + attrs + ' class="resource-card master" id="res-' + esc(r.id) + '" data-tag="' + esc(r.tag) + '" data-phase="' + esc(phase) + '" data-search="' + esc(search) + '">'
      + '<div class="rc-top"><span class="tag">' + esc(r.tag) + '</span>' + anyMajor + '<span class="phase-pill">' + phaseLabel(r) + '</span></div>'
      + '<h3>' + esc(r.name) + '</h3><p>' + esc(r.blurb) + '</p>' + resourceMeta(r) + '</a>';
  }
  return '<a href="' + esc(r.url) + '"' + attrs + ' class="resource-card">'
    + '<div class="rc-top"><span class="tag">' + esc(r.tag) + '</span>' + anyMajor + '<span class="ext" aria-hidden="true">' + (ext ? '↗' : '→') + '</span></div>'
    + '<h4>' + esc(r.name) + '</h4><p>' + esc(r.blurb) + '</p>' + resourceMeta(r) + '</a>';
}

/* ---------- phases (data/phases.js) ---------- */
function renderPhases() {
  var grid = byId('phaseOverviewGrid'), stack = byId('phasesStack');
  if (!grid || !stack) return;
  var pc = byId('phaseCount'); if (pc) pc.textContent = PHASES.length;
  grid.innerHTML = PHASES.map(function (p) {
    return '<a href="#' + p.id + '" class="phase-overview-item' + (p.n === 0 ? ' zero' : '') + '" data-phase="' + p.n + '">'
      + '<div class="po-num"><div>' + p.n + '</div></div>'
      + '<div class="po-text"><h3>' + esc(p.title) + '</h3><p>' + esc(p.sub) + '</p></div></a>';
  }).join('');
  stack.innerHTML = PHASES.map(function (p, i) {
    var cards = p.resources.map(resourceById).filter(Boolean).map(function (r) { return resourceCard(r, false); }).join('');
    var extra = '';
    if (p.extra) { var tpl = byId(p.extra); if (tpl) { var tmp = document.createElement('div'); tmp.appendChild(tpl.content.cloneNode(true)); extra = tmp.innerHTML; } }
    var photo = p.photo ? '<div class="phase-photo">'
      + '<img src="' + esc(p.photo.src) + '" alt="' + esc(p.photo.alt) + '" width="900" height="600" loading="lazy" decoding="async"' + (p.photo.position ? ' style="object-position: ' + esc(p.photo.position) + '"' : '') + ' />'
      + '<div class="photo-caption-overlay"><div class="photo-eyebrow">Phase ' + p.n + ' · In Practice</div><p>' + esc(p.photo.caption) + '</p></div></div>' : '';
    return '<div id="' + p.id + '" class="phase-block' + (i % 2 ? ' reverse' : '') + '">'
      + '<div class="phase-side"><div class="phase-side-inner">'
      + '<div class="phase-num-row"><div class="phase-num">0' + p.n + '</div><div class="vrule"></div></div>'
      + '<h3>' + esc(p.title) + '</h3><p class="phase-sub">' + esc(p.sub) + '</p><p class="phase-desc">' + esc(p.desc) + '</p>'
      + '<div class="next-steps"><div class="next-steps-label">Next Steps</div><ul>'
      + p.next.map(function (s) { return '<li><span class="chev">›</span>' + esc(s) + '</li>'; }).join('')
      + '</ul></div></div></div>'
      + '<div class="phase-right">' + photo + extra + '<div class="phase-resources">' + cards + '</div></div>'
      + '</div>';
  }).join('');
}

/* ---------- searchable index (data/resources.js) ---------- */
function renderResourceIndex() {
  var grid = byId('resourceGrid'), tagSel = byId('tagFilter'), phaseSel = byId('phaseFilter');
  if (!grid) return;
  grid.innerHTML = RESOURCES.map(function (r) { return resourceCard(r, true); }).join('');
  if (tagSel) {
    var tags = RESOURCES.map(function (r) { return r.tag; }).filter(function (t, i, a) { return a.indexOf(t) === i; }).sort();
    tagSel.innerHTML = '<option value="all">All Types</option>' + tags.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + '</option>'; }).join('');
  }
  if (phaseSel) {
    phaseSel.innerHTML = '<option value="all">All Phases</option>'
      + PHASES.map(function (p) { return '<option value="' + p.n + '">Phase ' + p.n + ' · ' + esc(p.title) + '</option>'; }).join('')
      + '<option value="throughout">Throughout the Journey</option>';
  }
}

/* ---------- knowledge hub (data/knowledge.js) ---------- */
function renderKnowledge() {
  var grid = byId('knGrid');
  if (!grid) return;
  grid.innerHTML = KNOWLEDGE.map(function (k) {
    return '<div class="kn-card"><div class="kn-head"><div class="kn-icon" aria-hidden="true">' + esc(k.icon) + '</div><div><h3>' + esc(k.title) + '</h3><p class="kn-sub">' + esc(k.sub) + '</p></div></div>'
      + (k.note ? '<p class="kn-note">' + k.note + '</p>' : '')
      + '<ul>' + k.items.map(function (it) {
        if (it.url) return '<li><a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.text) + '<span class="arrow">→</span></a></li>';
        return '<li class="kn-book">' + esc(it.text) + (it.note ? ' <span class="kn-book-note">' + esc(it.note) + '</span>' : '') + '</li>';
      }).join('') + '</ul></div>';
  }).join('');
}

/* ---------- glossary (data/glossary.js) ---------- */
function renderGlossary() {
  var grid = byId('glossGrid');
  if (!grid) return;
  grid.innerHTML = GLOSSARY.map(function (g, i) {
    var search = (g.term + ' ' + g.def + ' ' + g.eg).toLowerCase();
    return '<div class="gloss-term" data-search="' + esc(search) + '" data-cat="' + esc(g.cat) + '"' + (g.start ? ' data-start="1"' : '') + '>'
      + '<button class="gloss-q" aria-expanded="false" aria-controls="gloss-' + i + '" onclick="toggleGloss(this)">'
      + '<span class="gloss-name">' + esc(g.term) + '</span><span class="gloss-phase">' + esc(g.phase) + '</span><span class="gloss-chev" aria-hidden="true">+</span></button>'
      + '<div class="gloss-a" id="gloss-' + i + '" hidden><p class="gloss-def">' + esc(g.def) + '</p><p class="gloss-eg"><strong>Example:</strong> ' + esc(g.eg) + '</p></div></div>';
  }).join('');
}

/* ---------- beyond the guidebook (data/beyond.js) ---------- */
function beyondRows(group) {
  return BEYOND.filter(function (b) { return b.group === group; }).map(function (b) {
    return '<a href="' + esc(b.url) + '" target="_blank" rel="noopener" class="comp-row"><div class="comp-main">'
      + '<span class="comp-name">' + esc(b.name) + '<span class="ext" aria-hidden="true">↗</span></span>'
      + '<div class="comp-host">' + esc(b.host) + ' · <span class="comp-focus">' + esc(b.focus) + '</span></div></div></a>';
  }).join('');
}
function renderBeyond() {
  ['competition', 'jobs', 'accelerator-student', 'accelerator-open'].forEach(function (g) {
    var el = document.querySelector('[data-beyond="' + g + '"]');
    if (el) el.innerHTML = beyondRows(g);
  });
}

/* ---------- alumni (data/alumni.js) ---------- */
function renderAlumni() {
  var grid = byId('alumniGrid');
  if (!grid) return;
  grid.innerHTML = ALUMNI.map(function (a) {
    return '<div class="alum-card" data-business="' + (a.business ? '1' : '0') + '"><div class="alum-top"><div class="alum-avatar" aria-hidden="true">' + esc(a.initials) + '</div>'
      + '<div><h3>' + esc(a.name) + '</h3><p class="alum-degree">' + esc(a.degree) + '</p></div></div><p>' + esc(a.blurb) + '</p></div>';
  }).join('') + '<div class="alum-cta" id="alumCta"><div class="iconbox" aria-hidden="true">✦</div><h3>Your story starts here.</h3>'
    + '<p>The next name in this list could be yours. We\'re here to help you write it.</p>'
    + '<button onclick="scrollToSection(\'contacts\')">Connect with the team →</button></div>';
  var c = byId('alumniCount'); if (c) c.textContent = ALUMNI.length;
  var other = ALUMNI.filter(function (a) { return !a.business; });
  var note = byId('alumniMajorNote');
  if (note && other.length) {
    var fields = other.map(function (a) { return a.field.toLowerCase(); }).filter(function (f, i, arr) { return f && arr.indexOf(f) === i; });
    note.textContent = other.length + ' of the ' + ALUMNI.length + ' below studied ' + fields.slice(0, -1).join(', ') + (fields.length > 1 ? ', or ' : '') + fields.slice(-1)[0] + ' before they built anything.';
  }
}

/* ---------- contacts (data/contacts.js) ---------- */
var LINKEDIN_SVG = '<svg class="ct-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
function renderContacts() {
  var grid = byId('contactsGrid');
  if (!grid) return;
  grid.innerHTML = CONTACTS.map(function (c) {
    return '<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener" class="contact-card" id="contact-' + esc(c.id) + '">'
      + '<div class="ct-avatar" aria-hidden="true">' + esc(c.initials) + '</div><div class="ct-body">'
      + '<div class="ct-name-row"><h3>' + esc(c.name) + '</h3></div>'
      + '<p class="ct-title">' + esc(c.title) + '</p>'
      + (c.bestFor ? '<p class="ct-best"><b>Best for:</b> ' + esc(c.bestFor) + '</p>' : '')
      + LINKEDIN_SVG + '</div></a>';
  }).join('');
}

/* ---------- started here (data/stories.js) ---------- */
function renderStories() {
  var grid = byId('storiesGrid');
  if (!grid || typeof STORIES === 'undefined') return;
  if (!STORIES.length) { byId('stories').hidden = true; return; }
  grid.innerHTML = STORIES.map(function (st) {
    var external = isExternal(st.to);
    var link = external
      ? '<a href="' + esc(st.to) + '" target="_blank" rel="noopener" onclick="track(\'story_click\',{name:' + esc(JSON.stringify(st.name)) + '})">' + esc(st.cta || 'Read more') + ' ↗</a>'
      : '<button onclick="track(\'story_click\',{name:' + esc(JSON.stringify(st.name)) + '}); scrollToSection(\'' + esc(st.to) + '\')">' + esc(st.cta || 'Read more') + ' →</button>';
    return '<article class="story">'
      + '<div class="story-top"><span class="story-phase">' + (st.student ? 'Student · ' : '') + 'Phase ' + st.phase + '</span></div>'
      + '<h3>' + esc(st.name) + '</h3><div class="story-who">' + esc(st.who) + '</div>'
      + '<p>' + esc(st.text) + '</p><div class="story-cta">' + link + '</div></article>';
  }).join('');
}

/* ---------- learn it for credit (data/courses.js) ---------- */
function renderCourses() {
  var grid = byId('courseGrid');
  if (!grid || typeof COURSES === 'undefined') return;
  var kinds = { course: 'Course', minor: 'Minor', certificate: 'Minor / certificate', program: 'Program' };
  grid.innerHTML = COURSES.map(function (c) {
    var ext = isExternal(c.url);
    var open = ext ? '<a href="' + esc(c.url) + '" target="_blank" rel="noopener" onclick="track(\'course_click\',{name:' + esc(JSON.stringify(c.name)) + '})">' + (c.verified ? 'Program page ↗' : 'Check the catalog ↗') + '</a>'
      : '<a href="' + esc(c.url) + '" onclick="track(\'course_click\',{name:' + esc(JSON.stringify(c.name)) + '}); scrollToSection(\'' + esc(c.url.replace('#', '')) + '\'); return false;">Talk to the director →</a>';
    return '<div class="course-card' + (c.verified ? '' : ' unverified') + '">'
      + '<div class="rc-top"><span class="tag">' + esc(kinds[c.kind] || c.kind) + '</span>' + (c.credits ? '<span class="phase-pill">' + esc(c.credits) + '</span>' : '') + '</div>'
      + '<h3>' + esc(c.name) + '</h3><p>' + esc(c.text) + '</p>'
      + '<div class="rc-meta"><span><b>Open to</b> ' + esc(c.open) + '</span></div>'
      + (c.verified ? '' : '<div class="course-flag">Confirm in the catalog — not yet checked against this year\'s listings</div>')
      + '<div class="course-cta">' + open + '</div></div>';
  }).join('');
  var cat = byId('catalogLink'); if (cat && typeof CATALOG_SEARCH !== 'undefined') cat.href = CATALOG_SEARCH;
}

/* ---------- who do I talk to first? (DOORS in data/contacts.js) ---------- */
function renderDoors() {
  var host = byId('doors');
  if (!host || typeof DOORS === 'undefined') return;
  host.innerHTML = '<h3 class="doors-title">Who do I talk to first?</h3><div class="doors-grid">' + DOORS.map(function (d) {
    var people = d.contacts.map(function (id) { return CONTACTS.find(function (c) { return c.id === id; }); }).filter(Boolean);
    return '<div class="door" id="door-' + esc(d.id) + '"><h4>' + esc(d.title) + '</h4><p>' + esc(d.text) + '</p><div class="door-people">'
      + people.map(function (c, i) {
        return '<a href="#contact-' + esc(c.id) + '" onclick="track(\'door_click\',{door:' + esc(JSON.stringify(d.id)) + ',contact:' + esc(JSON.stringify(c.name)) + '}); scrollToSection(\'contact-' + esc(c.id) + '\'); return false;">' + (i === 0 ? '<b>Start with</b> ' : '') + esc(c.name) + '</a>';
      }).join('')
      + '</div></div>';
  }).join('') + '</div>';
}

/* ---------- venture board: hide until it has ventures (A2) ---------- */
function hideEmptyVentureBoard() {
  var sec = byId('ventures');
  if (!sec) return;
  var empty = !(typeof VENTURES !== 'undefined' && VENTURES.length);
  sec.hidden = empty;
  if (!empty) return;
  // Keep the door open: the alumni card carries the invitation instead.
  // The link is wired once features.js (which owns ventureSubmitHref) has loaded.
  document.addEventListener('DOMContentLoaded', function () {
    var cta = byId('alumCta');
    if (!cta || typeof wireVentureCta !== 'function') return;
    var p = document.createElement('p');
    p.className = 'alum-cta-venture';
    p.innerHTML = 'Already building something? <a id="vtAddFromAlumni" href="#">Put your venture on the board →</a>';
    cta.appendChild(p);
    wireVentureCta(byId('vtAddFromAlumni'));
  });
}

/* ---------- run ---------- */
(function renderAll() {
  // A resource's phases are wherever the phase blocks list it (data/phases.js),
  // so the index filter and the grids can never disagree.
  RESOURCES.forEach(function (r) {
    r.phases = PHASES.filter(function (p) { return p.resources.indexOf(r.id) !== -1; }).map(function (p) { return p.n; });
  });
  renderPhases();
  renderStories();
  renderCourses();
  renderDoors();
  renderResourceIndex();
  renderKnowledge();
  renderGlossary();
  renderBeyond();
  renderAlumni();
  renderContacts();
  hideEmptyVentureBoard();
  renderNav();
  stampSite();
  var y = byId('copyYear'); if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================================
   BATCH 4 — wins, outcomes, lessons, mentor booking, subscriptions,
   nominations, sharing. All read SITE (data/site.js).
   ============================================================ */

/* ---------- helpers ---------- */
function mailto(subject, bodyLines) {
  return 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyLines.join('\n'));
}
function pageUrl() {
  if (/^https?:$/.test(location.protocol)) return location.origin + location.pathname;
  return SITE.url;
}
function winDate(d) {
  var parts = String(d).split('-');
  var dt = new Date(+parts[0], parts[1] ? +parts[1] - 1 : 0, parts[2] ? +parts[2] : 1, 12);
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return dt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
function compact(n) {
  if (n === null || n === undefined || n === '') return null;
  if (typeof n === 'string') return n;
  var abs = Math.abs(n);
  if (abs >= 1e6) return (n / 1e6).toFixed(abs >= 1e7 ? 0 : 1) + 'M';
  if (abs >= 1e4) return (n / 1e3).toFixed(abs >= 1e5 ? 0 : 1) + 'K';
  return n.toLocaleString('en-US');
}

/* ---------- C2 book twenty minutes with a mentor ---------- */
function mentorBookingHref() {
  if (SITE.bookingUrl) return SITE.bookingUrl;
  return mailto('Twenty minutes with a mentor — CEI Guidebook', [
    'Hi CEI,', '',
    'My name is [name], a [year] studying [major].',
    "I'd like twenty minutes with a mentor.", '',
    'What I want to talk about (one sentence): [ ]',
    'Where I am: [just curious / have an idea / already building]',
    'Times that work for me: [ ]', '',
    'Thanks,', '[name]'
  ]);
}
function wireMentorLinks() {
  document.querySelectorAll('[data-mentor]').forEach(function (a) {
    var href = mentorBookingHref();
    a.setAttribute('href', href);
    if (/^https?:/.test(href)) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    a.addEventListener('click', function () { track('book_mentor_click', { via: a.getAttribute('data-mentor'), method: SITE.bookingUrl ? 'booking' : 'email' }); });
  });
}

/* ---------- C5 nominations ---------- */
function nominationHref(kind) {
  if (SITE.nominationUrl) return SITE.nominationUrl;
  var forms = {
    founder: ['Nomination — a student founder for the guidebook', ['Hi CEI,', '', 'I want to nominate a Mizzou student founder for the guidebook.', '', 'Founder name and year: [ ]', 'Venture, in one sentence: [ ]', 'Why they belong on the page: [ ]', 'How to reach them: [ ]', '', 'My name: [ ]']],
    win: ['A win for the guidebook feed', ['Hi CEI,', '', 'A win for the feed:', '', 'Who: [team or person]', 'What happened: [prize, launch, customer, award]', 'When: [date]', 'Link or photo: [ ]', '', 'My name: [ ]']],
    resource: ['A resource the guidebook is missing', ['Hi CEI,', '', 'A resource to add:', '', 'Name and link: [ ]', 'Who it is for: [ ]', 'What it costs / how long it takes: [ ]', 'Why it belongs here: [ ]', '', 'My name: [ ]']]
  };
  var f = forms[kind] || forms.resource;
  return mailto(f[0] + ' — CEI Guidebook', f[1]);
}
function wireNominations() {
  [['nominateFounder', 'founder'], ['nominateWin', 'win'], ['nominateResource', 'resource'], ['winSubmit', 'win']].forEach(function (pair) {
    var a = byId(pair[0]); if (!a) return;
    var href = nominationHref(pair[1]);
    a.setAttribute('href', href);
    if (/^https?:/.test(href)) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    a.addEventListener('click', function () { track('nominate_click', { kind: pair[1], method: SITE.nominationUrl ? 'form' : 'email' }); });
  });
}

/* ---------- B12 wins feed + recent win card (data/wins.js) ---------- */
function renderWins() {
  var rw = byId('recentWin'), feed = byId('winsFeed');
  if (typeof WINS === 'undefined') return;
  var sorted = WINS.slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
  var lead = sorted.filter(function (w) { return w.photo; })[0];
  if (rw) {
    if (!lead) rw.hidden = true;
    else rw.innerHTML = '<div class="rw-photo"><img src="' + esc(lead.photo.src) + '" width="900" height="600" alt="' + esc(lead.photo.alt) + '" loading="lazy" decoding="async" /><div class="grad"></div><div class="rw-badge"><span>Recent Win</span></div></div>'
      + '<div class="rw-text"><div class="eb">' + esc(winDate(lead.date)) + (lead.event ? ' · ' + esc(lead.event) : '') + '</div>'
      + '<h3>' + esc(lead.who) + ' <span class="gold">' + esc(lead.what) + '</span></h3>'
      + (lead.detail ? '<p>' + esc(lead.detail) + '</p>' : '')
      + (lead.to ? (isExternal(lead.to) ? '<a class="rw-link" href="' + esc(lead.to) + '" target="_blank" rel="noopener">Read more ↗</a>' : '<button class="rw-link" onclick="scrollToSection(\'' + esc(lead.to) + '\')">See ' + esc(sectionName(lead.to)) + ' →</button>') : '')
      + '</div>';
  }
  if (feed) {
    feed.innerHTML = sorted.slice(0, 8).map(function (w) {
      var link = !w.to ? '' : isExternal(w.to)
        ? '<a href="' + esc(w.to) + '" target="_blank" rel="noopener" onclick="track(\'win_click\',{who:' + esc(JSON.stringify(w.who)) + '})">Read more ↗</a>'
        : '<button onclick="track(\'win_click\',{who:' + esc(JSON.stringify(w.who)) + '}); scrollToSection(\'' + esc(w.to) + '\')">' + esc(sectionName(w.to)) + ' →</button>';
      return '<li class="win"><time datetime="' + esc(w.date) + '">' + esc(winDate(w.date)) + '</time>'
        + '<div class="win-body"><div class="win-what"><b>' + esc(w.who) + '</b> ' + esc(w.what) + (w.student ? ' <span class="pill-open">Student</span>' : '') + '</div>'
        + (w.detail ? '<div class="win-detail">' + esc(w.detail) + '</div>' : '') + (link ? '<div class="win-link">' + link + '</div>' : '') + '</div></li>';
    }).join('');
  }
}
function sectionName(id) {
  var m = /^phase-(\d)$/.exec(id);
  if (m) return 'Phase ' + m[1];
  var n = (SITE.nav || []).filter(function (x) { return x.id === id; })[0];
  return n ? n.label : 'more';
}

/* ---------- C1 outcomes dashboard (OUTCOMES in data/wins.js) ---------- */
function renderOutcomes() {
  var comp = byId('kpiComputed'), rep = byId('kpiReported');
  if (!comp || typeof OUTCOMES === 'undefined') return;
  var tile = function (value, label, note, to) {
    var v = compact(value);
    if (v === null) return '';
    var body = '<div class="kpi-value">' + esc(v) + '</div><div class="kpi-label">' + esc(label) + '</div>' + (note ? '<div class="kpi-note">' + esc(note) + '</div>' : '');
    return to ? '<a class="kpi" href="#' + esc(to) + '" onclick="scrollToSection(\'' + esc(to) + '\'); return false;">' + body + '</a>' : '<div class="kpi">' + body + '</div>';
  };
  var render = function () {
    var openNow = 0;
    if (typeof dlResolve === 'function') {
      var now = Date.now();
      openNow = OPPORTUNITIES.filter(function (o) { var r = dlResolve(o, now); return r.state === 'open' || r.state === 'rolling'; }).length;
    }
    comp.innerHTML = tile(RESOURCES.length, 'Resources indexed', 'Phase grids and the searchable index', 'resources')
      + tile(RESOURCES.filter(function (r) { return r.anyMajor; }).length, 'Mizzou programs open to any major', 'Marked "Any major" on their cards', 'resources')
      + tile(openNow, 'Opportunities open right now', 'Open or rolling on the deadline board today', 'deadlines')
      + tile(CONTACTS.length, 'People in the support network', 'Faculty, directors, and staff who take questions', 'contacts')
      + tile(typeof WINS !== 'undefined' ? WINS.length : 0, 'Wins on the feed', 'Newest first, since spring 2026', 'wins')
      + tile(ALUMNI.length, 'Alumni stories', ALUMNI.filter(function (a) { return !a.business; }).length + ' from outside the business school', 'alumni');
    var reported = (OUTCOMES.reported || []).filter(function (t) { return t.value !== null && t.value !== undefined; });
    if (!reported.length) {
      rep.innerHTML = '<p class="cei-note">Program outcomes for ' + esc(OUTCOMES.year) + ' — students served, prize money awarded, ventures launched, mentor conversations — are reported by the CEI each summer and will appear here when published. <a href="#feedback" onclick="scrollToSection(\'feedback\')">Ask for them</a>.</p>';
    } else {
      rep.innerHTML = '<h3 class="kpi-heading">Reported for ' + esc(OUTCOMES.year) + '</h3><div class="kpi-row">' + reported.map(function (t) { return tile((t.prefix || '') + compact(t.value), t.label, t.note); }).join('') + '</div>';
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
}

/* ---------- C3 short video lessons (data/lessons.js) ---------- */
function renderLessons() {
  var grid = byId('lessonsGrid');
  if (!grid || typeof LESSONS === 'undefined') return;
  grid.innerHTML = LESSONS.map(function (l, i) {
    var player = l.youtube
      ? '<button class="lesson-play" onclick="playLesson(this, \'' + esc(l.youtube) + '\')" aria-label="Play ' + esc(l.title) + '"><span>▶</span> Play (loads from YouTube)</button><div class="lesson-frame" id="lesson-' + i + '"></div>'
      : '';
    return '<div class="lesson"><div class="lesson-top"><span class="lesson-min">' + esc(l.minutes) + '</span>' + (l.phase !== undefined ? '<span class="lesson-phase">Phase ' + l.phase + '</span>' : '') + '</div>'
      + '<h4><a href="' + esc(l.url) + '" target="_blank" rel="noopener" onclick="track(\'lesson_open\',{title:' + esc(JSON.stringify(l.title)) + '})">' + esc(l.title) + '<span class="arrow">→</span></a></h4>'
      + '<div class="lesson-source">' + esc(l.source) + '</div><p>' + esc(l.what) + '</p>' + player + '</div>';
  }).join('');
}
function playLesson(btn, id) {
  var frame = btn.nextElementSibling;
  frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1" title="Video lesson" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
  btn.remove();
  track('lesson_play', { id: id });
}

/* ---------- C7 deadlines in your inbox ---------- */
function wireSubscriptions() {
  var webcal = byId('dlWebcal'), email = byId('dlEmail'), dl = byId('dlIcsAll');
  var feed = pageUrl().replace(/index\.html$/, '') + 'deadlines.ics';
  if (webcal) {
    webcal.href = feed.replace(/^https?:/, 'webcal:');
    webcal.addEventListener('click', function () { track('deadline_subscribe', { via: 'webcal' }); });
  }
  if (dl) dl.addEventListener('click', function () { track('deadline_subscribe', { via: 'ics_all' }); });
  if (email) {
    var href = SITE.newsletterUrl || mailto('Add me to the deadline reminders — CEI Guidebook', ['Hi CEI,', '', 'Please add me to the deadline reminder emails.', '', 'Name: [ ]', 'Major and year: [ ]', 'Interested in: [grants / competitions / accelerators / all]', '', 'Thanks!']);
    email.href = href;
    if (/^https?:/.test(href)) { email.target = '_blank'; email.rel = 'noopener'; }
    email.addEventListener('click', function () { track('deadline_subscribe', { via: SITE.newsletterUrl ? 'form' : 'email' }); });
  }
}

/* ---------- B11 make it easy to spread ---------- */
function drawQr(canvas, text) {
  if (!canvas || typeof qrcode !== 'function') return;
  try {
    var qr = qrcode(0, 'M'); qr.addData(text); qr.make();
    var n = qr.getModuleCount(), size = canvas.width, cell = Math.floor(size / (n + 6)), off = Math.floor((size - cell * n) / 2);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, size, size); ctx.fillStyle = '#000000';
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) ctx.fillRect(off + c * cell, off + r * cell, cell, cell);
  } catch (e) { /* leave the canvas blank rather than break the page */ }
}
function renderShare() {
  var url = pageUrl();
  var pretty = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  var a = byId('shareUrl'); if (a) a.textContent = pretty;
  var b = byId('flyerUrl'); if (b) b.textContent = pretty;
  var perm = byId('permanentUrl'); if (perm) { perm.href = SITE.url; perm.textContent = SITE.url.replace(/^https?:\/\//, '').replace(/\/$/, ''); }
  var em = byId('shareEmail'); if (em) { em.href = 'mailto:?subject=' + encodeURIComponent(SITE.name + ' · ' + SITE.brand) + '&body=' + encodeURIComponent(SITE.shareText + '\n\n' + url); em.addEventListener('click', function () { track('share_page', { method: 'email' }); }); }
  var li = byId('shareLinkedIn'); if (li) { li.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url); li.addEventListener('click', function () { track('share_page', { method: 'linkedin' }); }); }
  var x = byId('shareX'); if (x) { x.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(SITE.shareText) + '&url=' + encodeURIComponent(url); x.addEventListener('click', function () { track('share_page', { method: 'x' }); }); }
  drawQr(byId('shareQr'), url);
  drawQr(byId('flyerQr'), url);
  // A "copy link" beside every "Print this section" button, so a specific section can be sent.
  document.querySelectorAll('.section-print-btn').forEach(function (btn) {
    var sec = btn.closest('section'); if (!sec || !sec.id) return;
    var c = document.createElement('button');
    c.className = 'section-print-btn section-link-btn'; c.type = 'button'; c.textContent = '⧉ Copy link to this section';
    c.addEventListener('click', function () { copyLink(c, url + '#' + sec.id, sec.id); });
    btn.insertAdjacentElement('afterend', c);
  });
}
function copyLink(btn, url, section) {
  url = url || pageUrl();
  var done = function () { if (!btn) return; var o = btn.textContent; btn.textContent = 'Copied ✓'; setTimeout(function () { btn.textContent = o; }, 1800); };
  track('share_copy_link', { section: section || 'page' });
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { window.prompt('Copy this link:', url); });
  else window.prompt('Copy this link:', url);
}
function sharePage() {
  var data = { title: SITE.name + ' · ' + SITE.brand, text: SITE.shareText, url: pageUrl() };
  track('share_page', { method: navigator.share ? 'native' : 'copy' });
  if (navigator.share) navigator.share(data).catch(function () {});
  else copyLink(document.querySelector('.share-actions button:nth-child(2)'));
}

/* ---------- phase CTA buttons (PHASES[].cta) ---------- */
function wirePhaseCtas() {
  PHASES.forEach(function (p) {
    if (!p.cta) return;
    var side = document.querySelector('#' + p.id + ' .phase-side-inner'); if (!side) return;
    var a = document.createElement('a');
    a.className = 'phase-cta'; a.textContent = p.cta.label + ' →';
    if (p.cta.action === 'mentor') a.setAttribute('data-mentor', p.id);
    else if (p.cta.href) a.href = p.cta.href;
    side.appendChild(a);
  });
}

(function renderBatch4() {
  renderWins();
  renderLessons();
  renderOutcomes();
  wirePhaseCtas();
  wireMentorLinks();
  wireNominations();
  wireSubscriptions();
  renderShare();
})();
