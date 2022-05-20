import axios from 'axios';
export function paymentRequest(action, getState) {
	const {
		userLogin: { userInfo },
	} = getState;
	return axios.request({
		method: 'post',
		url: 'http://localhost:5000/payment/create',
		data: action.payload,
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}
