import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { gaMeasurmentId: id },
  } = useRuntimeConfig();

  nuxtApp.vueApp.use(VueGtag, {
    config: { id },
  });
});
