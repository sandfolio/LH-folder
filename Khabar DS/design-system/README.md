# Khabar Design System

> **खबर** — Hindi for "News." The single source of truth for every visual asset Khabar publishes.

---

## File tree

```
design-system/
├── README.md                       ← You are here
├── CLAUDE.md                       ← Load this first if you're an LLM
├── BRAND-SUMMARY.md                ← One-page snapshot
├── foundations/
│   ├── brand.md                    ← Mission, positioning, audience
│   ├── voice.md                    ← How Khabar sounds
│   ├── vocabulary.md               ← Words we use / avoid
│   ├── color.md                    ← Full palette + usage rules
│   ├── typography.md               ← Type scale + rules
│   ├── spacing.md                  ← 4px grid + section rhythm
│   ├── radius.md                   ← Corner radius tokens
│   ├── shadow.md                   ← Elevation tokens
│   ├── motion.md                   ← Animation principles
│   ├── iconography.md              ← Icon library rules
│   └── imagery.md                  ← Photography + illustration direction
├── tokens/
│   ├── tokens.json                 ← W3C-ish design tokens
│   ├── tokens.css                  ← CSS custom properties
│   └── tailwind.preset.js          ← Drop-in Tailwind preset
├── logo/
│   ├── mark.svg                    ← Crimson dot mark
│   ├── mark-inverse.svg            ← White mark on crimson
│   ├── wordmark.svg                ← खबर in Devanagari
│   ├── lockup-horizontal.svg       ← Mark + wordmark
│   ├── lockup-stacked.svg          ← Mark above wordmark
│   ├── favicon.svg                 ← 32×32 simplified
│   └── usage.md                    ← Logo rules
├── components/                     ← React + Tailwind starters
│   ├── README.md
│   ├── utils.ts
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── news-card.tsx
│   ├── feature-card.tsx
│   ├── badge.tsx
│   ├── nav.tsx
│   ├── breaking-ticker.tsx
│   ├── hero.tsx
│   ├── cta-section.tsx
│   ├── stat.tsx
│   └── animated.tsx
├── voice/
│   ├── examples.md                 ← Do/don't pairs per surface
│   └── homepage-copy.md            ← Drop-in hero copy
├── applications/
│   ├── web.md
│   ├── presentations.md
│   ├── social-instagram.md
│   ├── social-linkedin.md
│   ├── email.md
│   ├── infographics.md
│   └── ads.md
└── assets/
    ├── patterns/
    │   ├── grid.svg
    │   └── brand-wash.svg
    └── templates/
        ├── README.md
        ├── og-image.svg
        ├── instagram-carousel-cover.svg
        ├── instagram-carousel-body.svg
        └── linkedin-post.svg
```

---

## Quick start

| If you're building… | Start with… |
|---|---|
| A web article page | `foundations/typography.md` + `components/card.tsx` |
| The homepage | `components/nav.tsx` + `components/hero.tsx` + `components/news-card.tsx` |
| A social post | `applications/social-instagram.md` or `social-linkedin.md` |
| A data widget / election results | `components/stat.tsx` + `foundations/color.md` |
| An email newsletter | `applications/email.md` |
| A pitch deck | `applications/presentations.md` |
| Adding a new component | `tokens/tokens.css` + `tokens/tailwind.preset.js` |

---

## Eight principles

1. **Deep Crimson is the anchor.** `#B71C1C` goes on the masthead, primary CTAs, breaking news labels, and nowhere else without intent.
2. **Devanagari leads, Latin follows.** Hindi content sets the visual rhythm; Poppins supports without competing.
3. **Warm off-white, not pure white.** Paper is `#FAFAF8` — easier on the eyes for long reads.
4. **Category colour-coding is sacred.** Readers navigate by colour. Don't reassign category colours.
5. **Headlines in sentence case.** No title case. No ALL CAPS except ≤3-word breaking news labels.
6. **Density with breathing room.** Hindi news is information-rich, but Khabar gives each card enough white space to feel premium.
7. **No hype vocabulary.** Khabar states facts. "Breaking" is earned; "exclusive" means exclusive.
8. **Motion is minimal.** Fade + translate only. No scroll-jacking, no parallax, no looping video.
