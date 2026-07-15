/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        heading: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        subheading: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        caption: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          foreground: '#FFFFFF',
          hover: '#4338CA',
          light: '#EEF2FF',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          foreground: '#334155',
          hover: '#E2E8F0',
        },
        accent: {
          DEFAULT: '#0D9488',
          foreground: '#FFFFFF',
          light: '#CCFBF1',
        },
        success: {
          DEFAULT: '#10B981',
          foreground: '#FFFFFF',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          foreground: '#FFFFFF',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
          light: '#FEE2E2',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
        },
        border: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1',
        },
      },
      borderRadius: {
        card: '0.75rem',
        button: '0.5rem',
        input: '0.5rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
