const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d0f14",
      },
    },
    fontFamily: {
      display: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      name: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    animation: {
      "move-bg": "gradient 10s ease infinite",
    },
    keyframes: {
      gradient: {
        "0%": { "background-position": "0 50%" },
        "50%": { "background-position": "100% 50%" },
        "100%": { "background-position": "0 50%" },
      },
    },
  },
  plugins: [],
};
