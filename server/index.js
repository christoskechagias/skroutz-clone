const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const CategoryRouter = require('./Router/CategoryRouter/CategoryRouter.js');
const ProductRouter = require('./Router/ProductRouter/ProductRouter.js');
const UserRouter = require('./Router/UserRouter/UserRouter.js');
const PaymentRouter = require('./Router/PaymentRouter/PaymentRouter.js');
const OrderRouter = require('./Router/OrderRouter/OrderRouter.js');
const CartRouter = require('./Router/CartRouter/CartRouter.js');
const ReviewRouter = require('./Router/ReviewRouter/ReviewRouter.js');
const CompareListRouter = require('./Router/CompareListRouter/CompareListRouter.js');
const FavoritesRouter = require('./Router/FavoritesRouter/FavoritesRouter.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: ['http://localhost:3000'],
		credentials: true,
	})
);

mongoose.connect('mongodb://localhost/skroutz-clone', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});
app.use('/payment', PaymentRouter);
app.use('/cart', CartRouter);
app.use('/review', ReviewRouter);
app.use('/category', CategoryRouter);
app.use('/product', ProductRouter);
app.use('/user', UserRouter);
app.use('/order', OrderRouter);
app.use('/compareList', CompareListRouter);
app.use('/favorites', FavoritesRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
