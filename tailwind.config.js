/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forgeDark: "#0c0f17",
        forgeMetal: "#1b2337",
        forgeBlue: "#3b7bff",
        forgeGlow: "rgba(59, 123, 255, 0.4)"
      },
      boxShadow: {
        forgeGlow: "0 0 20px rgba(59,123,255,0.4)"
      },
      fontFamily: {
        forge: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
