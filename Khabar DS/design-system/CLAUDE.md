# CLAUDE.md — Khabar Design System

Read this file before any other. It tells you what to load and what you must never do.

---

## Load order

1. `CLAUDE.md` ← this file
2. `BRAND-SUMMARY.md` — who Khabar is
3. `foundations/color.md` — the palette
4. `foundations/typography.md` — the type system
5. `tokens/tokens.css` — all tokens as CSS properties
6. `tokens/tailwind.preset.js` — Tailwind config
7. `foundations/voice.md` — how Khabar writes
8. `components/README.md` — component inventory
9. Any specific `applications/` file for the surface you're building

---

## Non-negotiables

1. **One primary colour: `#B71C1C` (Deep Crimson).** Not two reds. Not red + saffron. One.
2. **Two typefaces only: Noto Sans Devanagari + Poppins.** No third font, ever. No Google Font exploration.
3. **Paper is `#FAFAF8` (warm off-white)** for all reading surfaces. Not `#FFFFFF` (pure white).
4. **Sentence case on all headlines.** Never Title Case. Never ALL CAPS in body or headline. The only ALL CAPS allowed: a ≤3-word breaking label (e.g., "BREAKING").
5. **No hype words:** revolutionary, exclusive (unless actually exclusive), game-changing, historic (unless actually historic), viral, trending (as a headline opener).
6. **Category colours are fixed.** Do not reassign. Breaking=brand red, Sports=`#E65100`, Politics=`#1A237E`, Entertainment=`#6A1B9A`, Business=`#1B5E20`, Technology=`#0277BD`, Lifestyle=`#AD1457`.
7. **Real photography of real people, real places.** No stock "diverse team." No AI-generated faces. No generic "India" icons (lotus, Taj Mahal) unless contextually relevant.
8. **Motion: fade + translate only.** 160ms or 240ms. No parallax, no looping hero video, no scroll-jacking, no confetti.
9. **Every number gets a unit.** "बड़ी खबर" (big news) → cite what, where, when. Numbers belong in headlines when available.
10. **Ink is `#0F1A2E`.** Never pure black `#000000` for text.

---

## Defaults when ambiguous

| Context | Default |
|---|---|
| Background | `#FAFAF8` (warm off-white) |
| Headline case | Sentence case |
| Body text size | 16px / 1rem |
| Body line-height | 1.7 |
| CTA button shape | `border-radius: 4px` (sm) |
| Card radius | `border-radius: 12px` (lg) |
| Section padding | 64px top/bottom |
| Max content width | 1200px |
| Article reading width | 680px |
| Nav background | `#B71C1C` (brand/600) |
| Carousel aspect | 4:5 (1080×1350) |
| Slide aspect | 16:9 |
| Email width | 600px |
| OG image | 1200×630 |

---

## Asset-type cheat sheet

| User asks for | Read this |
|---|---|
| Homepage | `applications/web.md` + `components/hero.tsx` + `components/nav.tsx` |
| Article page | `applications/web.md` + `foundations/typography.md` |
| Breaking news banner | `components/breaking-ticker.tsx` + `foundations/color.md` |
| Category page | `components/news-card.tsx` + `components/badge.tsx` |
| Election results | `components/stat.tsx` + `foundations/color.md` |
| Social Instagram post | `applications/social-instagram.md` |
| LinkedIn post | `applications/social-linkedin.md` |
| Newsletter email | `applications/email.md` |
| Slide deck | `applications/presentations.md` |
| Infographic | `applications/infographics.md` |
| Ad banner | `applications/ads.md` |

---

## Quality bar — ask before delivering

1. Does every headline use sentence case?
2. Is every colour reference using a token name (`khabar-600`) not a raw hex?
3. Is the paper colour `#FAFAF8`, not `#FFFFFF`?
4. Does the component use Noto Sans Devanagari for any Hindi text, and Poppins for English?
5. Is category colour-coding consistent with the fixed assignments?
6. Has any hype vocabulary crept in?
