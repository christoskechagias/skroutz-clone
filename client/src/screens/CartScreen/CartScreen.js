import React, { useState } from 'react';
import './CartScreen.css';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart.js';
import EmptyCartImage from '../../assets/EmptyCartImage.png';
const freeShippingInfo = [
	{
		id: 1,
		text: 'In case the shipments are bigger than 6 kilos, there is a shipping discount for the first 6 kilos.',
	},
	{
		id: 2,
		text: 'The minimum weight of each shipment is considered to be 2 kg.',
	},
	{
		id: 3,
		text: '	For transfers in inaccessible areas the discount on transport will not exceed € 2.30.',
	},
	{
		id: 4,
		text: 'All Skroutz categories participate in the free shipping policy, except for: Mobile Telephony, Laptops, Tablets.',
	},
];
function CartScreen() {
	const [openModal, setOpenModal] = useState(false);
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<div className="cartScreen">
			<div
				style={{
					backgroundColor: '#d1ffd0',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<div className="cartScreen__freeShipping">
					<div className="cartScreen__iconAndText">
						<img
							className="cartScreen__freeShippingCarIcon"
							src="https://d.scdn.gr/assets/schwartz/ecommerce/banner_truck-05fdef02a89c6019af38ff0cd90978ee.svg"
						/>
						<p>
							Free shipping for purchases over 50 € (up to 3 shipments or 6 kg)
							*
						</p>
					</div>

					<img
						onClick={() => setOpenModal(!openModal)}
						className={
							openModal
								? 'cartScreen__freeShippingExpandIconRotated'
								: 'cartScreen__freeShippingExpandIcon'
						}
						src="https://i.ibb.co/YfP5kWp/image.png"
					/>
				</div>
				{openModal && (
					<div className="cartScreen__modal">
						{freeShippingInfo.map((i) => {
							const { id, text } = i;
							return (
								<ul key={id} className="cartScreen__modalText">
									<li>{text}</li>
									<br />
								</ul>
							);
						})}
					</div>
				)}
			</div>
			{cartItems?.length <= 0 ? (
				<div className="cartScreen__emptyCart">
					<p className="cartScreen__emptyCartTitle">Your cart is empty</p>
					<img src={EmptyCartImage} alt="" />
					<p className="cartScreen__emptyCartText">
						Make your online purchases smart, fast and safe with the Skroutz
						cart!
					</p>
				</div>
			) : (
				<div className="cartScreen__fullCart">
					<Cart />
				</div>
			)}
		</div>
	);
}

export default CartScreen;
