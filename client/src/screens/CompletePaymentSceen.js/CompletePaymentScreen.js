import React from 'react';
import './CompletePaymentScreen.css';
import { useHistory } from 'react-router-dom';

function CompletePaymentScreen() {
	const history = useHistory();
	return (
		<div className="completePaymentScreen">
			<p className="completePaymentScreen__title">
				Everything is ready! Thank you for your order!
			</p>

			<div className="completePaymentScreen__buttons">
				<button
					className="completePaymentScreen__returnToSkroutz"
					onClick={() => {
						history.replace('/');
					}}
				>
					Return to Skroutz
				</button>
				<button
					className="completePaymentScreen__orders"
					onClick={() => {
						history.replace('/account/ecommerce/orders');
					}}
				>
					Orders
				</button>
			</div>
		</div>
	);
}

export default CompletePaymentScreen;
