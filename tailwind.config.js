/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0056DF", // Blue
        secondary: "#202020", // Dark Gray for cards
        danger: "#EF4444",
        success: "#10B981",
        background: "#F5F5F5",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      }
    },
  },
  plugins: [],
}
