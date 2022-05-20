import React from 'react';
import GoogleLogin from 'react-google-login';
import { GrGoogle } from 'react-icons/gr';
import './GoogleLoginRegister.css';

function GoogleLoginRegister({ action, responseGoogle }) {
	return (
		<GoogleLogin
			clientId="658706465633-v9738n794kal84s4h6rkdicme22hid1d.apps.googleusercontent.com"
			buttonText="Login"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={'single_host_origin'}
			render={(renderProps) => (
				<div
					onClick={renderProps.onClick}
					className="googleLoginRegister__withGoogle"
				>
					<GrGoogle className="googleLoginRegister__googleIcon" />
					<p>{action === 'login' ? 'Login' : 'Register'} with Google</p>
				</div>
			)}
		/>
	);
}

export default GoogleLoginRegister;
