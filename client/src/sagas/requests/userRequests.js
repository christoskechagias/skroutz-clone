import axios from 'axios';

export function registerRequest(action) {
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/user/register',
		data: action.payload,
	});
}
export function loginRequest(action) {
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/user/login',
		data: action.payload,
	});
}
export function addToGuestsRequest(action) {
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/user/guests/add',
	});
}
export function getUserRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

export function googleLoginRegisterRequest(action) {
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/user/googleLoginRegister',
		data: action.payload,
	});
}

//Avatar Request
export function updateAvatarRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;

	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/user/updateAvatar',
		data: { userId: userInfo._id, icon: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getAvatarRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${userInfo._id}/getAvatar`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

//Profile
export function updateProfileRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/user/updateProfile',
		data: {
			userId: userInfo._id,
			yearOfBirth: action.payload.yearOfBirth,
			sex: action.payload.sex,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getProfileRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${userInfo._id}/getProfile`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
//Username
export function updateUsernameRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/user/updateUsername',
		data: { userId: userInfo._id, username: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getUsernameRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${userInfo._id}/getUsername`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
//Email Request
export function updateEmailRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/user/updateEmail',
		data: { userId: userInfo._id, email: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getEmailRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${userInfo._id}/getEmail`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
//Password Request
export function updatePasswordRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/user/updatePassword',
		data: { userId: userInfo._id, password: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

//Delete user
export function deleteUserRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'delete',
		url: `http://localhost:5000/user/${userInfo._id}/delete`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function addAddressRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/user/addressAdd`,
		data: { userId: userInfo._id, address: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function updateAddressRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: `http://localhost:5000/user/addressUpdate`,
		data: { userId: userInfo._id, address: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function deleteAddressRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'delete',
		url: `http://localhost:5000/user/addressDelete`,
		data: { userId: userInfo._id, addressId: action.payload },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getAddressesRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/user/${userInfo._id}/addresses/get`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
