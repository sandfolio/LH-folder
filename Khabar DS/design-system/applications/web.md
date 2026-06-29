# Web — Khabar Design System

---

## Global primitives

| Property | Value |
|---|---|
| Max page width | 1200px |
| Page gutter | 24px (mobile) / 40px (tablet) / 80px (desktop) |
| Article reading width | 680px |
| Background | `paper` `#FAFAF8` |
| Card background | `surface` `#FFFFFF` |
| Grid columns | 12-col at desktop, 4-col at mobile |
| Card grid gap | 24px |

---

## Nav bar spec

- Height: 56px (mobile) / 64px (desktop)
- Background: `khabar-600`
- Text: white
- Logo: `lockup-horizontal.svg` on desktop, `mark.svg` on mobile
- Sticky: `position: sticky; top: 0; z-index: 50`
- Category strip below: `khabar-700`, 40px height, horizontal scroll on mobile

See `components/nav.tsx`.

---

## Hero spec

- Full-width section below nav + breaking ticker
- Primary story: image + gradient overlay + headline
- Primary image aspect: 16:9 (desktop), 4:3 (mobile)
- Headline size: `display-md` (36px) on desktop, `heading-xl` (28px) on mobile
- Secondary stories: right column on desktop, horizontal scroll on mobile

See `components/hero.tsx`.

---

## Section patterns

### Section 1 — Category grid (most common)
```
[Section header: Category name + "सभी देखें" link]
[3-col card grid at desktop | 2-col tablet | 1-col mobile]
[Load more button]
```

### Section 2 — Featured story + sidebar
```
[Large featured card (2 cols) | Compact list (1 col)]
```

### Section 3 — Breaking ticker (inline)
```
[BreakingTicker component — full width]
```

### Section 4 — Data / results
```
[Section header + source attribution]
[Stat cards grid]
```

### Section 5 — Video / multimedia
```
[Section header]
[Horizontal scroll card row on mobile | 4-col grid on desktop]
```

### Section 6 — Newsletter CTA
```
[NewsletterCTA component — dark or wash variant]
```

---

## Article page spec

| Element | Spec |
|---|---|
| Max width | 680px (centred) |
| Headline | `heading-xl` (28px), `font-devanagari 700` |
| Byline | `caption`, `ink-500`, below headline |
| Body text | `body-lg` (18px), `font-devanagari 400`, `line-height: 1.75` |
| Paragraph gap | 24px |
| Pull-quote | `heading-lg`, `khabar-600`, border-left 3px `khabar-600`, pl-4 |
| Image caption | `caption`, `ink-500`, italic not applied (see typography rules) |
| Section break | `<hr>` → 1px `line`, margin 48px top/bottom |
| Related stories | Below article, `compact` variant NewsCard |

---

## Footer spec

- Background: `khabar-900`
- Text: white/70
- Columns: Logo + tagline | Categories | About links | Social
- Legal row below: `caption`, white/40
- Max width: 1200px

---

## Pages every Khabar site should have

- `/` — Homepage
- `/[category]` — Category page (राजनीति, खेल, etc.)
- `/[category]/[slug]` — Article page
- `/live` — Live news / live blog
- `/election` — Election results hub (seasonal)
- `/about` — About the publication
- `/contact` — Contact form
- `/newsletter` — Newsletter signup
- `/privacy` — Privacy policy
- `/search` — Search results

---

## What we never do on web

- No autoplay video with sound
- No sticky floating ads
- No modal popups within 10s of landing
- No infinite scroll without a "load more" fallback
- No content hidden behind "click to expand" on desktop
- No cookie banners without a real opt-out
- No scroll-jacking on article pages

---

## Accessibility baseline

- All images have descriptive `alt` text (Hindi acceptable)
- Colour contrast ≥ 4.5:1 for body text (verified in `foundations/color.md`)
- Skip-to-content link at top of every page
- All interactive elements keyboard-navigable
- `lang="hi"` on Devanagari text blocks
- `aria-label` on icon-only buttons
- Breaking ticker has `aria-live="polite"` and `prefers-reduced-motion` pause
