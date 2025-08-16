import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pilton Green Theme - "Living Green" Design System (Enhanced)
        'forest': {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Soft green
          300: '#86efac',  // Fresh green
          400: '#4ade80',  // Bright leaf green
          500: '#22c55e',  // Primary green (better contrast)
          600: '#16a34a',  // Forest green
          700: '#15803d',  // Deep forest
          800: '#166534',  // Dark forest
          900: '#14532d',  // Darkest green
        },
        'earth': {
          50: '#fefaf8',   // Cream
          100: '#fdf5f0',  // Light earth
          200: '#f4e4bc',  // Warm sand
          300: '#e9c46a',  // Golden earth
          400: '#f4a261',  // Warm orange
          500: '#e76f51',  // Terra cotta
          600: '#d4603a',  // Deep terra
        },
        'leaf': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          light: '#bbf7d0',  // Improved light leaf
          DEFAULT: '#4ade80',  // Brighter default
          dark: '#16a34a',     // Better dark contrast
        },
        'sage': {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#a8b8a8',
          400: '#7a957a',
          500: '#5a7a5a',   // Sage green for text
          600: '#4a6b4a',
          700: '#3d563d',
          800: '#334633',
          900: '#2a3a2a',
        }
      },
      fontFamily: {
        'serif': ['var(--font-merriweather)', 'Times New Roman', 'serif'],
        'sans': ['var(--font-inter)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['var(--font-merriweather)', 'serif'], // For headings
      },
      backgroundImage: {
        'leaf-border': "url('/images/green-leaf-border.png')",
        'green-gradient': 'linear-gradient(135deg, #40916c 0%, #52b788 100%)',
        'forest-gradient': 'linear-gradient(180deg, #1b4332 0%, #2f5233 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'leaf': '0.75rem',
      },
      boxShadow: {
        'leaf': '0 4px 6px -1px rgba(64, 145, 108, 0.1), 0 2px 4px -1px rgba(64, 145, 108, 0.06)',
        'forest': '0 10px 15px -3px rgba(27, 67, 50, 0.1), 0 4px 6px -2px rgba(27, 67, 50, 0.05)',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
export default config