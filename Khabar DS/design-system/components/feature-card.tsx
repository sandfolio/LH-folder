import * as React from 'react';
import { cn } from './utils';

// Feature card — icon chip + title + body
// Used in "Why Khabar", about sections, app feature listings

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  accentColour?: string;   // Tailwind bg class for the icon chip, e.g. 'bg-khabar-100'
  iconColour?: string;     // Tailwind text class for the icon, e.g. 'text-khabar-600'
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  body,
  accentColour = 'bg-khabar-100',
  iconColour = 'text-khabar-600',
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('flex flex-col gap-3 p-5 bg-surface rounded-lg border border-line', className)}>
      {/* Icon chip */}
      <div className={cn('w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0', accentColour)}>
        <span className={cn('w-5 h-5', iconColour)}>{icon}</span>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-sm font-devanagari font-semibold text-ink-900 leading-snug">
          {title}
        </h3>
        <p className="text-body-sm font-devanagari text-ink-700 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

// Horizontal variant — icon left, text right
export function FeatureCardHorizontal({
  icon,
  title,
  body,
  accentColour = 'bg-khabar-100',
  iconColour = 'text-khabar-600',
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('flex items-start gap-4 p-4 bg-surface rounded-lg border border-line', className)}>
      <div className={cn('w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5', accentColour)}>
        <span className={cn('w-5 h-5', iconColour)}>{icon}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-heading-sm font-devanagari font-semibold text-ink-900">{title}</h3>
        <p className="text-body-sm font-devanagari text-ink-700 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
