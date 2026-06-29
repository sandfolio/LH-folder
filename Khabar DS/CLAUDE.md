# Khabar (खबर) — Project CLAUDE.md

This file is loaded automatically by Claude Code for every session in this project.

---

## What this project is

**Khabar** is a Hindi-language digital news publication design system. The `design-system/` folder is the single source of truth for all visual, typographic, and voice decisions.

---

## Design system location

```
design-system/
├── CLAUDE.md                ← Load this first for design work
├── BRAND-SUMMARY.md         ← One-page brand snapshot
├── foundations/             ← Color, typography, spacing, motion…
├── tokens/                  ← tokens.json · tokens.css · tailwind.preset.js
├── logo/                    ← SVG logo files + usage rules
├── components/              ← React + Tailwind components
├── voice/                   ← Editorial voice rules + copy examples
├── applications/            ← Web, email, social, ads, decks
└── assets/                  ← Pattern SVGs + social templates
```

**Start here for any design task:** `design-system/CLAUDE.md` → then the relevant `foundations/` or `components/` file.

---

## Non-negotiables (quick reference)

| Rule | Value |
|---|---|
| Primary colour | `#B71C1C` Deep Crimson — no substitution |
| Paper background | `#FAFAF8` warm off-white — not pure white |
| Primary ink | `#0F1A2E` — never pure `#000000` |
| Hindi font | Noto Sans Devanagari (400 / 500 / 700) |
| Latin font | Poppins (400 / 500 / 600 / 700) |
| Headline case | Sentence case — never Title Case |
| Buttons | `border-radius: 4px` (sm) — not pill |
| Cards | `border-radius: 12px` (lg) |
| Nav background | `#B71C1C` |
| Motion | Fade + translate only · 160–240ms · no parallax |
| Logo | खबर wordmark — do not alter |

---

## Category colour map (fixed — do not reassign)

| Category | Colour |
|---|---|
| Breaking | `#B71C1C` |
| Politics | `#1A237E` |
| Sports | `#E65100` |
| Business | `#1B5E20` |
| Entertainment | `#6A1B9A` |
| Technology | `#0277BD` |
| Lifestyle | `#AD1457` |
| National | `#4E342E` |
| International | `#00695C` |
| Education | `#F57F17` |

---

## Common tasks → where to look

| Task | File |
|---|---|
| Add a component | `components/README.md` + relevant `.tsx` |
| Build a homepage section | `applications/web.md` + `components/hero.tsx` / `news-card.tsx` |
| Write a news headline | `voice/examples.md` |
| Create a social post | `applications/social-instagram.md` or `social-linkedin.md` |
| Set up Tailwind | `tokens/tailwind.preset.js` |
| Use CSS tokens | `tokens/tokens.css` |
| Check colour contrast | `foundations/color.md` |
| Add a breaking ticker | `components/breaking-ticker.tsx` |
| Design an election widget | `components/stat.tsx` |
| Write an email | `applications/email.md` |

---

## Install dependencies (first time)

```bash
npm install clsx tailwind-merge lucide-react
```

Tailwind config:
```js
// tailwind.config.js
module.exports = {
  presets: [require('./design-system/tokens/tailwind.preset.js')],
  content: ['./src/**/*.{ts,tsx}'],
};
```

Font link (add to `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Decisions log

| Decision | Rationale |
|---|---|
| Deep Crimson `#B71C1C` instead of bright red | Darker = institutional/trusted; every competitor uses bright red |
| Warm off-white paper instead of pure white | Easier on eyes for long-form reading |
| Noto Sans Devanagari | Universal Hindi web standard — zero licensing cost |
| Poppins for Latin | Pairs warmly with Devanagari; editorial feel |
| No pill CTAs | Sharp 4px radius = publication, not startup |
| 10 fixed category colours | Readers navigate Hindi news by colour — reassigning breaks mental models |
