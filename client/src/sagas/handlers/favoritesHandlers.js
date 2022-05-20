import { call, put, select } from 'redux-saga/effects';
import {
	addToFavoritesRequest,
	removeFromFavoritesRequest,
	getFavoritesRequest,
} from '../requests/favoritesRequests.js';

export function* addToFavoritesHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addToFavoritesRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'ADD_TO_FAVORITE_LIST_SUCCESS',
			payload: data.favoriteItem,
		});
	} catch (error) {
		yield put({
			type: 'ADD_TO_FAVORITE_LIST_FAIL',
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
export function* removeFromFavoritesHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(removeFromFavoritesRequest, action, getState);
		const { data } = response;

		yield put({
			type: 'REMOVE_FROM_FAVORITE_LIST_SUCCESS',
			payload: action.payload.productId,
		});
	} catch (error) {
		yield put({
			type: 'REMOVE_FROM_FAVORITE_LIST_FAIL',
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
export function* getFavoritesHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getFavoritesRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_FAVORITE_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_FAVORITE_LIST_FAIL',
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
