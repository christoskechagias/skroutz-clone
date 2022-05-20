export const registerAction = (email, password) => ({
	type: 'REGISTER_REQUEST',
	payload: { email, password },
});
export const loginAction = (email, password) => ({
	type: 'LOGIN_REQUEST',
	payload: { email, password },
});
export const addToGuestsAction = () => ({
	type: 'ADD_TO_GUESTS_REQUEST',
});
export const getUserAction = (userId) => ({
	type: 'GET_USER_REQUEST',
	payload: userId,
});
export const googleLoginRegisterAction = (tokenId) => ({
	type: 'GOOGLE_LOGIN_REGISTER_REQUEST',
	payload: tokenId,
});
export const logoutAction = () => ({
	type: 'LOGOUT_REQUEST',
});
