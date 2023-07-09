/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        lightgrey: 'rgba(255, 255, 255, 0.8)',
        purple: '#998ADB',
        gray: '#0b0b13',
      },
    },
    fontFamily: {
      body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"'],
      headerSpaced: ['Rubik, monospac'],
    },
  },
  plugins: [],
};
