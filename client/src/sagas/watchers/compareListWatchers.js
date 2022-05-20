import { takeLatest } from 'redux-saga/effects';
import {
	addToCompareListHandler,
	removeFromCompareListHandler,
	removeAllFromCompareListHandler,
	getCompareListHandler,
} from '../handlers/compareListHandlers.js';
export function* addToCompareListWatcher() {
	yield takeLatest('ADD_TO_COMPARE_LIST_REQUEST', addToCompareListHandler);
}
export function* removeFromCompareListWatcher() {
	yield takeLatest(
		'REMOVE_FROM_COMPARE_LIST_REQUEST',
		removeFromCompareListHandler
	);
}
export function* removeAllFromCompareListWatcher() {
	yield takeLatest(
		'REMOVE_ALL_FROM_COMPARE_LIST_REQUEST',
		removeAllFromCompareListHandler
	);
}
export function* getCompareListWatcher() {
	yield takeLatest('GET_COMPARE_LIST_REQUEST', getCompareListHandler);
}
