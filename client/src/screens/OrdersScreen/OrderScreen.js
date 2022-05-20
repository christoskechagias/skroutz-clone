import React, { useEffect } from 'react';
import './OrderScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificOrderAction } from '../../redux/actions/OrderActions.js';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';

function OrderScreen(props) {
	const { orderId } = props.match.params;
	const dispatch = useDispatch();
	const { order } = useSelector((state) => state.getSpecificOrder);

	useEffect(() => {
		dispatch(getSpecificOrderAction(orderId));
	}, [dispatch, orderId]);

	return (
		<div className="orderScreen">
			<div className="orderScreen__orderStatus">
				{order?.orderStatus === 'In progress' ? (
					<div className="orderScreen__inProgress">
						<p>In progress</p>
					</div>
				) : order?.orderStatus === 'Delivered' ? (
					<div className="orderScreen__delivered">
						<CheckCircleIcon style={{ height: '23px', marginRight: '5px' }} />
						<p>Delivered</p>
					</div>
				) : (
					<div className="orderScreen__canceled">
						<p>Canceled</p>
					</div>
				)}

				<p className="orderScreen__orderId">No. order: {orderId}</p>
				<p className="orderScreen__orderCreatedAt">
					{new Date(order?.paidAt).toLocaleString()}
				</p>

				<div className="orderScreen__products">
					{order?.orderItems?.map((item) => {
						const { product, quantity } = item;
						const { _id, displayName, price, images } = product;
						return (
							<div className="orderScreen__product">
								<div className="orderScreen__productInfo">
									<img src={images.main} alt="" />
									<Link to={`/p/${_id}`}>{displayName}</Link>
								</div>
								<div className="orderScreen__productPriceAndQuantity">
									{quantity} x {price.toFixed(2)} €
								</div>
							</div>
						);
					})}
				</div>
				<div className="orderScreen__orderSynopsis">
					<div className="orderScreen__orderSynopsisLeftPart">
						<p>Type of payment</p>
						<span>Card</span>
						<p>Shipping Address</p>
						<span>
							{order?.shippingAddress?.street}
							{order?.shippingAddress?.streetNumber},{' '}
							{order?.shippingAddress?.city},
							{order?.shippingAddress?.postalCode}
							{order?.shippingAddress?.notes}
						</span>
					</div>
					<div className="orderScreen__orderSynopsisRightPart">
						<div className="orderScreen__productsValue">
							<p>Product value</p>
							<span>
								{(order?.totalCart - order?.shippingCost).toFixed(2)} €
							</span>
						</div>
						<div className="orderScreen__shippingValue">
							<p>Transportation</p>
							<span> + {order?.shippingCost?.toFixed(2)} €</span>
						</div>
						<div className="shippingProof">
							<a href="">(Shipping Proof)</a>
						</div>

						<div className="orderScreen__totalCart">
							<p>Total</p>
							<span>{order?.totalCart.toFixed(2)} €</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderScreen;
