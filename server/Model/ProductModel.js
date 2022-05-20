const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	displayName: { type: String, required: true, unique: true },
	images: {
		main: { type: String, required: false },
		alternatives: { type: Array, required: false },
	},
	manufacturer: { type: String, required: true },
	description: { type: String, required: false },
	categoryId: { type: Number, required: true },
	detailsId: { type: Number, required: true },
	price: { type: Number, required: true },
	numberOfReviews: { type: Number, required: false, default: 0 },
	averageOfRating: { type: Number, required: false, default: 0 },
	stars: {
		1: { type: Number, required: false, default: 0 },
		2: { type: Number, required: false, default: 0 },
		3: { type: Number, required: false, default: 0 },
		4: { type: Number, required: false, default: 0 },
		5: { type: Number, required: false, default: 0 },
	},
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
