#!/usr/bin/env node
/* Consistency check: the static <head> tags, robots.txt, and sitemap.xml must
   all carry the same permanent address as SITE.url in data/site.js, and every
   resource id referenced by data/phases.js must exist, and every guidebook link in
   data/alliance.js must point at something on the page. Run: node scripts/check-site.mjs */
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('.', import.meta.url).pathname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const load = files => new Function(files.map(read).join('\n') + '\nreturn { SITE, PHASES, RESOURCES, OPPORTUNITIES, CONTACTS, GLOSSARY, ALLIANCE };')();
const { SITE, PHASES, RESOURCES, OPPORTUNITIES, CONTACTS, GLOSSARY, ALLIANCE } = load(['data/site.js', 'data/phases.js', 'data/resources.js', 'data/opportunities.js', 'data/contacts.js', 'data/glossary.js', 'data/alliance.js']);
const html = read('index.html');
const problems = [];
const expect = (cond, msg) => { if (!cond) problems.push(msg); };

const url = SITE.url;
expect(/\/$/.test(url), 'SITE.url should end with a slash');
expect(html.includes(`<link rel="canonical" href="${url}" />`), `canonical tag does not match SITE.url (${url})`);
expect(html.includes(`<meta property="og:url" content="${url}" />`), 'og:url does not match SITE.url');
expect(html.includes(`"url": "${url}"`), 'JSON-LD url does not match SITE.url');
expect(read('robots.txt').includes(`Sitemap: ${url}sitemap.xml`), 'robots.txt sitemap line does not match SITE.url');
expect(read('sitemap.xml').includes(`<loc>${url}</loc>`), 'sitemap.xml loc does not match SITE.url');

const ids = new Set(RESOURCES.map(r => r.id));
expect(ids.size === RESOURCES.length, 'duplicate resource ids');
for (const p of PHASES) for (const id of p.resources) expect(ids.has(id), `phase ${p.n} references unknown resource "${id}"`);
for (const r of RESOURCES) expect(r.who && r.cost && r.time, `resource "${r.id}" is missing who/cost/time`);
const names = new Set();
for (const o of OPPORTUNITIES) { expect(!names.has(o.name), `duplicate opportunity "${o.name}"`); names.add(o.name); expect(o.cycle === 'rolling' || (o.opens && o.closes) || o.closesOn, `opportunity "${o.name}" has no dates`); }
for (const c of CONTACTS) expect(c.name && c.title, `contact ${c.id} incomplete`);
expect(GLOSSARY.some(g => g.start), 'no glossary term is marked start: true');
// The EA tab: eight weeks, and every guide link lands on a real id
// (a static id in index.html, a phase block, or a glossary term).
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pageIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1])
  .concat(PHASES.map(p => p.id), GLOSSARY.map(g => 'term-' + slug(g.term))));
expect(ALLIANCE.weeks.map(w => w.n).join() === '1,2,3,4,5,6,7,8', 'data/alliance.js should list weeks 1 to 8 in order');
for (const w of ALLIANCE.weeks) expect(/^\d{4}-\d{2}-\d{2}$/.test(w.date) && w.title, `EA week ${w.n} needs a date and a title`);
const eaLinks = [].concat(...ALLIANCE.weeks.map(w => w.guide || []), ...ALLIANCE.application.map(a => a.guide || []), ...ALLIANCE.beforeWeek1.map(b => b.guide || []), ALLIANCE.final.guide || []);
for (const g of eaLinks) expect(pageIds.has(g.to), `data/alliance.js links to "${g.to}", which is not on the page`);
for (const d of Object.values(SITE.reviewed)) expect(/^\d{4}-\d{2}-\d{2}$/.test(d), `bad reviewed date ${d}`);

if (problems.length) { console.error('check-site: ' + problems.length + ' problem(s)\n - ' + problems.join('\n - ')); process.exit(1); }
console.log(`check-site: ok (${RESOURCES.length} resources, ${OPPORTUNITIES.length} opportunities, ${GLOSSARY.length} glossary terms, ${eaLinks.length} EA links, url ${url})`);
