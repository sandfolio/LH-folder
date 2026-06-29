# Iconography — Khabar Design System

---

## Library: Lucide React

All icons are from **Lucide** (`lucide-react`). No other icon library.  
Install: `npm install lucide-react`

---

## Stroke rules

| Property | Value |
|---|---|
| Stroke width | 1.5 |
| Style | Outline only (no filled icons) |
| Line cap | Round |
| Line join | Round |

Exception: category icons in the mobile tab bar use stroke-width 2 for legibility at small sizes.

---

## Size table

| Context | Size | Notes |
|---|---|---|
| Inline with 14px text | 14×14 | Use `size-14` class |
| Inline with 16px text | 16×16 | Default inline |
| Inline with 18px text | 18×18 | — |
| Button icon (left of text) | 16×16 | Left margin: 8px |
| Button icon-only (sm) | 16×16 | — |
| Button icon-only (md) | 20×20 | — |
| Nav icon (mobile tab bar) | 24×24 | — |
| Feature icon chip | 24×24 inside 40×40 chip | See pattern below |
| Breaking ticker icon | 16×16 | — |
| Search bar icon | 20×20 | Inside input |
| Empty state icon | 48×48 | Muted, `ink-300` |
| Hero decorative icon | 64×64 | Rare — editorial context only |

---

## Colour rules

- **Default:** `currentColor` — icons inherit text colour automatically
- **Muted / secondary:** `ink-300` (`#9CA3AF`)
- **Interactive / active:** `khabar-600` (`#B71C1C`)
- **Category icon chip:** background `cat-[category]-100`, icon `cat-[category]-600`
- **Never:** coloured icon on coloured background (e.g., red icon on red bg)

---

## The feature icon pattern

Used in feature sections, category overviews, and app download CTAs:

```jsx
// 40×40 rounded chip with category-coloured background
<div className="w-10 h-10 rounded-md flex items-center justify-center bg-khabar-100">
  <Newspaper className="w-5 h-5 text-khabar-600" strokeWidth={1.5} />
</div>
```

---

## Category icons (recommended Lucide mappings)

| Category | Lucide Icon |
|---|---|
| Breaking News | `Zap` |
| Politics | `Landmark` |
| Sports | `Trophy` |
| Business | `TrendingUp` |
| Entertainment | `Film` |
| Technology | `Cpu` |
| Lifestyle | `Heart` |
| National | `Flag` |
| International | `Globe` |
| Education | `GraduationCap` |

---

## What Khabar does not use

- Emoji on editorial surfaces (headlines, article text, navigation)
- Font Awesome, Material Icons, or any other icon library alongside Lucide
- Custom-designed icons unless approved by the design team
- 3D or isometric icons
- Animated icons (with the single exception of a loading spinner)

---

## Custom-icon fallback order

1. Check Lucide for the exact icon
2. Check Lucide for the nearest semantic match
3. Request a custom icon from the design team
4. Use a category label text instead of an icon
