#!/usr/bin/env node
/* Consistency check: the static <head> tags, robots.txt, and sitemap.xml must
   all carry the same permanent address as SITE.url in data/site.js, and every
   resource id referenced by data/phases.js must exist. Run: node scripts/check-site.mjs */
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('.', import.meta.url).pathname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const load = files => new Function(files.map(read).join('\n') + '\nreturn { SITE, PHASES, RESOURCES, OPPORTUNITIES, CONTACTS, GLOSSARY };')();
const { SITE, PHASES, RESOURCES, OPPORTUNITIES, CONTACTS, GLOSSARY } = load(['data/site.js', 'data/phases.js', 'data/resources.js', 'data/opportunities.js', 'data/contacts.js', 'data/glossary.js']);
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
for (const d of Object.values(SITE.reviewed)) expect(/^\d{4}-\d{2}-\d{2}$/.test(d), `bad reviewed date ${d}`);

if (problems.length) { console.error('check-site: ' + problems.length + ' problem(s)\n - ' + problems.join('\n - ')); process.exit(1); }
console.log(`check-site: ok (${RESOURCES.length} resources, ${OPPORTUNITIES.length} opportunities, ${GLOSSARY.length} glossary terms, url ${url})`);
