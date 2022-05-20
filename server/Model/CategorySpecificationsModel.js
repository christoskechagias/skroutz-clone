const mongoose = require('mongoose');
const categorySpecificationsSchema = new mongoose.Schema({
	categoryId: { type: Number, required: true },
	groups: [
		{
			id: { type: Number, required: true },
			name: { type: String, required: true },
		},
	],
	specifications: [
		{
			id: { type: Number, required: true },
			name: { type: String, required: true },
			groupId: { type: Number, required: true },
		},
	],
});
const CategorySpecifications = mongoose.model(
	'CategorySpecifications',
	categorySpecificationsSchema
);
module.exports = CategorySpecifications;
