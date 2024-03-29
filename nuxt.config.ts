// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "pl",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  formkit: {
    // autoImport: true,
  },
  modules: [
    "@formkit/nuxt",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/tailwindcss",
  ],
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
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
    mailFrom: "",
    mailTo: "",
    postmarkServerToken: "",
  },
});
