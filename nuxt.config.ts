// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@formkit/nuxt", "@nuxt/content", "@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      gaMeasurmentId: "", // Google Analytics
      reCaptchaSiteKey: "",
    },
    reCaptchaSecretKey: "",
    mailPassword: "",
    mailPort: 587,
    mailServer: "",
    mailTo: "",
    mailUsername: "",
  },
  tailwindcss: {
    // options
  },
});
