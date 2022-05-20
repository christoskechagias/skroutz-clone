import axios from 'axios';

export function getCategoriesListRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/category/${action.payload}/getList`,
	});
}
export function getCategorySpecificationsRequest(action) {
	return axios.request({
		method: 'get',
		url: `http://localhost:5000/category/${action.payload}/getSpecifications`,
	});
}
