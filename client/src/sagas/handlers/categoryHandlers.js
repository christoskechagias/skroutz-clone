import { call, put } from 'redux-saga/effects';
import {
	getCategorySpecificationsRequest,
	getCategoriesListRequest,
} from '../requests/categoryRequests.js';

export function* getCategoriesListHandler(action) {
	try {
		const response = yield call(getCategoriesListRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_CATEGORIES_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_CATEGORIES_LIST_FAIL',
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

export function* getCategorySpecificationsHandler(action) {
	try {
		const response = yield call(getCategorySpecificationsRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_CATEGORY_SPECIFICATIONS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_CATEGORY_SPECIFICATIONS_FAIL',
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
