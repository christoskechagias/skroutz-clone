const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	cartItems: [
		{
			product: {
				productId: { type: String, required: false },
				productName: { type: String, required: false },
				productPrice: { type: String, required: false },
				productImage: { type: String, required: false },
			},
			quantity: { type: Number, required: false },
		},
	],
	shippingAddress: {
		id: { type: String, required: false, default: 'new' },
		name: { type: String, required: false },
		surname: { type: String, required: false },
		street: { type: String, required: false },
		streetNumber: { type: String, required: false },
		city: { type: String, required: false },
		postalCode: { type: String, required: false },
		phone: { type: String, required: false },
		mobile: { type: String, required: false },
		notes: { type: String, required: false },
	},
});
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
