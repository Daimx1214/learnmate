# Saathi (साथी) — Architecture Contract

Plain HTML/CSS/vanilla JS PWA. No npm dependencies, no build step. All UI text is Hindi (Devanagari).

## Files

- `index.html` — shell: `<main id="app">`, `<nav id="top-nav" hidden>`, loads `js/app.js` (module) and registers `sw.js`.
- `styles.css` — design tokens (CSS variables) and component classes. The only stylesheet.
- `manifest.webmanifest`, `icon.svg` — PWA install metadata.
- `server.js` — zero-dependency Node 18+ static server + family sync API. Run with `npm start` (PORT env, default 8080).
- `data/` — server-side runtime data (`families.json`). Git-ignored, never served.
- `package.json`, `.gitignore`.

## Routes (hash-based)

| Hash | Screen | Bottom nav |
|---|---|---|
| `#/profiles` | profile picker | hidden |
| `#/home` | home | shown |
| `#/learn` | concept list | shown |
| `#/learn/<conceptId>` | concept card | shown |
| `#/practice` | MCQ practice | shown |
| `#/ask` | ask a doubt | shown |
| `#/progress` | progress | shown |
| `#/family` | family view (6-char code) | hidden |
| `#/about` | about + cost assumptions | hidden |

Bottom nav labels (in order): होम (`#/home`), सीखें (`#/learn`), पूछें (`#/ask`), प्रगति (`#/progress`).
Practice is reached from home/learn; it is not a nav tab.

## Module map

- `js/app.js` — entry. Router (hashchange), nav rendering, active-profile guard (no active profile → `#/profiles`), study-time ticker: every 15s while `document.visibilityState === 'visible'`, calls `addStudySeconds(profileId, 15)`.
- `js/data/chapter.js` — exports `CHAPTER` and `MISCONCEPTIONS`. The only editable content file.
- `js/store.js` — localStorage wrapper. All keys prefixed `saathi.v1`.
- `js/mastery.js` — pure functions. No DOM, no storage.
- `js/tutor.js` — pure offline doubt answering. No network.
- `js/sync.js` — sync and data-usage fetch wrapper. Every `fetch` goes through here and calls `addUsage`.
- `js/screens/{profiles,home,learn,practice,ask,progress,family,about}.js` — each exports `render(root, ctx)`.
- `ctx = { navigate(hash), params, toast(text), profile, refresh() }`.
- `sw.js` — root service worker (served normally from `/sw.js`).

## Content: `CHAPTER` (js/data/chapter.js)

```js
CHAPTER = {
  id: 'sci8-bal-dab',
  subject: 'विज्ञान',
  classLevel: 8,
  title: 'बल और दाब',
  concepts: [
    {
      id,                       // string, unique within chapter
      title,                    // Hindi
      keywords: [],             // Hindi and English words, for doubt matching
      card: {
        points: [],             // 2–4 short Hindi sentences
        example: '',            // one everyday example
      },
      questions: [
        {
          id,
          text,
          options: [
            { id: 'a', text, correct: true },
            { id: 'b', text, correct: false, misconception: '<tag>', feedback: '<Hindi explanation of that exact mistake>' },
          ],
        },
      ],
    },
  ],
};
```

Rules:
- Exactly one `correct: true` option per question.
- Every wrong option has `misconception` (a key in `MISCONCEPTIONS`) and `feedback`.

```js
MISCONCEPTIONS = { '<tag>': { label: '<short Hindi name>' } };
```

## Profiles

`{ id, nickname (1–20 chars), avatar (AVATARS key), familyCode (6 chars from A-HJ-NP-Z2-9), createdAt }`. Maximum 4 profiles per phone.

## Progress

localStorage key `saathi.v1.progress.<profileId>`:

```js
{
  mastery: { [conceptId]: 0..1 },
  wrongStreak: { [conceptId]: int },
  attempts: [{ ts, conceptId, questionId, optionId, tag: string|null, correct: boolean }], // cap 200
  attemptCounts: { [conceptId]: number }, // per-concept attempt totals, used by the mastered rule
  lastQuestionId: string|null,
  studyDays: { 'YYYY-MM-DD': seconds },
}
```

## Store API (js/store.js) — exact names

