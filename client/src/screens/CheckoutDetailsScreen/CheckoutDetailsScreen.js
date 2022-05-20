import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import MiniFooter from '../../components/MiniFooter/MiniFooter';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InfoIcon from '@material-ui/icons/Info';
import Dropdown from 'react-bootstrap/Dropdown';
import './CheckoutDetailsScreen.css';
import CartSummary from '../../components/CartSummary/CartSummary';
import { addShippingAddressAction } from '../../redux/actions/CartActions';

function CheckoutDetailsScreen() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { addresses } = useSelector((state) => state.address);
	const { shippingAddress, loading, error } = useSelector(
		(state) => state.shippingAddress
	);

	const [comments, setComments] = useState();
	const [option, setOption] = useState();
	const [name, setName] = useState();
	const [surname, setSurname] = useState();
	const [notes, setNotes] = useState();
	const [mobile, setMobile] = useState();
	const [phone, setPhone] = useState();
	const [street, setStreet] = useState();
	const [streetNumber, setStreetNumber] = useState();
	const [postalCode, setPostalCode] = useState();
	const [city, setCity] = useState();

	useEffect(() => {
		setOption(shippingAddress?.id);
		if (shippingAddress?.id === 'new') {
			setName(shippingAddress.name);
			setSurname(shippingAddress.surname);
			setStreet(shippingAddress.street);
			setStreetNumber(shippingAddress.streetNumber);
			setPhone(shippingAddress.phone);
			setMobile(shippingAddress.mobile);
			setCity(shippingAddress.city);
			setPostalCode(shippingAddress.postalCode);
			setNotes(shippingAddress.notes);
		}
	}, [dispatch, shippingAddress]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (option === 'new') {
			dispatch(
				addShippingAddressAction(userInfo?._id, {
					id: option,
					name,
					surname,
					postalCode,
					notes,
					mobile,
					phone,
					city,
					street,
					streetNumber,
				})
			);
		} else {
			const existingAddress = addresses.find(
				(address) => address._id === option
			);
			dispatch(
				addShippingAddressAction(userInfo?._id, {
					id: option,
					name: existingAddress.name,
					surname: existingAddress.surname,
					postalCode: existingAddress.postalCode,
					notes: existingAddress.notes,
					mobile: existingAddress.mobile,
					phone: existingAddress.phone,
					city: existingAddress.city,
					street: existingAddress.street,
					streetNumber: existingAddress.streetNumber,
				})
			);
		}

		history.push('/checkout/payment');
	};

	return (
		<div className="checkoutDetailsScreen">
			<CheckoutHeader />
			<div style={{ backgroundColor: '#F1F1F1' }}>
				<div className="checkoutDetailsScreen__main">
					<Dropdown className="checkoutDetailsScreen__header">
						<Dropdown.Toggle className="checkoutDetailsScreen__toggle">
							<p className="checkoutDetailsScreen__title">
								Where do you want the order to be sent?
							</p>
							<InfoIcon className="checkoutDetailsScreen__titleIcon" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<div className="shippingExplanation">
								<u>Shipping methods</u>
								<br /> The shipment is made by cooperating courier companies.
								Collection from stores is not supported.
								<br />
								<br />
								<u> Cost of transportation</u>
								<br /> Shipping costs are determined by the shipping address and
								the weight of each package.
								<br />
								<br /> Read more details in the article{' '}
								<u>
									<a style={{ color: 'white' }} href="/">
										How are shipping costs calculated?
									</a>
								</u>
							</div>
						</Dropdown.Menu>
					</Dropdown>

					<form className="checkoutDetails" onSubmit={(e) => submitHandler(e)}>
						{' '}
						{loading ? (
							<p>Loading</p>
						) : error ? (
							<p>error</p>
						) : (
							<div className="checkoutDetails__shippingAddresses">
								<div className="checkoutDetails__choiceList">
									<div className="checkoutDetails__existingAddresses">
										{addresses?.map((address) => {
											const {
												_id,
												street,
												streetNumber,
												city,
												surname,
												name,
												mobile,
												notes,
												email,
												postalCode,
											} = address;
											return (
												<label className="shippingAddress__content">
													<input
														className="shippingAddress__radioButton"
														required
														type="radio"
														value={_id}
														defaultChecked={shippingAddress?.id === _id}
														name="address"
														onClick={() => setOption(_id)}
													/>
													<div>
														<p className="shippingAddress__title">
															{street} {streetNumber}, {city}
															<br />
															{name} {surname}
														</p>
														<div
															id={option === _id ? 'selected' : 'unselected'}
															className="shippingAddress__moreAddressInfo"
														>
															<p>
																Postal code: <span> {postalCode}</span>, City:{' '}
																<span> {city}</span>
															</p>
															{mobile && (
																<p>
																	Mobile: <span>{mobile}</span>
																</p>
															)}
															{email && (
																<p>
																	Email: <span>{email}</span>
																</p>
															)}
															<p>
																Notes: <span>{notes}</span>
															</p>
															<Link
																to={`/account/settings/addresses/${_id}/edit`}
																className="shippingAddress__modifyShippingAddressButton"
															>
																Processing
															</Link>
														</div>
													</div>
												</label>
											);
										})}
									</div>
									<label className="shippingAddress__content">
										<input
											className="shippingAddress__radioButton"
											required
											type="radio"
											name="address"
											value="new"
											defaultChecked={shippingAddress?.id === 'new'}
											onClick={(e) => setOption(e.target.value)}
										/>
										<p className="shippingAddress__title">
											New shipping address
										</p>
									</label>

									<div
										className="shippingAddress_form"
										id={option === 'new' ? 'selected' : 'unselected'}
									>
										<div className="skroutzInputRequired">
											<input
												required={option === 'new' && true}
												value={name}
												id="name"
												onChange={(e) => setName(e.target.value)}
												type="text"
											/>
											<label for="name" className="skroutzInputLabel">
												Name
											</label>
										</div>
										<div className="skroutzInputRequired">
											<input
												required={option === 'new' && true}
												value={surname}
												id="surname"
												onChange={(e) => setSurname(e.target.value)}
												type="text"
											/>
											<label for="surname" className="skroutzInputLabel">
												Surname
											</label>
										</div>
										<div className="shippingAddress_streetDetails">
											<div className="skroutzInputRequired">
												<input
													required={option === 'new' && true}
													value={street}
													id="street"
													onChange={(e) => setStreet(e.target.value)}
													type="text"
												/>
												<label for="street" className="skroutzInputLabel">
													Street
												</label>
											</div>
											<div className="skroutzInputRequired">
												<input
													required={option === 'new' && true}
													value={streetNumber}
													id="streetNumber"
													onChange={(e) => setStreetNumber(e.target.value)}
													type="text"
												/>
												<label for="streetNumber" className="skroutzInputLabel">
													Street number
												</label>
											</div>
										</div>
										<div className="shippingAddress_cityDetails">
											<div className="skroutzInputRequired">
												<input
													required={option === 'new' && true}
													value={city}
													id="city"
													onChange={(e) => setCity(e.target.value)}
													type="text"
												/>
												<label for="city" className="skroutzInputLabel">
													City
												</label>
											</div>
											<div className="skroutzInputRequired">
												<input
													required={option === 'new' && true}
													value={postalCode}
													id="postalCode"
													onChange={(e) => setPostalCode(e.target.value)}
													type="text"
												/>
												<label for="postalCode" className="skroutzInputLabel">
													PostalCode
												</label>
											</div>
										</div>
										<div className="skroutzInputRequired">
											<input
												required={option === 'new' && true}
												value={mobile}
												id="mobile"
												onChange={(e) => setMobile(e.target.value)}
												type="text"
											/>
											<label for="mobile" className="skroutzInputLabel">
												Mobile
											</label>
										</div>

										<div className="skroutzTextArea">
											<textarea
												placeholder="optional"
												value={notes}
												id="notes"
												onChange={(e) => setNotes(e.target.value)}
												type="text"
											/>
											<label for="notes" className="skroutzInputLabel">
												Notes
											</label>
										</div>
									</div>
								</div>
								<div className="checkoutDetails__commentsSection">
									<textarea
										value={comments}
										placeholder="Comment about your order"
										onChange={(e) => {
											setComments(e.target.value);
										}}
									/>
									<p>
										Specific delivery times are not supported by the service
									</p>
								</div>
							</div>
						)}
						<CartSummary userId={userInfo?._id} />
					</form>

					<div className="checkoutPaymentScreen__backButton">
						<Link to="/cart">
							<button>
								<ChevronLeftIcon />
								Back to Cart
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutDetailsScreen;
