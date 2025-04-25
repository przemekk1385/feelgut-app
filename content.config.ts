import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    offer: defineCollection({
      source: "offer/**.yml",
      type: "data",
      schema: z.object({
        title: z.string(),
        category: z.string(),
        price: z.object({
          time: z.number(),
          price: z.number(),
        }),
        image: z.string(),
        text: z.string(),
        indications: z.array(z.string()),
        contraindications: z.array(z.string()),
      }),
    }),
  },
});
