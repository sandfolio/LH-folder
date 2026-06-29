# Instagram — Khabar Design System

---

## Aspect ratios

| Format | Ratio | Pixels | Use |
|---|---|---|---|
| Feed — default | 4:5 | 1080×1350 | Most posts |
| Feed — square | 1:1 | 1080×1080 | Breaking news cards |
| Stories / Reels | 9:16 | 1080×1920 | Live updates, vertical |

---

## Carousel structure

| Slide | Purpose |
|---|---|
| **1 — Hook** | Headline only. Big type. High contrast. Make them swipe. |
| **2–4 — Thread** | One fact per slide. Short. Max 2 sentences. |
| **5 — Payoff** | Summary or key takeaway. |
| **6 — CTA** | "पूरी खबर पढ़ें → khabar.in" |

---

## Design rules

- **Background:** `khabar-900` (for breaking/politics/sports) or `paper` (for features, explainers)
- **Headline:** `display-md` or `display-lg`, `font-devanagari 700`, white (on dark) or `ink-900` (on paper)
- **Category badge:** top-left, always visible
- **Khabar mark:** bottom-right, white `mark-inverse.svg` at 32px
- **Max lines per slide:** 4
- **Image use:** Wire photography where available; solid colour bg otherwise
- **No gradients** except a scrim over photography

---

## Post types

### Breaking news card (1:1)
```
[khabar-600 background]
[BREAKING label — white, top-left]
[Headline — white, display-md, centred or left-aligned]
[Timestamp — white/60, caption, bottom-left]
[Khabar mark — bottom-right]
```

### Quote card (4:5)
```
[paper background]
[Opening " — khabar-300, large]
[Quote text — heading-lg, font-devanagari, ink-900]
[Speaker: Name, title — caption, ink-500]
[Category badge — bottom-left]
[Khabar mark — bottom-right]
```

### Number card (4:5 or 1:1)
```
[khabar-900 background]
[Big number — display-xl, font-latin 700, white]
[Label — heading-md, font-devanagari, white/80]
[Source — caption, white/50, bottom]
[Khabar mark — bottom-right]
```

---

## Reels / Stories rules

- First frame: headline only, high contrast, visible within 2 seconds
- Caption style: `heading-md` white on scrim — no small text
- Duration: 15–30s for Reels; 7–15s per Stories frame
- Music: silent by default (user controls)

---

## What we never post

- Memes or humour on political stories
- Unverified screenshots without attribution label
- AI-generated imagery
- Emoji-heavy captions

---

## Caption template

```
[Lead sentence: who, what, when — 1 sentence in Hindi]

[2–3 bullet key facts with numbers]

पूरी खबर: 🔗 bio में link
#खबर #हिंदीन्यूज़ #[CategoryTag]
```
