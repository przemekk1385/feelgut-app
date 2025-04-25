import type { OfferItem } from "~~/types";

export function useOffer() {
	const route = useRoute();
	const { data: allItems } = useAsyncData<OfferItem[]>("offer", () =>
		queryCollection("offer").all(),
	);

	const items = computed(() =>
		allItems.value
			.filter(
				({ category }) =>
					!route.query.category || category === route.query.category,
			)
			.map((item) => {
				const { id } = item;
				return {
					...item,
					id: id.split(".").splice(1, 1)[0],
				};
			}),
	);

	return { items };
}
