module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace']
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
}
