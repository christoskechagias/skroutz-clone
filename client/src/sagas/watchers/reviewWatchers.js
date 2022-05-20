import { takeLatest } from 'redux-saga/effects';
import {
	addReviewHandler,
	updateReviewHandler,
	deleteReviewHandler,
	getReviewHandler,
	getUserReviewsListHandler,
	getProductReviewsListHandler,
	addVoteHandler,
	getUserVotesHandler,
} from '../handlers/reviewHandlers';

export function* addReviewWatcher() {
	yield takeLatest('ADD_REVIEW_REQUEST', addReviewHandler);
}
export function* updateReviewWatcher() {
	yield takeLatest('UPDATE_REVIEW_REQUEST', updateReviewHandler);
}
export function* deleteReviewWatcher() {
	yield takeLatest('DELETE_REVIEW_REQUEST', deleteReviewHandler);
}
export function* getReviewWatcher() {
	yield takeLatest('GET_REVIEW_REQUEST', getReviewHandler);
}
export function* getUserReviewsListWatcher() {
	yield takeLatest('GET_USER_REVIEWS_LIST_REQUEST', getUserReviewsListHandler);
}
export function* getProductReviewsListWatcher() {
	yield takeLatest(
		'GET_PRODUCT_REVIEWS_LIST_REQUEST',
		getProductReviewsListHandler
	);
}
export function* addVoteWatcher() {
	yield takeLatest('ADD_VOTE_REQUEST', addVoteHandler);
}

