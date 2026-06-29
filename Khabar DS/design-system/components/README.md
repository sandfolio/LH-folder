# Components — Khabar Design System

React + Tailwind starters. Each file is a standalone component — copy what you need.

---

## Dependencies

```bash
npm install clsx tailwind-merge lucide-react
```

Tailwind config — add the Khabar preset:

```js
// tailwind.config.js
const khabarPreset = require('./design-system/tokens/tailwind.preset.js');

module.exports = {
  presets: [khabarPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

Font loading — add to your `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Component inventory

| File | What it exports | When to use |
|---|---|---|
| `utils.ts` | `cn()` | Every component — class merging |
| `button.tsx` | `Button`, `IconButton` | All interactive CTAs |
| `input.tsx` | `Input`, `SearchInput`, `Textarea` | Forms, search bar |
| `badge.tsx` | `Badge`, `GenericBadge` | Category labels, LIVE, Breaking |
| `news-card.tsx` | `NewsCard` | All story listings (4 variants) |
| `nav.tsx` | `Nav` | Site header + category bar |
| `breaking-ticker.tsx` | `BreakingTicker` | Scrolling news ticker |
| `hero.tsx` | `Hero` | Homepage top section |
| `stat.tsx` | `ElectionStat`, `BigStat`, `MarketItem` | Data / results widgets |
| `cta-section.tsx` | `NewsletterCTA`, `AppCTA` | Newsletter + app download |
| `animated.tsx` | `FadeIn`, `Stagger`, `CountUp`, `QuietMarquee` | Scroll reveals, number animation |

---

## NewsCard variants

```tsx
// Default — vertical card with image
<NewsCard variant="default" ... />

// Horizontal — image left, text right (sidebar use)
<NewsCard variant="horizontal" ... />

// Compact — bullet point list style (no image)
<NewsCard variant="compact" ... />

// Featured — large image with text overlay (hero context)
<NewsCard variant="featured" ... />
```

## Badge categories

```tsx
<Badge category="breaking" />      // ब्रेकिंग — crimson
<Badge category="politics" />      // राजनीति — navy
<Badge category="sports" />        // खेल — orange
<Badge category="business" />      // व्यापार — green
<Badge category="entertainment" /> // मनोरंजन — purple
<Badge category="technology" />    // तकनीक — blue
<Badge category="lifestyle" />     // जीवनशैली — pink
```

## Button variants

```tsx
<Button variant="primary">सदस्य बनें</Button>
<Button variant="secondary">और पढ़ें</Button>
<Button variant="ghost">रद्द करें</Button>
<Button variant="link">सभी खबरें देखें</Button>
<Button variant="danger">हटाएं</Button>

<Button size="sm">छोटा</Button>
<Button size="md">मध्यम</Button>   {/* default */}
<Button size="lg">बड़ा</Button>

<Button loading>लोड हो रहा है...</Button>
<Button iconLeft={<Search size={16} />}>खोजें</Button>
```
