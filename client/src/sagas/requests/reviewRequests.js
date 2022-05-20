import axios from 'axios';
export function addReviewRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/review/add',
		data: {
			userId: userInfo._id,
			productId: action.payload.productId,
			rating: action.payload.rating,
			review: action.payload.review,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function updateReviewRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'put',
		url: 'http://localhost:5000/review/update',
		data: {
			rating: action.payload.rating,
			reviewId: action.payload.reviewId,
			review: action.payload.review,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function deleteReviewRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'delete',
		url: `http://localhost:5000/review/delete${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

export function getReviewRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/review/get/${action.payload}`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getUserReviewsListRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/review/${userInfo._id}/getUserReviewsList`,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
export function getProductReviewsListRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/review/get/product/${action.payload}`,
	});
}
export function addVoteRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: `http://localhost:5000/review/addVote`,
		data: {
			userId: userInfo._id,
			reviewId: action.payload.reviewId,
			vote: action.payload.vote,
		},
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
