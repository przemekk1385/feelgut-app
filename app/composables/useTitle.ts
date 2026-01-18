export function useTitle() {
	const siteTitle = "FeelGUT";

	const titleTemplate = (pageTitle: string | undefined): string =>
		pageTitle ? `${pageTitle} :: ${siteTitle}` : siteTitle;

	return { titleTemplate };
}
