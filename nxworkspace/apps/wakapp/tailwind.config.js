module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      dark: '#121749',
    },
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
