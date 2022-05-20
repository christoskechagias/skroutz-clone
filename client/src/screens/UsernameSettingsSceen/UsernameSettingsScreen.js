import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getUsernameAction,
	updateUsernameAction,
} from '../../redux/actions/UserSettingsActions';
import './UsernameSettingsScreen.css';
function UsernameSettingsScreen() {
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const { username, loading, error } = useSelector((state) => state.username);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUsernameAction(name));
	};

	useEffect(() => {
		dispatch(getUsernameAction());
	}, [dispatch]);

	useEffect(() => {
		if (username) {
			setName(username);
		}
	}, [username]);

	return (
		<div className="usernameSettingsScreen">
			<p className="accountSettingsScreen__title">Change username</p>
			{loading ? (
				<p>Loading</p>
			) : error ? (
				<p>Error</p>
			) : (
				<form onSubmit={submitHandler}>
					<div className="skroutzInputRequired">
						<input
							required //this is the secret for this input
							id="username"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label for="username" className="skroutzInputLabel">
							New username
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

export default UsernameSettingsScreen;
