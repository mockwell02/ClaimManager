/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mcdonalds: {
          gray: '#e9e6e5',
          'gray-light': '#f2f0ef',
          'gray-dark': '#d6d3d2',
          orange: '#fec528',
          red: '#DA291C',
        }
      },
    },
  },
  plugins: [],
};
