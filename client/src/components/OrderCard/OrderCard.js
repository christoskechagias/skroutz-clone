import React from 'react';
import './OrderCard.css';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function OrderCard({
	orderStatus,
	paidAt,
	orderId,
	shippingAddress,
	orderItems,
}) {
	return (
		<div className="orderCard">

				<div className="orderCard__main">
					<div className="orderCard__orderItemsImage">
						{orderItems.map((item) => {
							return <img  src={item.product.images.main} />;
						})}
					</div>
					<div className="orderCard__informations">
						<div className="orderCard__top">
							<div className="orderCard__orderInfo">
								<div className="orderCard__orderStatus">
									{orderStatus === 'In progress' ? (
										<div className="orderCard__inProgress">
											<p>In progress</p>
										</div>
									) : orderStatus === 'Delivered' ? (
										<div className="orderCard__delivered">
											<CheckCircleIcon
												style={{ height: '23px', marginRight: '5px' }}
											/>
											<p>Delivered</p>
										</div>
									) : (
										<div className="orderCard__canceled">
											<p>Canceled</p>
										</div>
									)}
								</div>
								<p className="orderCard__orderCreatedAt">
									{new Date(paidAt).toLocaleString()}
								</p>
							</div>
						</div>

						<div className="orderCard__bottom">
							<div className="orderCard__orderId">
								<p>No. order</p>
								<span>{orderId}</span>
							</div>
							<div className="orderCard__shippingAddress">
								<p>Shipping Address:</p>
								<span>
									{shippingAddress?.street}
									{shippingAddress?.streetNumber}, {shippingAddress?.city},{' '}
									{shippingAddress?.tk}
								</span>
							</div>
							<div className="orderCard__shipment">
								<p>Shipments:</p>
								<span>{orderItems.length} shipment</span>
							</div>
						</div>
						<div className="orderCard__detailsLink">
							<Link to={`/account/ecommerce/orders/${orderId}`}>
								<p>Details</p>
							</Link>
						</div>
					</div>
				</div>
		</div>
	);
}

export default OrderCard;
