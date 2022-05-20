const express = require('express');
const User = require('../../Model/UserModel.js');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../../utils.js');
const Product = require('../../Model/ProductModel.js');
const Review = require('../../Model/ReviewModel.js');

const ReviewRouter = express.Router();

ReviewRouter.post(
	'/add',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ _id: req.body.userId });
		const product = await Product.findOne({ _id: req.body.productId });
		const review = await new Review({
			userId: user._id,
			userEmail: user.email,
			avatar: user.avatar,
			createdAt: user.createdAt,
			productId: product._id,
			productImage: product.images.main,
			productName: product.displayName,
			review: req.body.review,
			date: Date(),
			rating: req.body.rating,
			usefulVotes: [],
			unusefulVotes: [],
		});
		const newReview = await review.save();
		product.numberOfReviews = product.numberOfReviews + 1;
		product.stars[req.body.rating] = product.stars[req.body.rating] + 1;
		product.averageOfRating =
			(product.stars[1] +
				product.stars[2] +
				product.stars[3] +
				product.stars[4] +
				product.stars[5]) /
			5;
		product.save();
		if (newReview) {
			res.status(200).send({ message: 'Review added' });
		} else {
			res.status(404).send({ message: 'Review not added' });
		}
	})
);
ReviewRouter.put(
	'/update',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const review = await Review.findOne({ _id: req.body.reviewId });
		const product = await Product.findOne({ _id: review.productId });
		product.stars[review.rating] = product.stars[review.rating] - 1;
		product.stars[req.body.rating] = product.stars[req.body.rating] + 1;
		product.averageOfRating =
			(product.stars[1] +
				product.stars[2] +
				product.stars[3] +
				product.stars[4] +
				product.stars[5]) /
			5;
		product.save();
		review.review = req.body.review;
		review.rating = req.body.rating;
		review.date = new Date();
		const updatedReview = await review.save();
		if (updatedReview) {
			res.status(200).send({ message: 'Review updated' });
		} else {
			res.status(404).send({ message: 'Review not updated' });
		}
	})
);
ReviewRouter.delete(
	'/delete:reviewId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const review = await Review.findOne({ _id: req.params.reviewId });
		const product = await Product.findOne({ _id: review.productId });
		product.numberOfReviews = product.numberOfReviews - 1;
		product.stars[review.rating] = product.stars[review.rating] - 1;
		product.averageOfRating =
			(product.stars[1] +
				product.stars[2] +
				product.stars[3] +
				product.stars[4] +
				product.stars[5]) /
			5;
		product.save();
		const deletedReview = review.remove();
		if (deletedReview) {
			res.status(200).send({ message: 'Review deleted' });
		} else {
			res.status(404).send({ message: 'Review not deleted' });
		}
	})
);

ReviewRouter.get(
	'/get/:reviewId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const review = await Review.findOne({ _id: req.params.reviewId });
		res.send(review);
	})
);

ReviewRouter.get(
	'/:userId/getUserReviewsList',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const reviews = await Review.find({ userId: req.params.userId });
		res.send(reviews);
	})
);
ReviewRouter.get(
	'/get/product/:productId',
	expressAsyncHandler(async (req, res) => {
		const reviews = await Review.find({ productId: req.params.productId });
		res.send(reviews);
	})
);

//Votes
ReviewRouter.post(
	'/addVote',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const review = await Review.findOne({ _id: req.body.reviewId });
		review.usefulVotes.find(
			(userId) => userId === req.body.userId && review.usefulVotes.pull(userId)
		);
		review.unusefulVotes.find(
			(userId) =>
				userId === req.body.userId && review.unusefulVotes.pull(userId)
		);
		if (req.body.vote === 'yes') {
			review.usefulVotes.push(req.body.userId);
		} else if (req.body.vote === 'no') {
			review.unusefulVotes.push(req.body.userId);
		}
		review.save();
		res.status(202).send();
	})
);

ReviewRouter.get(
	'/getUserVotes/:userId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const usefulVotes = await Review.find({
			$expr: {
				$in: [req.params.userId, '$usefulVotes'],
			},
		});
		const unusefulVotes = await Review.find({
			$expr: {
				$in: [req.params.userId, '$unusefulVotes'],
			},
		});
		res.send({
			usefulVotes: usefulVotes.length,
			unusefulVotes: unusefulVotes.length,
			totalVotes: usefulVotes.length + unusefulVotes.length,
		});
	})
);
module.exports = ReviewRouter;
