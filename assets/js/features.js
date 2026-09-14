/* ============================================================
   RETURN-VISIT FEATURES — Founder Path, Deadlines, Workbench,
   Ventures, What's New. All state is local to the visitor's browser.
   Nothing is transmitted. The editable data these read from lives in
   data/changelog.js, data/phases.js (PATH_STEPS), data/opportunities.js
   and data/ventures.js.
   ============================================================ */

/* ---------- storage (safe in private mode / blocked storage) ---------- */
function ceiGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch (e) { return fallback; }
}
function ceiSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (e) { return false; }
}
function ceiDel(key) { try { localStorage.removeItem(key); } catch (e) {} }

/* ---------- 1. What's New (data: CHANGELOG, RESOURCE_ADDED in data/changelog.js) ---------- */
function renderWhatsNew() {
  const ul = document.getElementById('whatsnewList');
  if (!ul) return;
  ul.innerHTML = CHANGELOG.slice(0, 3).map(function (c) {
    const d = new Date(c.date + 'T12:00:00');
    const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return '<li><time datetime="' + c.date + '">' + label + '</time><span>' + c.text + '</span></li>';
  }).join('');
}

function badgeNewResources() {
  const cutoff = Date.now() - 45 * 864e5;
  document.querySelectorAll('#resources .resource-card.master h3').forEach(function (h) {
    const when = RESOURCE_ADDED[h.textContent.trim()];
    if (!when) return;
    if (new Date(when + 'T12:00:00').getTime() < cutoff) return;
    if (h.querySelector('.new-badge')) return;
    const b = document.createElement('span');
    b.className = 'new-badge';
    b.textContent = 'New';
    h.appendChild(b);
  });
}

