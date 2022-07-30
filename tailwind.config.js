/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {

        "primary": "red",

        "secondary": "#D926A9",

        "left": "#b563f4",

        "right": "#6350f2",

        "base-100": "linear-gradient(90deg, rgba(51,96,162,1) 0%, rgba(24,24,148,1) 25%, rgba(26,22,56,1) 100%)",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
}
