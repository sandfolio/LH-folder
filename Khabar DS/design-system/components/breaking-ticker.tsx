import * as React from 'react';
import { cn } from './utils';

interface TickerItem {
  id: string;
  text: string;
  href?: string;
}

interface BreakingTickerProps {
  items: TickerItem[];
  label?: string;
  className?: string;
}

export function BreakingTicker({
  items,
  label = 'ब्रेकिंग',
  className,
}: BreakingTickerProps) {
  const doubledItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      className={cn(
        'flex items-center bg-khabar-50 border-b border-khabar-200 h-9 overflow-hidden',
        className,
      )}
      role="marquee"
      aria-label="ब्रेकिंग न्यूज़"
      aria-live="polite"
    >
      {/* Label */}
      <div className="flex-shrink-0 flex items-center gap-1.5 bg-khabar-600 text-white px-3 h-full">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
        <span className="text-[11px] font-latin font-bold tracking-widest uppercase whitespace-nowrap">
          {label}
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex animate-ticker-scroll gap-0 whitespace-nowrap">
          {doubledItems.map((item, i) => (
            <React.Fragment key={`${item.id}-${i}`}>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex-shrink-0 inline-flex items-center px-4 h-9 text-body-sm font-devanagari text-ink-900 hover:text-khabar-600 transition-colors duration-sm"
                >
                  {item.text}
                </a>
              ) : (
                <span className="flex-shrink-0 inline-flex items-center px-4 h-9 text-body-sm font-devanagari text-ink-900">
                  {item.text}
                </span>
              )}
              <span className="flex-shrink-0 text-khabar-300 self-center text-sm" aria-hidden>
                •
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Fade edge */}
      <div className="flex-shrink-0 w-8 bg-gradient-to-l from-khabar-50 to-transparent pointer-events-none" />
    </div>
  );
}

/*
  Add to your tailwind.config.js under theme.extend.animation:

  animation: {
    'ticker-scroll': 'ticker-scroll 40s linear infinite',
  },
  keyframes: {
    'ticker-scroll': {
      '0%':   { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },

  And under media:
  '@media (prefers-reduced-motion: reduce)': {
    '.animate-ticker-scroll': { animation: 'none' },
  },
*/
