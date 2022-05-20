import React, { useState } from 'react';
import './AddressCard.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { deleteAddressAction } from '../../redux/actions/UserSettingsActions';
import { useDispatch } from 'react-redux';

function AddressCard({ address }) {
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const {
		_id,
		name,
		surname,
		street,
		streetNumber,
		city,
		postalCode,
		mobile,
		phone,
		notes,
	} = address;
	const deleteHandler = (addressId) => {
		dispatch(deleteAddressAction(addressId));
	};
	return (
		<div className="addressCard">
			<MoreVertIcon
				onClick={() => setModal(!modal)}
				className="addressCard__moreIcon"
			/>
			{modal && (
				<div className="addressCard__modal">
					<Link to={`/account/settings/addresses/${_id}/edit`}>Edit</Link>
					<button onClick={() => deleteHandler(_id)}>Delete</button>
				</div>
			)}
			<div className="addressCard__title">
				<p>
					{street} {streetNumber}
				</p>
				<p>{city}</p>
			</div>

			<div className="addressCard__content">
				<p>{name}</p>
				<p>{surname}</p>
				<p>
					{street} {streetNumber}, {city}
				</p>
				<p>Postal code: {postalCode}</p>
				{phone && <p>Phone: {phone}</p>}
				{mobile && <p>Mobile: {mobile}</p>}
				{notes && <p>Notes: {notes}</p>}
			</div>
		</div>
	);
}

export default AddressCard;
