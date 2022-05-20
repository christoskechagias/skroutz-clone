import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './AvatarScreen.css';
import { getUserAction, updateAvatarAction } from '../../redux/actions/UserSettingsActions.js';
import avatarIcons from './AvatarIcons.js';
function AvatarScreen() {
	const [avatarIcon, setAvatarIcon] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateAvatarAction(avatarIcon));
		setAvatarIcon('');
	};

	return (
		<div className="avatarScreen">
			<p className="accountSettingsScreen__title">Avatar selection</p>
			<p className="avatarScreen__text">Choose from the library:</p>
			<form onSubmit={handleSubmit}>
				<div className="avatarScreen__avatarIconsList">
					{avatarIcons.map((icon, index) => {
						const { imageUrl } = icon;
						return (
							<img
								key={index}
								onClick={() => setAvatarIcon(imageUrl)}
								className={
									avatarIcon === imageUrl
										? 'avatarScreen__avatarSelected'
										: 'avatarScreen__avatar'
								}
								src={imageUrl}
							/>
						);
					})}
				</div>
				<button
					disabled={avatarIcon === ''}
					className="accountSettingsScreen__button"
					type="submit"
				>
					Save
				</button>
			</form>
		</div>
	);
}

export default AvatarScreen;
