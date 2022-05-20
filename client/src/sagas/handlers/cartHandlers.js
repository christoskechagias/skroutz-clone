import { call, put, select } from 'redux-saga/effects';
import {
	addToCartRequest,
	removeFromCartRequest,
	getCartRequest,
	emptyCartRequest,
	addShippingAddressRequest,
	getShippingAddressRequest,
} from '../requests/cartRequests';

export function* addToCartHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addToCartRequest, action, getState);
		const { data } = response;

		yield put({
			type: 'ADD_TO_CART_SUCCESS',
			payload: { product: data.product, quantity: data.quantity },
		});
	} catch (error) {
		yield put({
			type: 'ADD_TO_CART_FAIL',
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
export function* removeFromCartHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(removeFromCartRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'REMOVE_FROM_CART_SUCCESS',
			payload: data.productId,
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'REMOVE_FROM_CART_FAIL',
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
export function* getCartHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getCartRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_CART_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_CART_FAIL',
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
export function* emptyCartHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(emptyCartRequest, action, getState);
		const { data } = response;

		yield put({
			type: 'EMPTY_CART_SUCCESS',
		});
	} catch (error) {
		yield put({
			type: 'EMPTY_CART_FAIL',
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
export function* addShippingAddressHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addShippingAddressRequest, action, getState);
		const { data } = response;

		yield put({
			type: 'ADD_SHIPPING_ADDRESS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'ADD_SHIPPING_ADDRESS_FAIL',
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
export function* getShippingAddressHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getShippingAddressRequest, action, getState);
		const { data } = response;
		console.log(data);
		yield put({
			type: 'GET_SHIPPING_ADDRESS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_SHIPPING_ADDRESS_FAIL',
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
