export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ORDER_CREATE_REQUEST':
			return { loading: true };
		case 'ORDER_CREATE_SUCCESS':
			return {
				loading: false,
				success: true,
				message: action.payload.message,
				order: action.payload.order,
			};
		case 'ORDER_CREATE_FAIL':
			return { loading: false, error: action.payload };
		case 'ORDER_CREATE_RESET':
			return {};
		default:
			return state;
	}
};

export const getOrdersReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_ORDERS_REQUEST':
			return { loading: true };
		case 'GET_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'GET_ORDERS_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
export const getSpecificOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_SPECIFIC_ORDER_REQUEST':
			return { loading: true };
		case 'GET_SPECIFIC_ORDER_SUCCESS':
			return {
				loading: false,
				order: action.payload,
			};
		case 'GET_SPECIFIC_ORDER_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
