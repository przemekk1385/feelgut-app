export function useTitle() {
  const siteTitle = "FeelGUT";

  const titleTemplate = (pageTitle: string): string =>
    pageTitle ? `${pageTitle} :: ${siteTitle}` : siteTitle;

  return { titleTemplate };
}
