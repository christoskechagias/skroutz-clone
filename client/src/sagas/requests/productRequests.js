import axios from 'axios';
export function getProductsListRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/product/getList/${action.payload}`,
	});
}
export function getProductRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/product/${action.payload}/get`,
	});
}
export function getManyProductsRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/product/getMany/${action.payload}`,
	});
}

export function addProductRatingRequest(action) {
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/product/rating/add`,
		data: {
			productId: action.payload.productId,
			rating: action.payload.rating,
		},
	});
}
export function updateProductRatingRequest(action) {
	return axios.request({
		method: 'put',
		url: `http://localhost:5000/product/rating/update`,
		data: {
			productId: action.payload.productId,
			rating: action.payload.rating,
			oldRating: action.payload.oldRating,
		},
	});
}
export function removeProductRatingRequest(action) {
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/product/rating/remove',
		data: {
			productId: action.payload.productId,
			rating: action.payload.rating,
		},
	});
}
