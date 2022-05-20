import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AddressesSettingsScreen.css';
import { getAddressesAction } from '../../redux/actions/UserSettingsActions';
import AddressCard from '../../components/AddressCard/AddressCard';

function AddressesSettingsScreen() {
	const dispatch = useDispatch();
	const { addresses } = useSelector((state) => state.address);

	useEffect(() => {
		dispatch(getAddressesAction());
	}, [dispatch]);

	return (
		<div className="addressesSettingsScreen">
			<p className="accountSettingsScreen__title">My addresses</p>
			<div className="addressesSettingsScreen__addresses">
				<div className="addressesSettingsScreen__addNewAddress">
					<p className="addressesSettingsScreen__addNewAddressText">
						You can add a new address and use it in all your next purchases.
					</p>
					<Link
						to="/account/settings/addresses/new"
						className="addressesSettingsScreen__addNewAddressLink"
					>
						Add
					</Link>
				</div>
				{addresses?.map((address) => {
					const { _id } = address;
					return <AddressCard key={_id} address={address} />;
				})}
			</div>
		</div>
	);
}

export default AddressesSettingsScreen;
