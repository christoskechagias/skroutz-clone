export const getCategoriesListAction = (categoryId) => ({
	type: 'GET_CATEGORIES_LIST_REQUEST',
	payload: categoryId,
});

export const getCategorySpecificationsAction = (categoryId) => ({
	type: 'GET_CATEGORY_SPECIFICATIONS_REQUEST',
	payload: categoryId,
});
