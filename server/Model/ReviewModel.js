const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
	userId: { type: String, required: false },
	userEmail: { type: String, required: false },
	avatar: { type: String, required: false },
	createdAt: { type: Date, required: false },
	productId: { type: String, required: false },
	productImage: { type: String, required: false },
	productName: { type: String, required: false },
	review: { type: String, required: false },
	date: { type: Date, required: false },
	rating: { type: Number, required: false },
	usefulVotes: { type: Array, required: false },
	unusefulVotes: { type: Array, required: false },
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
