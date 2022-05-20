import { takeLatest } from 'redux-saga/effects';
import {
	addToFavoritesHandler,
	removeFromFavoritesHandler,
	getFavoritesHandler,
} from '../handlers/favoritesHandlers.js';

export function* addToFavoritesWatcher() {
	yield takeLatest('ADD_TO_FAVORITE_LIST_REQUEST', addToFavoritesHandler);
}
export function* removeFromFavoritesWatcher() {
	yield takeLatest(
		'REMOVE_FROM_FAVORITE_LIST_REQUEST',
		removeFromFavoritesHandler
	);
}
export function* getFavoritesWatcher() {
	yield takeLatest('GET_FAVORITE_LIST_REQUEST', getFavoritesHandler);
}
