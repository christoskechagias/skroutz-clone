import { call, put, select } from 'redux-saga/effects';
import {
	addReviewRequest,
	updateReviewRequest,
	deleteReviewRequest,
	getReviewRequest,
	getUserReviewsListRequest,
	getProductReviewsListRequest,
	addVoteRequest,
} from '../requests/reviewRequests';

export function* addReviewHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addReviewRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'ADD_REVIEW_SUCCESS',
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'ADD_REVIEW_FAIL',
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
export function* updateReviewHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(updateReviewRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'UPDATE_REVIEW_SUCCESS',
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'UPDATE_REVIEW_FAIL',
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
export function* deleteReviewHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(deleteReviewRequest, action, getState);

		const { data } = response;
		yield put({
			type: 'DELETE_REVIEW_SUCCESS',
		});
		yield put({
			type: 'ALERT_MESSAGE_SUCCESS',
			payload: data.message,
		});
	} catch (error) {
		yield put({
			type: 'DELETE_REVIEW_FAIL',
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

export function* getReviewHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getReviewRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_REVIEW_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_REVIEW_FAIL',
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
export function* getUserReviewsListHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(getUserReviewsListRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'GET_USER_REVIEWS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_USER_REVIEWS_LIST_FAIL',
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
export function* getProductReviewsListHandler(action) {
	try {
		const response = yield call(getProductReviewsListRequest, action);
		const { data } = response;
		yield put({
			type: 'GET_PRODUCT_REVIEWS_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'GET_PRODUCT_REVIEWS_LIST_FAIL',
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

export function* addVoteHandler(action) {
	try {
		const getState = yield select();
		const response = yield call(addVoteRequest, action, getState);
		const { data } = response;
		yield put({
			type: 'ADD_VOTE_SUCCESS',
			payload: data,
		});
	} catch (error) {
		yield put({
			type: 'ADD_VOTE_FAIL',
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
