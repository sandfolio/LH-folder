import * as React from 'react';
import { cn } from './utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium rounded-sm ' +
  'transition-all duration-sm ease-out focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-khabar-600 focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-40 select-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-khabar-600 text-white hover:bg-khabar-700 active:bg-khabar-800 active:scale-[0.97]',
  secondary:
    'bg-transparent text-khabar-600 border border-khabar-600 ' +
    'hover:bg-khabar-50 active:bg-khabar-100 active:scale-[0.97]',
  ghost:
    'bg-transparent text-ink-700 hover:bg-raised active:bg-ink-100 active:scale-[0.97]',
  link:
    'bg-transparent text-khabar-600 underline underline-offset-2 ' +
    'hover:text-khabar-700 p-0 h-auto',
  danger:
    'bg-danger-600 text-white hover:bg-khabar-700 active:bg-khabar-800 active:scale-[0.97]',
};

const sizes: Record<Size, string> = {
  sm: 'h-8  px-4  text-label text-[13px]',
  md: 'h-10 px-5  text-label text-[13px]',
  lg: 'h-12 px-6  text-label text-[14px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      iconLeft,
      iconRight,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        iconLeft
      )}
      {children}
      {!loading && iconRight}
    </button>
  ),
);

Button.displayName = 'Button';

// Icon-only button
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  label: string; // required for accessibility
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'ghost', size = 'md', label, children, className, ...props }, ref) => {
    const iconSize: Record<Size, string> = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12' };
    return (
      <button
        ref={ref}
        aria-label={label}
        className={cn(base, variants[variant], iconSize[size], 'p-0', className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
