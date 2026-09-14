/* ============================================================
   THE ENTREPRENEUR'S GUIDEBOOK — core page behaviour
   (navigation, accordions, printing, the resource index, the
   self-assessment, the glossary, the Prompt Studio, and the GA4
   event calls). Loads after data/*.js and assets/js/render.js.
   PHASE_TITLES now lives in data/phases.js.
   ============================================================ */

function toggleHowto(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  const answer = btn.nextElementSibling;
  if (!expanded) {
    const section = btn.closest('section');
    const q = (btn.querySelector('.howto-title') || btn).textContent.replace(/\s+/g, ' ').trim().slice(0, 80);
    track('playbook_open', { area: section ? section.id : 'unknown', question: q });
  }
  btn.setAttribute('aria-expanded', String(!expanded));
  if (expanded) {
    answer.classList.remove('open');
  } else {
    answer.classList.add('open');
  }
}

function scrollToSection(id) {
  track('nav_section', { section: id });
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Print a single section: scope the print to just that section, then restore.
function printSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  track('print_section', { section: id });
  // Expand any collapsed accordions inside the target so content prints fully
  const collapsibles = target.querySelectorAll('.howto-q[aria-expanded="false"], .gloss-q[aria-expanded="false"]');
  const reExpand = [];
  collapsibles.forEach(btn => {
    btn.setAttribute('data-print-collapsed', 'true');
  });
  document.body.classList.add('printing-section');
  target.classList.add('print-target');
  const cleanup = () => {
    document.body.classList.remove('printing-section');
    target.classList.remove('print-target');
    target.querySelectorAll('[data-print-collapsed]').forEach(btn => btn.removeAttribute('data-print-collapsed'));
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  window.print();
  // Fallback cleanup in case afterprint doesn't fire
  setTimeout(cleanup, 1000);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('navToggle');
  const isOpen = menu.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('navToggle');
  menu.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}

function mobileNav(id) {
  closeMobileMenu();
  scrollToSection(id);
}

function mobileFindPhase() {
  closeMobileMenu();
  openAssessment();
}

function copyPrompt(btn) {
  const text = btn.parentElement.querySelector('pre').textContent;
  const title = btn.parentElement.querySelector('h4');
  track('prompt_copy', { source: 'library', prompt: title ? title.textContent.trim() : 'unknown' });
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1800);
  });
}

// Nav scroll behavior + scrollspy active-section highlighting
const NAV_SECTION_IDS = SITE.nav.map(function (n) { return n.id; });
function updateActiveNav() {
  const trigger = window.innerHeight / 3;
  let activeId = null;
  for (const id of NAV_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el || el.hidden) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= trigger) activeId = id;
  }
  document.querySelectorAll('.nav-links button').forEach(btn => {
    const matches = btn.getAttribute('onclick') === "scrollToSection('" + activeId + "')";
    btn.classList.toggle('active', matches);
  });
}
function updatePhaseTimeline() {
  const trigger = window.innerHeight / 2;
  let active = 0;
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('phase-' + i);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= trigger) active = i;
  }
  document.querySelectorAll('.phase-overview-item').forEach((item, idx) => {
    item.classList.toggle('active', idx + 1 === active);
  });
}
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  updateActiveNav();
  updatePhaseTimeline();
});
window.addEventListener('resize', updateActiveNav);
window.addEventListener('load', updateActiveNav);
window.addEventListener('load', updatePhaseTimeline);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('assessmentModal');
    if (modal && modal.classList.contains('open')) closeAssessment();
  }
});

