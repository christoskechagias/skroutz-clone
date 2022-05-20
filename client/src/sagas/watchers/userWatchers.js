import { takeLatest } from 'redux-saga/effects';
import {
	registerHandler,
	loginHandler,
	logoutHandler,
	deleteUserHandler,
	googleLoginRegisterHandler,
	updateAvatarHandler,
	getAvatarHandler,
	updateProfileHandler,
	getProfileHandler,
	updateUsernameHandler,
	getUsernameHandler,
	updateEmailHandler,
	getEmailHandler,
	updatePasswordHandler,
	addAddressHandler,
	deleteAddressHandler,
	getAddressesHandler,
	updateAddressHandler,
	addToGuestsHandler,
	getUserHandler,
} from '../handlers/userHandlers';

export function* registerWatcher() {
	yield takeLatest('REGISTER_REQUEST', registerHandler);
}
export function* loginWatcher() {
	yield takeLatest('LOGIN_REQUEST', loginHandler);
}
export function* googleLoginRegisterWatcher() {
	yield takeLatest('GOOGLE_LOGIN_REGISTER_REQUEST', googleLoginRegisterHandler);
}
export function* logoutWatcher() {
	yield takeLatest('LOGOUT_REQUEST', logoutHandler);
}
export function* addToGuestsWatcher() {
	yield takeLatest('ADD_TO_GUESTS_REQUEST', addToGuestsHandler);
}
export function* getUserWatcher() {
	yield takeLatest('GET_USER_REQUEST', getUserHandler);
}
//Avatar
export function* updateAvatarWatcher() {
	yield takeLatest('UPDATE_AVATAR_REQUEST', updateAvatarHandler);
}
export function* getAvatarWatcher() {
	yield takeLatest('GET_AVATAR_REQUEST', getAvatarHandler);
}
//Profile
export function* updateProfileWatcher() {
	yield takeLatest('UPDATE_PROFILE_REQUEST', updateProfileHandler);
}
export function* getProfileWatcher() {
	yield takeLatest('GET_PROFILE_REQUEST', getProfileHandler);
}
//Username
export function* updateUsernameWatcher() {
	yield takeLatest('UPDATE_USERNAME_REQUEST', updateUsernameHandler);
}
export function* getUsernameWatcher() {
	yield takeLatest('GET_USERNAME_REQUEST', getUsernameHandler);
}
//Email
export function* updateEmailWatcher() {
	yield takeLatest('UPDATE_EMAIL_REQUEST', updateEmailHandler);
}
export function* getEmailWatcher() {
	yield takeLatest('GET_EMAIL_REQUEST', getEmailHandler);
}
//Password
export function* updatePasswordWatcher() {
	yield takeLatest('UPDATE_PASSWORD_REQUEST', updatePasswordHandler);
}
//Delete user
export function* deleteUserWatcher() {
	yield takeLatest('DELETE_USER_REQUEST', deleteUserHandler);
}
//Address
export function* addAddressWatcher() {
	yield takeLatest('ADD_ADDRESS_REQUEST', addAddressHandler);
}
export function* updateAddressWatcher() {
	yield takeLatest('UPDATE_ADDRESS_REQUEST', updateAddressHandler);
}
export function* deleteAddressWatcher() {
	yield takeLatest('DELETE_ADDRESS_REQUEST', deleteAddressHandler);
}

export function* getAddressesWatcher() {
	yield takeLatest('GET_ADDRESSES_REQUEST', getAddressesHandler);
}
