import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToGuestsAction, getUserAction } from './redux/actions/UserActions';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen/CategoriesScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import BuyersProtectionProgramScreen from './screens/BuyersProtectionProgramScreen/BuyersProtectionProgramScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import Footer from './components/Footer/Footer';
import ReturnPolicyScreen from './screens/ReturnPolicyScreen/ReturnPolicyScreen';
import CheckoutDetailsScreen from './screens/CheckoutDetailsScreen/CheckoutDetailsScreen';
import CheckoutPaymentScreen from './screens/CheckoutPaymentScreen/CheckoutPaymentScreen';
import AccountScreen from './screens/AccountScreen/AccountScreen';
import CompletePaymentScreen from './screens/CompletePaymentSceen.js/CompletePaymentScreen';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Error404Screen from './screens/Error404Screen/Error404Screen';
import Header from './components/Header/Header';
import CompareListsScreen from './screens/CompareListsScreen/CompareListsScreen';
import FavoriteModal from './components/FavoriteModal/FavoriteModal';
import AlertMessage from './components/AlertMessage/AlertMessage';
import AddReviewScreen from './screens/AddReviewScreen/AddReviewScreen';
import LoginScreen from './screens/LoginScreen.js/LoginScreen';
import RegisterScreen from './screens/RegisterSceen/RegisterScreen';

function App() {
	const { userInfo } = useSelector((state) => state.userLogin);
	const dispatch = useDispatch();
	useEffect(() => {
		if (userInfo) {
			dispatch(getUserAction(userInfo._id));
		} else {
			dispatch(addToGuestsAction());
		}
	}, [dispatch, userInfo]);
	return (
		<BrowserRouter>
			<header>
				<Header />
				<AlertMessage />
			</header>
			<main className="app">
				<FavoriteModal />
				<Switch>
					<Route exact path="/c/:categoryId" component={CategoriesScreen} />
					<Route exact path="/p/:productId" component={ProductScreen} />
					<Route exact path="/return_policy" component={ReturnPolicyScreen} />
					<Route exact path="/cart" component={CartScreen} />
					<Route
						exact
						path="/buyers_protection_program"
						component={BuyersProtectionProgramScreen}
					/>
					<Route
						exact
						path="/comparelist/:categoryId"
						component={CompareListsScreen}
					/>
					<Route exact path="/login" component={LoginScreen} />
					<Route exact path="/register" component={RegisterScreen} />

					<PrivateRoute
						path="/checkout/details"
						component={CheckoutDetailsScreen}
					/>
					<PrivateRoute
						path="/checkout/payment"
						component={CheckoutPaymentScreen}
					/>
					<PrivateRoute
						path="/payment/complete"
						component={CompletePaymentScreen}
					/>
					<PrivateRoute
						path="/p/:productId/addReview"
						component={AddReviewScreen}
					/>
					<PrivateRoute path="/account/:path" component={AccountScreen} />
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="*" render={Error404Screen} />
				</Switch>
			</main>
			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	);
}

export default App;
