export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		//ADD CART
		case 'ADD_TO_CART_REQUEST':
			return { ...state, loading: true };
		case 'ADD_TO_CART_SUCCESS':
			const newCartItem = action.payload;
			const existItem = state?.cartItems?.find(
				(oldCartItem) =>
					oldCartItem?.product?.productId === newCartItem.product.productId
			);
			if (existItem) {
				return {
					...state,
					loading: false,
					cartItems: state?.cartItems?.map((cartItem) =>
						cartItem?.product?.productId === existItem.product?.productId
							? newCartItem
							: cartItem
					),
				};
			} else {
				return {
					...state,
					loading: false,
					cartItems: [...state.cartItems, newCartItem],
				};
			}
		case 'ADD_TO_CART_FAIL':
			return { ...state, loading: false, error: true };

		//REMOVE CART
		case 'REMOVE_FROM_CART_REQUEST':
			return { ...state, loading: true };
		case 'REMOVE_FROM_CART_SUCCESS':
			const deletedProductId = action.payload;
			return {
				...state,
				laoding: false,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.product.productId != deletedProductId
				),
			};
		case 'REMOVE_FROM_CART_FAIL':
			return { ...state, loading: false, error: true };

		//GET CART
		case 'GET_CART_REQUEST':
			return { ...state, loading: true };
		case 'GET_CART_SUCCESS':
			return { ...state, loading: false, cartItems: action.payload };
		case 'GET_CART_FAIL':
			return { ...state, loading: false, error: true };

		//EMPTY CART
		case 'EMPTY_CART_REQUEST':
			return { ...state, loading: true };
		case 'EMPTY_CART_SUCCESS':
			return { ...state, loading: false, cartItems: [] };
		case 'EMPTY_CART_FAIL':
			return { ...state, loading: false, error: true };

		default:
			return state;
	}
};

export const shippingAddressReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_SHIPPING_ADDRESS_REQUEST':
			return { loading: true };
		case 'ADD_SHIPPING_ADDRESS_SUCCESS':
			return { loading: false, shippingAddress: action.payload };
		case 'ADD_SHIPPING_ADDRESS_FAIL':
			return { loading: false, error: true };
		case 'GET_SHIPPING_ADDRESS_REQUEST':
			return { loading: true };
		case 'GET_SHIPPING_ADDRESS_SUCCESS':
			return { loading: false, shippingAddress: action.payload };
		case 'GET_SHIPPING_ADDRESS_FAIL':
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};
