const express = require('express');
const User = require('../../Model/UserModel.js');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { generateToken, isAuth } = require('../../utils.js');
const Product = require('../../Model/ProductModel.js');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
	'658706465633-v9738n794kal84s4h6rkdicme22hid1d.apps.googleusercontent.com'
);
const UserRouter = express.Router();
//REGISTER
UserRouter.post(
	'/register',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			const user = new User({
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 8),
				type: 'registered',
				createdAt: Date.now(),
			});
			const createdUser = await user.save();
			res.send({
				_id: createdUser._id,
				token: generateToken(createdUser),
			});
		} else {
			res.status(404).send({ message: 'This email already exists' });
		}
	})
);
//LOGIN
UserRouter.post(
	'/login',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({
			email: req.body.email,
		});
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				
				res.send({
					_id: user._id,
					token: generateToken(user),
				});
				return;
			}
		}
		res.status(401).send({ message: 'Invalid email or password' });
	})
);
UserRouter.post(
	'/guests/add',
	expressAsyncHandler(async (req, res) => {
		const user = new User({ type: 'guest', createdAt: Date.now() });
		const createdUser = await user.save();
		res.send({
			_id: createdUser._id,
			token: generateToken(createdUser),
		});
	})
);

//GOOGLE LOGIN-REGISTER
UserRouter.post(
	'/googleLoginRegister',
	expressAsyncHandler(async (req, res) => {
		const { tokenId } = req.body;
		client
			.verifyIdToken({
				idToken: tokenId,
				audience:
					'658706465633-v9738n794kal84s4h6rkdicme22hid1d.apps.googleusercontent.com',
			})
			.then(async (response) => {
				const { email_verified, email, picture } = response.payload;
				if (email_verified) {
					const user = await User.findOne({
						email: email,
					});
					if (user) {
						res.send({
							_id: user._id,
							token: generateToken(user),
						});
					} else {
						let password = email + bcrypt.hashSync('123', 8);
						const user = new User({
							email: email,
							avatar: picture,
							password: password,
							accountType: 'google',
							createdAt: Date.now(),
						});
						const createdUser = await user.save();
						res.send({
							_id: createdUser._id,
							token: generateToken(createdUser),
						});
					}
				}
			});
	})
);

UserRouter.get(
	'/:userId',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.params.userId });
		res.send(user);
	})
);
/*Avatar */
UserRouter.put(
	'/updateAvatar',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.body.userId);
		if (user) {
			user.avatar = req.body.icon;
			await user.save();
			res.send({
				message: 'Avatar changed',
				avatarIcon: user.avatar,  
			});
		}
	})
); 

UserRouter.get( 
	'/:userId/getAvatar',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.params.userId });
		if (user) {
			res.send(user.avatar);
		}
	})
);

//Profile
UserRouter.put(
	'/updateProfile',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.body.userId });
		if (user) {
			user.profile.yearOfBirth = req.body.yearOfBirth;
			user.profile.sex = req.body.sex;
			await user.save();
			res.send({
				message: 'Profile updated',
				profile: user.profile,
			});
		} else {
			res.status(404).send({
				message: 'Profile not updated',
			});
		}
	})
);
UserRouter.get(
	'/:userId/getProfile',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.params.userId });
		if (user) {
			res.send(user.profile);
		}
	})
);
//Username
UserRouter.put(
	'/updateUsername',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.body.userId });
		if (user) {
			user.username = req.body.username;
			await user.save();
			res.send({
				message: 'Username updated',
				username: user.username,
			});
		} else {
			res.status(404).send({
				message: 'Username did not updated',
			});
		}
	})
);
UserRouter.get(
	'/:userId/getUsername',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.params.userId });
		if (user) {
			res.send(user.username);
		}
	})
);
//Email
UserRouter.put(
	'/updateEmail',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.body.userId });
		if (user) {
			const existEmail = await User.findOne({ email: req.body.email });
			if (existEmail) {
				res.status(404).send({
					message: 'Email already exist. Please give another email.',
				});
			} else if (!existEmail) {
				user.email = req.body.email;
				const updatedUser = await user.save();
				res.send({ message: 'Email has changed', email: updatedUser.email });
			}
		}
	})
);
UserRouter.get(
	'/:userId/getEmail',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById({ _id: req.params.userId });
		if (user) {
			res.send(user.email);
		}
	})
);
//Password
UserRouter.put(
	'/updatePassword',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.body.userId);
		if (req.body.password) {
			user.password = bcrypt.hashSync(req.body.password, 8);
			await user.save();
			res.send({ message: 'Password has changed' });
		} else {
			res.status(404).send({ message: 'Password did not changed' });
		}
	})
);
//DELETE USER
UserRouter.delete(
	'/:userId/delete',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.userId);
		if (user) {
			await user.remove();
			res.send({ message: 'User deleted' });
		} else {
			res.status(404).send({ message: 'Delete account did not completed' });
		}
	})
);

//Address
UserRouter.post(
	'/addressAdd',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		User.findOneAndUpdate(
			{ _id: req.body.userId },
			{
				$push: {
					addresses: {
						name: req.body.address.name,
						surname: req.body.address.surname,
						street: req.body.address.street,
						streetNumber: req.body.address.streetNumber,
						city: req.body.address.city,
						postalCode: req.body.address.postalCode,
						phone: req.body.address.phone,
						mobile: req.body.address.mobile,
						notes: req.body.address.notes,
					},
				},
			},
			function (error, success) {
				if (success) {
					res.send({
						message: 'Address added successfully',
					});
				} else if (error) {
					res.status(404).send({
						message: 'Address not added successfully',
					});
				}
			}
		);
	})
);

UserRouter.put(
	'/addressUpdate',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await User.findOneAndUpdate(
			{
				_id: req.body.userId,
				addresses: { $elemMatch: { _id: req.body.address.addressId } },
			},

			{
				$set: {
					'addresses.$.name': req.body.address.name,
					'addresses.$.surname': req.body.address.surname,
					'addresses.$.street': req.body.address.street,
					'addresses.$.streetNumber': req.body.address.streetNumber,
					'addresses.$.city': req.body.address.city,
					'addresses.$.postalCode': req.body.address.postalCode,
					'addresses.$.phone': req.body.address.phone,
					'addresses.$.mobile': req.body.address.mobile,
					'addresses.$.notes': req.body.address.notes,
				},
			},
			function (error, success) {
				if (success) {
					res.send({ message: 'Address updated successfully' });
				} else if (error) {
					res.status(404).send({ message: 'Address not updated successfully' });
				}
			}
		);
	})
);

UserRouter.delete(
	'/addressDelete',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		await User.findOneAndUpdate(
			{
				_id: req.body.userId,
				addresses: { $elemMatch: { _id: req.body.addressId } },
			},
			{ $pull: { addresses: { _id: req.body.addressId } } },
			function (error, success) {
				if (success) {
					res.send({ message: 'Address deleted' });
				} else if (error) {
					res.status(401).send({ message: 'Address not deleted' });
				}
			}
		);
	})
);

UserRouter.get(
	'/:userId/addresses/get',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({
			_id: req.params.userId,
		});
		if (user) {
			res.send(user.addresses);
		}
	})
);

module.exports = UserRouter;
