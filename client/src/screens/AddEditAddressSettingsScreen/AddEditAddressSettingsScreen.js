import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	addAddressAction,
	updateAddressAction,
	getAddressesAction,
} from '../../redux/actions/UserSettingsActions.js';
import './AddEditAddressSettingsScreen.css';

function AddEditAddressSettingsScreen(props) {
	const { addressId } = props.match.params;
	const isAddMode = !addressId;
	const history = useHistory();

	const dispatch = useDispatch();
	const { addresses } = useSelector((state) => state.address);

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [street, setStreet] = useState('');
	const [streetNumber, setStreetNumber] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [phone, setPhone] = useState('');
	const [mobile, setMobile] = useState('');
	const [notes, setNotes] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (isAddMode) {
			dispatch(
				addAddressAction({
					name,
					surname,
					street,
					streetNumber,
					city,
					postalCode,
					phone,
					mobile,
					notes,
				})
			);
		} else {
			dispatch(
				updateAddressAction({
					addressId,
					name,
					surname,
					street,
					streetNumber,
					city,
					postalCode,
					phone,
					mobile,
					notes,
				})
			);
		}

		history.push('/account/settings/addresses');
	};

	useEffect(() => {
		dispatch(getAddressesAction(addressId));
	}, [dispatch, addressId]);

	useEffect(() => {
		if (addresses) {
			const address = addresses.find((item) => item._id === addressId);
			setName(address?.name);
			setSurname(address?.surname);
			setStreet(address?.street);
			setStreetNumber(address?.streetNumber);
			setCity(address?.city);
			setPostalCode(address?.postalCode);
			setPhone(address?.phone);
			setMobile(address?.mobile);
			setNotes(address?.notes);
		}
	}, [addresses]);
	return (
		<div className="addEditAddressScreen">
			<p className="accountSettingsScreen__title">
				{isAddMode ? 'Add new address' : 'Edit address'}
			</p>
			<p className="addOrEditAddressScreen__text">
				The address is used to improve your skroutz experience but also for
				shopping with the Skroutz Cart
			</p>

			<form className="addOrEditAddressScreen__form" onSubmit={submitHandler}>
				<div className="skroutzInputRequired">
					<input
						required
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label for="name" className="skroutzInputLabel">
						Name
					</label>
				</div>
				<div className="skroutzInputRequired">
					<input
						required
						id="surname"
						type="text"
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
					/>
					<label for="surname" className="skroutzInputLabel">
						Surname
					</label>
				</div>
				<div className="addEditAddressScreen__streetDiv">
					<div className="skroutzInputRequired">
						<input
							required
							id="street"
							type="text"
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>
						<label for="street" className="skroutzInputLabel">
							Street
						</label>
					</div>

					<div className="skroutzInputRequired">
						<input
							required
							id="streetNumber"
							value={streetNumber}
							onChange={(e) => setStreetNumber(e.target.value)}
							type="text"
						/>
						<label for="streetNumber" className="skroutzInputLabel">
							Street number
						</label>
					</div>
				</div>
				<div className="addEditAddressScreen__cityDiv">
					<div className="skroutzInputRequired">
						<input
							required
							id="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							type="text"
						/>
						<label for="city" className="skroutzInputLabel">
							City
						</label>
					</div>
					<div className="skroutzInputRequired">
						<input
							required
							id="postalCode"
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
							type="text"
						/>
						<label for="postalCode" className="skroutzInputLabel">
							Postal Code
						</label>
					</div>
				</div>
				<div className="skroutzInputNotRequired">
					<input
						placeholder="optional"
						id="mobile"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						type="text"
					/>
					<label for="mobile" className="skroutzInputLabel">
						Mobile
					</label>
				</div>
				<div className="skroutzInputNotRequired">
					<input
						placeholder="optional"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type="text"
					/>
					<label for="phone" className="skroutzInputLabel">
						Phone
					</label>
				</div>

				<div className="skroutzTextArea">
					<textarea
						placeholder="optional"
						id="notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						type="text"
					/>
					<label for="notes" className="skroutzInputLabel">
						Notes
					</label>
				</div>

				<button type="submit" className="accountSettingsScreen__button">
					{isAddMode ? 'Creation' : 'Save'}
				</button>
			</form>
		</div>
	);
}

export default AddEditAddressSettingsScreen;
