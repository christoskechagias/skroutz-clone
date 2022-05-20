//Avatar
export const updateAvatarAction = (avatarIcon) => ({
	type: 'UPDATE_AVATAR_REQUEST',
	payload: avatarIcon,
});
export const getAvatarAction = () => ({
	type: 'GET_AVATAR_REQUEST',
});

//Profile
export const updateProfileAction = (yearOfBirth, sex) => ({
	type: 'UPDATE_PROFILE_REQUEST',
	payload: { yearOfBirth, sex },
});
export const getProfileAction = () => ({
	type: 'GET_PROFILE_REQUEST',
});
//Username
export const updateUsernameAction = (username) => ({
	type: 'UPDATE_USERNAME_REQUEST',
	payload: username,
});
export const getUsernameAction = () => ({
	type: 'GET_USERNAME_REQUEST',
});
//Email
export const updateEmailAction = (email) => ({
	type: 'UPDATE_EMAIL_REQUEST',
	payload: email,
});
export const getEmailAction = () => ({
	type: 'GET_EMAIL_REQUEST',
});

//Password
export const updatePasswordAction = (password) => ({
	type: 'UPDATE_PASSWORD_REQUEST',
	payload: password,
});

//DeleteUser
export const deleteUserAction = () => ({
	type: 'DELETE_USER_REQUEST',
});

//Address
export const addAddressAction = (address) => ({
	type: 'ADD_ADDRESS_REQUEST',
	payload: address,
});

export const updateAddressAction = (address) => ({
	type: 'UPDATE_ADDRESS_REQUEST',
	payload: address,
});

export const deleteAddressAction = (addressId) => ({
	type: 'DELETE_ADDRESS_REQUEST',
	payload: addressId,
});
export const getAddressesAction = () => ({
	type: 'GET_ADDRESSES_REQUEST',
});
