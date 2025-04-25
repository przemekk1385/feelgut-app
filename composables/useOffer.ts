import type { OfferItem } from "~~/types";

export function useOffer() {
  const route = useRoute();
  const { data: allItems } = useAsyncData<OfferItem[]>("offer", () =>
    queryCollection("offer").select("id", "title", "category", "image").all(),
  );

  const items = computed(() =>
    allItems.value.filter(
      ({ category }) =>
        !route.query.category || category === route.query.category,
    ),
  );

  const fetch = async (): Promise<void> => {
    const { data } = await useAsyncData("offer", () =>
      queryCollection("offer").select("id", "title", "category", "image").all(),
    );
  };

  return { fetch, items };
}
