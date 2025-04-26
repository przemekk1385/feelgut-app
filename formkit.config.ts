// formkit.config.ts
import { pl } from "@formkit/i18n";
import { generateClasses } from "@formkit/themes";

import type { DefaultConfigOptions } from "@formkit/vue";

const config: DefaultConfigOptions = {
	config: {
		classes: generateClasses({
			global: {
				messages: "mt-4",
				message: "text-sm text-red-600",
			},
			form: {
				message:
					"mt-6 rounded-3xl bg-red-600 p-6 text-center text-base font-medium text-white",
			},
			checkbox: {
				input: "size-5 grayscale",
			},
			submit: {
				input:
					"text-dark cursor-pointer rounded-full bg-white px-12 py-2 text-xl font-medium",
				wrapper:
					"from-supernova via-sahara to-mimosa rounded-full bg-linear-to-r p-[2px]",
			},
			text: {
				input:
					"border-dark text-dark w-full rounded-full border px-6 py-4 text-lg font-bold",
			},
			textarea: {
				input:
					"border-dark text-dark rounded-[5%/12.5%] border px-6 py-4 text-lg font-bold",
			},
		}),
	},
	locales: { pl },
	locale: "pl",
};

export default config;