// Resource filtering
function filterResources() {
  const search = document.getElementById('searchInput').value.toLowerCase().trim();
  const phaseFilter = document.getElementById('phaseFilter').value;
  const tagFilter = document.getElementById('tagFilter').value;
  const cards = document.querySelectorAll('.resource-card.master');
  let visible = 0;
  cards.forEach(card => {
    const phase = card.dataset.phase;
    const tag = card.dataset.tag;
    const searchText = card.dataset.search;
    let show = true;
    // Phase filtering: cross-cutting ("all") items appear under every specific phase;
    // "throughout" shows only cross-cutting items.
    // data-phase is "all" (cross-cutting) or a space-separated list ("1 3").
    if (phaseFilter === 'throughout') {
      if (phase !== 'all') show = false;
    } else if (phaseFilter !== 'all') {
      if (phase !== 'all' && phase.split(' ').indexOf(phaseFilter) === -1) show = false;
    }
    if (tagFilter !== 'all' && tag !== tagFilter) show = false;
    if (search && !searchText.includes(search)) show = false;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  document.getElementById('resultsCount').textContent = visible + ' ' + (visible === 1 ? 'resource' : 'resources');
  document.getElementById('noResults').style.display = visible === 0 ? '' : 'none';
  document.getElementById('resourceGrid').style.display = visible === 0 ? 'none' : '';
  const hasFilters = search || phaseFilter !== 'all' || tagFilter !== 'all';
  document.getElementById('clearBtn').style.display = hasFilters ? '' : 'none';
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('phaseFilter').value = 'all';
  document.getElementById('tagFilter').value = 'all';
  filterResources();
}

// Modal
function openAssessment() {
  track('find_my_phase_open');
  const modal = document.getElementById('assessmentModal');
  modal.classList.add('open');
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}
function closeAssessment(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('assessmentModal').classList.remove('open');
  // Reset after animation
  setTimeout(() => {
    const content = document.getElementById('modalContent');
    content.innerHTML = `<div class="section-label" style="color: var(--black)"><div class="line"></div><span class="lbl">Self-Assessment</span></div>
      <h3>Select the statement that best describes your current stage.</h3>
      <p class="modal-instruction">Choose one option below to receive your recommended phase.</p>
      <div class="modal-options">
        <button class="modal-option" onclick="answerCurious()"><span>I'm curious about entrepreneurship, but I don't have an idea yet.</span><span class="arrow">→</span></button>
        <button class="modal-option" onclick="answerAssessment(1)"><span>I'm exploring a problem or idea, but haven't validated it with anyone yet.</span><span class="arrow">→</span></button>
        <button class="modal-option" onclick="answerAssessment(2)"><span>I'm testing demand — talking to customers to see if they'll actually pay.</span><span class="arrow">→</span></button>
        <button class="modal-option" onclick="answerAssessment(3)"><span>Demand is validated. I'm ready to formally launch — entity, funding, operations.</span><span class="arrow">→</span></button>
        <button class="modal-option" onclick="answerAssessment(4)"><span>I have a working, operating venture and want to grow it responsibly.</span><span class="arrow">→</span></button>
      </div>`;
  }, 300);
}
function answerAssessment(phase) {
  track('find_my_phase_result', { phase: 'Phase ' + phase });
  const t = PHASE_TITLES[phase];
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-result">
      <div class="num">0${phase}</div>
      <h3>Start with Phase ${phase}</h3>
      <p>${t.title} · ${t.sub}</p>
      <div class="going">Navigating to your recommended phase.</div>
    </div>`;
  setTimeout(() => {
    document.getElementById('assessmentModal').classList.remove('open');
    scrollToSection('phase-' + phase);
    setTimeout(() => closeAssessment(), 500);
  }, 1500);
}

// Phase 0 — the curious student. Deliberately does not go through
// answerAssessment, so the saved Founder Path (phases 1-4) is untouched.
function answerCurious() {
  track('find_my_phase_result', { phase: 'Phase 0' });
  const t = PHASE_TITLES[0];
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-result">
      <div class="num">00</div>
      <h3>Start with Phase 0</h3>
      <p>${t.title} · ${t.sub}</p>
      <div class="going">No idea required. Taking you there.</div>
    </div>`;
  setTimeout(() => {
    document.getElementById('assessmentModal').classList.remove('open');
    scrollToSection('phase-0');
    setTimeout(() => closeAssessment(), 500);
  }, 1500);
}

/* ---------- Semester math (Phase 0) ----------
   Standalone: it shares the workbench's styles but none of its code or
   storage keys. Values persist in this browser only. */
const SM_KEY = 'cei_semester_v1';
const SM_FIELDS = ['smCredits', 'smWork', 'smOther', 'smVenture', 'smOnce', 'smMonthly'];
let smTrackTimer;
function smNum(id) { const el = document.getElementById(id); const v = parseFloat(el && el.value); return isFinite(v) ? v : null; }
function smMoney(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
function calcSemester() {
  const v = document.getElementById('smVerdict');
  if (!v) return;
  const set = (id, t) => { const el = document.getElementById(id); if (el) el.textContent = String(t); };
  const credits = smNum('smCredits'), work = smNum('smWork') || 0, other = smNum('smOther') || 0, venture = smNum('smVenture');
  const once = smNum('smOnce') || 0, monthly = smNum('smMonthly') || 0;
  try { localStorage.setItem(SM_KEY, JSON.stringify(SM_FIELDS.reduce((o, id) => { o[id] = (document.getElementById(id) || {}).value || ''; return o; }, {}))); } catch (e) {}
  const fits = document.getElementById('smFits');
  if (credits === null || venture === null) {
    v.className = 'wb-verdict idle';
    v.innerHTML = '<b>Enter your week</b><span>Most first ventures cost less than a textbook and take about as much time as one class. Find out whether yours does.</span>';
    ['smFree', 'smShare', 'smTotal', 'smCost'].forEach(id => set(id, '—'));
    if (fits) fits.textContent = '';
    return;
  }
  const WEEKS = 15, SLEEP = 56;
  const free = Math.max(0, 168 - SLEEP - credits * 3 - work - other);
  const share = free > 0 ? Math.round(venture / free * 100) : 100;
  const total = Math.round(venture * WEEKS);
  const cost = once + monthly * 4;
  const likeCredits = Math.max(1, Math.round(venture / 3));
  set('smFree', Math.round(free));
  set('smShare', share + '%');
  set('smTotal', total);
  set('smCost', smMoney(cost));
  let ladder;
  if (venture < 2) ladder = 'With under two hours a week: sit in on 1 Million Cups (one morning, weekly) and read one Playbook answer a week. That is a real start.';
  else if (venture < 5) ladder = 'Two to four hours a week fits ten customer conversations over the semester, a CEO meeting, and 1 Million Cups. Enough to find out whether a problem is real.';
  else if (venture < 9) ladder = 'Five to eight hours a week is a cohort program: Entrepreneurship Quest or the Entrepreneurship Alliance, with their deadlines and mentors doing the pacing for you.';
  else if (venture <= 15) ladder = 'Nine to fifteen hours a week is a build sprint: a landing page, the first paying customers, and a pitch-competition entry in one semester.';
  else ladder = 'More than fifteen hours a week is a second course load. Most students cannot protect it past midterms. Try the plan at five to eight hours first.';
  if (fits) fits.textContent = ladder;
  if (venture > free) {
    v.className = 'wb-verdict bad';
    v.innerHTML = '<b>That is more than your free hours</b><span>After sleep, class and study time, work, and your other commitments you have about ' + Math.round(free) + ' hours a week left. Something has to give: fewer venture hours, or fewer other commitments for one semester.</span>';
  } else if (venture > 15) {
    v.className = 'wb-verdict bad';
    v.innerHTML = '<b>That is a second full course load</b><span>' + venture + ' hours a week is more than most students can protect alongside classes. Try the plan at five to eight hours: ten customer interviews and a landing page fit comfortably in that.</span>';
  } else if (share > 60) {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>You can try this, but it will be most of your free time</b><span>' + venture + ' hours a week is ' + share + '% of what is left after everything else. Pick one semester-sized goal so it stays finishable, and decide now what result would tell you to stop.</span>';
  } else {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>You can afford to try this</b><span>' + total + ' hours over a fifteen-week semester, about the load of a ' + likeCredits + '-credit class, for ' + smMoney(cost) + ' all in. Pick one semester-sized goal and go.</span>';
  }
  clearTimeout(smTrackTimer);
  smTrackTimer = setTimeout(() => track('semester_math', { hours: venture, free_hours: Math.round(free), verdict: v.className.replace('wb-verdict ', '') }), 1000);
}
(function initSemesterMath() {
  const run = () => {
    if (!document.getElementById('smVerdict')) return;
    try {
      const saved = JSON.parse(localStorage.getItem(SM_KEY) || '{}');
      SM_FIELDS.forEach(id => { const el = document.getElementById(id); if (el && saved[id]) el.value = saved[id]; });
    } catch (e) {}
    calcSemester();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

// Auto-count "Founder Tools" = Playbook Q&As + starter prompts.
// Scoped to the howto section's .howto-list so the AI section's
// .howto-card accordions are NOT counted.
(function countFounderTools() {
  var el = document.getElementById('founderToolsCount');
  if (!el) return;
  var howtoList = document.querySelector('#howto .howto-list');
  var qas = howtoList ? howtoList.querySelectorAll('.howto-card').length : 0;
  var prompts = document.querySelectorAll('.prompt-grid .prompt-card').length;
  var total = qas + prompts;
  if (total > 0) el.textContent = total;
})();

// Auto-count "Resources" = cards in the searchable index.
// Scoped to #resources and the .master class so the phase-overview
// cards (plain .resource-card) are NOT counted.
(function countResources() {
  var el = document.getElementById('resourceCount');
  if (!el) return;
  var count = document.querySelectorAll('#resources .resource-card.master').length;
  if (count > 0) el.textContent = count;
})();

// Initialize the Index results count on load
if (document.getElementById('resultsCount')) { filterResources(); }

// Resource Index — track filters (on change) and search (debounced)
(function initResourceTracking() {
  const phase = document.getElementById('phaseFilter');
  const tag = document.getElementById('tagFilter');
  const search = document.getElementById('searchInput');
  if (phase) phase.addEventListener('change', () => { if (phase.value !== 'all') track('resource_filter', { type: 'phase', value: phase.value }); });
  if (tag) tag.addEventListener('change', () => { if (tag.value !== 'all') track('resource_filter', { type: 'tag', value: tag.value }); });
  if (search) {
    let t;
    search.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const q = search.value.trim();
        if (q.length >= 2) track('resource_search', { query: q.toLowerCase().slice(0, 60) });
      }, 1000);
    });
  }
})();

// Outbound resource link clicks — capture which external resources students pursue
(function initOutboundTracking() {
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    a.addEventListener('click', () => {
      const label = (a.querySelector('h3, h4, .comp-name, .rw-text h3') || a).textContent.trim().slice(0, 80);
      let host = '';
      try { host = new URL(a.href).hostname.replace('www.', ''); } catch (e) {}
      track('outbound_click', { link_text: label || host, domain: host });
    });
  });
})();

