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
      backgroundImage: {
        fade: 'linear-gradient(145deg, #1e2024, #23272b)',
      },
      boxShadow: {
        ambient: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      fontSize: {
        '5xl': '2.1rem',
      },
    },
    fontFamily: {
      body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"'],
      headerSpaced: ['Rubik, monospac'],
    },
  },
  plugins: [],
};
