const mongoose = require('mongoose');
const favoritesSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	favoriteList: [
		{
			favoriteItemId: { type: String },
			favoriteItemName: { type: String },
			favoriteItemPrice: { type: Number },
			favoriteItemImage: { type: String },
		},
	],
});
const Favorites = mongoose.model('Favorites', favoritesSchema);
module.exports = Favorites;
  