# LinkedIn — Khabar Design System

---

## Aspect ratios

| Format | Ratio | Pixels | Use |
|---|---|---|---|
| Feed image | 1:1 | 1200×1200 | Default |
| Feed portrait | 4:5 | 1080×1350 | Carousel, data |
| Company banner | ~8:1 | 1128×191 | Company page |

---

## Carousel structure (4:5)

| Slide | Purpose |
|---|---|
| **Cover** | Title + khabar mark. "Swipe →" indicator. |
| **2–5** | One insight per slide. Headline + 2–3 sentences max. |
| **Last** | Key takeaway + "khabar.in पर पढ़ें" |

---

## Post types

### Thought-leadership (text only)
- 1–3 sentence hook opening — state the surprising fact
- Body: 3–5 short paragraphs, each ≤3 sentences
- Close: direct question or statement
- No hashtag spam — max 3 relevant tags

### Case / data post (1:1 image)
```
[khabar-900 bg]
[Category label — overline, khabar-300]
[Big number or key stat — display-lg, white]
[Label — heading-md, white/80]
[Source — caption, white/50]
[Khabar lockup — bottom-right]
```

### Hiring post
- Lead with what the candidate will do, not perks
- State city, team, and 2 must-have qualifications
- No exclamation marks

---

## Company page spec

- **Banner:** `khabar-600` background, `lockup-horizontal.svg` in white, centred
- **Logo:** `mark.svg` export at 400×400
- **Tagline:** "खबर जो मायने रखती है"
- **About:** Use the 2-sentence boilerplate from `voice/homepage-copy.md`

---

## What NOT to do

- No "I'm excited to announce" openers — state what happened
- No engagement-bait ("Comment 'YES' if you agree")
- No reposted Twitter/X screenshots
- No unsourced statistics
- No political endorsements

---

## Post voice

LinkedIn readers are professionals. Tone is slightly more formal than Instagram but still direct:

- State the insight in sentence 1
- Give the evidence in sentences 2–4
- Draw the implication in the final paragraph

No conversational filler ("Great question!", "Honestly speaking…").
