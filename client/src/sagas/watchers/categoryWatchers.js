import { takeLatest } from 'redux-saga/effects';
import {
	getCategoriesListHandler,
	getCategorySpecificationsHandler,
} from '../handlers/categoryHandlers.js';

export function* getCategoriesListWatcher() {
	yield takeLatest('GET_CATEGORIES_LIST_REQUEST', getCategoriesListHandler);
}
export function* getCategorySpecifiactionsWatcher() {
	yield takeLatest(
		'GET_CATEGORY_SPECIFICATIONS_REQUEST',
		getCategorySpecificationsHandler
	);
}
