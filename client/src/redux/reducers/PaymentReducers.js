export const paymentReducer = (state = {}, action) => {
	switch (action.type) {
		case 'PAYMENT_REQUEST':
			return { loading: true };
		case 'PAYMENT_SUCCESS':
			return { loading: false, success: true };
		case 'PAYMENT_FAIL':
			return { loading: false, error: false };
		case 'PAYMENT_RESET':
			return {};
		default:
			return state;
	}
};
