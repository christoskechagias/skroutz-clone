const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
	categoryId: { type: Number, required: true, unique: true },
	name: { type: String, required: true, unique: true },
	image: { type: String },
	childrenCount: { type: Number, required: true },
	familyId: { type: Number, required: false },
	parentId: { type: Number, required: true },
	path: { type: Array, required: false },
	showSpecifications: { type: Boolean, required: false },
	filters: { type: Array, required: false },
	links: { type: Array, required: false },
	color: { type: String, required: false },
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