- `AVATARS` — 8 items `{ id, emoji, label_hi }`
- `getProfiles()`
- `createProfile({ nickname, avatar })`
- `getProfile(id)`
- `deleteProfile(id)`
- `setActiveProfile(id)`
- `getActiveProfileId()`
- `getProgress(profileId)`
- `saveProgress(profileId, progress)`
- `addStudySeconds(profileId, seconds, date = new Date())`
- `getDoubts(profileId)`
- `addDoubt(profileId, { text, status: 'queued' | 'answered', answer?, conceptId?, checkQuestion? })` → returns id
- `updateDoubt(profileId, id, patch)`
- `getSettings()` — defaults `{ dataSaver: false, lastSyncAt: null }`
- `setSettings(patch)`
- `getUsage()`
- `addUsage(bytes)` — daily reset, stored as `{ date, bytes }`

## Mastery API (js/mastery.js) — pure

- `applyAnswer(progress, { conceptId, questionId, optionId, tag, correct })` → new progress.
  - Update: `m += 0.3 * (correct - m)` where correct is 1 or 0; mastery starts at 0.3. A correct answer resets wrongStreak to 0; a wrong answer adds 1.
  - Appends to `attempts` (cap 200); sets `lastQuestionId`.
- `shouldShowLesson(progress, conceptId)` → `wrongStreak >= 2`.
- `pickNextQuestion(chapter, progress, rng = Math.random)` → `{ concept, question }`. About 70% from the weakest concept, about 20% spaced review (concepts unattempted for 2+ days), about 10% new. Difficulty band follows mastery: easy below 0.4, medium up to 0.7, hard above. Avoids `lastQuestionId` when possible.
- `conceptStatus(m, attempted, attemptCount)` → `'mastered'` (m ≥ 0.8 AND at least 3 attempts) | `'help'` (attempted and m < 0.5) | `'learning'`. `isMastered(progress, conceptId)` applies the same rule from stored progress.
- `weakConcepts(chapter, progress)`.
- `computeStreak(studyDays, todayStr)`.
- `weekMinutes(studyDays, todayStr)` — last 7 days, rounded minutes.

## Tutor API (js/tutor.js) — pure, offline

- `findClosestConcept(text, chapter)` → `{ concept, score }`.
- `answerDoubt(text, chapter)` → `{ matched, conceptId, answer, checkQuestion, card }`.
  - `answer`: Hindi, ≤ 90 words, steps formatted `चरण 1: ...`, includes an example.
  - `checkQuestion`: `{ text, options }` or `null`. Options include ALL options of the source question; the correct option id is kept separately as `correctOptionId`.

## Study time and data usage

- Study time: `app.js` adds study seconds every 15s while the page is visible.
- Data usage: every `fetch` in `js/sync.js` calls `addUsage(bytes)`.
- Data saver: when `getSettings().dataSaver` is true, automatic sync is skipped; a manual sync from the Progress screen still runs.

## Server API (server.js)

- `POST /api/sync` — body max 20 KB (413 above). Body `{ familyCode, summary }`.
  - `familyCode` must match `/^[A-HJ-NP-Z2-9]{6}$/`, else 400.
  - Stores only `{ weekMinutes, conceptsMastered, conceptsNeedingHelp (≤20 strings, each ≤60 chars), updatedAt }` into `data/families.json`, keyed by code.
  - Responds `200 { "ok": true }`. Bad JSON → 400.
- `GET /api/family/:code` — 400 if the code is invalid; 404 `{ "error": "not_found" }` if unknown; otherwise the stored entry.
- Other methods on `/api/*` → 405.
- Static: `/` → `index.html`. `data/`, `server.js` and the dot-directories `.codebenders`, `.git`, `.vscode` → 404. `.html`, `.js`, `.css` send `Cache-Control: no-cache`.
- Request bodies are never logged.

## Design tokens

Colors and spacing are CSS variables in `styles.css` (`--paper`, `--blue`, `--green`, `--yellow`, `--ink`, `--muted`, `--border`, `--card`). Reuse the classes there: `.card`, `.btn`, `.btn-secondary`, `.btn-ghost`, `.btn-yellow`, `.chip`, `.progress-bar`, `.meter`, `.toggle`, `.grid-avatars`, `.screen-title`, `.muted`, `.toast`, `.notice`, `.top-nav`. No gradients.

## Rules

- All UI strings are Hindi (Devanagari).
- Only `js/data/chapter.js` holds chapter content.
- Pure modules (`mastery.js`, `tutor.js`) must not touch the DOM or storage.
