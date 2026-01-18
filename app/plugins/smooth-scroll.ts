import VueSmoothScroll from "vue3-smooth-scroll";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueSmoothScroll, { duration: 1000 });
});
