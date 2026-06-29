# Imagery — Khabar Design System

---

## The one rule

**Real photography of real people, real events, and real places.** Khabar covers India's reality — use images that reflect it.

---

## Photography: what we use

- Wire service images (PTI, ANI, Reuters, AP) for events, politics, sports
- Editorial photography with clear attribution
- On-ground reporter photography for features and investigations
- Data-driven graphics created in the Khabar infographic system

**How we shoot / curate:**
- Sharp focus on the subject; context is secondary
- Human faces in the frame wherever possible (editorial empathy)
- Real settings: Lok Sabha, cricket grounds, markets, classrooms, factories
- Natural light preferred for features; photojournalistic for news

---

## Photography: what we never use

- Stock photos of "diverse teams around a laptop"
- AI-generated human faces or settings
- Generic "India" tropes (lotus, Taj Mahal) as decorative elements
- Getty / Shutterstock lifestyle imagery for news stories
- Low-resolution images scaled up
- Images without source attribution

---

## Image treatment rules

- No filters, colour grading, or brand-colour overlays on news photography
- No text overlaid directly on photos without a scrim or semi-transparent bar
- Photo credit always present (`ink-300`, 11px, bottom-right or caption below)
- Aspect ratios: 16:9 (hero images), 4:3 (card thumbnails), 1:1 (social avatars), 2:3 (portrait features)
- Images never stretch — always `object-fit: cover`

---

## Illustration

Khabar uses illustration **only** for:
- Data visualisations and infographics (chart-based)
- Explanatory diagrams (how a bill becomes a law, budget allocation breakdown)
- Opinion/editorial column headers when photography is inappropriate

**Style when used:** Flat, minimal, using the Khabar colour palette. Line weight consistent with Lucide icon standards (1.5 stroke-equivalent).

**Never illustrate:**
- Generic AI imagery (neural mesh, glowing orbs, brain-chips)
- 3D isometric scenes
- Corporate-Memphis blob people
- Memoji-style characters
- Abstract tech patterns as news backgrounds

---

## OG image spec (1200×630)

```
┌─────────────────────────────────────────────────────┐
│ [khabar-900 bg, left 40%]  │  [photo, right 60%]    │
│                            │                         │
│  खबर logo (white)         │                         │
│                            │                         │
│  Category label            │                         │
│  (khabar-300, overline)    │                         │
│                            │                         │
│  Headline                  │                         │
│  (white, heading-xl, 2 ln) │                         │
│                            │                         │
│  khabar.in                 │                         │
└─────────────────────────────────────────────────────┘
```

---

## Patterns & backgrounds

| Pattern | Use | Never |
|---|---|---|
| `grid.svg` | Subtle page background on landing / about pages | Behind news content |
| `brand-wash.svg` | Radial wash behind newsletter CTAs | Behind article text |
| Solid `khabar-900` | Dark masthead sections, footer | Full page backgrounds |
| Solid `paper` | Standard page background | — |

No animated backgrounds, particle effects, aurora gradients, or noise textures.

---

## Fallback order when photography is unavailable

1. Wire service image closest to the topic
2. Archival image with date shown
3. Government-released official imagery (with credit)
4. A Khabar-branded infographic/explainer
5. The Khabar wordmark on `khabar-50` background (for sharing)
6. No image — text-only card (valid and used for opinion pieces)
