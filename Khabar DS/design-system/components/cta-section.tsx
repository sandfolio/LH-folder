import * as React from 'react';
import { Bell } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { cn } from './utils';

// ─── Newsletter CTA ────────────────────────────────────────────────────────────

interface NewsletterCTAProps {
  headline?: string;
  subline?: string;
  variant?: 'dark' | 'wash';
  className?: string;
}

export function NewsletterCTA({
  headline = 'खबर सीधे आपके इनबॉक्स में',
  subline = 'हर सुबह 10 बजे, दिन की 5 ज़रूरी खबरें — सीधे आपके ईमेल पर। कोई स्पैम नहीं।',
  variant = 'dark',
  className,
}: NewsletterCTAProps) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className={cn(
        'w-full py-12 px-6',
        variant === 'dark' && 'bg-khabar-900 text-white',
        variant === 'wash' && 'bg-khabar-50 text-ink-900',
        className,
      )}
    >
      <div className="max-w-narrow mx-auto text-center">
        <div className={cn(
          'w-10 h-10 rounded-md flex items-center justify-center mx-auto mb-4',
          variant === 'dark' ? 'bg-white/10' : 'bg-khabar-100',
        )}>
          <Bell
            className={cn('w-5 h-5', variant === 'dark' ? 'text-white' : 'text-khabar-600')}
            strokeWidth={1.5}
          />
        </div>

        <h2 className={cn(
          'text-heading-xl font-devanagari font-bold mb-2',
          variant === 'dark' ? 'text-white' : 'text-ink-900',
        )}>
          {headline}
        </h2>
        <p className={cn(
          'text-body-md font-devanagari mb-6',
          variant === 'dark' ? 'text-white/70' : 'text-ink-700',
        )}>
          {subline}
        </p>

        {submitted ? (
          <p className={cn(
            'text-body-md font-devanagari font-medium',
            variant === 'dark' ? 'text-khabar-200' : 'text-success-600',
          )}>
            शुक्रिया! आपका ईमेल दर्ज हो गया है।
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto">
            <Input
              type="email"
              placeholder="आपका ईमेल पता"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                'flex-1',
                variant === 'dark' && 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/60',
              )}
            />
            <Button type="submit" variant="primary" className="flex-shrink-0">
              सदस्य बनें
            </Button>
          </form>
        )}

        <p className={cn(
          'text-caption font-devanagari mt-4',
          variant === 'dark' ? 'text-white/40' : 'text-ink-300',
        )}>
          1,20,000+ पाठक पहले से सदस्य हैं
        </p>
      </div>
    </section>
  );
}

// ─── App Download CTA ──────────────────────────────────────────────────────────

interface AppCTAProps {
  className?: string;
}

export function AppCTA({ className }: AppCTAProps) {
  return (
    <section className={cn('bg-khabar-600 text-white py-10 px-6', className)}>
      <div className="max-w-page mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-heading-xl font-devanagari font-bold">
            खबर ऐप डाउनलोड करें
          </h2>
          <p className="text-body-sm font-devanagari text-white/80 mt-1">
            हर खबर, हर वक्त — Android और iOS पर
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-sm px-4 py-2.5 text-label font-latin transition-colors duration-sm"
          >
            Google Play
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-sm px-4 py-2.5 text-label font-latin transition-colors duration-sm"
          >
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}
