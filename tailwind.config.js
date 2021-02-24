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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
