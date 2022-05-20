export const favoriteListReducer = (
	state = { favoriteList: [], success: false },
	action
) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE_LIST_REQUEST':
			return { ...state, loading: true, success: false };
		case 'ADD_TO_FAVORITE_LIST_SUCCESS':
			const newFavorite = action.payload;
			return {
				...state,
				success: true,
				loading: false,
				favoriteList: [...state.favoriteList, newFavorite],
			};
		case 'ADD_TO_FAVORITE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		case 'REMOVE_FROM_FAVORITE_LIST_REQUEST':
			return { ...state, loading: true, success: false };
		case 'REMOVE_FROM_FAVORITE_LIST_SUCCESS':
			const deletedFavoriteId = action.payload;
			return {
				...state,
				loading: false,
				success: true,
				favoriteList: state.favoriteList.filter(
					(favorite) => favorite.favoriteItemId !== deletedFavoriteId
				),
			};
		case 'REMOVE_FROM_FAVORITE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		case 'GET_FAVORITE_LIST_REQUEST':
			return { ...state, loading: true, success: false };
		case 'GET_FAVORITE_LIST_SUCCESS':
			return {
				...state,
				success: false,
				loading: false,
				favoriteList: action.payload,
			};
		case 'GET_FAVORITE_LIST_FAIL':
			return { ...state, loading: false, error: true };

		default:
			return state;
	}
};
