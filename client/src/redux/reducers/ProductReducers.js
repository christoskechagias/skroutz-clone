export const productsListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS_LIST_REQUEST':
			return { ...state, loading: true };
		case 'GET_PRODUCTS_LIST_SUCCESS':
			return { ...state, loading: false, products: action.payload };
		case 'GET_PRODUCTS_LIST_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_PRODUCT_REQUEST':
			return { ...state, loading: true };
		case 'GET_PRODUCT_SUCCESS':
			return {
				...state,
				loading: false,
				product: action.payload.product,
				variations: action.payload.variations,
				details: action.payload.details,
			};
		case 'GET_PRODUCT_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
export const manyProductsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_MANY_PRODUCTS_REQUEST':
			return { ...state, loading: true };
		case 'GET_MANY_PRODUCTS_SUCCESS':
			return {
				...state,
				loading: false,
				products: action.payload.products,
				details: action.payload.details,
			};
		case 'GET_MANY_PRODUCTS_FAIL':
			return { ...state, loading: false, error: true };

		default:
			return state;
	}
};
