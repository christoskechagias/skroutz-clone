const express = require('express');
const User = require('../../Model/UserModel.js');
const Cart = require('../../Model/CartModel.js');
const Product = require('../../Model/ProductModel.js');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../../utils.js');
const CartRouter = express.Router();
//CART ADD
CartRouter.post(
	'/add',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const cart = await Cart.findOne({
			userId: req.body.userId,
		});
		const product = await Product.findOne({ _id: req.body.productId });
		if (cart) {
			const existingCartItem = cart.cartItems.find(
				(cartItem) => cartItem.product.productId === req.body.productId
			);
			if (existingCartItem) {
				existingCartItem.quantity = req.body.quantity;
			} else {
				cart.cartItems.push({
					product: {
						productId: product._id,
						productName: product.displayName,
						productPrice: product.price,
						productImage: product.images.main,
					},
					quantity: req.body.quantity,
				});
			}
			cart.save();
		} else {
			const newCart = await new Cart({
				userId: req.body.userId,
				cartItems: [
					{
						product: {
							productId: product._id,
							productName: product.displayName,
							productPrice: product.price,
							productImage: product.images.main,
						},
						quantity: req.body.quantity,
					},
				],
			});
			newCart.save();
		}
		res.send({
			product: {
				productId: product._id,
				productName: product.displayName,
				productPrice: product.price,
				productImage: product.images.main,
			},
			quantity: req.body.quantity,
		});
	})
);
CartRouter.post(
	'/remove',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await Cart.findOneAndUpdate(
			{ userId: req.body.userId },
			{ $pull: { cartItems: { 'product.productId': req.body.productId } } },
			function (error, success) {
				if (success) {
					res.status(200).send({
						productId: req.body.productId,
						message: 'Product removed',
					});
				} else if (error) {
					res.status(404).send({ message: 'Product not removed' });
				}
			}
		);
	})
);
CartRouter.get(
	'/get/:userId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const cart = await Cart.findOne({ userId: req.params.userId });
		if (cart) {
			res.send(cart.cartItems);
		}
	})
);
CartRouter.delete(
	'/empty',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await Cart.findOneAndDelete({ userId: req.body.userId });
		res.send({ message: 'Empty Cart' });
	})
);
CartRouter.post(
	'/shippingAddress/add',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await Cart.findOneAndUpdate(
			{ userId: req.body.userId },
			{
				$set: {
					shippingAddress: {
						id: req.body.address.id,
						name: req.body.address.name,
						surname: req.body.address.surname,
						street: req.body.address.street,
						streetNumber: req.body.address.streetNumber,
						city: req.body.address.city,
						postalCode: req.body.address.postalCode,
						phone: req.body.address.phone,
						mobile: req.body.address.mobile,
						notes: req.body.address.notes,
					},
				},
			},
			function (success, error) {
				if (success) {
					res.send(address);
				} else if (error) {
					res.send({ message: 'new shipping address not added' });
				}
			}
		);
	})
);
CartRouter.get(
	'/shippingAddress/get/:userId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const cart = await Cart.findOne({ userId: req.params.userId });
		if (cart) {
			res.status(200).send(cart.shippingAddress);
		}
	})
);
module.exports = CartRouter;
