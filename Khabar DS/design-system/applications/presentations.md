# Presentations — Khabar Design System

---

## Specs

| Property | Value |
|---|---|
| Aspect ratio | 16:9 |
| Dimensions | 1920×1080 (or 1280×720) |
| Background | `paper` `#FAFAF8` (default) or `khabar-900` (dark) |
| Body font | Poppins |
| Hindi font | Noto Sans Devanagari |
| Footer | Present on every slide |

---

## Seven slide templates

### 1 — Title slide
```
[khabar-600 top bar, full width, 8px]
[Khabar lockup — top-left]
[Headline — display-lg, ink-900 or white, centred]
[Sub — heading-md, ink-500]
[Date + presenter name — caption, bottom-left]
```

### 2 — Section divider
```
[khabar-900 bg, full bleed]
[Section number — display-xl, khabar-400, opacity 20%, top-right]
[Section title — display-md, white, centred]
[One-line description — body-md, white/70]
```

### 3 — Big number
```
[paper bg]
[Number — display-xl, font-latin 700, khabar-600]
[Label — heading-lg, font-devanagari, ink-900]
[Source — caption, ink-500, bottom]
[Khabar mark — bottom-right]
```

### 4 — Three-column
```
[paper bg]
[Section eyebrow — overline, khabar-600]
[H2 — heading-xl, ink-900]
[Three equal columns: icon chip + heading-md + body-sm]
```

### 5 — Chart / data
```
[paper bg]
[Headline — heading-xl, ink-900]
[Chart area — 70% width, centred]
[Source — caption, ink-500, below chart]
```

### 6 — Quote / case
```
[paper bg or khabar-50 bg]
[" — display-xl, khabar-200, top-left]
[Quote — heading-lg, font-devanagari, ink-900]
[Attribution — body-sm, ink-500, + org logo if available]
```

### 7 — Closing CTA
```
[khabar-900 bg]
[Khabar lockup — white, centred, large]
[Tagline — heading-lg, white/80]
[URL — body-md, khabar-300]
```

---

## Footer (every slide)

```
[Left: Khabar mark (white, 20px) + "खबर" wordmark]
[Right: Slide number / total]
[Line: 1px khabar-700, full width, 8px from bottom]
```

---

## Marp CSS theme

```css
/* @theme khabar */

:root {
  --color-background: #FAFAF8;
  --color-foreground: #0F1A2E;
  --color-highlight: #B71C1C;
  --color-dimmer: #6B7280;
  font-family: 'Poppins', 'Noto Sans Devanagari', sans-serif;
}

section {
  background: var(--color-background);
  color: var(--color-foreground);
  font-size: 28px;
  padding: 60px 80px;
  position: relative;
}

section::after {
  content: attr(data-marpit-pagination) '/' attr(data-marpit-pagination-total);
  position: absolute;
  bottom: 20px;
  right: 60px;
  font-size: 14px;
  color: var(--color-dimmer);
}

h1 {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-foreground);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
}

h2 {
  font-size: 40px;
  font-weight: 600;
  color: var(--color-foreground);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 16px;
}

h3 {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-foreground);
}

strong { color: var(--color-highlight); }

/* Dark slide: add class="dark" to section */
section.dark {
  background: #6B0C0C;
  color: #FFFFFF;
}

section.dark strong { color: #EF9A9A; }

/* Big number slide: add class="big-number" */
section.big-number h1 {
  font-size: 96px;
  color: var(--color-highlight);
}

/* Divider slide */
section.divider {
  background: #0F1A2E;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

section.divider h1 {
  color: #FFFFFF;
  text-align: center;
}
```

---

## What we never do in decks

- No animation on slide transitions (fade only if unavoidable)
- No full-bleed stock photography as slide backgrounds
- No more than 5 bullet points per slide
- No WordArt-style effects, shadows, or 3D text
- No Comic Sans or Papyrus
- No slides that are just a wall of text — split into multiple slides
