import type { Massage } from "~~/types";

export function useOffer() {
  const route = useRoute();
  const items: Ref<Massage[]> = ref([]);

  const fetch = async (category?: string): Promise<void> => {
    let where = {};
    if (category) {
      where = { category };
    }

    items.value = (await queryContent("offer").where(where).find()).map(
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
    ) as Massage[];
  };

  watch(
    () => route.query,
    async (query) => {
      const { category } = query;
      if (category) {
        fetch(category.toString());
      }
    }
  );

  return { fetch, items };
}
