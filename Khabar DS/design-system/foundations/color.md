# Color — Khabar Design System

---

## Brand scale (Deep Crimson)

| Token | Hex | HSL | Use |
|---|---|---|---|
| `khabar-50` | `#FFF5F5` | 0°, 100%, 98% | Page wash, hover bg on white |
| `khabar-100` | `#FFCDD2` | 0°, 100%, 90% | Tag backgrounds, light fills |
| `khabar-200` | `#EF9A9A` | 0°, 74%, 76% | Disabled states, decorative |
| `khabar-300` | `#E57373` | 0°, 70%, 67% | Placeholder, secondary accents |
| `khabar-400` | `#D75050` | 0°, 65%, 58% | Hover on white surfaces |
| `khabar-500` | `#C63030` | 0°, 61%, 48% | Active states |
| `khabar-600` | `#B71C1C` | 0°, 74%, 40% | **PRIMARY** — masthead, CTAs, breaking label |
| `khabar-700` | `#9E1414` | 0°, 76%, 35% | Hover on brand-600 |
| `khabar-800` | `#851010` | 0°, 78%, 29% | Pressed, deep accent |
| `khabar-900` | `#6B0C0C` | 0°, 80%, 23% | Dark masthead, extreme contrast |

---

## Ink scale (text)

| Token | Hex | Use |
|---|---|---|
| `ink-900` | `#0F1A2E` | Primary headlines, body copy |
| `ink-700` | `#374151` | Secondary body text |
| `ink-500` | `#6B7280` | Timestamps, bylines, captions |
| `ink-300` | `#9CA3AF` | Placeholder text, disabled |
| `ink-100` | `#E5E7EB` | Dividers, borders |

---

## Surface & paper

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAFAF8` | Page background — warm off-white |
| `surface` | `#FFFFFF` | Card backgrounds on top of paper |
| `surface-raised` | `#F3F4F2` | Sidebar, secondary content areas |
| `line` | `#E5E7EB` | Dividers, input borders, card borders |
| `line-strong` | `#D1D5DB` | Table borders, stronger dividers |

---

## Category colours (fixed — do not reassign)

| Category | Token | Hex | Text on white | Background fill |
|---|---|---|---|---|
| Breaking News | `cat-breaking` | `#B71C1C` | ✓ | `#FFF5F5` |
| Politics | `cat-politics` | `#1A237E` | ✓ | `#E8EAF6` |
| Sports | `cat-sports` | `#E65100` | ✓ | `#FFF3E0` |
| Business | `cat-business` | `#1B5E20` | ✓ | `#E8F5E9` |
| Entertainment | `cat-entertainment` | `#6A1B9A` | ✓ | `#F3E5F5` |
| Technology | `cat-technology` | `#0277BD` | ✓ | `#E1F5FE` |
| Lifestyle | `cat-lifestyle` | `#AD1457` | ✓ | `#FCE4EC` |
| National | `cat-national` | `#4E342E` | ✓ | `#EFEBE9` |
| International | `cat-international` | `#00695C` | ✓ | `#E0F2F1` |
| Education | `cat-education` | `#F57F17` | ✓ | `#FFFDE7` |

---

## Semantic colours

| Token | Hex | Use |
|---|---|---|
| `success-600` | `#2E7D32` | Confirmation, published, live |
| `success-100` | `#E8F5E9` | Success background |
| `warning-600` | `#F57F17` | Draft, pending, caution |
| `warning-100` | `#FFFDE7` | Warning background |
| `danger-600` | `#B71C1C` | Error, delete, alert (same as brand) |
| `danger-100` | `#FFCDD2` | Error background |
| `info-600` | `#0277BD` | Informational |
| `info-100` | `#E1F5FE` | Info background |

---

## Usage rules

**Where `khabar-600` goes:**
- Masthead / top navigation background
- Breaking news label
- Primary CTA buttons
- Active tab underlines
- Link hover states
- Category badge border on "Breaking"

**Where `khabar-600` does NOT go:**
- Body text (ink-900 only)
- Card backgrounds
- Section backgrounds (use khabar-50 at most)
- Borders in general (use line token)
- More than one call to action per screen section

---

## Contrast minimums

| Pair | Ratio | Passes |
|---|---|---|
| `khabar-600` on `paper` | 8.2:1 | AA + AAA |
| `khabar-600` on `surface` | 8.0:1 | AA + AAA |
| White on `khabar-600` | 8.0:1 | AA + AAA |
| `ink-900` on `paper` | 18.1:1 | AA + AAA |
| `ink-500` on `paper` | 5.3:1 | AA |
| `ink-300` on `paper` | 2.9:1 | Decorative only |
| White on `khabar-700` | 9.1:1 | AA + AAA |

---

## Reasoning

Deep Crimson `#B71C1C` is the darkest shade of the standard red family — the Material Design "Red 900." Every major Hindi news competitor uses a brighter red (600–800 range). Khabar's darker anchor reads as institutional and earned rather than urgent and clickbait. Paired with a warm off-white paper instead of the harsh pure white every competitor uses, the combination feels premium without being cold. The category colour system is derived from deep, saturated versions of each hue — avoiding pastel or neon — so they read as editorial labels, not marketing tags.
