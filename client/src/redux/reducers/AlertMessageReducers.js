export const alertMessageReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ALERT_MESSAGE_SUCCESS':
			return { success: true, message: action.payload };
		case 'ALERT_MESSAGE_ERROR':
			return { error: true, message: action.payload };
		case 'RESET_ALERT_MESSAGE':
			return {};
		default:
			return state;
	}
};
export const alertCompareMessageReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ALERT_COMPARE_MESSAGE_SUCCESS':
			return {
				successAdd: action.payload.successAdd,
				successRemove: action.payload.successRemove,
				compareItemId: action.payload.compareItemId,
			};
		case 'ALERT_COMPARE_MESSAGE_SUCCESS':

		case 'RESET_COMPARE_ALERT_MESSAGE':
			return {};
		default:
			return state;
	}
};
