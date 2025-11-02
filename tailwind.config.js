/** @type {import('tailwindcss').Config} */
export default {
  // Path configuration
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // Custom Colors (Kept as before)
    colors: {
      "orange-primary": "#D87D4A",
      "orange-light": "#fbaf85",
      "black-dark": "#101010",
      black: "#000000",
      white: "#FFFFFF",
      "gray-light": "#F1F1F1",
      "gray-off-white": "#FAFAFA",
    },

    // Extensions (Simplified Font Setup)
    extend: {
      fontFamily: {
        // We list common system fonts as fallbacks manually,
        // avoiding the need for the defaultTheme import.
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },

  plugins: [],
};
