/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        permanentMarker: ["Permanent Marker", "sans-serif"],
        rubikDoodleShadow: ["Rubik Doodle Shadow", "serif"],
      },
    },
  },
  plugins: [],
};
