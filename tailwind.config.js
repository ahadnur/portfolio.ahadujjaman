module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        md: '3rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '15rem',
      },
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        gray: "#323232",
        main: "#14FFEC"
    },
  },
  plugins: [],
}
