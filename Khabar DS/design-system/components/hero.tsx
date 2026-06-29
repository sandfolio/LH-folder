import * as React from 'react';
import { Clock } from 'lucide-react';
import { Badge } from './badge';
import { cn } from './utils';

type Category =
  | 'breaking' | 'politics' | 'sports' | 'business'
  | 'entertainment' | 'technology' | 'lifestyle'
  | 'national' | 'international' | 'education';

interface HeroStory {
  headline: string;
  excerpt?: string;
  category: Category;
  imageUrl: string;
  imageAlt?: string;
  author?: string;
  timestamp: string;
  href: string;
  isLive?: boolean;
}

interface HeroProps {
  primary: HeroStory;
  secondary?: HeroStory[];  // 2–3 secondary stories shown beside/below
  className?: string;
}

export function Hero({ primary, secondary = [], className }: HeroProps) {
  return (
    <section className={cn('w-full', className)} aria-label="मुख्य खबरें">
      <div className="max-w-page mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Primary feature — spans 2 columns */}
          <a
            href={primary.href}
            className="group lg:col-span-2 relative block overflow-hidden rounded-xl bg-surface border border-line hover:shadow-md transition-all duration-md ease-out"
          >
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img
                src={primary.imageUrl}
                alt={primary.imageAlt ?? primary.headline}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-lg ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />

              {primary.isLive && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-khabar-600 text-white text-[11px] font-latin font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <Badge category={primary.category} />
                <h1 className="mt-2 text-display-md font-devanagari font-bold text-white leading-snug line-clamp-3 group-hover:text-khabar-100 transition-colors duration-sm">
                  {primary.headline}
                </h1>
                {primary.excerpt && (
                  <p className="mt-2 text-body-sm font-devanagari text-white/80 line-clamp-2 hidden sm:block">
                    {primary.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-3 text-caption text-white/70 font-latin">
                  {primary.author && <span>{primary.author}</span>}
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" strokeWidth={1.5} />
                    {primary.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Secondary stories — right column */}
          {secondary.length > 0 && (
            <div className="flex flex-col gap-4">
              {secondary.slice(0, 3).map((story) => (
                <a
                  key={story.href}
                  href={story.href}
                  className="group flex flex-col bg-surface rounded-lg border border-line overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all duration-md ease-out"
                >
                  {story.imageUrl && (
                    <div className="h-32 overflow-hidden">
                      <img
                        src={story.imageUrl}
                        alt={story.imageAlt ?? story.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-md"
                      />
                    </div>
                  )}
                  <div className="p-3 flex flex-col gap-1.5">
                    <Badge category={story.category} size="sm" />
                    <h3 className="text-body-sm font-devanagari font-semibold text-ink-900 leading-snug line-clamp-2 group-hover:text-khabar-600 transition-colors duration-sm">
                      {story.headline}
                    </h3>
                    <span className="flex items-center gap-1 text-caption text-ink-500 font-latin mt-auto">
                      <Clock className="w-3 h-3" strokeWidth={1.5} />
                      {story.timestamp}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
