const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const productList = require('./productList.js');
const productDetailsList = require('./productDetailsList.js');
const Product = require('../../Model/ProductModel.js');
const ProductDetails = require('../../Model/ProductDetailsModel.js');
const ProductRouter = express.Router();

ProductRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		await Product.deleteMany({});
		const products = productList.products.map((product) => ({
			...product,
		}));
		await Product.insertMany(products);
		res.send('ok');
	})
);
ProductRouter.get(
	'/details/seed',
	expressAsyncHandler(async (req, res) => {
		await ProductDetails.deleteMany({});
		const productDetails = productDetailsList.productDetails.map((product) => ({
			...product,
		}));
		await ProductDetails.insertMany(productDetails);
		res.send('ok');
	})
);

ProductRouter.get(
	'/getList/:categoryId',
	expressAsyncHandler(async (req, res) => {
		const productList = await Product.find({
			categoryId: req.params.categoryId,
		});
		res.send(productList);
	})
);

ProductRouter.get(
	'/:productId/get',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find();

		const product = products.find(
			(product) => product._id == req.params.productId
		);
		const variationsList = products.filter(
			(item) => item.familyId == product.familyId
		);
		const details = await ProductDetails.findOne({
			id: product.detailsId,
		});
		const variations = variationsList.map((item) => {
			return {
				variationId: item._id,
				variationName: item.displayName,
				variationPrice: item.price,
				variationImage: item.images.main,
			};
		});
		res.send({ product, variations, details });
	})
);
ProductRouter.get(
	'/getMany/:productsId',
	expressAsyncHandler(async (req, res) => {
		const productsId = req.params.productsId.split(',');
		const products = await Product.find({
			_id: { $in: [...productsId] },
		});
		const detailsId = [];
		products.forEach((product) => {
			detailsId.push(product.detailsId);
		});
		const details = await ProductDetails.find({
			id: { $in: [...detailsId] },
		});
		res.send({ products, details });
	})
);

ProductRouter.post(
	'/rating/add',
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById({ _id: req.body.productId });

		product.numberOfReviews = product.numberOfReviews + 1;

		if (req.body.rating === 1) {
			product.stars.oneStar = product.stars.oneStar + 1;
		} else if (req.body.rating === 2) {
			product.stars.twoStar = product.stars.twoStar + 1;
		} else if (req.body.rating === 3) {
			product.stars.threeStar = product.stars.threeStar + 1;
		} else if (req.body.rating === 4) {
			product.stars.fourStar = product.stars.fourStar + 1;
		} else if (req.body.rating === 5) {
			product.stars.fiveStar = product.stars.fiveStar + 1;
		}

		product.averageOfRating =
			(product.stars.fiveStar * 5 +
				product.stars.fourStar * 4 +
				product.stars.threeStar * 3 +
				product.stars.twoStar * 2 +
				product.stars.oneStar * 1) /
			5;

		await product.save();
	})
);
ProductRouter.put(
	'/rating/update',
	expressAsyncHandler(async (req) => {
		const product = await Product.findById({ _id: req.body.productId });
		if (req.body.oldRating === 1) {
			product.stars.oneStar = product.stars.oneStar - 1;
		} else if (req.body.oldRating === 2) {
			product.stars.twoStar = product.stars.twoStar - 1;
		} else if (req.body.oldRating === 3) {
			product.stars.threeStar = product.stars.threeStar - 1;
		} else if (req.body.oldRating === 4) {
			product.stars.fourStar = product.stars.fourStar - 1;
		} else if (req.body.oldRating === 5) {
			product.stars.fiveStar = product.stars.fiveStar - 1;
		}
		if (req.body.rating === 1) {
			product.stars.oneStar = product.stars.oneStar + 1;
		} else if (req.body.rating === 2) {
			product.stars.twoStar = product.stars.twoStar + 1;
		} else if (req.body.rating === 3) {
			product.stars.threeStar = product.stars.threeStar + 1;
		} else if (req.body.rating === 4) {
			product.stars.fourStar = product.stars.fourStar + 1;
		} else if (req.body.rating === 5) {
			product.stars.fiveStar = product.stars.fiveStar + 1;
		}
		product.averageOfRating =
			(product.stars.fiveStar * 5 +
				product.stars.fourStar * 4 +
				product.stars.threeStar * 3 +
				product.stars.twoStar * 2 +
				product.stars.oneStar * 1) /
			15;

		await product.save();
	})
);

ProductRouter.put(
	'/rating/remove',
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById({ _id: req.body.productId });
		product.numberOfReviews = product.numberOfReviews - 1;
		if (req.body.rating === 1) {
			product.stars.oneStar = product.stars.oneStar - 1;
		} else if (req.body.rating === 2) {
			product.stars.twoStar = product.stars.twoStar - 1;
		} else if (req.body.rating === 3) {
			product.stars.threeStar = product.stars.threeStar - 1;
		} else if (req.body.rating === 4) {
			product.stars.fourStar = product.stars.fourStar - 1;
		} else if (req.body.rating === 5) {
			product.stars.fiveStar = product.stars.fiveStar - 1;
		}
		product.averageOfRating =
			(product.stars.fiveStar * 5 +
				product.stars.fourStar * 4 +
				product.stars.threeStar * 3 +
				product.stars.twoStar * 2 +
				product.stars.oneStar * 1) /
			5;
		await product.save();
	})
);

module.exports = ProductRouter;
