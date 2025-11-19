/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-dark': {
          50: '#1a1a1f',
          100: '#15151a',
          200: '#121217',
          300: '#0f0f13',
          400: '#0c0c10',
          500: '#09090d',
          600: '#07070a',
          700: '#050508',
          800: '#030305',
          900: '#010102',
          950: '#000000',
        }
      },
    },
  },
  plugins: [],
}
