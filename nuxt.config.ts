import tailwindcss from "@tailwindcss/vite";

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
	gtag: {
		config: {
			initCommands: [
				"consent",
				"default",
				{
					analytics_storage: "granted",
					wait_for_update: 500,
				},
			],
		},
	},
	modules: [
		"@nuxtjs/robots",
		"@nuxt/content",
		"@nuxtjs/turnstile",
		"@formkit/nuxt",
		"nuxt-gtag",
	],
	nitro: {
		compressPublicAssets: {
			brotli: true,
		},
	},
	runtimeConfig: {
		public: {
			gaMeasurmentId: "", // Google Analytics
		},
		awsDefaultRegion: "",
		awsRoleArn: "",
		mailFrom: "",
		mailTo: "",
		turnstile: {
			secretKey: "",
		},
	},
	turnstile: {
		addValidateEndpoint: true,
		siteKey: "",
	},
	compatibilityDate: "2025-02-03",
	devtools: { enabled: true },
	vite: {
		plugins: [tailwindcss()],
	},
});
