# Infographics — Khabar Design System

---

## Canvas sizes

| Type | Dimensions | Use |
|---|---|---|
| Blog-embedded | 800×600 | Inline article visual |
| Social-square | 1080×1080 | Instagram, LinkedIn |
| Social-portrait | 1080×1350 | Instagram feed |
| Full-page | 800×1200 | Explainer, timeline |
| Data table | 800×400–800 | Stats, comparisons |

---

## Four infographic types

### 1 — Comparison
```
[Headline — heading-xl, ink-900]
[Two columns side by side]
[Column header: Party/Option A | Party/Option B]
[Rows: metric label | value A | value B]
[Source — caption, ink-500]
```

**Colour rule:** Never use red vs green for political parties — it confuses with positive/negative. Use the party's own colour or neutral ink.

### 2 — Process flow
```
[Step number circle — khabar-600, 32px]
[Step headline — heading-md, ink-900]
[Step body — body-sm, ink-700]
[Arrow connecting steps — ink-300]
```

### 3 — Big number
```
[Number — display-xl, font-latin 700, khabar-600]
[Context label — heading-lg, ink-900]
[Comparison (vs last year / vs target) — body-sm, ink-500]
[Source — caption]
```

### 4 — Chart / breakdown
```
[Headline]
[Chart (bar/pie/line) — using category colour palette]
[Legend — caption, category colours]
[Source — caption, ink-500, bottom-right]
```

---

## Layout rules

- **Paper background always** — never coloured backgrounds on data-heavy charts
- **Source attribution always visible** — caption size, ink-500, bottom of chart
- **One chart type per infographic** — no mixing bar + pie in the same visual
- **Y-axis starts at 0** for bar charts — no truncated axes
- **Hindi labels** for all categories and axes

---

## Anti-patterns

- No 3D charts (perspective distorts data)
- No pie charts with more than 5 slices
- No dual-axis bar/line combos without explicit labelling
- No colour coding that requires a legend > 6 items
- No decorative illustrations behind data points

---

## Generation workflow (for AI tools)

When asking Claude or another AI to generate an infographic:

1. State the data explicitly (actual numbers, not "approximately")
2. Specify the chart type from the four types above
3. Name the colour tokens to use (`khabar-600`, `cat-politics`, etc.)
4. Specify canvas size and output format (SVG preferred)
5. Request source attribution at bottom-right

---

## Example: budget allocation breakdown

```
Type: Breakdown (horizontal bar chart)
Canvas: 800×500
Title: केंद्रीय बजट 2025 — प्रमुख आवंटन
Data:
  रक्षा:         ₹6.2 लाख करोड़   — cat-politics (#1A237E)
  शिक्षा:        ₹1.2 लाख करोड़   — cat-education (#F57F17)
  स्वास्थ्य:     ₹0.9 लाख करोड़   — cat-lifestyle (#AD1457)
  कृषि:          ₹1.5 लाख करोड़   — cat-business (#1B5E20)
  बुनियादी ढांचा: ₹11.1 लाख करोड़  — cat-technology (#0277BD)
Source: Union Budget 2025-26, Finance Ministry
```
