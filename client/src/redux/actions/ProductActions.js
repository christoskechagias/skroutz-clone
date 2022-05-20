export const getProductsListAction = (categoryId) => ({
	type: 'GET_PRODUCTS_LIST_REQUEST',
	payload: categoryId,
});
export const getProductAction = (productId) => ({
	type: 'GET_PRODUCT_REQUEST',
	payload: productId,
});
export const getManyProductsAction = (productsId) => ({
	type: 'GET_MANY_PRODUCTS_REQUEST',
	payload: productsId,
});

//Rating
export const addProductRatingAction = (productId, rating) => ({
	type: 'ADD_PRODUCT_RATING_REQUEST',
	payload: { productId, rating },
});
export const updateProductRatingAction = (productId, oldRating, rating) => ({
	type: 'UPDATE_PRODUCT_RATING_REQUEST',
	payload: { productId, oldRating, rating },
});
export const removeProductRatingAction = (productId, rating) => ({
	type: 'REMOVE_PRODUCT_RATING_REQUEST',
	payload: { productId, rating },
});
