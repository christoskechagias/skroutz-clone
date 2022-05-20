const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
	{
		orderItems: { type: Array, required: true },
		shippingAddress: { type: Object, require: false },
		shippingCost: { type: Number, required: true },
		totalCart: { type: Number, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		paidAt: { type: Date, required: true },
		orderStatus: { type: String, default: 'In progress' },
	},
	{
		timestamps: true,
	}
);
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
