import React, { useState, useEffect } from 'react';
import './CartSummary.css';
import { useSelector, useDispatch } from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { getAddressesAction } from '../../redux/actions/UserSettingsActions.js';

import Dropdown from 'react-bootstrap/Dropdown';
import {
	getCartAction,
	getShippingAddressAction,
} from '../../redux/actions/CartActions';

function CartSummary({ type, processing, userId }) {
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const { shippingAddress, loading } = useSelector(
		(state) => state.shippingAddress
	);
	const productsPrice = cartItems.reduce(
		(a, c) => a + c.quantity * c.product.productPrice,
		0
	);
	const shippingCost = cartItems?.length * 2;
	const totalCart = productsPrice + shippingCost;
	useEffect(() => {
		if (userId) {
			dispatch(getAddressesAction(userId));
			dispatch(getShippingAddressAction(userId));
			dispatch(getCartAction(userId));
		}
	}, [dispatch, userId]);

	return (
		<div className="cartSummary">
			<p className="cartSummary__title">Cart Summary</p>
			{type === 'payment' && (
				<>
					{loading ? (
						<p>Loading</p>
					) : (
						<div className="cartSummary__orderDeliveryInfo">
							<p>
								It will be delivered at the address{' '}
								<span>
									{shippingAddress?.street} {shippingAddress?.streetNumber},{' '}
									{shippingAddress?.city}.
								</span>
							</p>
						</div>
					)}
				</>
			)}

			<div className="cartSummary__productList">
				{cartItems.map((item) => {
					const { product, quantity } = item;
					const { productName, productPrice } = product;

					return (
						<div className="cartSummary__product">
							<p>{productName}</p>
							<div className="cartSummary__quantityAndPrice">
								<p>{quantity}x</p>
								<p>{(quantity * productPrice).toFixed(2)} €</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="cartSummary__totalBreakdown">
				<p>Products value</p>
				<span>{productsPrice.toFixed(2)} €</span>
			</div>

			<div className="cartSummary__shippingCost">
				<Dropdown>
					<Dropdown.Toggle className="cartSummary__toggle">
						Transportation
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<div className="cartSummary__transportationInfo">
							You have received a shipping discount, as your order exceeds €
							50.00!
							<br />
							Shipping is done by Skroutz for complete control and monitoring of
							each order. Shipping costs are calculated automatically and are
							not related to the respective shipping charges of the partner
							stores.
						</div>
					</Dropdown.Menu>
				</Dropdown>
				<span>{shippingCost.toFixed(2)} €</span>
			</div>

			<div className="cartSummary__total">
				<p>Total</p>
				<span>{totalCart.toFixed(2)} €</span>
			</div>

			{type === 'payment' ? (
				<>
					<p className="cartSummary__vatInfo">Prices include VAT.</p>
					<button
						type="submit"
						form="paymentForm"
						className="cartSummary__button"
					>
						{processing ? <HourglassEmptyIcon /> : <LockIcon />}
						<p>
							Payment <span> {totalCart.toFixed(2)} €</span>
						</p>
					</button>
				</>
			) : (
				<button className="cartSummary__button" type="submit">
					<p>Payment Details</p>
					<ChevronRightIcon />
				</button>
			)}
		</div>
	);
}

export default CartSummary;
