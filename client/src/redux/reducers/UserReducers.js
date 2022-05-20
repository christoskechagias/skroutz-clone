//REGISTER REDUCER
export const registerReducer = (state = {}, action) => {
	switch (action.type) {
		case 'REGISTER_REQUEST':
			return { ...state, loading: true };
		case 'REGISTER_SUCCESS':
			return { ...state, loading: false };
		case 'REGISTER_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

//LOGIN REDUCER
export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return { loading: true, success: false };
		case 'LOGIN_SUCCESS':
			return {
				...state,
				loading: false,
				success: true,
				userInfo: action.payload,
			};
		case 'LOGIN_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
export const guestsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TO_GUESTS_REQUEST':
			return { ...state, loading: true, success: false };
		case 'ADD_TO_GUESTS_SUCCESS':
			return {
				...state,
				loading: false,
				success: true,
				userInfo: action.payload,
			};
		case 'ADD_TO_GUESTS_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
export const googleLoginRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GOOGLE_LOGIN_REGISTER_REQUEST':
			return { ...state, loading: true };
		case 'GOOGLE_LOGIN_REGISTER_SUCCESS':
			return {
				...state,
				loading: false,
			};
		case 'GOOGLE_LOGIN_REGISTER_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
export const logoutReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGOUT_REQUEST':
			return { ...state, loading: true };
		case 'LOGOUT_SUCCESS':
			return {
				...state,
				loading: false,
				success: true,
			};
		case 'LOGOUT_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
export const guestReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TO_GUESTS_REQUEST':
			return { ...state, loading: true, success: false };
		case 'ADD_TO_GUESTS_SUCCESS':
			return {
				...state,
				loading: false,
				success: true,
				userInfo: action.payload,
			};
		case 'ADD_TO_GUESTS_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_USER_REQUEST':
			return { ...state, loading: true, success: false };
		case 'GET_USER_SUCCESS':
			return {
				...state,
				loading: false,
				success: true,
				user: action.payload,
			};
		case 'GET_USER_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
