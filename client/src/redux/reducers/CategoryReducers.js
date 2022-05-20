export const categoriesListReducer = (state = { categories: [] }, action) => {
	switch (action.type) {
		case 'GET_CATEGORIES_LIST_REQUEST':
			return { ...state, loading: true };
		case 'GET_CATEGORIES_LIST_SUCCESS':
			return { ...state, loading: false, categories: action.payload };
		case 'GET_CATEGORIES_LIST_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

export const categorySpecificationsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_CATEGORY_SPECIFICATIONS_REQUEST':
			return { ...state, loading: true };
		case 'GET_CATEGORY_SPECIFICATIONS_SUCCESS':
			return {
				...state,
				loading: false,
				specificationsOfCategory: action.payload,
			};
		case 'GET_CATEGORY_SPECIFICATIONS_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
