export const createOrderAction = (
	userInfo,
	totalCart,
	cartItems,
	shippingCost,
	shippingAddress
) => ({
	type: 'ORDER_CREATE_REQUEST',
});

export const getOrdersAction = (userId) => ({
	type: 'GET_ORDERS_REQUEST',
});

export const getSpecificOrderAction = (orderId) => ({
	type: 'GET_SPECIFIC_ORDER_REQUEST',
});
