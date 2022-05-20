import React, { useEffect } from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import './OrdersListScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersAction } from '../../redux/actions/OrderActions';
function OrdersListScreen() {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { orders } = useSelector((state) => state.getOrders);

	useEffect(() => {
		dispatch(getOrdersAction(userInfo._id));
	}, [dispatch, userInfo]);

	return (
		<div className="ordersScreen">
			<p className="ordersScreen__title">Orders from Skroutz Cart</p>
			{orders?.map((order) => {
				const { paidAt, _id, orderStatus, shippingAddress, orderItems } = order;
				return (
					<OrderCard
						key={_id}
						orderStatus={orderStatus}
						paidAt={paidAt}
						orderId={_id}
						shippingAddress={shippingAddress}
						orderItems={orderItems}
					/>
				);
			})}
		</div>
	);
}

export default OrdersListScreen;
