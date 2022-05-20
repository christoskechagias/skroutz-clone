import React, { useEffect, useState } from 'react';
import './RegisterScreen.css';
import GoogleLoginRegister from '../../components/GoogleLoginRegister/GoogleLoginRegister.js';
import {
	googleLoginRegisterAction,
	registerAction,
} from '../../redux/actions/UserActions.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';

function RegisterScreen(props) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const { success } = useSelector((state) => state.userLogin);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password == rePassword) {
			dispatch(registerAction(email, password));
		} else {
			dispatch({
				type: 'ALERT_MESSAGE_ERROR',
				payload: 'The passwords does not matche',
			});
		}
	};
	const responseGoogle = (res) => {
		dispatch(googleLoginRegisterAction(res.tokenId));
	};
	useEffect(() => {
		if (success) {
			props.history.replace('/');
		}
	}, [success]);
	return (
		<div className="registerScreen">
			<div className="registerScreen_container">
				<div className="registerScreen_logoContainer">
					<img
						onClick={() => props.history.push('/')}
						src={logo}
						className="registerScreen_logoImage"
					/>
				</div>
				<div className="registerScreen__formContainer">
					<div className="registerScreen__googleLoginContainer">
						<GoogleLoginRegister
							action="register"
							responseGoogle={(e) => responseGoogle(e)}
						/>
					</div>
					<p className="registerScreen__or">
						<span>or register with your skroutz-email</span>
					</p>
					<form className="registerScreen__form">
						<div className="registerScreen_emailContainer">
							<input
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								placeholder="Email"
								required
								style={{ paddingLeft: '5px' }}
							/>
						</div>

						<div className="registerScreen_passwordContainer">
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								required
								style={{ paddingLeft: '5px' }}
							/>
							<input
								onChange={(e) => setRePassword(e.target.value)}
								type="password"
								placeholder="Re-password"
								required
								style={{ paddingLeft: '5px' }}
							/>
						</div>
						<button
							disabled={!password || !rePassword || !email}
							className="registerScreen__button"
							type="submit"
							onClick={(e) => submitHandler(e)}
						>
							Register
						</button>
					</form>
					<div className="registerScreen__policyContainer">
						<p className="registerScreen__policyText">
							By creating an account you accept the <a href="">Terms of Use</a>.
						</p>
						<p className="registerScreen__policyText">
							Inform about the <a href="">Privacy Policy</a>
						</p>
					</div>

					<div className="registerScreen__loginContainer">
						Already member{' '}
						<button
							className="registerScreen__loginButton"
							onClick={() => props.history.push('/login')}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterScreen;
