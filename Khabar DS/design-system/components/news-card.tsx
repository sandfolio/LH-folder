import * as React from 'react';
import { Clock } from 'lucide-react';
import { Badge } from './badge';
import { cn } from './utils';

type Category =
  | 'breaking' | 'politics' | 'sports' | 'business'
  | 'entertainment' | 'technology' | 'lifestyle'
  | 'national' | 'international' | 'education';

interface NewsCardProps {
  headline: string;          // Hindi headline
  excerpt?: string;          // Short summary
  category: Category;
  imageUrl?: string;
  imageAlt?: string;
  author?: string;
  timestamp: string;         // e.g. "2 घंटे पहले" or "15 अगस्त 2024"
  href: string;
  variant?: 'default' | 'horizontal' | 'compact' | 'featured';
  isLive?: boolean;
  className?: string;
}

export function NewsCard({
  headline,
  excerpt,
  category,
  imageUrl,
  imageAlt,
  author,
  timestamp,
  href,
  variant = 'default',
  isLive = false,
  className,
}: NewsCardProps) {
  if (variant === 'horizontal') {
    return (
      <a
        href={href}
        className={cn(
          'flex gap-3 group bg-surface rounded-lg border border-line p-3',
          'hover:shadow-sm transition-all duration-md ease-out',
          className,
        )}
      >
        {imageUrl && (
          <div className="flex-shrink-0 w-24 h-20 rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt ?? headline}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-md"
            />
          </div>
        )}
        <div className="flex flex-col gap-1 min-w-0">
          <Badge category={category} size="sm" />
          <h3 className="text-body-sm font-devanagari font-semibold text-ink-900 leading-snug line-clamp-2 group-hover:text-khabar-600 transition-colors duration-sm">
            {headline}
          </h3>
          <span className="flex items-center gap-1 text-caption text-ink-500 font-latin mt-auto">
            <Clock className="w-3 h-3" strokeWidth={1.5} />
            {timestamp}
          </span>
        </div>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={href}
        className={cn(
          'flex items-start gap-2 group py-3 border-b border-line last:border-0',
          'hover:text-khabar-600 transition-colors duration-sm',
          className,
        )}
      >
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-khabar-600 mt-2" />
        <div className="min-w-0">
          <p className="text-body-sm font-devanagari font-medium text-ink-900 line-clamp-2 group-hover:text-khabar-600 leading-snug transition-colors duration-sm">
            {headline}
          </p>
          <span className="text-caption text-ink-500 font-latin">{timestamp}</span>
        </div>
      </a>
    );
  }

  if (variant === 'featured') {
    return (
      <a
        href={href}
        className={cn(
          'group relative block overflow-hidden rounded-xl bg-surface border border-line',
          'hover:shadow-md transition-all duration-md ease-out',
          className,
        )}
      >
        {imageUrl && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt ?? headline}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
            {isLive && (
              <span className="absolute top-3 left-3 flex items-center gap-1 bg-khabar-600 text-white text-[11px] font-latin font-semibold px-2 py-1 rounded-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <Badge category={category} />
              <h2 className="mt-2 text-heading-lg font-devanagari font-bold text-white leading-snug line-clamp-3">
                {headline}
              </h2>
            </div>
          </div>
        )}
        <div className="p-4 pt-3">
          {excerpt && (
            <p className="text-body-sm font-devanagari text-ink-700 line-clamp-2 mb-2">
              {excerpt}
            </p>
          )}
          <div className="flex items-center justify-between text-caption text-ink-500 font-latin">
            {author && <span>{author}</span>}
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              {timestamp}
            </span>
          </div>
        </div>
      </a>
    );
  }

  // Default card
  return (
    <a
      href={href}
      className={cn(
        'group flex flex-col bg-surface rounded-lg border border-line overflow-hidden',
        'hover:shadow-sm hover:-translate-y-0.5 transition-all duration-md ease-out',
        className,
      )}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt ?? headline}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-md"
          />
          {isLive && (
            <span className="absolute top-2 left-2 flex items-center gap-1 bg-khabar-600 text-white text-[10px] font-latin font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <Badge category={category} size="sm" />
        <h3 className="text-heading-md font-devanagari font-semibold text-ink-900 leading-snug line-clamp-3 group-hover:text-khabar-600 transition-colors duration-sm">
          {headline}
        </h3>
        {excerpt && (
          <p className="text-body-sm font-devanagari text-ink-700 line-clamp-2">{excerpt}</p>
        )}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-line text-caption text-ink-500 font-latin">
          {author && <span className="truncate">{author}</span>}
          <span className="flex items-center gap-1 flex-shrink-0 ml-auto">
            <Clock className="w-3 h-3" strokeWidth={1.5} />
            {timestamp}
          </span>
        </div>
      </div>
    </a>
  );
}
