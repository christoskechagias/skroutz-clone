import { all } from 'redux-saga/effects';
import {
	registerWatcher,
	loginWatcher,
	logoutWatcher,
	deleteUserWatcher,
	googleLoginRegisterWatcher,
	updateAvatarWatcher,
	getAvatarWatcher,
	updateProfileWatcher,
	getProfileWatcher,
	updateUsernameWatcher,
	getUsernameWatcher,
	updateEmailWatcher,
	getEmailWatcher,
	updatePasswordWatcher,
	addAddressWatcher,
	updateAddressWatcher,
	deleteAddressWatcher,
	getAddressesWatcher,
	addToGuestsWatcher,
	getUserWatcher,
} from './watchers/userWatchers';
import {
	getCategoriesListWatcher,
	getCategorySpecifiactionsWatcher,
} from './watchers/categoryWatchers';
import {
	getProductsListWatcher,
	getProductWatcher,
	getManyProductsWatcher,
	addProductRatingWatcher,
	updateProductRatingWatcher,
	removeProductRatingWatcher,
} from './watchers/productWatchers';
import {
	addToFavoritesWatcher,
	removeFromFavoritesWatcher,
	getFavoritesWatcher,
} from './watchers/favoritesWatchers';
import {
	addToCompareListWatcher,
	removeFromCompareListWatcher,
	removeAllFromCompareListWatcher,
	getCompareListWatcher,
} from './watchers/compareListWatchers';
import {
	addToCartWatcher,
	removeFromCartWatcher,
	getCartWatcher,
	emptyCartWatcher,
	addShippingAddressWatcher,
	getShippingAddressWatcher,
} from './watchers/cartWatchers';
import {
	addReviewWatcher,
	updateReviewWatcher,
	deleteReviewWatcher,
	getReviewWatcher,
	getUserReviewsListWatcher,
	getProductReviewsListWatcher,
	addVoteWatcher,
} from './watchers/reviewWatchers';
import { paymentWatcher } from './watchers/paymentWatchers';

export default function* watcherSaga() {
	yield all([
		//User
		getUserWatcher(),
		registerWatcher(),
		loginWatcher(),
		addToGuestsWatcher(),
		googleLoginRegisterWatcher(),
		logoutWatcher(),
		deleteUserWatcher(),
		updateAvatarWatcher(),
		getAvatarWatcher(),
		updateProfileWatcher(),
		getProfileWatcher(),
		updateUsernameWatcher(),
		getUsernameWatcher(),
		updateEmailWatcher(),
		getEmailWatcher(),
		updatePasswordWatcher(),
		addAddressWatcher(),
		updateAddressWatcher(),
		deleteAddressWatcher(),
		getAddressesWatcher(),
		//Category
		getCategoriesListWatcher(),
		getCategorySpecifiactionsWatcher(),
		//Products
		getProductsListWatcher(),
		getProductWatcher(),
		getManyProductsWatcher(),
		addProductRatingWatcher(),
		updateProductRatingWatcher(),
		removeProductRatingWatcher(),

		//Favorite
		addToFavoritesWatcher(),
		removeFromFavoritesWatcher(),
		getFavoritesWatcher(),

		//Compare
		addToCompareListWatcher(),
		removeFromCompareListWatcher(),
		removeAllFromCompareListWatcher(),
		getCompareListWatcher(),

		//Cart
		addToCartWatcher(),
		removeFromCartWatcher(),
		getCartWatcher(),
		emptyCartWatcher(),
		addShippingAddressWatcher(),
		getShippingAddressWatcher(),

		//Review
		addReviewWatcher(),
		updateReviewWatcher(),
		deleteReviewWatcher(),
		getReviewWatcher(),
		getUserReviewsListWatcher(),
		getProductReviewsListWatcher(),
		addVoteWatcher(),

		//Payment
		paymentWatcher,
	]);
}
