module.exports = {
  content: ['./src/App.js', './src/components/**/*.{jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    maxWidth: {
      '1/2': '50%',
      'screen-xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
