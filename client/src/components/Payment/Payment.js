import React, { useEffect, useState } from 'react';
import './Payment.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { paymentAction } from '../../redux/actions/PaymentActions';
import { createOrderAction } from '../../redux/actions/OrderActions.js';
import { emptyCartAction } from '../../redux/actions/CartActions';
const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#E9F2F9',
			color: 'black',
			fontSize: '14px',
		},
		invalid: {
			iconColor: '#D52925',
			color: '#D52925',
		},
	},
};
const CardField = ({ onChange }) => (
	<>
		<CardElement options={CARD_OPTIONS} onChange={onChange} />
	</>
);
function Payment({ processing }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [clientSecret, setClientSecret] = useState(null);
	const [cardComplete, setCardComplete] = useState(false);
	const { cartItems } = useSelector((state) => state.cart);
	const { shippingAddress } = useSelector((state) => state.shippingAddress);
	const { message } = useSelector((state) => state.payment);
	const { userInfo } = useSelector((state) => state.userLogin);

	const productsPrice = cartItems.reduce(
		(a, c) => a + c.quantity * c.product.price,
		0
	);
	const shippingCost = cartItems?.length * 2;

	const totalCart = productsPrice + shippingCost;
	
	useEffect(() => {
		dispatch(paymentAction(totalCart));
		setClientSecret(message);
	}, [dispatch]);

	useEffect(() => {
		setClientSecret(message);
	}, [message]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		if (cardComplete) {
			processing(true);
		}

		if (error) {
			elements.getElement('card').focus();
			return;
		}
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});
		processing(false);

		if (payload.error) {
			setError(payload.error);
		} else {
			setError(null);
			processing(false);
			dispatch(
				createOrderAction(
					userInfo,
					totalCart,
					cartItems,
					shippingCost,
					shippingAddress
				)
			);
			dispatch(emptyCartAction());
			history.replace('/payment/complete');
		}
	};

	return (
		<form
			className="payment"
			id="paymentForm"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="payment__card" id={error && 'payment__cardError'}>
				<CardField
					onChange={(e) => {
						setError(e.error);
						setCardComplete(e.complete);
					}}
				/>
			</div>
			{error && <p className="payment__error">{error.message}</p>}
			<div className="payment__secureOnline">
				<img src="https://c.scdn.gr/assets/schwartz/ecommerce/shield-07dd9b28096e7db8524e0dbda72fb645.svg" />
				<p>Secure online shopping</p>
			</div>
		</form>
	);
}

export default Payment;
