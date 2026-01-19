export function useOffer() {
	const route = useRoute();
	const { data: allItems } = useAsyncData("offer", () =>
		queryCollection("offer").all(),
	);

	const items = computed(
		() =>
			allItems.value?.filter(
				({ category }) =>
					!route.query.category || category === route.query.category,
			) || [],
	);

	return { items };
}
