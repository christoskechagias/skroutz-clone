const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Stripe = require('stripe');

const stripe = new Stripe(
	'sk_test_51HyZVsDRGEwFmSyAI5ZhngJekZEm0ppXAP3ZtyyDfbJjtX1xY1qfqpjnCXdnhkwxXMcgQl2T5hFbdFYt0aBTZC6U00OT0Pu0fP'
);

const PaymentRouter = express.Router();
PaymentRouter.post(
	'/create',
	expressAsyncHandler(async (req, res) => {
		const total = 100;
		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: 'eur',
		});
		res.status(201).send(paymentIntent.client_secret);
	})
);

module.exports = PaymentRouter;
