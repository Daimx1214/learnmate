# Codebenders usage log — Saathi (साथी)

ACE Builders Hackathon 2026 · Problem Statement 3: The Last-Mile Tutor
Daim Ali (solo) · Registration #1203 · 21 November 2026

The app was built by prompting inside the Codebenders IDE (Nexen agent). This log lists the brief, the plan, and the main prompt rounds, in order.

## Build (21 Nov, afternoon, in the IDE)

1. **Brief prompt:** PS3 — a Hindi-first, offline-first PWA tutor for a Class 8 Hindi-medium student (Science, Force and Pressure) on a shared family phone with weak internet. No login, no personal data, up to 4 profiles, family-code progress view, data meter.
2. **Plan (9 tasks):** scaffold → data model (store/mastery) → chapter content (5 concepts, 15 MCQs with misconception-tagged wrong options) → screens (profiles, home, learn, practice, ask, progress, family, about) → on-device tutor → PWA + service worker → local server sync → verification passes in the browser.
3. **Corrections given during the build:** exact mastery formula (m ← m + 0.3 × (correct − m), starting at 0.3; mastered at m ≥ 0.8 with at least 3 attempts); read-aloud button on lesson cards; data meter in the header; family view must fall back to local data when no server answers; data-saver blocks only automatic sync, never a manual one.
4. **Design rounds:** sticky header with profile + data meter; self-hosted Mukta fonts (no CDN); 640px centred layout; typography pass (card titles 22px, body 18px); spacing pass; bottom-nav rendering fix.

## Audit fix rounds (21 Nov, evening, in the IDE)

5. **Rename:** LearnMate → Saathi everywhere (browser title, manifest, in-app brand, icon letter स, service-worker cache name), so the product name matches the repo and live URL.
6. **Hindi-only:** English and Urdu chapter files, the language selector and the multi-language string system removed — Problem Statement 3 asks for ONE regional language end to end. Hindi is the single full path.

## Note on the final corrections

The hackathon token pool (16M tokens) was exhausted on the evening of 21 Nov, before the last audit corrections could be run in the IDE (practice-screen header, app footer with the About link, sync behaviour on static hosting, two question-bank fixes, server and docs cleanup). Those remaining corrections were applied directly to the same files afterwards, following the audit list point by point. Everything listed above them was built and verified inside the IDE.

## UI self-check pass (21 Nov, evening)

Ran a generic web-UI checklist against the live site section by section (code inspection plus fresh-profile browser passes at desktop and mobile widths). Findings and what changed:

- Header → all screens → same sticky header everywhere; active tab is bold blue; pass.
- Header → phone safe areas → notch phones could sit under the status bar in the installed app → added viewport-fit=cover and safe-area top padding to the header and the top navigation.
- Footer → short pages → footer floated under the content with a large empty gap below → made the app column full-height and let the footer take the remaining space; a duplicate margin-top in the footer rule was defeating this and was removed. Now pinned; the small strip left below is the page's own bottom padding.
- Footer → links → About and Family links clicked and working; pass.
- Spacing → Home and other screens after the layout change → gaps even, no double spacing; pass.
- Layout → very long profile name (20 characters) → header truncates cleanly, no overlap with the data meter; also added overflow-wrap so long words in doubts and answers wrap instead of breaking the layout.
- Typography → body text 18px, muted grey on the paper background measures about 5.9:1; status is always shown as words as well as colour; pass.
- Interaction → keyboard focus → no visible focus ring anywhere → added a clear blue focus-visible outline.
- Interaction → slow loading → blank screen until the app script arrived → the shell now shows a "लोड हो रहा है…" note that the app replaces on start.
- Accessibility → one h1 per screen, aria-labels on the name field and icon controls, lang="hi", reduced-motion rule already present; pass.
- PWA and hosting → sub-path hosting, hash routes, refresh on inner pages, offline shell, install manifest and icons all verified in fresh browser profiles; updates now reach old visitors (cache v7 confirmed live).
- Progress bars → a screenshot in the test browser made the first mastery bar look empty → measured the rendered pixels directly: the first bar's fill is 172px of green, identical to the second bar (same inline --p: 0.30, same track width). The bar is correct; the empty look was an artefact of that browser's screenshots, not of the page.
- Not run: Lighthouse scores and the browser console (the test browser would not open DevTools), and a physical notch phone. Everything else on the list was checked by hand or by code.

## Spacing pass (21 Nov, evening)

A spacing system was applied across the app on the owner's list: 20px gaps between app blocks, roomier cards (20px padding, 16px radius, soft shadow), 16px list gaps. Targeted fixes: Learn concept card (example box and action buttons un-stuck, roomier numbered points), Family code form gap, Learn list and Progress pills and bars given 12px of air, Progress concept rows separated with hairlines and 14px padding, About cost table cells padded with right-aligned prices and a non-wrapping header, Home action buttons stack full-width on phone widths (480px and below, by media query), existing-profile rows full-width (name left, delete right), the data-saver label and checkbox brought into one row, avatar buttons given smaller padding and type so labels fit at 360px. Verified live in a fresh profile: every spot checked has clear air. Afterwards the gaps were re-checked on the owner's word and trimmed where two systems had stacked (app gap plus extra margins made 36px above the example box and buttons; now a clean 20px), and the top navigation was pulled flush under the header again so the two bars read as one unit.
