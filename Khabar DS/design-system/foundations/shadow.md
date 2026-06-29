# Shadow — Khabar Design System

Shadows are derived from `ink-900` (`#0F1A2E`) at low opacity — never coloured shadows.

---

## Scale tokens

| Token | Value | Use |
|---|---|---|
| `shadow-none` | `none` | Default state for all elements |
| `shadow-xs` | `0 1px 2px rgba(15,26,46,0.06)` | Subtle card lift on hover |
| `shadow-sm` | `0 1px 3px rgba(15,26,46,0.10), 0 1px 2px rgba(15,26,46,0.06)` | Card default state |
| `shadow-md` | `0 4px 6px rgba(15,26,46,0.10), 0 2px 4px rgba(15,26,46,0.06)` | Dropdowns, nav sub-menus |
| `shadow-lg` | `0 10px 15px rgba(15,26,46,0.10), 0 4px 6px rgba(15,26,46,0.05)` | Modals, drawers |
| `shadow-xl` | `0 20px 25px rgba(15,26,46,0.10), 0 8px 10px rgba(15,26,46,0.04)` | Floating panels |

---

## Five rules

1. **Default state = no shadow.** Cards and inputs sit on paper without shadow by default.
2. **Add `shadow-xs` on hover.** The only motion-free elevation cue on interactive cards.
3. **`shadow-md` and above only for overlays.** Dropdowns, sub-menus, search results.
4. **No coloured shadows.** No `rgba(183,28,28,0.3)` red glow. No brand-coloured elevation.
5. **No inner shadows (`inset`).** Pressed states use background colour change, not inset shadow.
