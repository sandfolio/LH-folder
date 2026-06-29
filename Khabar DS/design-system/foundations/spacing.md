# Spacing — Khabar Design System

All spacing uses a **4px base grid**.

---

## Scale tokens

| Token | px | rem | Tailwind class |
|---|---|---|---|
| `space-0` | 0 | 0 | `p-0` / `m-0` |
| `space-1` | 4px | 0.25rem | `p-1` |
| `space-2` | 8px | 0.5rem | `p-2` |
| `space-3` | 12px | 0.75rem | `p-3` |
| `space-4` | 16px | 1rem | `p-4` |
| `space-5` | 20px | 1.25rem | `p-5` |
| `space-6` | 24px | 1.5rem | `p-6` |
| `space-8` | 32px | 2rem | `p-8` |
| `space-10` | 40px | 2.5rem | `p-10` |
| `space-12` | 48px | 3rem | `p-12` |
| `space-16` | 64px | 4rem | `p-16` |
| `space-20` | 80px | 5rem | `p-20` |
| `space-24` | 96px | 6rem | `p-24` |
| `space-32` | 128px | 8rem | `p-32` |
| `space-40` | 160px | 10rem | `p-40` |

---

## Section rhythm

Standard section layout top-to-bottom:

```
[overline label]          — margin-bottom: 8px
[H2 headline]             — margin-bottom: 16px
[body / descriptor]       — margin-bottom: 32px
[content / cards / grid]
[section gap]             — margin-bottom: 64px
```

For homepage sections, use `padding-top: 48px` / `padding-bottom: 64px`.

---

## Grid & containers

| Context | Value |
|---|---|
| Max page width | 1200px |
| Page horizontal gutter | 24px (mobile) / 40px (tablet) / 80px (desktop) |
| Article reading width | 680px |
| Card grid gap | 24px |
| Tight card grid gap | 16px |
| Sidebar width | 300px |
| Nav height | 56px (mobile) / 64px (desktop) |
| Breaking ticker height | 40px |

---

## Internal padding per element

| Element | Padding |
|---|---|
| Button (sm) | 8px 16px |
| Button (md) | 10px 20px |
| Button (lg) | 12px 24px |
| Input (md) | 10px 14px |
| Card | 16px |
| Card (featured) | 24px |
| Badge / tag | 4px 10px |
| Nav item | 12px 16px |
| Tooltip | 6px 10px |
| Modal | 32px |
| Breaking ticker | 8px 16px |

---

## Gap conventions

| Context | Gap |
|---|---|
| Homepage headline grid (3-col) | 24px |
| Sidebar card list | 16px |
| Breaking ticker items | 40px (separator) |
| Category nav items | 4px |
| Footer columns | 48px |
| Article paragraph spacing | 24px |
| Article section break | 48px |

---

## Four core rules

1. **Stick to the 4px grid.** No 5px, no 7px, no 13px values.
2. **Breathing room beats density.** Card padding ≥ 16px. Never pack text to the edge.
3. **Sections breathe at 64px.** Homepage sections get 64px vertical padding minimum.
4. **Reading lines are short.** Article body never wider than 680px. Even at 1440px viewports.
