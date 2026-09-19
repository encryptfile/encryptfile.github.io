/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#123F36',       // Deep Pine / Forest Green
          teal: '#2A6B5C',       // Teal / Sage Forest Green
          gold: '#C49A45',       // Warm Amber / Gold accent
          sand: '#E8DCC4',       // Light Cream / Warm Sand
          darker: '#081412',     // Ultra-deep dark pine page background
          surfaceDark: '#0D2621', // Dark card surface
          surfaceDark2: '#143630', // Elevated dark card surface
          surfaceLight: '#FFFFFF', // Light mode card surface
          bgLight: '#FBF9F5',    // Light mode page background (warm cream tinted)
          textLight: '#123F36',  // Light mode deep pine primary text
          textMutedLight: '#4B6B63', // Light mode secondary text
          textDark: '#F3F7F5',   // Dark mode primary text
          textMutedDark: '#8EB2A8',  // Dark mode secondary text
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(196, 154, 69, 0.25)',
        'glow-teal': '0 0 25px -5px rgba(42, 107, 92, 0.35)',
      },
    },
  },
  plugins: [],
};
