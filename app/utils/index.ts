export const formatOfferItemId = (id: string): string => {
	return id.split(".").splice(1, 1)[0] as string;
};
