# Email — Khabar Design System

---

## Technical

| Property | Value |
|---|---|
| Max width | 600px |
| Background | `#FAFAF8` (paper) |
| Font stack | `'Noto Sans Devanagari', 'Poppins', Arial, sans-serif` |
| Body text size | 16px |
| Line-height | 1.7 |
| Dark mode | `@media (prefers-color-scheme: dark)` override — bg `#1a1a1a`, text `#f0ede8` |
| Images | Always include `alt` text; set `width` in HTML |

---

## Marketing email structure

```
┌─────────────────────────────────────┐
│  Header (600px)                     │
│  [khabar-600 bg] [logo, white]      │
│  [date: मंगलवार, 14 फरवरी 2025]   │
├─────────────────────────────────────┤
│  Hero story (story 1)               │
│  [image 600×300]                    │
│  [Category badge]                   │
│  [Headline — heading-xl]            │
│  [Excerpt — 2 sentences]            │
│  [पूरी खबर पढ़ें →]               │
├─────────────────────────────────────┤
│  Divider                            │
├─────────────────────────────────────┤
│  Stories 2–5 (compact list)         │
│  [• Headline] [timestamp]           │
│  [• Headline] [timestamp]           │
│  [• Headline] [timestamp]           │
│  [• Headline] [timestamp]           │
├─────────────────────────────────────┤
│  Mid newsletter CTA (optional)      │
│  [khabar-50 bg] [App download]      │
├─────────────────────────────────────┤
│  Stories 6–8 (optional second set)  │
├─────────────────────────────────────┤
│  Footer                             │
│  [Logo] [khabar.in]                 │
│  [Unsubscribe] [Privacy] [Contact]  │
│  [ink-500, 12px]                    │
└─────────────────────────────────────┘
```

---

## Voice — marketing emails

Marketing emails sound like a one-to-one note from an editor, not a newsletter blast:

- Address as "नमस्ते" — never "प्रिय पाठक"
- First sentence: date + quick orientation ("आज गुरुवार 20 फरवरी है। यहाँ हैं आज की 5 खबरें —")
- Each story: one sentence max before the link
- No hype in subject lines

---

## Subject lines

| | Example |
|---|---|
| ✓ Do | आज की 5 खबरें: बजट, चुनाव और क्रिकेट |
| ✓ Do | बजट 2025: मुख्य बातें जो आपको जाननी चाहिए |
| ✓ Do | भारत ने जीती WTC — पढ़ें पूरी रिपोर्ट |
| ✗ Don't | 🔥 आज की सबसे बड़ी खबरें — मिस मत करें! |
| ✗ Don't | आपके लिए ज़रूरी खबरें (हर बार यही) |

**Subject line rules:**
- Under 45 characters
- Hindi only (no Hinglish)
- No emoji
- Specific: name the story, not the concept

---

## Pre-header

Max 90 characters. Extends the subject line naturally:

```
Subject:  आज की 5 खबरें: बजट, चुनाव और क्रिकेट
Pre-header: ₹48 लाख करोड़ का बजट, दिल्ली में मतदान, और भारत की WTC जीत
```

---

## Transactional email template

Welcome, confirmation, and notification emails are different from the newsletter:

- No images beyond the logo
- Maximum 3 sentences of body copy
- One clear action button
- Tone: direct, helpful, no personality performance

```
[Logo]
[Single H1 — heading-lg — what just happened]
[1–2 sentences of body]
[One CTA button]
[Footer — legal minimum]
```

---

## Types of emails Khabar sends

| Type | Frequency | Tone |
|---|---|---|
| Daily digest | Once per day, 10am | Calm editorial summary |
| Breaking alert | When genuinely breaking | Urgent, 3 sentences max |
| Weekly roundup | Sundays | Reflective, top 10 |
| Welcome | On signup | Warm, direct, short |
| Confirmation | On subscription | Transactional |

---

## What Khabar never sends

- Promotional emails not related to news
- "You haven't read in a while" re-engagement (intrusive)
- Emails with autoplay GIFs or animations
- Emails that require images to be readable
