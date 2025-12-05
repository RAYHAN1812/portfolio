import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        'background-light': '#F8FAFC',
        'background-dark': '#0F172A',
        'text-light-primary': '#0F172A',
        'text-dark-primary': '#F8FAFC',
        'text-light-secondary': '#64748B',
        'text-dark-secondary': '#94A3B8',
        'border-light': '#E2E8F0',
        'border-dark': '#334155',
      },
      fontFamily: {
        display: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
