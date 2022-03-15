module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
