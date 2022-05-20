import { call, put, select } from 'redux-saga/effects';
import {
	registerRequest,
	loginRequest,
	deleteUserRequest,
	googleLoginRegisterRequest,
	updateAvatarRequest,
	getAvatarRequest,
	updateProfileRequest,
	getProfileRequest,
	updateEmailRequest,
	getEmailRequest,
	updatePasswordRequest,
	updateUsernameRequest,
	getUsernameRequest,
	addAddressRequest,
	deleteAddressRequest,
	getAddressesRequest,
	updateAddressRequest,
	addToGuestsRequest,
	getUserRequest,
} from '../requests/userRequests';

export function* registerHandler(action) {
	try {
		const response = yield call(registerRequest, action);
		const { data } = response;
		yield put({
			type: 'REGISTER_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'LOGIN_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		yield put({
			type: 'REGISTER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}

export function* loginHandler(action) {
	try {
		const response = yield call(loginRequest, action);
		const { data } = response;
		yield put({
			type: 'LOGIN_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		yield put({
			type: 'LOGIN_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* addToGuestsHandler(action) {
	try {
		const response = yield call(addToGuestsRequest, action);
		const { data } = response;
		yield put({
			type: 'ADD_TO_GUESTS_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'LOGIN_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		yield put({
			type: 'ADD_TO_GUESTS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* googleLoginRegisterHandler(action) {
	try {
		const response = yield call(googleLoginRegisterRequest, action);
		const { data } = response;
		yield put({
			type: 'GOOGLE_LOGIN_REGISTER_SUCCESS',
			payload: data,
		});
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		yield put({
			type: 'GOOGLE_LOGIN_REGISTER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getUserHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getUserRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_USER_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'GET_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* logoutHandler(action) {
	try {
		yield put({
			type: 'LOGOUT_SUCCESS',
		});
		yield localStorage.removeItem('userInfo');
	} catch (error) {
		yield put({
			type: 'LOGOUT_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}

//Avatar Handlers
export function* updateAvatarHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateAvatarRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_AVATAR_SUCCESS',
			payload: data.avatarIcon,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_AVATAR_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getAvatarHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getAvatarRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_AVATAR_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_AVATAR_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
//Profile Handlers
export function* updateProfileHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateProfileRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_PROFILE_SUCCESS',
			payload: data.profile,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_PROFILE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getProfileHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getProfileRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_PROFILE_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_PROFILE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
//Username Handlers
export function* updateUsernameHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateUsernameRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_USERNAME_SUCCESS',
			payload: data.username,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_USERNAME_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getUsernameHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getUsernameRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_USERNAME_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_USERNAME_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
//Email Handlers
export function* updateEmailHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateEmailRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_EMAIL_SUCCESS',
			payload: data.email,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_EMAIL_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getEmailHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getEmailRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_EMAIL_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_EMAIL_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
// Password Handlers
export function* updatePasswordHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updatePasswordRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_PASSWORD_SUCCESS',
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_PASSWORD_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
//Delete user
export function* deleteUserHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(deleteUserRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'DELETE_USER_SUCCESS',
			payload: data.message,
		});
		yield localStorage.removeItem('userInfo');
	} catch (error) {
		yield put({
			type: 'DELETE_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
//Address
export function* addAddressHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addAddressRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'ADD_ADDRESS_SUCCESS',
			payload: { address: action.payload },
		});

		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'ADD_ADDRESS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* updateAddressHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateAddressRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_ADDRESS_SUCCESS',
			payload: { address: action.payload },
		});

		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_ADDRESS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* deleteAddressHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(deleteAddressRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'DELETE_ADDRESS_SUCCESS',
			payload: action.payload,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'DELETE_ADDRESS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
export function* getAddressesHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getAddressesRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_ADDRESSES_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_ADDRESSES_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		yield put({
			type: 'ALERT_MESSAGE_ERROR',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}
