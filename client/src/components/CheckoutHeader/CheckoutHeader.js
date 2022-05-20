import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './CheckoutHeader.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PaymentIcon from '@material-ui/icons/Payment';
import logo from '../../assets/logo.svg';

function CheckoutHeader() {
	return (
		<div style={{ backgroundColor: '#f8f8f8', border: '1px solid lightgray' }}>
			<div className="checkoutHeader">
				<div className="checkoutHeader__logo">
					<Link to="/">
						<img src={logo} />
					</Link>
				</div>

				<NavLink
					activeStyle={{
						color: '#50b64a',
						borderBottom: '2px solid #50b64a',
						paddingBottom: '25px',
					}}
					to="/checkout/details"
					className="checkoutHeader__checkoutProgress"
				>
					<HomeWorkIcon className="checkoutHeader__checkoutProgressIcon" />
					Delivery
				</NavLink>

				<NavLink
					activeStyle={{
						color: '#50b64a',
						borderBottom: '2px solid #50b64a',
						paddingBottom: '25px',
					}}
					to="/checkout/payment"
					className="checkoutHeader__paymentProgress"
				>
					<PaymentIcon className="checkoutHeader__paymentProgressIcon" />
					Payment
				</NavLink>
			</div>
		</div>
	);
}

export default CheckoutHeader;
