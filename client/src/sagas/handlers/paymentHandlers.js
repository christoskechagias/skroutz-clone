import { call, put, select } from 'redux-saga/effects';
import { paymentRequest } from '../requests/paymentRequests.js';
export function* paymentHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(paymentRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'PAYMENT_SUCCESS',
			payload: data,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'ALERT_MESSAGE_FAIL',
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
