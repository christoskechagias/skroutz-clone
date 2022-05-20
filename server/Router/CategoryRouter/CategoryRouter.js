const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const CategoryModel = require('../../Model/CategoryModel.js');
const CategorySpecificationsModel = require('../../Model/CategorySpecificationsModel.js');
const categoriesList = require('./CategoriesList.js');
const CategorySpecifications = require('./CategorySpecifications.js');

const CategoryRouter = express.Router();

CategoryRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		await CategoryModel.deleteMany({});
		const categories = categoriesList.categories.map((category) => ({
			...category,
		}));
		await CategoryModel.insertMany(categories);
		res.send('Categories Created');
	})
);
CategoryRouter.get(
	'/specifications/seed',
	expressAsyncHandler(async (req, res) => {
		await CategorySpecificationsModel.deleteMany({});
		const categorySpecifications = CategorySpecifications.map(
			(specifications) => ({
				...specifications,
			})
		);
		await CategorySpecificationsModel.insertMany(categorySpecifications);
		res.send('Categories Created');
	})
);

CategoryRouter.get(
	'/:categoryId/getList',
	expressAsyncHandler(async (req, res) => {
		const categories = await CategoryModel.find();
		if (req.params.categoryId == 0) {
			const familyCategory = categories.filter(
				(category) => category.parentId === 0
			);
			res.send(familyCategory);
		} else {
			const category = categories.find(
				(category) => category.categoryId == req.params.categoryId
			);
			const familyCategory = categories.filter(
				(item) => item.familyId === category.familyId
			);
			res.send(familyCategory);
		}
	})
);

CategoryRouter.get(
	'/:categoryId/getSpecifications',
	expressAsyncHandler(async (req, res) => {
		const category = await CategorySpecificationsModel.findOne({
			categoryId: req.params.categoryId,
		});
		res.send(category);
	})
);


module.exports = CategoryRouter;
