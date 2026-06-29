# Radius — Khabar Design System

---

## Scale tokens

| Token | Value | Use |
|---|---|---|
| `radius-none` | 0px | Masthead nav bar, full-bleed images, breaking ticker |
| `radius-xs` | 2px | Subtle rounding on table rows |
| `radius-sm` | 4px | Buttons, inputs, badges, tags |
| `radius-md` | 8px | Dropdowns, tooltips, small cards, search bar |
| `radius-lg` | 12px | News cards, featured cards, modals |
| `radius-xl` | 16px | Feature hero cards, image containers |
| `radius-full` | 9999px | Avatar images, circular icon chips |

---

## The two rules

1. **Buttons use `radius-sm` (4px).** Khabar buttons are sharp and editorial — not rounded pill CTAs. A pill button signals a startup; Khabar is a publication.
2. **Cards use `radius-lg` (12px).** This gives news cards a modern, friendly feel without being soft or bubbly.

---

## Consistency within a composition

Within a single card or section, use one radius value. A card with `radius-lg` should not contain inner elements at `radius-xl`. The inner radius should be `radius-lg - card-padding` if nested.

---

## Exceptions

| Element | Radius | Why |
|---|---|---|
| Avatar / author photo | `radius-full` | Standard convention |
| Masthead / nav | `radius-none` | Full-bleed, no rounding |
| Breaking ticker | `radius-none` | Urgency — hard edges |
| Logo SVG | `radius-none` | Never round the logo |
| Hero image (card context) | `radius-lg` top only | Image top-clips to card radius |
| Category badge (pill style) | `radius-full` | Only for category pills, not action buttons |
| Featured image (full-width) | `radius-none` | Full-bleed images have no radius |
