# What success looks like in analytics

The page sends events to Google Analytics 4 (measurement ID in the `<head>` of `index.html`) through one helper, `track(name, params)`, which no-ops when the tag is blocked. Nothing personal is collected: no names, no emails, and the saved-path data never leaves the visitor's browser. This document says what to measure, what "good" looks like, and how to read it.

## The question the guidebook exists to answer

> Did a student who was merely curious take a first real step, and did a student with an idea find the right program before its deadline?

Everything below rolls up to those two outcomes.

## The funnel

| Stage | Event(s) | What it means |
|---|---|---|
| 1. Arrived | `page_view` (automatic) | A visit |
| 2. Engaged with the front door | `curious_click`, `find_my_phase_open`, `nav_section` | Chose a way in |
| 3. Placed themselves | `find_my_phase_result` (param `phase`), `path_phase_set` | Knows where to start |
| 4. Did something with it | `path_step_toggle`, `semester_math`, `workbench_calc`, `glossary_term_open`, `playbook_open`, `resource_search`, `resource_filter` | Used a tool or read an answer |
| 5. Took a real step | `deadline_click`, `deadline_calendar`, `deadline_subscribe`, `book_mentor_click`, `outbound_click` (to a Mizzou program), `venture_submit_click`, `nominate_click`, `course_click` | Left the page toward a program, a person, or a deadline |
| 6. Came back | `path_resume` (param `completed`) | A returning visitor with saved progress |

**Mark these as key events (conversions) in GA4:** `book_mentor_click`, `deadline_calendar`, `deadline_subscribe`, `outbound_click` where `domain` ends in `missouri.edu` or is `columbiaredi.com`, `find_my_phase_result`, and `path_resume`.

## Targets for the first year (set September 2026, review each June)

| Measure | How to compute | Target |
|---|---|---|
| Front-door rate | (`curious_click` + `find_my_phase_open`) ÷ sessions | ≥ 35% of sessions |
| Placement rate | `find_my_phase_result` ÷ `find_my_phase_open` | ≥ 70% |
| Phase 0 share | `find_my_phase_result` with `phase = Phase 0` ÷ all results | 25–45% (the curious are finding the door; below 25% the hero copy is not reaching them, above 45% the assessment is steering too many away from Phase 1) |
| Real-step rate | sessions with any stage-5 event ÷ sessions | ≥ 20% |
| Mentor requests | `book_mentor_click` per month | ≥ 10 a month in term time |
| Deadline follow-through | (`deadline_click` + `deadline_calendar` + `deadline_subscribe`) per month | ≥ 40 a month in application season |
| Return rate | sessions with `path_resume` ÷ sessions | ≥ 15% |
| Path completion | `path_step_toggle` where `completed` reaches `6/6` | ≥ 5% of users who set a phase |
| Reach | `share_page` + `share_copy_link` + `flyer_print` per month | ≥ 15 a month |
| Breadth of majors | reported in `OUTCOMES.reported.majors` from program sign-ups, not GA4 | rising year over year |

## Events by section

Unchanged from before this upgrade (do not rename; dashboards depend on them): `nav_section`, `print_section`, `playbook_open`, `prompt_copy`, `find_my_phase_open`, `find_my_phase_result`, `resource_filter`, `resource_search`, `outbound_click`, `glossary_filter`, `glossary_search`, `glossary_term_open`, `path_phase_set`, `path_step_toggle`, `path_reset`, `path_resume`, `deadline_click`, `deadline_filter`, `deadline_calendar`, `workbench_tab`, `workbench_calc`, `venture_submit_click`, `venture_click`.

Added by this upgrade:

| Event | Params | Fires when |
|---|---|---|
| `curious_click` | `via` | "I'm just curious" in the hero |
| `find_my_phase_result` | `phase: 'Phase 0'` | the curious option in the self-assessment (same event, new value) |
| `semester_math` | `hours`, `free_hours`, `verdict` | a calculation settles (debounced) |
| `story_click` | `name` | a story card's link |
| `win_click` | `who` | a wins-feed link |
| `course_click` | `name` | a course card's link |
| `door_click` | `door`, `contact` | a name behind a "who do I talk to first" door |
| `book_mentor_click` | `via`, `method` | any "book twenty minutes" button |
| `deadline_subscribe` | `via` (`webcal`, `ics_all`, `email`, `form`) | the subscribe row on the board |
| `nominate_click` | `kind`, `method` | nominate a founder / report a win / suggest a resource |
| `lesson_open`, `lesson_play` | `title` / `id` | a video lesson link or embedded play |
| `share_page` | `method` (`native`, `copy`, `email`, `linkedin`, `x`) | share buttons |
| `share_copy_link` | `section` | copy link (page or a section) |
| `flyer_print` | — | print the one-page flyer |

## Reading it in GA4

1. **Explore → Funnel exploration** with the six stages above (use "any of" for stages 4 and 5). Look at it by first-user source to see whether posters (QR) and the CEI site bring students who take real steps.
2. **Reports → Engagement → Events**: `find_my_phase_result` by `phase` is the single most useful table on the property; it says who the page is reaching.
3. **A custom dimension** on `phase`, `via`, `method`, and `section` (Admin → Custom definitions) makes those parameters filterable.
4. Term-time weeks only. Compare September–November and February–April year over year; summer numbers are noise.

## What not to measure

Time on page and scroll depth: the page is long by design and a student who finds the deadline and leaves in forty seconds is a success. Do not add pixels, session recording, or forms that collect student data to this page.