function stampLastUpdated() {
  const el = document.getElementById('lastUpdatedText');
  if (!el || !CHANGELOG.length) return;
  const d = new Date(CHANGELOG[0].date + 'T12:00:00');
  const days = Math.floor((Date.now() - d.getTime()) / 864e5);
  const rel = days <= 0 ? 'today' : days === 1 ? 'yesterday'
    : days < 30 ? days + ' days ago'
    : days < 60 ? 'last month'
    : Math.round(days / 30) + ' months ago';
  el.textContent = 'Updated ' + rel + ' · ' + d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ---------- 2. My Founder Path (data: PATH_STEPS in data/phases.js) ---------- */
const PATH_KEY = 'cei_path_v2';

function pathState() { return ceiGet(PATH_KEY, { phase: null, done: [], updated: null }); }
function pathSave(s) { s.updated = new Date().toISOString(); ceiSet(PATH_KEY, s); }

function pathSetPhase(phase) {
  const s = pathState();
  if (s.phase !== phase) { s.phase = phase; s.done = []; }
  pathSave(s);
  renderPath();
  track('path_phase_set', { phase: 'Phase ' + phase });
}

function pathToggle(i) {
  const s = pathState();
  if (!s.phase) return;
  const at = s.done.indexOf(i);
  if (at === -1) { s.done.push(i); } else { s.done.splice(at, 1); }
  pathSave(s);
  renderPath();
  const steps = PATH_STEPS[s.phase] || [];
  track('path_step_toggle', {
    phase: 'Phase ' + s.phase,
    step: (steps[i] || '').slice(0, 60),
    done: at === -1,
    completed: s.done.length + '/' + steps.length
  });
}

function pathReset() {
  ceiDel(PATH_KEY);
  renderPath();
  track('path_reset');
}

function pathGoToPhase() {
  const s = pathState();
  if (!s.phase) { openAssessment(); return; }
  scrollToSection('phase-' + s.phase);
}

function renderPath() {
  const list = document.getElementById('pathList');
  if (!list) return;
  const s = pathState();
  const num = document.getElementById('pathNum');
  const name = document.getElementById('pathName');
  const sub = document.getElementById('pathSub');
  const jump = document.getElementById('pathJump');
  const find = document.getElementById('pathFind');
  const resetBtn = document.getElementById('pathResetBtn');
  const saved = document.getElementById('pathSaved');

  if (!s.phase) {
    num.textContent = '—';
    name.textContent = 'No phase selected yet';
    sub.textContent = 'Take the 30-second self-assessment and your path appears here.';
    document.getElementById('pathBar').style.width = '0%';
    document.getElementById('pathDone').textContent = '0';
    document.getElementById('pathLeft').textContent = '—';
    document.getElementById('pathPct').textContent = '0%';
    // Nothing chosen yet: the only sensible action is the assessment,
    // so the jump and reset buttons stay out of the way.
    find.textContent = '⌖ Find my phase';
    find.classList.add('primary');
    jump.classList.remove('primary');
    jump.hidden = true;
    resetBtn.hidden = true;
    saved.textContent = '';
    list.innerHTML = '<li><div class="cei-empty" style="border:none;padding:28px 0;text-align:left">'
      + '<strong>Your checklist appears here.</strong>Choose a phase and you\'ll get the six moves that matter most at that stage.</div></li>';
    return;
  }

  const steps = PATH_STEPS[s.phase] || [];
  const t = (typeof PHASE_TITLES !== 'undefined' && PHASE_TITLES[s.phase]) || { title: '', sub: '' };
  const done = s.done.filter(function (i) { return i < steps.length; });
  const pct = steps.length ? Math.round(done.length / steps.length * 100) : 0;

  num.textContent = '0' + s.phase;
  name.textContent = t.title || ('Phase ' + s.phase);
  sub.textContent = t.sub || '';
  document.getElementById('pathBar').style.width = pct + '%';
  document.getElementById('pathDone').textContent = String(done.length);
  document.getElementById('pathLeft').textContent = String(steps.length - done.length);
  document.getElementById('pathPct').textContent = pct + '%';
  // Phase chosen: going to it is the primary move, and the assessment
  // becomes a secondary "my stage changed" action.
  jump.hidden = false;
  resetBtn.hidden = false;
  jump.textContent = 'Go to Phase ' + s.phase;
  jump.classList.add('primary');
  find.textContent = 'Retake assessment';
  find.classList.remove('primary');

  if (s.updated) {
    const d = new Date(s.updated);
    const days = Math.floor((Date.now() - d.getTime()) / 864e5);
    saved.textContent = pct === 100
      ? 'Phase ' + s.phase + ' complete. When the work changes, run the assessment again.'
      : 'Last saved ' + (days <= 0 ? 'today' : days === 1 ? 'yesterday' : days + ' days ago') + '.';
  }

  list.innerHTML = steps.map(function (step, i) {
    const on = done.indexOf(i) !== -1;
    return '<li><button class="path-check" aria-pressed="' + on + '" onclick="pathToggle(' + i + ')">'
      + '<span class="path-box" aria-hidden="true">✓</span>'
      + '<span class="path-text">' + step + '</span></button></li>';
  }).join('');
}


/* ---------- 3. Deadline board (data: OPPORTUNITIES in data/opportunities.js) ---------- */
const DAY = 864e5;
function atNoon(y, m, d) { return new Date(y, m - 1, d, 12, 0, 0).getTime(); }
function parseMD(md, year) { const p = md.split('-'); return atNoon(year, +p[0], +p[1]); }

/* Resolve an entry to { state, closeAt, openAt } for right now. */
function dlResolve(o, now) {
  if (o.cycle === 'rolling') return { state: 'rolling' };
  if (o.cycle === 'dated') {
    const c = new Date(o.closesOn + 'T12:00:00').getTime();
    return c < now ? { state: 'closed', closeAt: c } : { state: 'open', closeAt: c };
  }
  // annual — test this year and the neighbours so windows that cross
  // New Year (opens Nov, closes Feb) resolve correctly
  const y = new Date(now).getFullYear();
  let best = null;
  for (let k = -1; k <= 1; k++) {
    let open = parseMD(o.opens, y + k);
    let close = parseMD(o.closes, y + k);
    if (close < open) close = parseMD(o.closes, y + k + 1); // wraps the year
    if (now >= open && now <= close) return { state: 'open', openAt: open, closeAt: close };
    if (open > now && (!best || open < best.openAt)) best = { state: 'soon', openAt: open, closeAt: close };
  }
  return best || { state: 'closed' };
}

function fmtDate(ms) {
  return new Date(ms).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

let dlFilter = 'all';

function renderDeadlines() {
  const grid = document.getElementById('dlGrid');
  if (!grid) return;
  const now = Date.now();

  const rows = OPPORTUNITIES.map(function (o) {
    const r = dlResolve(o, now);
    const daysToClose = r.closeAt ? Math.ceil((r.closeAt - now) / DAY) : null;
    const daysToOpen = r.openAt && r.state === 'soon' ? Math.ceil((r.openAt - now) / DAY) : null;
    const urgent = r.state === 'open' && daysToClose !== null && daysToClose <= 21;
    return { o: o, r: r, daysToClose: daysToClose, daysToOpen: daysToOpen, urgent: urgent };
  });

  const rank = { open: 0, soon: 1, rolling: 2, closed: 3 };
  rows.sort(function (a, b) {
    if (a.urgent !== b.urgent) return a.urgent ? -1 : 1;
    const ra = rank[a.r.state], rb = rank[b.r.state];
    if (ra !== rb) return ra - rb;
    if (a.r.state === 'open') return (a.daysToClose || 0) - (b.daysToClose || 0);
    if (a.r.state === 'soon') return (a.daysToOpen || 0) - (b.daysToOpen || 0);
    return a.o.name.localeCompare(b.o.name);
  });

  const shown = rows.filter(function (x) {
    if (dlFilter === 'all') return true;
    if (dlFilter === 'open') return x.r.state === 'open' || x.r.state === 'rolling';
    if (dlFilter === 'soon') return x.r.state === 'soon';
    return x.o.type === dlFilter;
  });

  document.getElementById('dlEmpty').style.display = shown.length ? 'none' : '';

  grid.innerHTML = shown.map(function (x, i) {
    const o = x.o, r = x.r;
    let cls, label, when;

    if (r.state === 'rolling') {
      cls = 'rolling'; label = 'Rolling';
      when = '<b>Open year-round</b>';
    } else if (r.state === 'open') {
      cls = x.urgent ? 'urgent' : 'open';
      label = x.daysToClose <= 0 ? 'Closes today' : x.daysToClose + (x.daysToClose === 1 ? ' day left' : ' days left');
      when = '<b>Closes ' + fmtDate(r.closeAt) + '</b>';
    } else if (r.state === 'soon') {
      cls = 'soon'; label = 'Opens in ' + x.daysToOpen + 'd';
      when = 'Opens ' + fmtDate(r.openAt) + '<br><b>Closes ' + fmtDate(r.closeAt) + '</b>';
    } else {
      cls = 'closed'; label = 'Closed';
      when = 'Cycle has passed for this year';
    }
    if (!o.confirmed && r.state !== 'rolling') {
      when += '<div class="dl-unconfirmed">Usual cycle — unconfirmed, check the site</div>';
    }

    const canIcs = o.confirmed && r.closeAt;
    return '<div class="dl-row">'
      + '<div><span class="dl-status ' + cls + '">' + label + '</span></div>'
      + '<div><div class="dl-name"><a href="' + o.url + '" target="_blank" rel="noopener" onclick="track(\'deadline_click\',{name:' + JSON.stringify(o.name) + '})">' + o.name + '</a></div>'
      + '<div class="dl-meta"><span class="dl-tag">' + o.type + '</span>' + o.org + ' — ' + o.note + '</div></div>'
      + '<div class="dl-when">' + when + '</div>'
      + '<div><button class="dl-ics" ' + (canIcs ? '' : 'disabled title="Confirm the date on the program site first"')
      + ' onclick="downloadIcs(' + OPPORTUNITIES.indexOf(o) + ')">+ Calendar</button></div>'
      + '</div>';
  }).join('');
}

function filterDeadlines(btn) {
  dlFilter = btn.dataset.dl;
  document.querySelectorAll('#dlChips .cei-chip').forEach(function (c) { c.classList.toggle('on', c === btn); });
  renderDeadlines();
  track('deadline_filter', { filter: dlFilter });
}

function downloadIcs(idx) {
  const o = OPPORTUNITIES[idx];
  if (!o) return;
  const r = dlResolve(o, Date.now());
  if (!r.closeAt) return;
  const d = new Date(r.closeAt);
  const stamp = function (dt) {
    return dt.getFullYear() + String(dt.getMonth() + 1).padStart(2, '0') + String(dt.getDate()).padStart(2, '0');
  };
  const end = new Date(r.closeAt + DAY);
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Trulaske CEI//Guidebook//EN', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:' + stamp(d) + '-' + idx + '@cei.missouri.edu',
    'DTSTAMP:' + stamp(new Date()) + 'T090000Z',
    'DTSTART;VALUE=DATE:' + stamp(d),
    'DTEND;VALUE=DATE:' + stamp(end),
    'SUMMARY:Deadline — ' + o.name,
    'DESCRIPTION:' + (o.org + '. ' + o.note + ' Confirm details at ' + o.url).replace(/[,;]/g, ' '),
    'URL:' + o.url,
    'BEGIN:VALARM', 'TRIGGER:-P7D', 'ACTION:DISPLAY', 'DESCRIPTION:One week to apply — ' + o.name, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = o.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.ics';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  track('deadline_calendar', { name: o.name });
}

/* ============================================================
   4. FOUNDER WORKBENCH
   ============================================================ */
const WB_KEY = 'cei_workbench_v1';
function wbStore() { return ceiGet(WB_KEY, {}); }
function wbRemember(id, val) { const s = wbStore(); s[id] = val; ceiSet(WB_KEY, s); }
function wbRestore(ids) {
  const s = wbStore();
  ids.forEach(function (id) {
    const el = document.getElementById(id);
    if (el && s[id] !== undefined && s[id] !== '') el.value = s[id];
    if (el) el.addEventListener('input', function () { wbRemember(id, el.value); });
  });
}
function num(id) { const el = document.getElementById(id); const v = parseFloat(el && el.value); return isFinite(v) ? v : null; }
function money(n) {
  if (n === null || !isFinite(n)) return '—';
  const abs = Math.abs(n);
  if (abs >= 1e6) return '$' + (n / 1e6).toFixed(abs >= 1e7 ? 0 : 1) + 'M';
  if (abs >= 1e3) return '$' + Math.round(n / 1e3) + 'k';
  return '$' + Math.round(n);
}

function wbTab(btn) {
  document.querySelectorAll('.wb-tab').forEach(function (t) {
    const on = t === btn;
    t.classList.toggle('on', on);
    t.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.wb-panel').forEach(function (p) {
    p.classList.toggle('on', p.id === btn.dataset.wb);
  });
  track('workbench_tab', { tab: btn.textContent.trim() });
}

/* --- Runway / default alive --- */
function calcRunway() {
  const cash = num('rwCash'), rev0 = num('rwRev'), cost = num('rwCost');
  const g = (num('rwGrowth') || 0) / 100;
  const v = document.getElementById('rwVerdict');
  const set = function (id, t) { document.getElementById(id).textContent = String(t); };

  if (cash === null || cost === null || rev0 === null) {
    v.className = 'wb-verdict idle';
    v.innerHTML = '<b>Enter your numbers</b><span>Paul Graham\'s test: if nothing changes and you raise nothing more, do you reach profitability before the money runs out?</span>';
    ['rwMonths', 'rwBurn', 'rwBreak', 'rwLow'].forEach(function (id) { set(id, '—'); });
    return;
  }

  let bal = cash, rev = rev0, months = 0, breakeven = null, low = cash;
  const LIMIT = 120;
  while (months < LIMIT) {
    if (rev >= cost && breakeven === null) { breakeven = months; break; }
    bal += rev - cost;
    low = Math.min(low, bal);
    months++;
    rev = rev * (1 + g);
    if (bal <= 0) break;
  }
  const alive = breakeven !== null && bal > 0;
  const runway = (cost - rev0) > 0 ? Math.floor(cash / (cost - rev0)) : null;

  set('rwBurn', money(Math.max(0, cost - rev0)) + '/mo');
  set('rwMonths', alive ? '∞' : (runway === null ? '∞' : runway));
  set('rwBreak', breakeven === null ? 'Not within 10 yrs' : breakeven === 0 ? 'Already there' : breakeven + ' mo');
  set('rwLow', money(low));

  if (rev0 >= cost) {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>Default alive</b><span>You are already profitable at this run rate. Raise because it accelerates something, not because you need it.</span>';
  } else if (alive) {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>Default alive</b><span>At ' + (g * 100).toFixed(1) + '% monthly growth you reach breakeven in about ' + breakeven + ' months, with roughly ' + money(low) + ' left at the low point. Thin, but you get there without raising.</span>';
  } else {
    v.className = 'wb-verdict bad';
    v.innerHTML = '<b>Default dead</b><span>On this trajectory the money runs out before you turn profitable. Two levers: grow revenue faster or cut costs. Find out now, while you still have room to act.</span>';
  }
  track('workbench_calc', { tool: 'runway' });
}

/* --- Unit economics --- */
function calcUnit() {
  const rev = num('ueRev'), margin = num('ueMargin'), cac = num('ueCac'), churn = num('ueChurn');
  const v = document.getElementById('ueVerdict');
  const set = function (id, t) { document.getElementById(id).textContent = String(t); };

  if (rev === null || margin === null || cac === null || churn === null || churn <= 0) {
    v.className = 'wb-verdict idle';
    v.innerHTML = '<b>Enter your numbers</b><span>The rule of thumb investors use: earn back acquisition cost inside 12 months, and make at least three times what a customer costs you.</span>';
    ['ueLtv', 'ueRatio', 'uePay', 'ueLife'].forEach(function (id) { set(id, '—'); });
    return;
  }

  const life = 100 / churn;                      // months
  const gross = rev * (margin / 100);            // gross profit per month
  const ltv = gross * life;
  const ratio = cac > 0 ? ltv / cac : Infinity;
  const payback = gross > 0 ? cac / gross : null;

  set('ueLtv', money(ltv));
  set('ueRatio', (isFinite(ratio) ? ratio.toFixed(1) : '∞') + '×');
  set('uePay', payback === null ? '—' : payback.toFixed(1) + ' mo');
  set('ueLife', life.toFixed(1) + ' mo');

  if (ratio >= 3 && payback !== null && payback <= 12) {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>These work</b><span>You make ' + ratio.toFixed(1) + '× what a customer costs and earn it back in ' + payback.toFixed(1) + ' months. Spend more on acquisition with some confidence.</span>';
  } else {
    const problems = [];
    if (ratio < 3) problems.push('the ratio is ' + ratio.toFixed(1) + '× against a 3× floor');
    if (payback !== null && payback > 12) problems.push('payback takes ' + payback.toFixed(1) + ' months against a 12-month ceiling');
    v.className = 'wb-verdict bad';
    v.innerHTML = '<b>Not there yet</b><span>Right now ' + problems.join(', and ') + '. Churn is usually the fastest lever — cutting it lengthens customer life and lifts value at the same time.</span>';
  }
  track('workbench_calc', { tool: 'unit_economics' });
}

/* --- Equity & dilution --- */
let eqRows = [{ name: '', pct: '' }];
function eqRender() {
  const host = document.getElementById('eqFounders');
  if (!host) return;
  host.innerHTML = eqRows.map(function (r, i) {
    return '<div class="wb-splitrow">'
      + '<input class="wb-input" placeholder="Founder ' + (i + 1) + '" value="' + (r.name || '').replace(/"/g, '&quot;') + '" oninput="eqSet(' + i + ',\'name\',this.value)" />'
      + '<input class="wb-input pct" type="number" min="0" max="100" step="1" placeholder="%" value="' + (r.pct === '' ? '' : r.pct) + '" oninput="eqSet(' + i + ',\'pct\',this.value)" />'
      + (eqRows.length > 1 ? '<button class="wb-rm" type="button" aria-label="Remove founder" onclick="eqRemove(' + i + ')">×</button>' : '')
      + '</div>';
  }).join('');
}
function eqSet(i, k, v) { eqRows[i][k] = v; ceiSet('cei_equity_v1', eqRows); calcEquity(); }
function eqAddFounder() { if (eqRows.length >= 8) return; eqRows.push({ name: '', pct: '' }); eqRender(); calcEquity(); }
function eqRemove(i) { eqRows.splice(i, 1); ceiSet('cei_equity_v1', eqRows); eqRender(); calcEquity(); }

function calcEquity() {
  const pre = num('eqPre'), raise = num('eqRaise');
  const pool = num('eqPool') || 0;
  const v = document.getElementById('eqVerdict');
  const table = document.getElementById('eqTable');
  const set = function (id, t) { document.getElementById(id).textContent = String(t); };

  const named = eqRows.filter(function (r) { return parseFloat(r.pct) > 0; });
  const total = named.reduce(function (s, r) { return s + parseFloat(r.pct); }, 0);

  if (pre === null || raise === null || pre <= 0 || !named.length) {
    v.className = 'wb-verdict idle';
    v.innerHTML = '<b>Enter your numbers</b><span>See what each founder holds after the round, the option pool, and the investor\'s stake are all accounted for.</span>';
    set('eqPost', '—'); set('eqInv', '—'); table.innerHTML = '';
    return;
  }

  const post = pre + raise;
  const invPct = raise / post * 100;
  const founderShare = Math.max(0, 100 - invPct - pool);

  set('eqPost', money(post));
  set('eqInv', invPct.toFixed(1) + '%');

  table.innerHTML = named.map(function (r) {
    const before = parseFloat(r.pct);
    const after = before / (total || 100) * founderShare;
    return '<li><div style="display:flex;justify-content:space-between;gap:16px;padding:13px 4px;font-size:14px">'
      + '<span>' + (r.name || 'Founder') + '</span>'
      + '<span style="color:var(--black-tint-1)">' + before.toFixed(1) + '% → <b style="color:var(--ink)">' + after.toFixed(1) + '%</b></span>'
      + '</div></li>';
  }).join('')
    + '<li><div style="display:flex;justify-content:space-between;gap:16px;padding:13px 4px;font-size:14px">'
    + '<span>Option pool</span><span><b>' + pool.toFixed(1) + '%</b></span></div></li>'
    + '<li><div style="display:flex;justify-content:space-between;gap:16px;padding:13px 4px;font-size:14px">'
    + '<span>New investor</span><span><b>' + invPct.toFixed(1) + '%</b></span></div></li>';

  const dilution = 100 - founderShare;
  if (Math.abs(total - 100) > 0.5) {
    v.className = 'wb-verdict idle';
    v.innerHTML = '<b>Splits total ' + total.toFixed(0) + '%</b><span>Founder percentages should add up to 100 before the round for these numbers to mean anything.</span>';
  } else if (dilution > 35) {
    v.className = 'wb-verdict bad';
    v.innerHTML = '<b>' + dilution.toFixed(0) + '% dilution in one round</b><span>Founders end up holding ' + founderShare.toFixed(0) + '% together. Above roughly 25% for a single early round, it is worth asking whether you are raising too much, too early, or at too low a valuation.</span>';
  } else {
    v.className = 'wb-verdict good';
    v.innerHTML = '<b>' + dilution.toFixed(0) + '% dilution</b><span>Founders hold ' + founderShare.toFixed(0) + '% together after the round. That is a normal outcome for an early raise at this valuation.</span>';
  }
  track('workbench_calc', { tool: 'equity' });
}

/* ---------- 5. Student venture showcase (data: VENTURE_FORM_URL, VENTURES in data/ventures.js) ---------- */
function ventureSubmitHref() {
  if (VENTURE_FORM_URL) return VENTURE_FORM_URL;
  const body = [
    'Venture name:',
    'Founder name(s) and class year:',
    'One sentence on what it does:',
    'Phase (1 Discovery / 2 Validation / 3 Launch / 4 Growth):',
    'Website or social link (optional):',
    '',
    'I am a Mizzou student and I am happy to be listed publicly in the guidebook.'
  ].join('\n');
  return 'mailto:cei@missouri.edu'
    + '?subject=' + encodeURIComponent('Add my venture — CEI Guidebook')
    + '&body=' + encodeURIComponent(body);
}

function wireVentureCta(el) {
  if (!el) return;
  const href = ventureSubmitHref();
  el.setAttribute('href', href);
  if (href.indexOf('mailto:') === 0) {
    el.removeAttribute('target');
    el.removeAttribute('rel');
  } else {
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  }
  el.onclick = function () { track('venture_submit_click', { via: VENTURE_FORM_URL ? 'form' : 'email' }); };
}

let vtFilter = 'all';
function renderVentures() {
  const grid = document.getElementById('vtGrid');
  const empty = document.getElementById('vtEmpty');
  const chips = document.getElementById('vtChips');
  const cta = document.getElementById('vtCta');
  if (!grid) return;

  if (!VENTURES.length) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    chips.style.display = 'none';
    empty.style.display = '';
    cta.innerHTML = '';
    wireVentureCta(document.getElementById('vtAddEmpty'));
    return;
  }

  grid.style.display = '';
  chips.style.display = '';
  const shown = VENTURES.filter(function (v) { return vtFilter === 'all' || String(v.phase) === vtFilter; });
  empty.style.display = shown.length ? 'none' : '';
  if (!shown.length) {
    empty.innerHTML = '<strong>Nothing in that phase yet</strong>Try another phase, or add yours.';
  }

  grid.innerHTML = shown.map(function (v) {
    const title = v.url
      ? '<a href="' + v.url + '" target="_blank" rel="noopener" onclick="track(\'venture_click\',{name:' + JSON.stringify(v.name) + '})">' + v.name + '</a>'
      : v.name;
    return '<div class="vt-card">'
      + '<div class="vt-top"><span class="vt-phase">Phase ' + v.phase + '</span>'
      + (v.grad ? '<span class="vt-year">' + v.grad + '</span>' : '') + '</div>'
      + '<h3>' + title + '</h3>'
      + (v.founder ? '<div class="vt-founder">' + v.founder + '</div>' : '')
      + '<p>' + v.blurb + '</p></div>';
  }).join('');

  cta.innerHTML = '<a class="path-btn primary" id="vtAddMore" style="display:inline-block;text-decoration:none">Add your venture →</a>';
  wireVentureCta(document.getElementById('vtAddMore'));
}
function filterVentures(btn) {
  vtFilter = btn.dataset.vt;
  document.querySelectorAll('#vtChips .cei-chip').forEach(function (c) { c.classList.toggle('on', c === btn); });
  renderVentures();
}

/* ============================================================
   INIT
   ============================================================ */
(function () {
  // Save the phase whenever the existing self-assessment returns a result.
  if (typeof answerAssessment === 'function') {
    const original = answerAssessment;
    window.answerAssessment = function (phase) {
      try { pathSetPhase(phase); } catch (e) {}
      return original.apply(this, arguments);
    };
  }

  function boot() {
    renderWhatsNew();
    badgeNewResources();
    stampLastUpdated();
    renderPath();
    renderDeadlines();
    renderVentures();

    eqRows = ceiGet('cei_equity_v1', [{ name: '', pct: '' }]);
    if (!Array.isArray(eqRows) || !eqRows.length) eqRows = [{ name: '', pct: '' }];
    eqRender();
    wbRestore(['rwCash', 'rwRev', 'rwCost', 'rwGrowth', 'ueRev', 'ueMargin', 'ueCac', 'ueChurn', 'eqPool', 'eqRaise', 'eqPre']);
    calcRunway(); calcUnit(); calcEquity();

    // Returning visitor: report progress once per session so the GA4
    // returning-visitor picture is readable.
    const s = pathState();
    if (s.phase) {
      const steps = (PATH_STEPS[s.phase] || []).length;
      track('path_resume', { phase: 'Phase ' + s.phase, completed: s.done.length + '/' + steps });
    }
    // Keep countdowns honest if a tab is left open across midnight.
    setInterval(renderDeadlines, 60 * 60 * 1000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
