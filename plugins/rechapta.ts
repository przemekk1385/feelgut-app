import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
	const {
		public: { reCaptchaSiteKey: siteKey },
	} = useRuntimeConfig();

	nuxtApp.vueApp.use(VueReCaptcha, { siteKey, loaderOptions: {} });
});
