import tailwindcssVariables from "@mertasan/tailwindcss-variables";
import tailwindcssLineClamp from "@tailwindcss/line-clamp";

module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {},

  variants: {
    extend: {},
  },
  plugins: [tailwindcssVariables, tailwindcssLineClamp],
  corePlugins: {
    preflight: false,
  },
};
