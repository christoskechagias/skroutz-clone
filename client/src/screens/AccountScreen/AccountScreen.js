import React from 'react';
import './AccountScreen.css';
import Header from '../../components/Header/Header';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import ReviewsScreen from '../ReviewsScreen/ReviewsScreen';
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen.js';
import OrdersListScreen from '../OrdersScreen/OrdersListScreen';
import AddressesSettingsScreen from '../AddressesSettingsScreen/AddressesSettingsScreen.js';
import AddEditAddressSettingsScreen from '../AddEditAddressSettingsScreen/AddEditAddressSettingsScreen.js';
import ProfileSettingsScreen from '../ProfileSettingsScreen/ProfileSettingsScreen';
import PasswordSettingsScreen from '../PasswordSettingsScreen/PasswordSettingsScreen';
import SecuritySettingsScreen from '../SecuritySettingsScreen/SecuritySettingsScreen';
import EmailSettingsScreen from '../EmailSettingsScreen/EmailSettingsSceen.js';
import AvatarScreen from '../AvatarScreen/AvatarScreen';
import OrderScreen from '../OrdersScreen/OrderScreen.js';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import EditReviewScreen from '../EditReviewScreen/EditReviewScreen';
import UsernameSettingsScreen from '../UsernameSettingsSceen/UsernameSettingsScreen';
const accountScreens = [
	{
		path: '/account/orders',
		component: OrdersListScreen,
	},
	{
		path: '/account/orders/:orderId',
		component: OrderScreen,
	},
	{
		path: '/account/favorites',
		component: FavoritesScreen,
	},
	{
		path: '/account/reviews',
		component: ReviewsScreen,
	},
	{
		path: '/account/reviews/:reviewId/edit',
		component: EditReviewScreen,
	},

	{
		path: '/account/settings/avatar',
		component: AvatarScreen,
	},
	{
		path: '/account/settings/profile',
		component: ProfileSettingsScreen,
	},
	{
		path: '/account/settings/username',
		component: UsernameSettingsScreen,
	},
	{
		path: '/account/settings/email',
		component: EmailSettingsScreen,
	},
	{
		path: '/account/settings/password',
		component: PasswordSettingsScreen,
	},
	{
		path: '/account/settings/addresses',
		component: AddressesSettingsScreen,
	},
	{
		path: '/account/settings/addresses/new',
		component: AddEditAddressSettingsScreen,
	},
	{
		path: '/account/settings/addresses/:addressId/edit',
		component: AddEditAddressSettingsScreen,
	},
	{
		path: '/account/settings/security',
		component: SecuritySettingsScreen,
	},
];
function AccountScreen() {
	return (
		<>
			<AccountMenu />
			<div className="accountScreen">
				<div></div>
				<div className="accountScreen__main">
					{accountScreens.map((screen, index) => {
						const { path, component } = screen;
						return (
							<PrivateRoute
								key={index}
								exact
								path={path}
								component={component}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default AccountScreen;
 