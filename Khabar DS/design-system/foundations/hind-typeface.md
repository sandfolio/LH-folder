---
name: hind-typeface
description: Hind typeface reference for the BBC Hindi design system — covers font loading (Google Fonts CDN + self-hosted), the full 7-step type scale (12–32px), two-weight system (400 Regular / 700 Bold), line-height ratios optimised for Devanagari readability, ready-to-paste CSS component classes (headings, body, timestamps, nav, hero, section labels), and Devanagari-specific guidance (no tracking, no italic, minimum sizes). Use whenever working with the Hind typeface, setting up Hindi-language UI typography, or implementing the BBC Hindi type system in any web or app project.
---

# Hind Typography

---

## Overview

Hind is a humanist sans-serif typeface designed for Indian scripts, with full **Devanagari** and **Latin** coverage. It is the primary typeface used across the BBC Hindi design system, replacing BBC Reith Sans (which has no Devanagari glyphs) for all Hindi-language UI.

- **Designer:** Indian Type Foundry (ITF)
- **Licence:** SIL Open Font Licence 1.1 (free for commercial use)
- **Scripts:** Devanagari, Latin, Latin Extended
- **Weights used:** `400` Regular · `700` Bold (two weights only)
- **Source:** Google Fonts CDN (v18) + local `.ttf` self-hosted fallback

---

## Loading the Font

### Option A — Google Fonts CDN *(recommended)*

