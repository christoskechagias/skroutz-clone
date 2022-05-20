export const reviewReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case 'ADD_REVIEW_REQUEST':
			return { loading: true, success: false };
		case 'ADD_REVIEW_SUCCESS':
			return { loading: false, success: true };
		case 'ADD_REVIEW_FAIL':
			return { loading: false, error: true };

		case 'UPDATE_REVIEW_REQUEST':
			return { ...state, loading: true, success: false };
		case 'UPDATE_REVIEW_SUCCESS':
			return { ...state, loading: false, success: true };
		case 'UPDATE_REVIEW_FAIL':
			return { ...state, loading: false, error: true };

		case 'DELETE_REVIEW_REQUEST':
			return { ...state, loading: true, success: false };
		case 'DELETE_REVIEW_SUCCESS':
			return { ...state, loading: false, success: true };
		case 'DELETE_REVIEW_FAIL':
			return { ...state, loading: false, error: true };

		case 'GET_REVIEW_REQUEST':
			return { ...state, loading: true };
		case 'GET_REVIEW_SUCCESS':
			return { ...state, loading: false, userReview: action.payload };
		case 'GET_REVIEW_FAIL':
			return { ...state, loading: false, error: true };

		case 'GET_PRODUCT_REVIEWS_REQUEST':
			return { ...state, loading: true };
		case 'GET_PRODUCT_REVIEWS_SUCCESS':
			return { ...state, loading: false, reviews: action.payload };
		case 'GET_PRODUCT_REVIEWS_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

export const userReviewsListReducer = (
	state = { listOfUserReviews: [] },
	action
) => {
	switch (action.type) {
		case 'GET_USER_REVIEWS_LIST_REQUEST':
			return { ...state, loading: true };
		case 'GET_USER_REVIEWS_LIST_SUCCESS':
			return { ...state, loading: false, listOfUserReviews: action.payload };
		case 'GET_USER_REVIEWS_LIST_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
export const productReviewsListReducer = (
	state = { productReviewsList: [] },
	action
) => {
	switch (action.type) {
		case 'GET_PRODUCT_REVIEWS_LIST_REQUEST':
			return { ...state, loading: true };
		case 'GET_PRODUCT_REVIEWS_LIST_SUCCESS':
			return { ...state, loading: false, reviews: action.payload };
		case 'GET_PRODUCT_REVIEWS_LIST_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

//Votes
export const voteReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_VOTE_REQUEST':
			return { loading: true };
		case 'ADD_VOTE_SUCCESS':
			return { loading: false, success: true };
		case 'ADD_VOTE_FAIL':
			return { loading: false, error: true };
		default:
			return state;
	}
};
