import React, { useState, useEffect } from 'react';
import './AccountMenu.css';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import UserSidebarMenu from '../UserSidebarMenu/UserSidebarMenu';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import { getUserReviewsListAction } from '../../redux/actions/ReviewActions.js';
import { getUsernameAction } from '../../redux/actions/UserSettingsActions';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const menuOptions = [
	{
		id: 'orders',
		title: 'Orders',
		subOptions: [{ title: 'From Skroutz Basket', link: '/account/orders' }],
	},
	{
		id: 'favorites',
		title: 'Favorites',
		subOptions: [{ title: 'Favorites', link: '/account/favorites' }],
	},
	{
		id: 'reviews',
		title: 'Reviews',
		subOptions: [{ title: 'Product reviews', link: '/account/reviews' }],
	},
	{
		id: 'settings',
		title: 'Account settings',
		subOptions: [
			{
				id: 1,
				title: 'Year of Birth / Sex ',
				link: '/account/settings/profile',
			},
			{ id: 2, title: 'Username', link: '/account/settings/username' },
			{ id: 3, title: 'E-mail', link: '/account/settings/email' },
			{ id: 4, title: 'Password', link: '/account/settings/password' },
			{ id: 5, title: 'Addresses', link: '/account/settings/addresses' },
			{ id: 6, title: 'Account Security', link: '/account/settings/security' },
		],
	},
];
function AccountMenu() {
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [sidebar, setSidebar] = useState(false);
	const { username } = useSelector((state) => state.username);
	const { listOfUserReviews } = useSelector((state) => state.userReviewsList);

	useEffect(() => {
		dispatch(getUserReviewsListAction());
		dispatch(getUsernameAction());
	}, [dispatch]);
	return (
		<div className="accountMenu">
			<div className="accountMenu__content">
				<div className="accountMenu__wrapperMain">
					<div className="accountMenu__main">
						<div className="accountMenu__userCard">
							<div
								className="accountMenu__avatar"
								onClick={() => history.push('/account/settings/avatar')}
							>
								<Avatar component="accountMenu" />
							</div>
							<p className="accountMenu__username">{username}</p>
							<div className="accountMenu__userStats">
								<p>
									<span>{listOfUserReviews?.length}</span>Product reviews
								</p>
							</div>
						</div>
						<div className="accountMenu__menuOptions">
							{menuOptions.map((option) => {
								const { id, title, subOptions } = option;
								return (
									<div
										className="accountMenu__menuOption"
										id={params.path === id && 'accountMenu__enabledOption'}
										key={id}
									>
										<div className="accountMenu__menuOptionTitle">
											<p>{title}</p>
											<RiArrowDropDownFill className="accountMenu__menuOptionArrowIcon" />
										</div>

										<div className="accountMenu__menuDropDownOptions">
											{subOptions.map((subOption) => {
												const { title, link } = subOption;
												return (
													<NavLink
														key={id}
														activeStyle={{ color: '#1c7ece' }}
														className="accountMenu__menuDropDownOption"
														to={link}
													>
														<p className="accountMenu__menuDropDownOptionTitle">
															{title}
														</p>
													</NavLink>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="accountAlternativeMenu__content">
				<GiHamburgerMenu
					onClick={() => setSidebar(!sidebar)}
					className="accountAlternativeMenu__sidebarIcon"
				/>
				<div
					className="accountMenu__avatar"
					onClick={() => history.push('/account/settings/avatar')}
				>
					<Avatar component="accountAlternativeMenu" />
				</div>

				<div className="accountAlternativeMenu__username">
					<p> Hello,</p>
					<span>{username}</span>
				</div>
				<div id={sidebar ? 'openSidebar' : 'closeSidebar'}>
					<UserSidebarMenu
						menuOptions={menuOptions}
						close={() => setSidebar(false)}
					/>
				</div>
			</div>
		</div>
	);
}

export default AccountMenu;
