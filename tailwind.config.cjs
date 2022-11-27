/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
    fontFamily: {
      urban: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
