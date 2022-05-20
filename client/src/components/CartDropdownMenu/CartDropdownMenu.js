import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../redux/actions/CartActions.js';
import './CartDropdownMenu.css';
import { FaTrashAlt } from 'react-icons/fa';

function CartDropdownMenu({ userId, cartItems }) {
	const dispatch = useDispatch();
	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCartAction(userId, productId));
	};
	return (
		<div className="cartDropdownMenu">
			<p className="cartDropdownMenu__title">
				Your cart is ({cartItems?.length})
			</p>
			{cartItems?.length > 0 ? (
				<div className="cartDropdownMenu__full">
					{cartItems?.map((cartItem) => {
						const { product, quantity } = cartItem;
						const { productId, productImage, productName } = product;
						return (
							<div key={productId} className="cartDropdownMenu__product">
								<Link to={`/p/${productId}`}>
									<img src={productImage} alt="" />
								</Link>
								<div>
									<Link to={`/p/${productId}`}>
										<p className="cartDropdownMenu__productName">
											{productName}
										</p>
									</Link>
									<span>
										quantity: <b>{quantity}</b>
									</span>
								</div>
								<FaTrashAlt
									onClick={() => removeFromCartHandler(productId)}
									className="cartDropdownMenu__productDeleteIcon"
								/>
							</div>
						);
					})}
					<div className="cartDropdownMenu__seeYourCart">
						<Link to="/cart" className="cartDropdownMenu__seeYourCartButton">
							See your cart
						</Link>
					</div>
				</div>
			) : (
				<div className="cartDropdownMenu__empty">
					<img src="https://i.ibb.co/ZLpCcgk/Screenshot.png" />
					<p>Your cart is empty</p>
					<Link to="/account/favorites">List of favorite products</Link>
				</div>
			)}
		</div>
	);
}

export default CartDropdownMenu;
