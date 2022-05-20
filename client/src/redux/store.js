import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootSaga from '../sagas/rootSaga.js';
import createSagaMiddleware from 'redux-saga';
import {
	cartReducer,
	shippingAddressReducer,
} from './reducers/CartReducers.js';
import {
	categoriesListReducer,
	categorySpecificationsReducer,
} from './reducers/CategoryReducers.js';
import {
	getOrdersReducer,
	getSpecificOrderReducer,
	orderCreateReducer,
} from './reducers/OrderReducers.js';
import { paymentReducer } from './reducers/PaymentReducers.js';
import {
	productReducer,
	manyProductsReducer,
	productsListReducer,
} from './reducers/ProductReducers.js';
import {
	loginReducer,
	registerReducer,
	logoutReducer,
	googleLoginRegisterReducer,
	guestsReducer,
	userReducer,
} from './reducers/UserReducers.js';
import { favoriteListReducer } from './reducers/FavoritesReducers.js';
import { compareReducer } from './reducers/CompareListReducers.js';
import {
	reviewReducer,
	voteReducer,
	userReviewsListReducer,
	productReviewsListReducer,
} from './reducers/ReviewReducers.js';
import {
	alertMessageReducer,
	alertCompareMessageReducer,
} from './reducers/AlertMessageReducers.js';
import {
	avatarReducer,
	usernameReducer,
	profileReducer,
	emailReducer,
	passwordReducer,
	addressReducer,
	deleteUserReducer,
} from './reducers/UserSettingsReducers.js';

const initialState = {
	userLogin: {
		userInfo:
			localStorage.getItem('userInfo') &&
			JSON.parse(localStorage.getItem('userInfo')),
	},
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
	alertMessage: alertMessageReducer,
	alertCompareMessage: alertCompareMessageReducer,
	//User Actions
	user: userReducer,
	userRegister: registerReducer,
	userLogin: loginReducer,
	logout: logoutReducer,
	googleLoginRegister: googleLoginRegisterReducer,
	deleteUser: deleteUserReducer,
	guests: guestsReducer,
	//CART
	cart: cartReducer,
	shippingAddress: shippingAddressReducer,

	//Favorites
	favoriteList: favoriteListReducer,
	//compare list
	compare: compareReducer,
	//Reviews
	review: reviewReducer,
	userReviewsList: userReviewsListReducer,
	vote: voteReducer,
	productReviewsList: productReviewsListReducer,
	//Orders
	payment: paymentReducer,
	getOrders: getOrdersReducer,
	getSpecificOrder: getSpecificOrderReducer,
	orderCreate: orderCreateReducer,

	//Category
	categoriesList: categoriesListReducer,
	categorySpecifications: categorySpecificationsReducer,
	//Product
	product: productReducer,
	manyProducts: manyProductsReducer,
	productsList: productsListReducer,

	//Address
	address: addressReducer,
	//Avatar
	avatar: avatarReducer,
	//Profile
	profile: profileReducer,
	//Username
	username: usernameReducer,
	//Email
	email: emailReducer,
	//Password
	password: passwordReducer,
	//newShippingAddress

	//Reviews
});
const composeEnhancer =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(
	reducers,
	initialState,
	composeEnhancer(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
