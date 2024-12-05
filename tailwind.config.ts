// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'ocean-light': '#4FD1C5', // teal-300
        'ocean-dark': '#285E61', // teal-800
        'primary': {
          light: '#63B3ED', // blue-400
          DEFAULT: '#4299E1', // blue-500
          dark: '#2B6CB0', // blue-700
        },
        'background': {
          light: '#F7FAFC', // gray-50
          dark: '#1A202C', // gray-900
        },
      },
    },
  },
  plugins: [],
}
export default config
