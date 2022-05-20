import axios from 'axios';

export function addToCartRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/cart/add`,
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
			quantity: action.payload.quantity,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function removeFromCartRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/cart/remove`,
		data: {
			userId: action.payload.userId,
			productId: action.payload.productId,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getCartRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/cart/get/${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function emptyCartRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'delete',
		url: `http://localhost:5000/cart/empty/${action.payload.userId}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function addShippingAddressRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	console.log(action.payload);
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/cart/shippingAddress/add`,
		data: { userId: action.payload.userId, address: action.payload.address },
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getShippingAddressRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/cart/shippingAddress/get/${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
