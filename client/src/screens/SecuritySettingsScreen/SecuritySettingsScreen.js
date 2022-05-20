import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAction } from '../../redux/actions/UserActions';
import { deleteUserAction } from '../../redux/actions/UserSettingsActions';
import './SecuritySettingsScreen.css';
function SecuritySettingsScreen() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { message, success } = useSelector((state) => state.deleteUser);

	const deleteHandler = () => {
		dispatch(deleteUserAction());
	};

	useEffect(() => {
		if (success) {
			alert(message);
			dispatch(logoutAction());
			dispatch({ type: 'RESET' });
			history.replace('/');
			window.location.reload();
		}
	}, [dispatch, message, success]);

	return (
		<div className="securitySettingsScreen">
			<p className="accountSettingsScreen__title">Account Security</p>
			<p className="securitySettingsScreen__text">
				Account deactivation <br />
				<br />
				<br /> The account deactivation process is completed immediately and
				cannot be undone.
				<br /> <br />
				In the event that there is a pending order from the Skroutz Cart, you
				will no longer be able to be informed of its progress.
			</p>
			<button
				onClick={() => deleteHandler()}
				className="securitySettingsScreen__button"
			>
				Account deactivation
			</button>
		</div>
	);
}

export default SecuritySettingsScreen;
