export const addToFavoritesAction = (userId, productId) => ({
	type: 'ADD_TO_FAVORITE_LIST_REQUEST',
	payload: { userId, productId },
});

export const removeFromFavoritesAction = (userId, productId) => ({
	type: 'REMOVE_FROM_FAVORITE_LIST_REQUEST',
	payload: { userId, productId },
});

export const getFavoritesAction = (userId) => ({
	type: 'GET_FAVORITE_LIST_REQUEST',
	payload: userId,
});
