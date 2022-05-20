export const addToCompareListAction = (userId, productId, categoryId) => ({
	type: 'ADD_TO_COMPARE_LIST_REQUEST',
	payload: { userId, productId, categoryId },
});

export const removeFromCompareListAction = (userId, productId, categoryId) => ({
	type: 'REMOVE_FROM_COMPARE_LIST_REQUEST',
	payload: { userId, productId, categoryId },
});

export const removeAllFromCompareListAction = (userId, categoryId) => ({
	type: 'REMOVE_ALL_FROM_COMPARE_LIST_REQUEST',
	payload: { userId, categoryId },
});

export const getCompareListAction = (userId, categoryId) => ({
	type: 'GET_COMPARE_LIST_REQUEST',
	payload: { userId, categoryId },
});
