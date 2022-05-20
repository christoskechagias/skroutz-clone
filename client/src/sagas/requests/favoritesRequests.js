import axios from 'axios';
export function addToFavoritesRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/favorites/add',
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function removeFromFavoritesRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'delete',
		url: 'http://localhost:5000/favorites/delete',
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getFavoritesRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/favorites/get/${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
