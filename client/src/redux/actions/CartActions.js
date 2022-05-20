export const addToCartAction = (userId, productId, quantity) => ({
	type: 'ADD_TO_CART_REQUEST',
	payload: { userId, productId, quantity },
});
export const removeFromCartAction = (userId, productId) => ({
	type: 'REMOVE_FROM_CART_REQUEST',
	payload: { userId, productId },
});

export const getCartAction = (userId) => ({
	type: 'GET_CART_REQUEST',
	payload: userId,
});

export const emptyCartAction = (userId) => ({
	type: 'EMPTY_CART_REQUEST',
	payload: userId,
});

export const addShippingAddressAction = (userId, address) => ({
	type: 'ADD_SHIPPING_ADDRESS_REQUEST',
	payload: { userId, address },
});
export const getShippingAddressAction = (userId) => ({
	type: 'GET_SHIPPING_ADDRESS_REQUEST',
	payload: userId,
});
