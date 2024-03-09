import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      
      colors: {
        // main
        transparent: 'transparent',
        // palette
        primary: {
          DEFAULT:  'var(--color-primary)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          DEFAULT:  'var(--color-secondary)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
      },
      // spacing: {
      //   px: '1px',
      //   0: '0',
      //   0.5: '0.125rem',
      //   1: '0.25rem',
      //   1.5: '0.375rem',
      //   2: '0.5rem',
      //   2.5: '0.625rem',
      //   3: '0.75rem',
      // },
      // class: rounded-*
      // borderRadius: {
      //   'none': '0',
      //   'sm': '.125rem',
      //   DEFAULT: '.25rem',
      //   'lg': '.5rem',
      //   'full': '9999px',
      // },
    }
  },
  plugins: [],
};
export default config;
