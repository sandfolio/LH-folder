# Motion — Khabar Design System

---

## Duration tokens

| Token | ms | Use |
|---|---|---|
| `duration-xs` | 80ms | Micro-interactions (checkbox tick, icon swap) |
| `duration-sm` | 160ms | Button press, badge appear, input focus ring |
| `duration-md` | 240ms | Card hover lift, menu open, tab switch |
| `duration-lg` | 480ms | Modal open, drawer slide, page section reveal |
| `duration-xl` | 720ms | Full-page transitions (use sparingly) |

---

## Easing tokens

| Token | Value | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default — elements entering the screen |
| `ease-in-out` | `cubic-bezier(0.45, 0, 0.55, 1)` | Elements moving within the screen |
| `ease-linear` | `linear` | Progress bars, loading indicators |
| `ease-in` | `cubic-bezier(0.55, 0, 1, 0.45)` | Elements leaving the screen |

---

## Standard animations

```css
/* Button press */
.btn:active { transform: scale(0.97); transition: transform 80ms ease-in-out; }

/* Input focus ring */
.input:focus { box-shadow: 0 0 0 3px rgba(183,28,28,0.2); transition: box-shadow 160ms ease-out; }

/* Card hover lift */
.card:hover { box-shadow: var(--shadow-sm); transform: translateY(-2px); transition: all 240ms ease-out; }

/* Menu open */
.dropdown { opacity: 0; transform: translateY(-4px); }
.dropdown.open { opacity: 1; transform: translateY(0); transition: all 240ms ease-out; }

/* Modal open */
.modal { opacity: 0; transform: scale(0.97); }
.modal.open { opacity: 1; transform: scale(1); transition: all 480ms ease-out; }

/* Scroll reveal (use IntersectionObserver) */
.reveal { opacity: 0; transform: translateY(16px); }
.reveal.visible { opacity: 1; transform: translateY(0); transition: all 480ms ease-out; }

/* Breaking ticker scroll */
.ticker-inner { animation: ticker-scroll 30s linear infinite; }
@keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

---

## prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .ticker-inner { animation: none; }
}
```

---

## We do not do

- No parallax scrolling
- No hero background video (looping or otherwise)
- No scroll-jacking (custom scroll behavior)
- No confetti / particle effects
- No typewriter text effects
- No text shimmer / gradient-text animations
- No bouncing, wobbling, or shake animations
- No marquee on the hero section (breaking ticker only — contained strip)
- No entrance animations that delay reading (content must be visible immediately)
- No cursor-tracking spotlight effects on editorial content
