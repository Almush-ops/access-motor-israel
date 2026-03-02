/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Access Motor Brand Colors - Based on manufacturer site
        // Primary: #009FE3 (cyan-blue), Dark: #121A41 (navy)
        access: {
          50: '#E6F7FD',
          100: '#CCF0FB',
          200: '#99E1F7',
          300: '#66D2F3',
          400: '#33C3EF',
          500: '#009FE3',  // Primary brand cyan-blue
          600: '#0085C3',
          700: '#006A9A',
          800: '#005078',
          900: '#121A41',  // Dark navy
          950: '#0A1029',
        },
        // Semantic colors
        accent: '#FF6B35',   // Sporty orange for CTAs
        dark: '#121A41',     // Navy as dark (from manufacturer)
        surface: '#F7F7F7',  // Light gray backgrounds
        border: '#E5E5E5',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Assistant', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'sharp': '2px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
