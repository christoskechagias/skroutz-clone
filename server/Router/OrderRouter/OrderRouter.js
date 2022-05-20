const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Order = require('../../Model/OrderModel.js');
const { isAuth } = require('../../utils.js');
const OrderRouter = express.Router();

OrderRouter.post(
	'/create',
	expressAsyncHandler(async (req, res) => {
		const order = new Order({
			orderItems: req.body.cartItems,
			shippingAddress: req.body.shippingAddress,
			shippingCost: req.body.shippingCost,
			totalCart: req.body.totalCart,
			user: req.body.userInfo._id,
			isPaid: true,
			paidAt: Date.now(),
		});
		const createdOrder = await order.save();
		res.status(201).send({ message: 'New Order Created', order: createdOrder });
	})
);
OrderRouter.get(
	'/all/:userId',
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find({ user: req.params.userId });
		res.send(orders);
	})
);
OrderRouter.get(
	'/specific/:orderId',
	expressAsyncHandler(async (req, res) => {
		const order = await Order.find({ _id: req.params.orderId });
		res.send(order[0]);
	})
);
module.exports = OrderRouter;
