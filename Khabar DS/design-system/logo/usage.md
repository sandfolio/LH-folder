# Logo Usage — Khabar (खबर)

---

## File inventory

| File | Use when |
|---|---|
| `mark.svg` | App icon, favicon fallback, social avatar, small embeds |
| `mark-inverse.svg` | Mark on crimson, dark, or photo backgrounds |
| `wordmark.svg` | Print headers, email footers, partner co-branding |
| `lockup-horizontal.svg` | **Primary use** — masthead, nav bar, press kit |
| `lockup-stacked.svg` | Square contexts: social profile, app splash, merch |
| `favicon.svg` | Browser tab, PWA icon |

---

## Construction

**Mark:** 48×48px square, `radius-sm` (4px), filled `khabar-600`. The Devanagari letter ख (first consonant of खबर) centred in white. No eye dots. No decorative serifs. No added strokes. The mark has exactly two visible elements: the crimson square and the white ख.

**Wordmark:** खबर set in Noto Sans Devanagari Bold at 40px, `khabar-600`, `letter-spacing: -0.5`. No outline. No shadow. No gradient.

**Lockup:** Mark at 48×48, wordmark at 32px, 16px gap between them. Vertical centres aligned.

**Explicit simplification note for future LLMs:** The mark is a filled square with a single Devanagari letter. It has no additional marks, dots, strokes, underlines, or decorative elements. Do not add anything to it.

---

## Clear space

Minimum clear space = height of the ख character within the mark on all sides. Do not place other logos, text, or graphic elements within this zone.

---

## Minimum sizes

| Variant | Web minimum | Print minimum |
|---|---|---|
| Lockup horizontal | 120px wide | 30mm wide |
| Lockup stacked | 80px wide | 20mm wide |
| Mark only | 24px | 8mm |
| Favicon | 16px | — |

---

## Colour variants

| Background | Use |
|---|---|
| Paper `#FAFAF8` | `lockup-horizontal.svg` (default) |
| White `#FFFFFF` | `lockup-horizontal.svg` (default) |
| Crimson `#B71C1C` | `mark-inverse.svg` + white wordmark text |
| Dark `#0F1A2E` | `mark-inverse.svg` + white wordmark text |
| Photography | `mark-inverse.svg` with scrim behind it |
| Single colour (fax/embossing) | Mark only, single colour solid |

---

## What NOT to do

- Do not stretch or distort the mark or wordmark
- Do not rotate the logo
- Do not change the crimson to any other colour without explicit approval
- Do not add drop shadows, glows, or effects
- Do not place on a busy background without a scrim
- Do not recreate the wordmark in a different typeface
- Do not add features that are not in the source mark (no extra strokes, no decorative dots, no serifs added to ख)
- Do not animate the mark
- Do not use the mark at less than 24px — use the wordmark instead

---

## Usage examples by surface

| Surface | Variant | Size | Colour context |
|---|---|---|---|
| Desktop nav bar | `lockup-horizontal` | 36px tall | White on khabar-600 bg |
| Mobile nav bar | `mark` | 32px | White on khabar-600 bg |
| Article footer | `wordmark` | 24px | khabar-600 on paper |
| Email header | `lockup-horizontal` | 40px tall | khabar-600 on white |
| Social profile avatar | `mark` | 400×400px export | Crimson square |
| OG image | `lockup-horizontal` | 160px wide | White on khabar-900 strip |
| App splash screen | `lockup-stacked` | 80px wide | White on khabar-600 |
