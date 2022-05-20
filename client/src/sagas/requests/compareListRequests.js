import axios from 'axios';
export function addToCompareListRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/compareList/add',
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
			categoryId: action.payload.categoryId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function removeFromCompareListRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/compareList/deleteOne',
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
			categoryId: action.payload.categoryId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function removeAllFromCompareListRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/compareList/deleteAll',
		data: {
			userId: action.payload.userId,
			categoryId: action.payload.categoryId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

export function getCompareListRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/compareList/${action.payload.userId}/${action.payload.categoryId}/get`,
		data: action.payload,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
