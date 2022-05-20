import React, { useState } from 'react';
import './CheckoutPaymentScreen.css';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import Payment from '../../components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MiniFooter from '../../components/MiniFooter/MiniFooter.js';
import CartSummary from '../../components/CartSummary/CartSummary';

const promise = loadStripe(
	'pk_test_51HyZVsDRGEwFmSyATTdvUZOUAdHJMBSzJIV4nII1zir1zCf5pS06TE7tQboULJCdbYXaW9vJyRM9cMdZAJQDfPnN008kkgfDez'
);

function CheckoutPaymentScreen() {
	const [processing, setProcessing] = useState(false);

	return (
		<div className="checkoutPaymentScreen">
			<CheckoutHeader />
			<div className="checkoutPaymentScreen__main">
				<p className="checkoutPaymentScreen__title">
					Fill in your card details
				</p>
				<div className="checkoutPaymentScreen__paymentAndCartSummary">
					<Elements stripe={promise}>
						<Payment processing={(value) => setProcessing(value)} />
					</Elements>
					<CartSummary type="payment" processing={processing} />
				</div>
				<div className="checkoutPaymentScreen__backButton">
					<Link to="/checkout/details">
						<button>
							<ChevronLeftIcon />
							Back to Address
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CheckoutPaymentScreen;
