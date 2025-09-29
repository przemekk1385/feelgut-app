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
	modules: [
		"@nuxtjs/robots",
		"@nuxt/content",
		"@nuxtjs/turnstile",
		"@formkit/nuxt",
	],
	nitro: {
		compressPublicAssets: {
			brotli: true,
		},
		routeRules: {
			"/**": {
				headers: {
					// https://csp-evaluator.withgoogle.com
					"Content-Security-Policy": [
						"connect-src 'self' www.googletagmanager.com www.google.com;",
						"frame-src https://challenges.cloudflare.com;",
						"img-src 'self' www.googletagmanager.com;",
						"script-src 'unsafe-inline' 'self' blob: https://challenges.cloudflare.com https://www.googletagmanager.com;",
						"object-src 'none';",
					].join(" "),
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			gtmId: "", // Google Analytics
		},
		awsDefaultRegion: "",
		awsRoleArn: "",
		mailSource: "",
		mailSubject: "",
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
