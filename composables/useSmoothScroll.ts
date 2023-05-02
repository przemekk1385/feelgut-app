export function useSmoothScroll() {
  const route = useRoute();

  const smoothScroll: any = inject("smoothScroll");
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
          navigateTo({ path: route.path, query: { category } });
          delay(100);
          smoothScroll({
            scrollTo: el,
          });
        }
      }
    }
  );

  return {};
}
