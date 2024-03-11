import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
/** @type {import(tailwindcss).Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondary: 'var(--colors-secondary)',
        accent: 'var(--colors-accent)',
        background: 'var(--colors-background)',
        foreground: 'var(--colors-foreground)',
        border: 'var(--colors-border)',
        error: 'var(--colors-error)',
        success: 'var(--colors-success)',
        warning: 'var(--colors-warning)',
        info: 'var(--colors-info)',
        white: 'var(--colors-white)',
        black: 'var(--colors-black)',
        primary: {
          50: 'var(--colors-primary-50)',
          100: 'var(--colors-primary-100)',
          200: 'var(--colors-primary-200)',
          300: 'var(--colors-primary-300)',
          400: 'var(--colors-primary-400)',
          500: 'var(--colors-primary-500)',
          600: 'var(--colors-primary-600)',
          700: 'var(--colors-primary-700)',
          800: 'var(--colors-primary-800)',
          900: 'var(--colors-primary-900)',
        },
      },
      boxShadow: {
        'decorative-big': 'var(--shadow-decorative-big)',
        'decorative-big-hover': 'var(--shadow-decorative-big-hover)',
        'decorative-small': 'var(--shadow-decorative-small)',
        'decorative-small-hover': 'var(--shadow-decorative-small-hover)',
      },
    },
  },
  plugins: [typography],
};
