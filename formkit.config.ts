// formkit.config.ts
import { pl } from "@formkit/i18n";
import { generateClasses } from "@formkit/themes";
import { DefaultConfigOptions } from "@formkit/vue";

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
        input: "size-5 border-myGray grayscale",
      },
      submit: {
        input: "rounded-full bg-white px-12 py-2 text-xl font-medium text-dark",
        wrapper:
          "rounded-full bg-linear-to-r from-supernova via-sahara to-mimosa p-[2px]",
      },
      text: {
        input:
          "w-full rounded-full border border-dark px-6 py-4 text-lg font-bold text-dark",
      },
      textarea: {
        input:
          "rounded-[5%/12.5%] border border-dark px-6 py-4 text-lg font-bold text-dark",
      },
    }),
  },
  locales: { pl },
  locale: "pl",
};

export default config;
