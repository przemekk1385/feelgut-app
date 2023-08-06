module.exports = {
  attributeGroups: ["$DEFAULT", "$CLASS", "^(v-html)$"],
  tailwindConfig: "./tailwind.config.js",
  plugins: [
    "prettier-plugin-organize-attributes",
    "prettier-plugin-tailwindcss",
  ],
};