let glossActiveCat = 'all';

function filterGlossary() {
  const q = document.getElementById('glossSearch').value.toLowerCase().trim();
  const terms = document.querySelectorAll('#glossGrid .gloss-term');
  let visible = 0;
  terms.forEach(t => {
    const matchText = !q || t.dataset.search.includes(q);
    const matchCat = glossActiveCat === 'all'
      || (glossActiveCat === 'start' ? t.dataset.start === '1' : t.dataset.cat === glossActiveCat);
    const show = matchText && matchCat;
    t.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const grid = document.getElementById('glossGrid');
  const empty = document.getElementById('glossEmpty');
  const count = document.getElementById('glossCount');
  grid.style.display = visible === 0 ? 'none' : '';
  empty.style.display = visible === 0 ? 'block' : 'none';
  count.textContent = visible + (visible === 1 ? ' term' : ' terms');
}

function filterGlossCat(btn) {
  glossActiveCat = btn.dataset.cat;
  track('glossary_filter', { category: btn.dataset.cat });
  document.querySelectorAll('.gloss-chip').forEach(c => {
    const on = c === btn;
    c.classList.toggle('active', on);
    c.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  filterGlossary();
}

// Debounced glossary search tracking — fires after typing pauses, only for real queries
let glossSearchTimer;
(function initGlossSearchTracking() {
  const input = document.getElementById('glossSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    clearTimeout(glossSearchTimer);
    glossSearchTimer = setTimeout(() => {
      const q = input.value.trim();
      if (q.length >= 2) track('glossary_search', { query: q.toLowerCase().slice(0, 60) });
    }, 1000);
  });
})();

function toggleGloss(btn) {
  const open = btn.getAttribute('aria-expanded') === 'true';
  if (!open) {
    const name = btn.querySelector('.gloss-name');
    track('glossary_term_open', { term: name ? name.textContent.trim() : 'unknown' });
  }
  btn.setAttribute('aria-expanded', open ? 'false' : 'true');
  const panel = document.getElementById(btn.getAttribute('aria-controls'));
  if (panel) panel.hidden = open;
}

if (document.getElementById('glossGrid')) { filterGlossary(); }

const STUDIO_PROMPTS = [{"title": "Customer discovery interview script", "text": "I'm building [product] for [target customer]. Write a 12-question customer discovery interview script following The Mom Test principles: ask about past behavior and specific problems, never pitch my idea or ask if they'd buy. Group questions from broad context to specific pain points."}, {"title": "Competitor analysis brief", "text": "Act as a market analyst. For the [industry] space, identify the top 5 competitors to [my product]. For each, summarize their positioning, pricing model, target segment, and one clear weakness I could exploit. Present as a comparison table, then give me the single biggest gap in the market."}, {"title": "Pitch narrative refiner", "text": "I'm building [product] for [target customer]. Here is my current pitch: [paste]. Rewrite it using the problem-solution-why-now-why-us structure. Make the problem visceral and specific, cut jargon, and lead with the single most compelling number I have. Then flag the weakest claim an investor would challenge."}, {"title": "Go-to-market positioning statement", "text": "Using April Dunford's positioning framework, draft a positioning statement for [product], aimed at [target customer]. Cover: competitive alternatives, unique attributes, the value those enable, why it matters for [goal], and the market category I should frame myself in. Then suggest one alternative category framing."}, {"title": "Financial model starter", "text": "Act as a startup CFO. Help me build a simple 3-year monthly financial model for [business]. Walk me through the core assumptions to set first (pricing, units sold, CAC, churn, headcount, COGS), then lay out the revenue, expense, and cash-flow sections. Flag the 3 assumptions my outcome is most sensitive to."}, {"title": "Unit economics check", "text": "Here are my numbers: [price, gross margin, CAC, average customer lifespan, monthly churn]. Calculate my LTV, LTV:CAC ratio, and CAC payback period. Tell me whether these are healthy for a [type] business, which lever would improve them most, and what a realistic target for each would be."}, {"title": "First hire job description", "text": "I'm a founder making my first [role] hire for my [stage] startup. Write a job description that's honest about the ambiguity and scrappiness of early-stage work, screens for ownership and adaptability over pedigree, and avoids generic corporate filler. Include 5 interview questions that reveal whether someone thrives without structure."}, {"title": "Customer acquisition channel plan", "text": "My product is [product] for [customer], with a price point of [price]. Brainstorm 8 acquisition channels ranked by fit for my stage and budget. For the top 3, give me a concrete first experiment I could run this week for under [budget], the metric to watch, and what result would tell me to double down or kill it."}, {"title": "Cold outreach email", "text": "I'm building [product] for [target customer]. Write a cold email to them to get a [first meeting / pilot / intro], with the goal of [goal]. Keep it under 90 words, lead with a specific observation about their world (not about me), make one clear ask, and sound like a human, not a sales sequence. Then give me two subject-line options and one short follow-up to send if they don't reply."}, {"title": "Weekly priorities planner", "text": "I'm a solo founder juggling [list current responsibilities/projects]. My single most important goal this quarter is [goal]. Help me cut the list down: tell me what to focus on this week, what to deliberately ignore for now, and the one task that would most move me toward the goal. Be opinionated."}];
const STUDIO_MAP = {"product": "product", "my product": "product", "business": "product", "target customer": "customer", "customer": "customer", "target persona": "customer", "stage": "stage", "industry": "goal", "goal": "goal"};

(function initStudio() {
  const sel = document.getElementById('studioPrompt');
  if (!sel) return;
  STUDIO_PROMPTS.forEach((p, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = p.title;
    sel.appendChild(opt);
  });
  updateStudio();
})();

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildStudioText() {
  const idx = parseInt(document.getElementById('studioPrompt').value, 10) || 0;
  const vals = {
    product: document.getElementById('studioProduct').value.trim(),
    customer: document.getElementById('studioCustomer').value.trim(),
    stage: document.getElementById('studioStage').value.trim(),
    goal: document.getElementById('studioGoal').value.trim()
  };
  const tmpl = STUDIO_PROMPTS[idx].text;
  // Replace [label] with the mapped value if the user provided one; otherwise leave [label]
  return tmpl.replace(/\[([^\]]+)\]/g, function(match, label) {
    const field = STUDIO_MAP[label];
    if (field && vals[field]) return vals[field];
    return match; // keep placeholder
  });
}

function updateStudio() {
  const out = document.getElementById('studioOutput');
  const text = buildStudioText();
  // escape, then wrap any remaining [placeholders] in a highlight span
  const html = escapeHtml(text).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
  out.innerHTML = html;
}

function copyStudio() {
  const text = buildStudioText();
  const btn = document.getElementById('studioCopy');
  const sel = document.getElementById('studioPrompt');
  const promptName = (sel && STUDIO_PROMPTS[sel.value]) ? STUDIO_PROMPTS[sel.value].title : 'unknown';
  track('prompt_copy', { source: 'studio', prompt: promptName });
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1800);
  });
}

