import * as React from 'react';
import { Search } from 'lucide-react';
import { cn } from './utils';

// ─── Base Input ────────────────────────────────────────────────────────────────

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, iconLeft, iconRight, className, id, ...props }, ref) => {
    const inputId = id ?? React.useId();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label text-ink-900 font-medium font-body"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {iconLeft && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 pointer-events-none">
              {iconLeft}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full h-10 px-3.5 rounded-sm border bg-surface text-body-md text-ink-900 font-body',
              'placeholder:text-ink-300',
              'border-line focus:outline-none focus:border-khabar-600',
              'focus:ring-2 focus:ring-khabar-600/20',
              'transition-all duration-sm ease-out',
              'disabled:opacity-40 disabled:cursor-not-allowed',
              error && 'border-danger-600 focus:ring-danger-600/20',
              iconLeft && 'pl-9',
              iconRight && 'pr-9',
              className,
            )}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            aria-invalid={error ? true : undefined}
            {...props}
          />
          {iconRight && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 pointer-events-none">
              {iconRight}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-caption text-danger-600 font-body">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-caption text-ink-500 font-body">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

// ─── Search Input ──────────────────────────────────────────────────────────────

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function SearchInput({ onSearch, className, ...props }: SearchInputProps) {
  const [value, setValue] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) onSearch(value);
  };

  return (
    <div className="relative w-full">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 w-5 h-5 pointer-events-none"
        strokeWidth={1.5}
      />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="खबर खोजें..."
        className={cn(
          'w-full h-10 pl-10 pr-4 rounded-sm border border-line bg-surface',
          'text-body-md text-ink-900 font-devanagari placeholder:font-devanagari placeholder:text-ink-300',
          'focus:outline-none focus:border-khabar-600 focus:ring-2 focus:ring-khabar-600/20',
          'transition-all duration-sm ease-out',
          className,
        )}
        {...props}
      />
    </div>
  );
}

// ─── Textarea ─────────────────────────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const inputId = id ?? React.useId();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-label text-ink-900 font-medium font-body">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={4}
          className={cn(
            'w-full px-3.5 py-2.5 rounded-sm border bg-surface',
            'text-body-md text-ink-900 font-devanagari leading-relaxed',
            'placeholder:text-ink-300 border-line resize-y',
            'focus:outline-none focus:border-khabar-600 focus:ring-2 focus:ring-khabar-600/20',
            'transition-all duration-sm ease-out',
            'disabled:opacity-40',
            error && 'border-danger-600',
            className,
          )}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-caption text-danger-600">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-caption text-ink-500">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
