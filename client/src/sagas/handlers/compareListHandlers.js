import { call, put, select } from 'redux-saga/effects';
import {
	addToCompareListRequest,
	removeFromCompareListRequest,
	removeAllFromCompareListRequest,
	getCompareListRequest,
} from '../requests/compareListRequests';

export function* addToCompareListHandler(action) {
	try {
		const getState = yield select();
		console.log(getState);
		const response = yield call(addToCompareListRequest, action, getState);
		const { data } = response;

		yield put({
			type: 'ADD_TO_COMPARE_LIST_SUCCESS',
			payload: action.payload.productId,
		});
		yield put({
			type: 'ALERT_COMPARE_MESSAGE_SUCCESS',
			payload: {
				successRemove: false,
				successAdd: true,
				compareItemId: action.payload.productId,
			},
		});
	} catch (error) {
		yield put({
			type: 'ADD_TO_COMPARE_LIST_FAIL',
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

export function* removeFromCompareListHandler(action) {
	try {
		const getState = yield select();
		yield call(removeFromCompareListRequest, action, getState);
		yield put({
			type: 'REMOVE_FROM_COMPARE_LIST_SUCCESS',
			payload: action.payload.productId,
		});
		yield put({
			type: 'ALERT_COMPARE_MESSAGE_SUCCESS',
			payload: {
				successRemove: true,
				successAdd: false,
				compareItemId: action.payload.productId,
			},
		});
	} catch (error) {
		yield put({
			type: 'REMOVE_FROM_COMPARE_LIST_FAIL',
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

export function* removeAllFromCompareListHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(
			removeAllFromCompareListRequest,
			action,
			getState
		);
		const { data } = response;
		yield put({
			type: 'REMOVE_ALL_FROM_COMPARE_LIST_SUCCESS',
			payload: [],
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'REMOVE_ALL_FROM_COMPARE_LIST_FAIL',
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

export function* getCompareListHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getCompareListRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_COMPARE_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_COMPARE_LIST_FAIL',
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
