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
