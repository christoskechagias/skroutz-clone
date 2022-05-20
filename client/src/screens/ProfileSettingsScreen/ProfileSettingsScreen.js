import React, { useEffect, useState } from 'react';
import './ProfileSettingsScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	updateProfileAction,
	getProfileAction,
	getUsernameAction,
} from '../../redux/actions/UserSettingsActions.js';

function ProfileSettingsScreen() {
	const dispatch = useDispatch();
	const years = Array.from(new Array(100), (val, index) => index + 1922);

	const { userProfile } = useSelector((state) => state.profile);
	const { username } = useSelector((state) => state.username);

	const [sex, setSex] = useState('');
	const [yearOfBirth, setYearOfBirth] = useState(null);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateProfileAction(yearOfBirth, sex));
	};

	useEffect(() => {
		dispatch(getProfileAction());
		dispatch(getUsernameAction());
	}, [dispatch]);

	useEffect(() => {
		if (userProfile) {
			setYearOfBirth(userProfile.yearOfBirth);
			setSex(userProfile.sex);
		}
	}, [userProfile]);

	return (
		<>
			<div className="profileSettingsScreen">
				<p className="accountSettingsScreen__title">User profile {username}</p>

				<form onSubmit={submitHandler}>
					<div className="skroutzSelectNotRequired">
						<select
							required
							value={yearOfBirth}
							onChange={(event) => setYearOfBirth(event.target.value)}
						>
							{years.map((year) => {
								return (
									<option key={year} value={year}>
										{year}
									</option>
								);
							})}
						</select>
						<label className="skroutzInputLabel">Year of Birth</label>
					</div>
					<div className="skroutzSelectNotRequired">
						<select
							required
							value={sex}
							onChange={(event) => setSex(event.target.value)}
						>
							<option value="man">Man</option>
							<option value="woman">Woman</option>
						</select>
						<label className="skroutzInputLabel">Sex</label>
					</div>

					<button type="submit" className="accountSettingsScreen__button">
						Change
					</button>
				</form>
			</div>
		</>
	);
}

export default ProfileSettingsScreen;
