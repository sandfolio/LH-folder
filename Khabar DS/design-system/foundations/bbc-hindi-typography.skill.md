---
name: bbc-hindi-typography
description: BBC Hindi typography reference system — scraped live from bbc.com/hindi. Use this skill whenever working on any BBC Hindi design, UI, interface, screen, component, or brand asset, or whenever replicating/inspired-by BBC Hindi visual style. Trigger on: "BBC Hindi", "bbc.com/hindi", "Hindi news design", "BBC news typography", "replicate BBC Hindi", "BBC Hindi font", "BBC Hindi colors", "Hindi news website style", or any request to design a news/media UI that should match or draw from BBC Hindi's visual language. Contains the complete BBC Hindi type scale, font stacks (BBC Reith Sans + Devanagari fallbacks), heading hierarchy (28–32px), body/caption sizes, text color tokens, line-height ratios, and ready-to-paste CSS. Also use for Devanagari typography decisions in any BBC-style Hindi content product.
---

# BBC Hindi Typography System
> Scraped from https://www.bbc.com/hindi — May 2026

---

## Font Families

| Role | Stack |
|------|-------|
| **Primary UI & Content** | `Arial, Verdana, Geneva, Helvetica, sans-serif` |
| **BBC Brand (Reith)** | `"BBC Reith Sans", helvetica, arial, sans-serif` |
| **Reith Sans (CSS name)** | `ReithSans, Arial, Helvetica, freesans, sans-serif` |
| **Monospace** | `monospace, monospace` |

> **Note:** BBC Reith Sans is BBC's proprietary typeface. On the Hindi site it is declared in CSS but the computed fallback for most Devanagari text resolves to `Arial / Verdana` because Reith Sans has limited Devanagari coverage. The brand logo area falls back to `Times` (browser serif default) in some contexts.

---

## Type Scale

### Headings

| Element | Context | Font Family | Size | Weight | Line Height | Color |
|---------|---------|------------|------|--------|-------------|-------|
| `h1` | Page title (visually hidden) | Times (fallback) | 32px | 700 | 36.8px (1.15) | `#000000` |
| `h2` | Section heading (legacy sections) | Times (fallback) | 24px | 700 | 27.6px (1.15) | `#000000` |
| `h2` | Section heading (modern) | Arial, Verdana, Geneva, Helvetica | 24px | 700 | 36px (1.5) | `#141414` |
| `h2` | Featured / Hero section | Arial, Verdana, Geneva, Helvetica | 28px | 700 | 42px (1.5) | `#ffffff` |
| `h3` | Lead story card title | Arial, Verdana, Geneva, Helvetica | 28px | 700 | 42px (1.5) | `#141414` |
| `h3` | Secondary story card title | Arial, Verdana, Geneva, Helvetica | 18px | 700 | 30px (1.67) | `#141414` |

### Body & UI Text

| Element | Context | Font Family | Size | Weight | Line Height | Color |
|---------|---------|------------|------|--------|-------------|-------|
| `p` | Article / promo summary | Arial, Verdana, Geneva, Helvetica | 16px | 400 | 26px (1.625) | `#141414` |
| `p` | Secondary / metadata text | Arial, Verdana, Geneva, Helvetica | 14px | 400 | 18px (1.286) | `#141414` |
| `a` (nav) | Navigation links | Arial, Verdana, Geneva, Helvetica | 16px | 400 | 22px (1.375) | `#333333` |
| `time` | Timestamps / pubdate | Arial, Verdana, Geneva, Helvetica | 14px | 400 | 18px (1.286) | `#545658` |
| `figcaption` | Image captions | Arial, Verdana, Geneva, Helvetica | 14px | 400 | 18px (1.286) | `#545658` |
| `a` (inline legacy) | Body links in legacy sections | Times (fallback) | 16px | 400 | 18.4px | `#0000EE` |

---

## Text Color Palette

| Token / Role | RGB | Hex |
|-------------|-----|-----|
| Primary text | `rgb(20, 20, 20)` | `#141414` |
| Dark text (nav) | `rgb(51, 51, 51)` | `#333333` |
| Muted / secondary | `rgb(84, 86, 88)` | `#545658` |
| On-dark / white | `rgb(255, 255, 255)` | `#ffffff` |
| Legacy link blue | `rgb(0, 0, 238)` | `#0000EE` |
| Black (bare html) | `rgb(0, 0, 0)` | `#000000` |

---

## Font Size Scale

All sizes observed in use on the page:

```
12px  14px  16px  18px  20px  24px  28px  32px
```

---

## Line Height Ratios

| Size | Line Height | Ratio |
|------|-------------|-------|
| 14px | 18px | 1.286 |
| 16px | 22px (nav) / 26px (body) | 1.375 / 1.625 |
| 18px | 30px | 1.667 |
| 24px | 36px | 1.5 |
| 28px | 42px | 1.5 |
| 32px | 36.8px | 1.15 |

---

## Letter Spacing

All observed elements use `letter-spacing: normal` (0). No custom tracking applied.

---

## Text Transform

No `text-transform` (uppercase/capitalize) applied to any observed element — all text is set in natural case.

---

## Font Weight Usage

| Weight | Usage |
|--------|-------|
| `400` | Body, navigation, captions, timestamps, links |
| `700` | All headings (h1–h3), section labels |

No intermediate weights (500, 600) observed.

---

## Devanagari / Hindi-Specific Notes

- **No custom Devanagari webfont is loaded** on the homepage — the browser falls back to system fonts (Arial on most platforms, which has basic Devanagari glyphs via system font on macOS/Windows).
- BBC Reith Sans does **not** include Devanagari, so Hindi text renders in `Arial` or the OS default Devanagari font (e.g. `Kohinoor Devanagari` on macOS, `Nirmala UI` on Windows).
- For a production replica, pair BBC Reith Sans (Latin) with a quality Devanagari font such as **Noto Sans Devanagari** or **Kohinoor Devanagari** using `unicode-range`.

### Recommended `@font-face` pairing for Devanagari:
```css
@font-face {
  font-family: 'BBCHindiBody';
  src: local('Kohinoor Devanagari'), local('Nirmala UI'), local('Arial');
  unicode-range: U+0900-097F, U+1CD0-1CFF, U+200C-200D, U+20B9,
                 U+25CC, U+A830-A839, U+A8E0-A8FB;
}
```

---

## CSS Implementation Reference

```css
/* Base body */
body {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #141414;
}

/* Section headings */
h2 {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 1.5 */
  color: #141414;
}

/* Lead story card headline */
h3.lead-headline {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px; /* 1.5 */
  color: #141414;
}

/* Secondary story headline */
h3.secondary-headline {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px; /* 1.667 */
  color: #141414;
}

/* Promo / article summary */
p.summary {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 1.625 */
  color: #141414;
}

/* Timestamps & captions */
time, figcaption {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 1.286 */
  color: #545658;
}

/* Navigation */
nav a {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  text-decoration: none;
}

/* Hero / featured block — white text on dark */
.featured-headline {
  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: #ffffff;
}
```

---

## Typography Hierarchy Summary

```
32px 700  — Page H1 (screen-reader / SEO, visually hidden)
28px 700  — Lead story headline / Featured hero headline
24px 700  — Section heading
18px 700  — Secondary / tertiary card headline
16px 400  — Body text, nav links, promo summary
14px 400  — Timestamps, captions, metadata
12px 400  — Fine print / labels (observed but rare)
```

---

## Sources

- Computed styles extracted via `window.getComputedStyle()` on live DOM
- CSS font-family declarations from `document.styleSheets`
- URL: https://www.bbc.com/hindi
- Scraped: 2026-05-23
