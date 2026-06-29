import * as React from 'react';
import { cn } from './utils';

// General-purpose card — for non-news contexts (about sections, data panels, settings cards)
// For news story cards, use news-card.tsx

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'raised';
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-lg overflow-hidden',
        variant === 'default' && 'border border-line',
        variant === 'flat'    && 'bg-raised',
        variant === 'raised'  && 'shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-5 pt-5 pb-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-heading-sm font-devanagari font-semibold text-ink-900 leading-snug', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('mt-1 text-body-sm font-devanagari text-ink-500', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-5 py-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-5 pb-5 pt-0 flex items-center gap-3 border-t border-line mt-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}
