export function useSmoothScroll() {
	const route = useRoute();
	const router = useRouter();

	const delay = (timeout: number): Promise<void> =>
		new Promise((resolve) => setTimeout(resolve, timeout));

	watch(
		() => route.query,
		async (query) => {
			const { goto, category } = query;
			if (goto) {
				await delay(400);

				const el: HTMLElement | null = document.querySelector(`[id="${goto}"]`);
				if (el) {
					await router.push({
						path: route.path,
						query: { category },
						hash: `#${goto}`,
					});
				}
			}
		},
	);

	return {};
}
