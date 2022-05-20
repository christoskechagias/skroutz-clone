import React, { useEffect, useState } from 'react';
import GoogleLoginRegister from '../../components/GoogleLoginRegister/GoogleLoginRegister.js';
import {
	loginAction,
	googleLoginRegisterAction,
} from '../../redux/actions/UserActions.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './LoginScreen.css';
import logo from '../../assets/logo.svg';
function LoginScreen(props) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { success } = useSelector((state) => state.userLogin);
	const { user } = useSelector((state) => state.user);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(loginAction(email, password));
	};
	const responseGoogle = (res) => {
		dispatch(googleLoginRegisterAction(res.tokenId));
	};
	useEffect(() => {
		if (success && user?.type == 'registered') {
			props.history.push('/');
			window.location.reload();
		}
	}, [success, user]);
	return (
		<div className="loginScreen">
			<div className="loginScreen_container">
				<div className="loginScreen_logoContainer">
					<img
						onClick={() => props.history.push('/')}
						src={logo}
						className="loginScreen_logoImage"
					/>
				</div>
				<div className="loginScreen__formContainer">
					<div className="loginScreen__googleLoginContainer">
						<GoogleLoginRegister
							action="login"
							responseGoogle={(e) => responseGoogle(e)}
						/>
					</div>
					<p className="loginScreen__or">
						<span>or login with your skroutz-email</span>
					</p>
					<form className="loginScreen__form">
						<div className="loginScreen_emailContainer">
							<input
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								placeholder="Email"
							/>
						</div>

						<div className="loginScreen_passwordContainer">
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
							/>
						</div>
						<button
							className="loginScreen__button"
							type="submit"
							onClick={(e) => submitHandler(e)}
						>
							Login
						</button>
					</form>
					<div className="loginScreen__policyContainer">
						<p className="loginScreen__policyText">
							By creating an account you accept the <a href="">Terms of Use</a>.
						</p>
						<p className="loginScreen__policyText">
							Inform about the <a href="">Privacy Policy</a>
						</p>
					</div>

					<div className="loginScreen__registerContainer">
						New user{' '}
						<button
							className="loginScreen__registerButton"
							onClick={() => props.history.push('/register')}
						>
							Become a member
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