Add to every `<head>` before your stylesheet:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap" />
```

### Option B — Self-hosted `@font-face`

Place `Hind-Regular.ttf` and `Hind-Bold.ttf` in your `/fonts/` directory:

```css
@font-face {
  font-family: "Hind";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("fonts/Hind-Regular.ttf") format("truetype");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153,
                 U+0900-097F, U+1CD0-1CFF, U+200C-200D,
                 U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: "Hind";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("fonts/Hind-Bold.ttf") format("truetype");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153,
                 U+0900-097F, U+1CD0-1CFF, U+200C-200D,
                 U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
```

### CDN Direct URLs (v18 — for self-hosted mirror)

| Weight | URL |
|--------|-----|
| 400 Regular | `https://fonts.gstatic.com/s/hind/v18/5aU69_a8oxmIRG4.ttf` |
| 700 Bold | `https://fonts.gstatic.com/s/hind/v18/5aU19_a8oxmIfNJdIRs.ttf` |

---

## Font Stack

```css
--font-hind: "Hind", Arial, Verdana, Geneva, Helvetica, sans-serif;
```

---

## Type Scale

Seven steps. Two weights. No exceptions.

```
32px  700  ── h1   Page title (SEO / screen-reader, often visually hidden)
28px  700  ── h3   Lead story card · Featured hero headline
24px  700  ── h2   Section heading
18px  700  ── h4   Secondary / tertiary card headline
16px  400  ── p    Body text (generous line-height for Devanagari)
14px  400  ── time Timestamps · captions · metadata
12px  400  ── xs   Fine print · labels
```

### Full Reference Table

| Token | Size | Weight | Line-height | Ratio | Role |
|-------|------|--------|-------------|-------|------|
| `--type-scale-2xl` | 32px | 700 | 40px | 1.25 | Page `h1` |
| `--type-scale-xl` | 28px | 700 | 42px | 1.50 | Lead story `h3` · Hero |
| `--type-scale-lg` | 24px | 700 | 36px | 1.50 | Section `h2` |
| `--type-scale-md` | 18px | 700 | 30px | 1.67 | Secondary `h4` |
| `--type-scale-base` | 16px | 400 | 26px | 1.625 | Body `p` |
| `--type-scale-sm` | 14px | 400 | 20px | 1.43 | `time` · `figcaption` |
| `--type-scale-xs` | 12px | 400 | 18px | 1.50 | Labels · fine print |

> **Why 1.625 for body?** Devanagari glyphs have taller ascenders and more complex stacking marks (mātrās) than Latin. A ratio of 1.5–1.65 prevents visual crowding between lines.

---

## CSS Tokens (`:root`)

```css
:root {
  /* Font */
  --font-hind: "Hind", Arial, Verdana, Geneva, Helvetica, sans-serif;

  /* Scale */
  --type-scale-xs:   12px;
  --type-scale-sm:   14px;
  --type-scale-base: 16px;
  --type-scale-md:   18px;
  --type-scale-lg:   24px;
  --type-scale-xl:   28px;
  --type-scale-2xl:  32px;

  /* Weights */
  --weight-regular: 400;
  --weight-bold:    700;

  /* Line heights */
  --lh-xs:   18px;
  --lh-sm:   20px;
  --lh-base: 26px;
  --lh-md:   30px;
  --lh-lg:   36px;
  --lh-xl:   42px;
  --lh-2xl:  40px;

  /* Colors */
  --color-text-primary:   #141414;
  --color-text-secondary: #333333;
  --color-text-muted:     #545658;
  --color-text-on-dark:   #ffffff;
  --color-text-black:     #000000;
}
```

---

## CSS — Component Classes

### Headings

```css
h1, .h1 {
  font-family: var(--font-hind);
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #000000;
}

h2, .h2 {                    /* Section heading */
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #141414;
}

h3, .h3 {                    /* Lead story card */
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: #141414;
}

h4, .h4 {                    /* Secondary card */
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  color: #141414;
}
```

### Body

```css
p, .body {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;          /* 1.625 — optimised for Devanagari */
  color: #141414;
}

.body-sm { font-size: 14px; line-height: 20px; }
.body-xs { font-size: 12px; line-height: 18px; }
```

### Timestamps & Captions

```css
time,
figcaption,
.meta,
.caption {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #545658;             /* muted gray */
}
```

### Navigation

```css
nav a, .nav-link {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  text-decoration: none;
}
```

### Featured / Hero (dark background)

```css
.headline-featured {
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: #ffffff;
}
```

### Section Label

```css
.section-label {
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## Letter Spacing & Text Transform

| Property | Value | Note |
|----------|-------|------|
| `letter-spacing` | `normal` (0) | Applied globally; Devanagari never tracks |
| `text-transform` | `none` | Exception: `.section-label` uses `uppercase` |
| `font-style` | `normal` | Hind has no italic — never use oblique |

---

## Devanagari Notes

| Topic | Recommendation |
|-------|----------------|
| **Line-height** | Min 1.5 · use 1.625 for body. Devanagari mātrās clip below 1.4 |
| **Font size** | Do not go below 14px for Devanagari body copy |
| **Bold** | Use sparingly — Hind 700 is heavy at large sizes |
| **Italic** | Not available in Hind. Never use `font-style: italic` |
| **Letter spacing** | Never add tracking to Devanagari — breaks conjunct characters |
| **Fallback stack** | `Arial → Verdana → Geneva → Helvetica → sans-serif` |
| **System Devanagari** | macOS: Kohinoor Devanagari · Windows: Nirmala UI |

---

## Files in This System

```
/
├── hind-typography.css          ← Production stylesheet (import this)
├── hind-typography-preview.html ← Live specimen page
├── hind-typography.md           ← This file
├── bbc-hindi-typography.skill.md← Skill reference doc
├── bbc-hindi-typography.skill   ← Installable Claude Code skill
└── fonts/
    ├── Hind-Regular.ttf         ← 400 self-hosted
    └── Hind-Bold.ttf            ← 700 self-hosted
```

---

## Quick Usage

```html
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap" />
  <link rel="stylesheet" href="hind-typography.css" />
</head>
<body>
  <h2>प्रमुख समाचार</h2>
  <h3>बेल मिलते ही जेल के बाहर रेप अभियुक्त के स्वागत पर विवाद</h3>
  <p>रेप अभियुक्त की जेल से रिहाई के बाद हुआ स्वागत अब विवादों में है।</p>
  <time>23 मई 2026 · 3 घंटे पहले</time>
</body>
</html>
```

---

## Sources

| Item | Detail |
|------|--------|
| Typography spec | Live-scraped from [bbc.com/hindi](https://www.bbc.com/hindi) via `window.getComputedStyle()` |
| Font source | [fonts.google.com/specimen/Hind](https://fonts.google.com/specimen/Hind) |
| CDN version | v18 |
| Scraped | 2026-05-23 |
