import React, { useState } from 'react';
import './PasswordSettingsScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { updatePasswordAction } from '../../redux/actions/UserSettingsActions.js';

function PasswordSettingsScreen() {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (password === rePassword) {
			dispatch(updatePasswordAction(password));
		} else {
			dispatch({
				type: 'ALERT_MESSAGE_ERROR',
				payload: 'Passwords do not match',
			});
		}
	};

	return (
		<div className="passwordSettingsScreen">
			<p className="accountSettingsScreen__title">Change Password</p>
			{userInfo.accountType === 'google' ? (
				<div>
					<p className="accountSettingsScreen__googleText">
						You are signed in with your Google Account.
						<br /> If you want to change your password, you must go to the
						Google page and follow the
						<a
							className="accountSettingsScreen__googleLinkPassword"
							href="https://support.google.com/mail/answer/41078?hl=el&visit_id=637620621667393945-3560650034&rd=1"
						>
							{' '}
							instructions for changing the password{' '}
						</a>
						that you will find there.
					</p>
					<a href="https://support.google.com/mail/answer/41078?hl=el&visit_id=637620621667393945-3560650034&rd=1">
						<img
							className="accountSettingsScreen__googleIcon"
							src="https://i.ibb.co/2FMpZ33/oie-l-ABm2-QFyh0-ZF.png"
						/>
					</a>
				</div>
			) : (
				<form onSubmit={submitHandler}>
					<div className="skroutzInputRequired">
						<input
							required
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label for="password" className="skroutzInputLabel">
							Password
						</label>
					</div>
					<div className="skroutzInputRequired">
						<input
							required
							id="re-password"
							type="password"
							value={rePassword}
							onChange={(e) => setRePassword(e.target.value)}
						/>
						<label for="re-password" className="skroutzInputLabel">
							Re-confirm password
						</label>
					</div>

					<button className="accountSettingsScreen__button" type="submit">
						Change
					</button>
				</form>
			)}
		</div>
	);
}

export default PasswordSettingsScreen;
