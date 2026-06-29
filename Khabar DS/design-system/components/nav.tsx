import * as React from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import { SearchInput } from './input';
import { cn } from './utils';

interface NavItem {
  label: string;   // Hindi label
  href: string;
  isActive?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: 'राष्ट्रीय', href: '/rashtriya' },
  { label: 'राजनीति', href: '/rajniti' },
  { label: 'खेल', href: '/khel' },
  { label: 'व्यापार', href: '/vyapar' },
  { label: 'मनोरंजन', href: '/manoranjan' },
  { label: 'तकनीक', href: '/taknik' },
  { label: 'विश्व', href: '/vishwa' },
  { label: 'जीवनशैली', href: '/jeevanshali' },
];

interface NavProps {
  items?: NavItem[];
  showSearch?: boolean;
  showNotifications?: boolean;
  className?: string;
}

export function Nav({
  items = defaultNavItems,
  showSearch = true,
  showNotifications = true,
  className,
}: NavProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <header className={cn('sticky top-0 z-50 w-full', className)}>
      {/* Primary bar — crimson */}
      <div className="bg-khabar-600 text-white">
        <div className="max-w-page mx-auto px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-2" aria-label="खबर — होम पेज">
            {/* Mark */}
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="font-devanagari font-bold text-khabar-600 text-base leading-none">ख</span>
            </div>
            {/* Wordmark */}
            <span className="font-devanagari font-bold text-xl text-white leading-none hidden sm:block">
              खबर
            </span>
          </a>

          {/* Desktop search */}
          {showSearch && !searchOpen && (
            <div className="hidden md:flex flex-1 max-w-sm mx-6">
              <SearchInput
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:ring-white/30 focus:border-white/40"
              />
            </div>
          )}

          {/* Right controls */}
          <div className="flex items-center gap-1">
            {/* Search toggle (mobile) */}
            {showSearch && (
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-sm"
                aria-label="खोज"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
            )}

            {showNotifications && (
              <button
                className="w-9 h-9 flex items-center justify-center rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-sm"
                aria-label="सूचनाएं"
              >
                <Bell className="w-5 h-5" strokeWidth={1.5} />
              </button>
            )}

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-sm"
              aria-label={isOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <SearchInput className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
        )}
      </div>

      {/* Category nav bar — dark crimson */}
      <nav
        className="bg-khabar-700 text-white overflow-x-auto scrollbar-hide"
        aria-label="श्रेणियां"
      >
        <div className="max-w-page mx-auto px-6 flex items-center h-10 gap-0">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'flex-shrink-0 px-3 h-full flex items-center text-label font-devanagari font-medium',
                'text-white/80 hover:text-white hover:bg-white/10',
                'border-b-2 transition-all duration-sm',
                item.isActive
                  ? 'text-white border-white'
                  : 'border-transparent',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-khabar-800 border-t border-khabar-700">
          <nav className="max-w-page mx-auto px-4 py-2 grid grid-cols-2 gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2.5 rounded-sm text-label font-devanagari font-medium',
                  'text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-sm',
                  item.isActive && 'text-white bg-white/10',
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
