import { takeLatest } from 'redux-saga/effects';
import {
	addToCartHandler,
	removeFromCartHandler,
	getCartHandler,
	emptyCartHandler,
	addShippingAddressHandler,
	getShippingAddressHandler,
} from '../handlers/cartHandlers.js';

export function* addToCartWatcher() {
	yield takeLatest('ADD_TO_CART_REQUEST', addToCartHandler);
}
export function* removeFromCartWatcher() {
	yield takeLatest('REMOVE_FROM_CART_REQUEST', removeFromCartHandler);
}
export function* getCartWatcher() {
	yield takeLatest('GET_CART_REQUEST', getCartHandler);
}
export function* emptyCartWatcher() {
	yield takeLatest('EMPTY_CART_REQUEST', emptyCartHandler);
}
export function* addShippingAddressWatcher() {
	yield takeLatest('ADD_SHIPPING_ADDRESS_REQUEST', addShippingAddressHandler);
}
export function* getShippingAddressWatcher() {
	yield takeLatest('GET_SHIPPING_ADDRESS_REQUEST', getShippingAddressHandler);
}
