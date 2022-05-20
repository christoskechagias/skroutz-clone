const mongoose = require('mongoose');
const productDetailsSchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	plain_spec_summary: { type: String, required: false },
	mainSpecs: { type: Array, required: false },
	description: { type: Array, required: false },
	specifications: { type: Array, required: false },
});
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
module.exports = ProductDetails;
