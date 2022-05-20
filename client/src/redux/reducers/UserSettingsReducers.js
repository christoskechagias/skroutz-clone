//Avatar
export const avatarReducer = (state = { avatarIcon: '' }, action) => {
	switch (action.type) {
		case 'UPDATE_AVATAR_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_AVATAR_SUCCESS':
			return { ...state, loading: false, avatarIcon: action.payload };
		case 'UPDATE_AVATAR_FAIL':
			return { ...state, loading: false, error: true };
		case 'GET_AVATAR_REQUEST':
			return { ...state, loading: true };
		case 'GET_AVATAR_SUCCESS':
			return { ...state, loading: false, avatarIcon: action.payload };
		case 'GET_AVATAR_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

//Username
export const usernameReducer = (
	state = { username: '', loading: false },
	action
) => {
	switch (action.type) {
		case 'UPDATE_USERNAME_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_USERNAME_SUCCESS':
			return { ...state, loading: false, username: action.payload };
		case 'UPDATE_USERNAME_FAIL':
			return { ...state, loading: false, error: true };
		case 'GET_USERNAME_REQUEST':
			return { ...state, loading: true };
		case 'GET_USERNAME_SUCCESS':
			return { ...state, loading: false, username: action.payload };
		case 'GET_USERNAME_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
//Profile
export const profileReducer = (state = { userProfile: {} }, action) => {
	switch (action.type) {
		case 'UPDATE_PROFILE_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_PROFILE_SUCCESS':
			return {
				...state,
				loading: false,
				userProfile: action.payload,
			};

		case 'UPDATE_PROFILE_FAIL':
			return {
				...state,
				loading: false,
				error: true,
			};
		case 'GET_PROFILE_REQUEST':
			return { ...state, loading: true };
		case 'GET_PROFILE_SUCCESS':
			return {
				...state,
				loading: false,
				userProfile: action.payload,
			};

		case 'GET_PROFILE_FAIL':
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};

//Email
export const emailReducer = (
	state = { userEmail: '', loading: false },
	action
) => {
	switch (action.type) {
		case 'UPDATE_EMAIL_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_EMAIL_SUCCESS':
			return { ...state, loading: false, userEmail: action.payload };
		case 'UPDATE_EMAIL_FAIL':
			return { ...state, loading: false, error: true };
		case 'GET_EMAIL_REQUEST':
			return { ...state, loading: true };
		case 'GET_EMAIL_SUCCESS':
			return { ...state, loading: false, userEmail: action.payload };
		case 'GET_EMAIL_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

//Password
export const passwordReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_PASSWORD_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_PASSWORD_SUCCESS':
			return { ...state, loading: false, success: true };
		case 'UPDATE_PASSWORD_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

//Address
export const addressReducer = (state = { addresses: [] }, action) => {
	switch (action.type) {
		//ADD ADDRESS
		case 'ADD_ADDRESS_REQUEST':
			return { ...state, loading: true };
		case 'ADD_ADDRESS_SUCCESS':
			const newAddress = action.payload.address;
			return {
				...state,
				loading: false,
				addresses: [...state.addresses, newAddress],
			};
		case 'ADD_ADDRESS_FAIL':
			return { ...state, loading: false, error: true };

		//UPDATE ADDRESS
		case 'UPDATE_ADDRESS_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_ADDRESS_SUCCESS':
			const updatedAddress = action.payload.address;
			return {
				...state,
				loading: false,
				addresses: state.addresses.map((item) =>
					item._id === updatedAddress._id ? item : updatedAddress
				),
			};
		case 'UPDATE_ADDRESS_FAIL':
			return { ...state, loading: false, error: true };

		//DELETE ADDRESS
		case 'DELETE_ADDRESS_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_ADDRESS_SUCCESS':
			return {
				...state,
				loading: false,
				addresses: state.addresses.filter((x) => x._id != action.payload),
			};
		case 'DELETE_ADDRESS_FAIL':
			return { ...state, loading: false, error: true };

		//GET ADDRESSES
		case 'GET_ADDRESSES_REQUEST':
			return { ...state, loading: true };
		case 'GET_ADDRESSES_SUCCESS':
			return { ...state, loading: false, addresses: action.payload };
		case 'GET_ADDRESSES_FAIL':
			return { ...state, loading: false, error: true };

		default:
			return state;
	}
};

//DELETE USER REDUCER
export const deleteUserReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case 'DELETE_USER_REQUEST':
			return { loading: true, success: false };
		case 'DELETE_USER_SUCCESS':
			return { loading: false, success: true, message: action.payload };
		case 'DELETE_USER_FAIL':
			return { loading: false, error: action.payload };
		case 'RESET':
			return { message: '', error: false, success: false };
		default:
			return state;
	}
};
