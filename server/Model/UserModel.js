const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	email: { type: String },
	type: { type: String },
	password: { type: String },
	createdAt: { type: Date, required: true },
	yearOfBirth: { type: Number },
	accountType: { type: String },
	username: { type: String },
	phone: { type: Number },
	profile: {
		yearOfBirth: { type: Number },
		sex: { type: String },
	},
	avatar: { type: String },

	addresses: [
		{
			name: { type: String },
			surname: { type: String },
			street: { type: String },
			streetNumber: { type: String },
			city: { type: String },
			postalCode: { type: String },
			phone: { type: String },
			mobile: { type: String },
			notes: { type: String },
		},
	],
});
const User = mongoose.model('User', userSchema);
module.exports = User;
