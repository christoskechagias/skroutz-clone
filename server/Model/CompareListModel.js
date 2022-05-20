const mongoose = require('mongoose');
const compareListSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	compareList: [
		{
			compareItemsId: { type: Array, required: true },
			categoryId: { type: String, required: true },
		},
	],
});
const CompareList = mongoose.model('CompareList', compareListSchema);

module.exports = CompareList;
