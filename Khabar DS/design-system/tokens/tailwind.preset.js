/** @type {import('tailwindcss').Config} */
const khabarPreset = {
  theme: {
    extend: {
      colors: {
        // Brand (Deep Crimson)
        khabar: {
          50:  '#FFF5F5',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#D75050',
          500: '#C63030',
          600: '#B71C1C', // PRIMARY
          700: '#9E1414',
          800: '#851010',
          900: '#6B0C0C',
        },
        // Ink (text)
        ink: {
          900: '#0F1A2E',
          700: '#374151',
          500: '#6B7280',
          300: '#9CA3AF',
          100: '#E5E7EB',
        },
        // Surfaces
        paper:   '#FAFAF8',
        surface: '#FFFFFF',
        raised:  '#F3F4F2',
        line:    '#E5E7EB',
        // Category colours
        cat: {
          breaking:      '#B71C1C',
          politics:      '#1A237E',
          sports:        '#E65100',
          business:      '#1B5E20',
          entertainment: '#6A1B9A',
          technology:    '#0277BD',
          lifestyle:     '#AD1457',
          national:      '#4E342E',
          international: '#00695C',
          education:     '#F57F17',
        },
        // Semantic
        success: { 600: '#2E7D32', 100: '#E8F5E9' },
        warning: { 600: '#F57F17', 100: '#FFFDE7' },
        danger:  { 600: '#B71C1C', 100: '#FFCDD2' },
        info:    { 600: '#0277BD', 100: '#E1F5FE' },
      },

      fontFamily: {
        devanagari: ["'Noto Sans Devanagari'", 'sans-serif'],
        latin:      ["'Poppins'", 'sans-serif'],
        body:       ["'Poppins'", "'Noto Sans Devanagari'", 'sans-serif'],
        mono:       ["'JetBrains Mono'", "'Courier New'", 'monospace'],
      },

      fontSize: {
        'display-xl': ['4rem',      { lineHeight: '1.1',  letterSpacing: '-0.03em',   fontWeight: '700' }],
        'display-lg': ['3rem',      { lineHeight: '1.15', letterSpacing: '-0.025em',  fontWeight: '700' }],
        'display-md': ['2.25rem',   { lineHeight: '1.2',  letterSpacing: '-0.02em',   fontWeight: '700' }],
        'heading-xl': ['1.75rem',   { lineHeight: '1.25', letterSpacing: '-0.015em',  fontWeight: '700' }],
        'heading-lg': ['1.375rem',  { lineHeight: '1.3',  letterSpacing: '-0.01em',   fontWeight: '600' }],
        'heading-md': ['1.125rem',  { lineHeight: '1.35', letterSpacing: '-0.005em',  fontWeight: '600' }],
        'heading-sm': ['1rem',      { lineHeight: '1.4',  letterSpacing: '0',         fontWeight: '600' }],
        'body-lg':    ['1.125rem',  { lineHeight: '1.75', letterSpacing: '0',         fontWeight: '400' }],
        'body-md':    ['1rem',      { lineHeight: '1.7',  letterSpacing: '0',         fontWeight: '400' }],
        'body-sm':    ['0.875rem',  { lineHeight: '1.65', letterSpacing: '0',         fontWeight: '400' }],
        'caption':    ['0.75rem',   { lineHeight: '1.5',  letterSpacing: '0.01em',    fontWeight: '400' }],
        'overline':   ['0.6875rem', { lineHeight: '1.4',  letterSpacing: '0.08em',    fontWeight: '600' }],
        'label':      ['0.8125rem', { lineHeight: '1.4',  letterSpacing: '0.02em',    fontWeight: '500' }],
      },

      borderRadius: {
        none: '0px',
        xs:   '2px',
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        full: '9999px',
      },

      boxShadow: {
        none: 'none',
        xs:   '0 1px 2px rgba(15,26,46,0.06)',
        sm:   '0 1px 3px rgba(15,26,46,0.10), 0 1px 2px rgba(15,26,46,0.06)',
        md:   '0 4px 6px rgba(15,26,46,0.10), 0 2px 4px rgba(15,26,46,0.06)',
        lg:   '0 10px 15px rgba(15,26,46,0.10), 0 4px 6px rgba(15,26,46,0.05)',
        xl:   '0 20px 25px rgba(15,26,46,0.10), 0 8px 10px rgba(15,26,46,0.04)',
      },

      transitionDuration: {
        'xs': '80ms',
        'sm': '160ms',
        'md': '240ms',
        'lg': '480ms',
        'xl': '720ms',
      },

      transitionTimingFunction: {
        'out':    'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.45, 0, 0.55, 1)',
        'in':     'cubic-bezier(0.55, 0, 1, 0.45)',
      },

      maxWidth: {
        page:    '1200px',
        article: '680px',
        narrow:  '480px',
      },

      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },

      spacing: {
        '18': '72px',
        '22': '88px',
      },
    },
  },
};

module.exports = khabarPreset;
