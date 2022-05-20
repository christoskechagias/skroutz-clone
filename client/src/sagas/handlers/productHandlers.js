import { call, put } from 'redux-saga/effects';
import {
	getProductsListRequest,
	getProductRequest,
	addProductRatingRequest,
	updateProductRatingRequest,
	removeProductRatingRequest,
	getManyProductsRequest,
} from '../requests/productRequests.js';
export function* getProductsListHandler(action) {
	try {
		const response = yield call(getProductsListRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_PRODUCTS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_PRODUCTS_LIST_FAIL',
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
export function* getProductHandler(action) {
	try {
		const response = yield call(getProductRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_PRODUCT_SUCCESS',
			payload: {
				product: data.product,
				variations: data.variations,
				details: data.details,
			},
		});
	} catch (error) {
		yield put({
			type: 'GET_PRODUCT_FAIL',
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
export function* getManyProductsHandler(action) {
	try {
		const response = yield call(getManyProductsRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_MANY_PRODUCTS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_MANY_PRODUCTS_FAIL',
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

export function* addProductRatingHandler(action) {
	try {
		const response = yield call(addProductRatingRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_REVIEWS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_REVIEWS_LIST_FAIL',
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
export function* updateProductRatingHandler(action) {
	try {
		const response = yield call(updateProductRatingRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_REVIEWS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_REVIEWS_LIST_FAIL',
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
export function* removeProductRatingHandler(action) {
	try {
		const response = yield call(removeProductRatingRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_REVIEWS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_REVIEWS_LIST_FAIL',
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
