import { takeLatest } from 'redux-saga/effects';
import { paymentHandler } from '../handlers/paymentHandlers.js';

export function* paymentWatcher() {
	yield takeLatest('PAYMENT_REQUEST', paymentHandler);
}
