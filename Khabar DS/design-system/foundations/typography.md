# Typography — Khabar Design System

---

## Typefaces

### Hindi / Devanagari
**Noto Sans Devanagari** — Google Fonts  
Weights used: 400 (Regular), 500 (Medium), 700 (Bold)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&display=swap" rel="stylesheet">
```

### English / Latin
**Poppins** — Google Fonts  
Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Combined load (use this)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### CSS font stack
```css
--font-devanagari: 'Noto Sans Devanagari', sans-serif;
--font-latin:      'Poppins', sans-serif;
--font-body:       'Poppins', 'Noto Sans Devanagari', sans-serif;
--font-mono:       'JetBrains Mono', 'Courier New', monospace;
```

---

## Type scale

| Token | Size | Line-height | Weight | Letter-spacing | Use |
|---|---|---|---|---|---|
| `display-xl` | 64px / 4rem | 1.1 | 700 | −0.03em | Homepage hero, breaking story |
| `display-lg` | 48px / 3rem | 1.15 | 700 | −0.025em | Feature headline |
| `display-md` | 36px / 2.25rem | 1.2 | 700 | −0.02em | Section hero, big story |
| `heading-xl` | 28px / 1.75rem | 1.25 | 700 | −0.015em | H1 in articles |
| `heading-lg` | 22px / 1.375rem | 1.3 | 600 | −0.01em | H2, section title |
| `heading-md` | 18px / 1.125rem | 1.35 | 600 | −0.005em | H3, card headline |
| `heading-sm` | 16px / 1rem | 1.4 | 600 | 0 | H4, subsection |
| `body-lg` | 18px / 1.125rem | 1.75 | 400 | 0 | Long-read article body |
| `body-md` | 16px / 1rem | 1.7 | 400 | 0 | Standard body, card body |
| `body-sm` | 14px / 0.875rem | 1.65 | 400 | 0 | Secondary copy, excerpts |
| `caption` | 12px / 0.75rem | 1.5 | 400 | 0.01em | Timestamps, image captions |
| `overline` | 11px / 0.6875rem | 1.4 | 600 | 0.08em | Category labels, section eyebrows |
| `label` | 13px / 0.8125rem | 1.4 | 500 | 0.02em | Button text, nav links, badges |
| `code` | 14px / 0.875rem | 1.6 | 400 | 0 | Code snippets (rare) |

---

## Devanagari-specific adjustments

Devanagari glyphs sit higher than Latin glyphs at the same font-size. When mixing scripts in a single line:

```css
/* For mixed Hindi + English inline text */
.mixed-script {
  font-family: 'Noto Sans Devanagari', 'Poppins', sans-serif;
  line-height: 1.8; /* slightly more generous for shirorekha clearance */
}

/* Hindi-only blocks */
.hindi-text {
  font-family: 'Noto Sans Devanagari', sans-serif;
  line-height: 1.75;
}

/* English-only blocks */
.latin-text {
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
}
```

---

## Pairings by context

| Context | Hindi headline | Hindi body | English elements |
|---|---|---|---|
| Homepage hero | display-xl, Noto 700 | — | Poppins label for category |
| Section feature | display-md, Noto 700 | body-md, Noto 400 | Poppins caption for timestamp |
| News card | heading-md, Noto 600 | body-sm, Noto 400 | Poppins overline for category |
| Article body | heading-xl, Noto 700 | body-lg, Noto 400 | Poppins for pull-quotes |
| Breaking ticker | label, Noto 700 | — | Poppins "BREAKING" label |
| Data / stats | display-lg, Poppins 700 | body-sm, Poppins 400 | Numbers always Poppins |
| Navigation | label, Noto 500 | — | Poppins for English nav items |
| Footer | body-sm, Noto 400 | — | Poppins for legal text |

---

## Typography rules

1. **Sentence case on all headlines.** "प्रधानमंत्री ने किया ऐलान" — not "प्रधानमंत्री ने किया ऐलान।" (Headline, no terminal punctuation).
2. **Maximum 3 type sizes per screen section.** A card uses heading-md + body-sm + caption. Not four sizes.
3. **Line length 60–75 characters for reading comfort.** Article body max-width: 680px.
4. **No text shadows.** Ever.
5. **No italic on Devanagari.** Noto Sans Devanagari has no true italic — use bold for emphasis, never `font-style: italic`.
6. **Numbers are always Poppins.** Even inside Hindi text, numerals render in Poppins for consistency (browser handles fallback automatically with the stack).
7. **Heading spacing:** 1.5× body-md margin-top above an H2, 1× below.

---

## When not to use Noto Sans Devanagari

- Pure English sections (use Poppins only)
- Numeric data tables and stats (use Poppins 700)
- Code blocks (use JetBrains Mono)
- Legal footer text in English (use Poppins 400)
