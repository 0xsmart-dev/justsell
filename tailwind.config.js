module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
      keyframes: {
        down: {
          "0%": { top: "-100%", opacity: "0" },
          "100%": { top: "0", opacity: "100" },
        },
        up: {
          "0%": { top: "0", opacity: "100" },
          "100%": { top: "-100%", opacity: "0" },
        },
        fadeIn: {
          "0%": { scale: "0.8", opacity: "0" },
          "100%": { scale: "1", opacity: "100" },
        },
        fadeOut: {
          "0%": { scale: "1", opacity: "100" },
          "100%": { scale: "0.8", opacity: "0" },
        },
      },
      animation: {
        down: "down 0.3s ease-in-out",
        up: "up 0.3s ease-in-out",
        fadeIn: "fadeIn 0.2s ease-in-out",
        fadeOut: "fadeOut 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
