//Reviews
export const addReviewAction = (productId, rating, review) => ({
	type: 'ADD_REVIEW_REQUEST',
	payload: { productId, rating, review },
});

export const updateReviewAction = (reviewId, rating, review) => ({
	type: 'UPDATE_REVIEW_REQUEST',
	payload: { reviewId, rating, review },
});
export const deleteReviewAction = (reviewId) => ({
	type: 'DELETE_REVIEW_REQUEST',
	payload: reviewId,
});

export const getReviewAction = (reviewId) => ({
	type: 'GET_REVIEW_REQUEST',
	payload: reviewId,
});

export const getUserReviewsListAction = () => ({
	type: 'GET_USER_REVIEWS_LIST_REQUEST',
});
export const getProductReviewsListAction = (productId) => ({
	type: 'GET_PRODUCT_REVIEWS_LIST_REQUEST',
	payload: productId,
});

//VOTES
export const addVoteAction = (reviewId, vote) => ({
	type: 'ADD_VOTE_REQUEST',
	payload: { reviewId, vote },
});