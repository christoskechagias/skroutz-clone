import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getEmailAction,
	updateEmailAction,
} from '../../redux/actions/UserSettingsActions.js';
import './EmailSettingsSceen.css';

function EmailSettingsSceen() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState();

	const { userEmail, loading, error } = useSelector((state) => state.email);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateEmailAction(email));
	};

	useEffect(() => {
		dispatch(getEmailAction());
	}, [dispatch]);

	useEffect(() => {
		if (userEmail) {
			setEmail(userEmail);
		}
	}, [userEmail]);

	return (
		<div className="emailSettingsSceen">
			<p className="accountSettingsScreen__title">Change Email</p>
			<p className="emailSettingsSceen__text">
				Your email is used to receive updates about your Skroutz account as well
				as notifications
			</p>
			{loading ? (
				<p></p>
			) : error ? (
				<p></p>
			) : (
				<form onSubmit={submitHandler}>
					<div className="skroutzInputRequired">
						<input
							required
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label for="email" className="skroutzInputLabel">
							Email{' '}
						</label>
					</div>
					<button type="submit" className="accountSettingsScreen__button">
						Change
					</button>
				</form>
			)}
		</div>
	);
}

export default EmailSettingsSceen;
