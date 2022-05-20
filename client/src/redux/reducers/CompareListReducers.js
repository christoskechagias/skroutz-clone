export const compareReducer = (state = { compareList: [] }, action) => {
	switch (action.type) {
		//ADD TO COMPARE
		case 'ADD_TO_COMPARE_LIST_REQUEST':
			return { ...state, loading: true };
		case 'ADD_TO_COMPARE_LIST_SUCCESS':
			const newCompareItem = action.payload;
			return {
				...state,
				loading: false,
				compareList: [...state.compareList, newCompareItem],
			};
		case 'ADD_TO_COMPARE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		//REMOVE FROM COMPARE
		case 'REMOVE_FROM_COMPARE_LIST_REQUEST':
			return { ...state, loading: true, success: false };
		case 'REMOVE_FROM_COMPARE_LIST_SUCCESS':
			const deletedCompareItemId = action.payload;
			return {
				...state,
				laoding: false,
				success: true,
				compareList: state.compareList.filter(
					(compareItemId) => compareItemId !== deletedCompareItemId
				),
			};
		case 'REMOVE_FROM_COMPARE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		//REMOVE ALL FROM COMPARE
		case 'REMOVE_ALL_FROM_COMPARE_LIST_REQUEST':
			return { loading: true };
		case 'REMOVE_ALL_FROM_COMPARE_LIST_SUCCESS':
			return { loading: false, compareList: [] };
		case 'REMOVE_ALL_FROM_COMPARE_LIST_FAIL':
			return { loading: false, error: true };

		//GET COMPARE
		case 'GET_COMPARE_LIST_REQUEST':
			return { ...state, loading: true };
		case 'GET_COMPARE_LIST_SUCCESS':
			return { ...state, loading: false, compareList: action.payload };
		case 'GET_COMPARE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		default:
			return state;
	}
};
