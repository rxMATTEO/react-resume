/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"'],
      headerSpaced: ['Rubik, monospac'],
    },
    colors: {
      lightgrey: 'rgba(255, 255, 255, 0.8)',
    },
  },
  plugins: [],
};
