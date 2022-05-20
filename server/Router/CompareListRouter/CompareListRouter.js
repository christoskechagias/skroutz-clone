const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../../utils.js');
const CompareList = require('../../Model/CompareListModel.js');

const CompareListRouter = express.Router();

CompareListRouter.post(
	'/add',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const existCompareList = await CompareList.findOne({
			userId: req.body.userId,
		});
		if (existCompareList) {
			const existCategory = existCompareList.compareList.find(
				(item) => item.categoryId == req.body.categoryId
			);
			if (existCategory) {
				existCategory.compareItemsId.push(req.body.productId);
				existCompareList.save();
				res.status(200).send({
					message: `Add to compare list`,
				});
			} else {
				existCompareList.compareList.push({
					compareItemsId: [req.body.productId],
					categoryId: req.body.categoryId,
				});
				existCompareList.save();
				res.status(200).send({
					message: `Add to compare list`,
				});
			}
		} else {
			const newCompareList = new CompareList({
				userId: req.body.userId,
				compareList: [
					{
						compareItemsId: [req.body.productId],
						categoryId: req.body.categoryId,
					},
				],
			});
			await newCompareList.save();
			res.status(200).send({
				message: `Added to Compare List`,
			});
		}
	})
);
CompareListRouter.post(
	'/deleteOne',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await CompareList.findOneAndUpdate(
			{
				userId: req.body.userId,
				'compareList.categoryId': req.body.categoryId,
			},
			{
				$pull: {
					'compareList.$.compareItemsId': req.body.productId,
				},
			},
			(error, success) => {
				if (error) {
					res.status(404).send({
						message: `Can not remove from compare list`,
					});
				} else if (success) {
					res.status(200).send({
						message: `Removed from compare list`,
					});
				}
			}
		);
	})
);
CompareListRouter.post(
	'/deleteAll',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const existedCompareList = await CompareList.findOne({
			userId: req.body.userId,
		});
		if (existedCompareList) {
			const existCompareList = existedCompareList.compareList.find(
				(compareList) => compareList.categoryId === req.body.categoryId
			);
			existedCompareList.compareList.pull(existCompareList);
			existedCompareList.save();
			res.status(200).send({
				message: 'Remove all the products from compareList',
			});
		} else {
			res.status(404).send({
				message: 'Can not remove all the products from compareList',
			});
		}
	})
);
CompareListRouter.get(
	'/:userId/:categoryId/get',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const existedCompareList = await CompareList.findOne({
			userId: req.params.userId,
		});
		if (existedCompareList) {
			const existCompareList = existedCompareList.compareList.find(
				(list) => list.categoryId === req.params.categoryId
			);
			if (existCompareList) {
				res.send(existCompareList.compareItemsId);
			}
		}
	})
);

module.exports = CompareListRouter;
