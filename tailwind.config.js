/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF3811",
        gray: "#444444",
        "light-gray": "#737373",
        "light-gray-2": " #E8E8E8",
        "key-dark": "#151515",
      },
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui")],
};
