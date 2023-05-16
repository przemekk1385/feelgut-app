import type { OfferItem } from "~~/types";

export function useOffer() {
  const items: Ref<OfferItem[]> = ref([]);

  const route = useRoute();

  const fetch = async (category?: string): Promise<OfferItem[]> => {
    let where = {};
    if (category) {
      where = { category };
    }

    return (await queryContent("offer").where(where).find()).map(
      ({
        _id,
        title,
        category,
        price,
        image,
        text,
        indications,
        contraindications,
      }) => ({
        id: _id.split(":").slice(-1)[0].split(".")[1],
        title,
        category,
        price,
        image,
        text,
        indications,
        contraindications,
      })
    ) as OfferItem[];
  };

  watch(
    () => route.query,
    async (query) => {
      const { category } = query;
      if (category) {
        items.value = await fetch(category.toString());
      }
    }
  );

  return { fetch, items };
}
