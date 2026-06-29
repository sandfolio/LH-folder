import * as React from 'react';
import { cn } from './utils';

type Category =
  | 'breaking'
  | 'politics'
  | 'sports'
  | 'business'
  | 'entertainment'
  | 'technology'
  | 'lifestyle'
  | 'national'
  | 'international'
  | 'education';

interface BadgeProps {
  category: Category;
  label?: string; // override display text; defaults to category name in Hindi
  size?: 'sm' | 'md';
  className?: string;
}

const categoryLabels: Record<Category, string> = {
  breaking:      'ब्रेकिंग',
  politics:      'राजनीति',
  sports:        'खेल',
  business:      'व्यापार',
  entertainment: 'मनोरंजन',
  technology:    'तकनीक',
  lifestyle:     'जीवनशैली',
  national:      'राष्ट्रीय',
  international: 'अंतरराष्ट्रीय',
  education:     'शिक्षा',
};

const categoryStyles: Record<Category, string> = {
  breaking:      'text-khabar-600      bg-khabar-50      border-khabar-200',
  politics:      'text-[#1A237E]       bg-[#E8EAF6]      border-[#C5CAE9]',
  sports:        'text-[#E65100]       bg-[#FFF3E0]      border-[#FFCC80]',
  business:      'text-[#1B5E20]       bg-[#E8F5E9]      border-[#A5D6A7]',
  entertainment: 'text-[#6A1B9A]       bg-[#F3E5F5]      border-[#CE93D8]',
  technology:    'text-[#0277BD]       bg-[#E1F5FE]      border-[#81D4FA]',
  lifestyle:     'text-[#AD1457]       bg-[#FCE4EC]      border-[#F48FB1]',
  national:      'text-[#4E342E]       bg-[#EFEBE9]      border-[#BCAAA4]',
  international: 'text-[#00695C]       bg-[#E0F2F1]      border-[#80CBC4]',
  education:     'text-[#F57F17]       bg-[#FFFDE7]      border-[#FFE082]',
};

export function Badge({ category, label, size = 'md', className }: BadgeProps) {
  const text = label ?? categoryLabels[category];
  const isBreaking = category === 'breaking';

  return (
    <span
      className={cn(
        'inline-flex items-center border rounded-full font-devanagari font-semibold leading-none',
        categoryStyles[category],
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-[11px]',
        isBreaking && 'uppercase tracking-wider',
        className,
      )}
    >
      {isBreaking && (
        <span className="w-1.5 h-1.5 rounded-full bg-khabar-600 mr-1.5 flex-shrink-0 animate-pulse" />
      )}
      {text}
    </span>
  );
}

// Generic text badge (for non-category uses: "नया", "LIVE", "एक्सक्लूसिव")
interface GenericBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'live' | 'new' | 'exclusive';
  className?: string;
}

export function GenericBadge({ children, variant = 'default', className }: GenericBadgeProps) {
  const styles: Record<string, string> = {
    default:   'bg-raised text-ink-700 border border-line',
    live:      'bg-khabar-600 text-white border-0 uppercase tracking-wider',
    new:       'bg-success-100 text-success-600 border border-[#A5D6A7]',
    exclusive: 'bg-khabar-900 text-white border-0',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-latin font-semibold leading-none',
        styles[variant],
        className,
      )}
    >
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 flex-shrink-0 animate-pulse" />
      )}
      {children}
    </span>
  );
}
