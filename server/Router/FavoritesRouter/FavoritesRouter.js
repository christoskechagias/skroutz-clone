const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../../utils.js');
const Favorites = require('../../Model/FavoritesModel.js');
const Product = require('../../Model/ProductModel.js');

const FavoritesRouter = express.Router();

FavoritesRouter.post(
	'/add',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById({ _id: req.body.productId });
		const favorites = await Favorites.findOne({ userId: req.body.userId });
		if (favorites) {
			favorites.favoriteList.push({
				favoriteItemId: product._id,
				favoriteItemPrice: product.price,
				favoriteItemName: product.name,
				favoriteItemImage: product.images.main,
			});
			await favorites.save();
			res.send({
				favoriteItem: {
					favoriteItemId: product._id,
					favoriteItemPrice: product.price,
					favoriteItemName: product.name,
					favoriteItemImage: product.images.main,
				},
				message: `Added to favorites product with id ${req.body.productId}`,
			});
		} else {
			const newFavoriteList = await new Favorites({
				userId: req.body.userId,
				favoriteList: [
					{
						favoriteItemId: product._id,
						favoriteItemPrice: product.price,
						favoriteItemName: product.name,
						favoriteItemImage: product.images.main,
					},
				],
			});
			await newFavoriteList.save();
			res.send({
				favoriteItem: {
					favoriteItemId: product._id,
					favoriteItemPrice: product.price,
					favoriteItemName: product.name,
					favoriteItemImage: product.images.main,
				},
				message: `Added to favorites product with id ${req.body.productId}`,
			});
		}
	})
);

FavoritesRouter.delete(
	'/delete',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await Favorites.findOneAndUpdate(
			{ userId: req.body.userId },
			{ $pull: { favoriteList: { favoriteItemId: req.body.productId } } },
			function (error, success) {
				if (success) {
					res.send({
						message: `Removed from favorites product with id ${req.body.productId}`,
					});
				} else if (error) {
					res.status(404).send({
						message: `Can not remove from favorites list`,
					});
				}
			}
		);
	})
);
FavoritesRouter.get(
	'/get/:userId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const favorites = await Favorites.findOne({ userId: req.params.userId });
		if (favorites) {
			res.send(favorites.favoriteList);
		}
	})
);

module.exports = FavoritesRouter;
