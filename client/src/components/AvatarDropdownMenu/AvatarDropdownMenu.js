import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/UserActions';
import './AvatarDropdownMenu.css';
const options = [
	{ id: 1, title: 'Orders', link: '/account/orders' },
	{ id: 2, title: 'Favorites', link: '/account/favorites' },
	{ id: 3, title: 'Reviews', link: '/account/reviews' },
	{ id: 4, title: 'Settings', link: '/account/settings/profile' },
];
function AvatarDropdownMenu() {
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logoutAction());
		window.location.reload(false);
	};

	return (
		<div className="avatarDropdownMenu">
			{options.map((option) => {
				const { id, title, link } = option;
				return (
					<Link key={id} to={link} className="avatarDropdownMenu__option">
						<p className="avatarDropdownMenu__optionTitle">{title}</p>
					</Link>
				);
			})}
			<button
				onClick={logoutHandler}
				className="avatarDropdownMenu__logoutButton"
			>
				<p className="avatarDropdownMenu__logoutText">Log out</p>
			</button>
		</div>
	);
}

export default AvatarDropdownMenu;
