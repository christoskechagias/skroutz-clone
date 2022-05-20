import { takeLatest } from 'redux-saga/effects';
import {
	getProductsListHandler,
	getProductHandler,
	addProductRatingHandler,
	updateProductRatingHandler,
	removeProductRatingHandler,
	getManyProductsHandler,
} from '../handlers/productHandlers.js';
export function* getProductsListWatcher() {
	yield takeLatest('GET_PRODUCTS_LIST_REQUEST', getProductsListHandler);
}
export function* getProductWatcher() {
	yield takeLatest('GET_PRODUCT_REQUEST', getProductHandler);
}
export function* getManyProductsWatcher() {
	yield takeLatest('GET_MANY_PRODUCTS_REQUEST', getManyProductsHandler);
}
export function* addProductRatingWatcher() {
	yield takeLatest('ADD_PRODUCT_RATING_REQUEST', addProductRatingHandler);
}
export function* updateProductRatingWatcher() {
	yield takeLatest('UPDATE_PRODUCT_RATING_REQUEST', updateProductRatingHandler);
}
export function* removeProductRatingWatcher() {
	yield takeLatest('REMOVE_PRODUCT_RATING_REQUEST', removeProductRatingHandler);
}
