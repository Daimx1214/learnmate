# Saathi (साथी)

A study tutor for a Class 8 government-school student who learns Science in Hindi (Devanagari), on a shared family phone with weak, intermittent internet. The app opens in English by default and switches to full Hindi with one tap on the header button (added 22 Nov 2026 on the owner's instruction); every screen, lesson, question and tutor answer exists in both languages.

Built for **ACE Builders Hackathon 2026** (GigPoint × Codebenders), Problem Statement 3: *The Last-Mile Tutor*.

Content: original, written in our own words, not copied from any textbook, with a complete English and Hindi version of every card and question. The app now covers **all seven Class 8 subjects** (expanded on the owner's instruction on 22 Nov, after the PS3 Science build): General Science (NCERT-based, 15 chapters, 47 concepts, 141 questions), Mathematics (6 chapters), and Computer Science, English, Urdu, Social Studies and Islamic Studies (5 chapters each, 15 concepts each) — **140 concepts and 420 questions in total**. Every concept is a lesson card plus 3 misconception-tagged questions. A subject selector on Home and Learn switches the whole app (lessons, practice, tutor, progress, family summary) between subjects; progress is kept per concept on the device.

## The problem

A Hindi-medium student in a small town often has no tutor, no personal device, and no reliable internet. Generic learning apps assume English, a personal phone, and always-on data. LearnMate assumes the opposite: one shared phone, a few minutes of connectivity a day, and a learner who thinks in Hindi.

## What Saathi (साथी) does

- **Profiles without accounts** — up to 4 learners on one phone, each entering with a nickname and an emoji avatar, or their own photo, which is stored only on the phone and never sent anywhere. No phone number, no email, no real name is ever collected.
- **Learn** — short concept cards for the selected subject, grouped by chapter, each with an everyday example and a read-aloud button (speech synthesis in the chosen language). Seven subjects: General Science, Mathematics, Computer Science, English, Urdu, Social Studies, Islamic Studies.
- **Practice that understands mistakes** — every wrong MCQ option is tagged with the misunderstanding behind it, and feedback explains that exact mistake in the chosen language. A per-concept mastery score (starting at 0.3, updated as `m ← m + 0.3 × (correct − m)`) drives the next question: mostly the weakest concept, and after two wrong answers in a row the lesson card is shown again before continuing.
- **Ask a doubt** — type or speak in the chosen language (browser speech recognition). The tutor is on-device keyword matching over the chapter content, not an LLM call: answers are short and step-by-step, ending with a small check question, and they work immediately even offline. Only the family sync waits for connectivity. This keeps the tutor free, private and fully offline.
- **Offline-first PWA** — installable; the chapter works fully offline after one download. Progress is stored on the device and syncs when a connection returns. A data meter shows today's approximate usage, with a data-saver mode.
- **Family view** — a read-only weekly summary (study minutes, concepts mastered, concepts needing help) opened with a 6-character family code. It never shows the student's doubt texts.
- **About page** — an honest business model: students pay nothing; NGOs, CSR education programmes and district school programmes would pay per learner per year, with a cost-per-learner breakdown where every number is labelled an assumption.

## Design

Calm school-notebook feel: warm paper background `#FBF7EF`, deep blue `#1F3A5F`, progress green `#2F7D5B`, one yellow accent `#E8A317`. Body text 18px+, touch targets 48px+, layout designed first for a 360px-wide phone, top navigation bar directly under the header, and a language button in the header.

## Run it

```bash
node server.js        # serves the app + /api/sync and /api/family/:code on $PORT (default 8080)
```

No build step, no dependencies — plain HTML/CSS/JavaScript (ES modules) with a small dependency-free Node server. Open the page once and it installs as a PWA and works offline.

To try it: pick the sample profile or create one → open **सीखें** (Learn) → try **अभ्यास** (Practice) from Home → ask a doubt in **पूछें** → see **प्रगति** (Progress) for your family code → enter that code in the family view.

## Architecture

- `index.html`, `styles.css` — shell and design system
- `js/data/chapter.js` — the Hindi content file: concepts, cards, MCQs with misconception tags
- `js/data/content-en.js` — the complete English version of the same content, keyed by the same ids
- `js/store.js` — local profiles, progress, doubts, settings (device storage)
- `js/mastery.js` — pure mastery + question-scheduling logic
- `js/tutor.js` — local tutor: answers doubts from chapter content
- `js/sync.js` — idempotent sync of progress and queued doubts; data-use counter
- `js/screens/` — profiles, home, learn, practice, ask, progress, family, about
- `sw.js` — service worker (cache-first app shell + chapter pack)
- `server.js` — static hosting plus `/api/sync` and `/api/family/:code` (family summaries stored in `data/families.json`, created at runtime; on a static host the family view falls back to on-device data)

## How it was built

Saathi (साथी) was designed and built inside the **Codebenders IDE** with its Nexen agent, as the hackathon requires. The process, in brief:

1. A detailed written brief was given to Nexen: the learner, the constraints (shared phone, weak internet, Hindi end-to-end), the feature list, the design tokens, and a build order.
2. Nexen planned 9 tasks (scaffold → data model → screens → PWA → verify) and generated the app in stages; file-writing was delegated to its editor agent after the main agent's tool limits were diagnosed.
3. A human review pass then checked the generated code against the written spec, and three corrections were made through follow-up prompts: the exact mastery formula and start value from the spec, read-aloud on lesson cards, and the on-screen data meter — plus a local fallback so the family view also works on static hosting.
4. Verification: syntax checks on all JS files, server smoke tests of the static routes and both API routes (including bad input), and a live run-through.

## Privacy

Sample profiles only. No personal data is collected, no accounts exist, and doubt texts are never shown in the family view or kept in synced family summaries.

## License

MIT
