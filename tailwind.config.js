/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00488d',
        'primary-container': '#005fb8',
        background: '#f7f9ff',
        'surface-lowest': '#ffffff',
        'surface-low': '#f1f4fa',
        'surface-highest': '#dfe3e8',
        secondary: '#486176',
        error: '#ba1a1a',
        tertiary: '#8b1f1b',
        'on-surface': '#181c20',
        'on-surface-variant': '#424752',
        outline: '#727783',
        'outline-variant': '#c2c6d4',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '2.5': '0.625rem', // 0.5rem base in standard tailwind, wait: 2.5 is normally 0.625. Our design specifies 0.5rem padding. Let's just use standard tailwind classes p-2, gap-4, etc, or add exact ones here if needed, but standard is fine.
      }
    },
  },
  plugins: [],
}
