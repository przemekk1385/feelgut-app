module.exports = {
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["tailwindcss", "vue"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
