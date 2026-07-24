/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0A1428',
          mid: '#122446',
          card: '#121212',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#F0D97A',
        },
        teal: {
          DEFAULT: '#17C9B2',
          dark: '#0e9e8d',
        },
        text: {
          dim: '#8A9BBF',
          bright: '#EEF2FB',
        }
      }
    },
  },
  plugins: [],
}
