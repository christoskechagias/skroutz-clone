import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Cart.css';
import { FaTrashAlt } from 'react-icons/fa';
import {
	addToCartAction,
	removeFromCartAction,
} from '../../redux/actions/CartActions.js';
import BuyersProtection from '../BuyersProtectionModal/BuyersProtection';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Cart() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { cartItems } = useSelector((state) => state.cart);
	const productsPrice = cartItems?.reduce(
		(a, c) => a + c.quantity * c.product.productPrice,
		0
	);
	const shippingCost = cartItems?.length * 2;
	const totalCart = productsPrice + shippingCost;

	const addToCartHandler = (productId, quantity) => {
		dispatch(addToCartAction(userInfo?._id, productId, quantity));
	};
	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCartAction(userInfo?._id, productId));
	};

	return (
		<div className="cart">
			<p className="cart__title">Your cart</p>
			<div className="cart__content">
				<div className="cart__leftSidebar">
					<div className="cart__products">
						{cartItems?.map((cartItem) => {
							const { product, quantity } = cartItem;
							const { productId, productImage, productName, productPrice } =
								product;
							return (
								<div key={productId} className="cart__product">
									<div className="cart__productImageAndName">
										<Link to={`/p/${productId}`}>
											<img src={productImage} />
										</Link>
										<Link to={`/p/${productId}`}>
											<p className="cart__productName">{productName}</p>
										</Link>
									</div>
									<div className="cart__productQuantity">
										<select
											value={quantity}
											onChange={(e) => {
												addToCartHandler(productId, e.target.value);
											}}
										>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>
									<p className="cart__productTotalCost">
										{(quantity * productPrice).toFixed(2)} €
									</p>
									<FaTrashAlt
										className="cart__productDeleteIcon"
										onClick={() => removeFromCartHandler(productId)}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="cart__rightSidebar">
					<div className="cart__basket">
						<div className="cart__basketHeader">
							<p>Basket</p>
							<span>1 Shipment</span>
						</div>
						<div className="cart__costBreakdown">
							<p>Products Value</p>
							<span>{productsPrice?.toFixed(2)} €</span>
						</div>
						<div className="cart__shippingCost">
							<p>Shipping Address</p>
							<span>{shippingCost?.toFixed(2)} €</span>
						</div>
						<div className="cart__grandTotalCost">
							<p>Total </p>
							<span>{totalCart?.toFixed(2)} €</span>
						</div>
						<button
							onClick={() =>
								userInfo
									? history.push('/checkout/details')
									: history.push('login')
							}
							className="cart__proceedToPurchase"
						>
							Proceed to purchase <ChevronRightIcon />
						</button>
						<div className="cart__buyersProtection">
							<BuyersProtection />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
