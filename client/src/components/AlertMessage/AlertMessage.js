import React, { useEffect } from 'react';
import './AlertMessage.css';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

function AlertMessage() {
	const dispatch = useDispatch();
	const { message, success, error } = useSelector(
		(state) => state.alertMessage
	);

	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				dispatch({ type: 'RESET_ALERT_MESSAGE' });
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [dispatch, message]);

	return (
		<>
			{message && (
				<div
					className="alertMessage"
					id="alertMessage__show"
					style={
						success
							? { backgroundColor: '#5CB85C' }
							: error && { backgroundColor: 'red' }
					}
				>
					<p className="alertMessage__text">{message}</p>
					<CloseIcon
						className="alertMessage__closeIcon"
						onClick={() => {
							dispatch({ type: 'RESET_ALERT_MESSAGE' });
						}}
					/>
				</div>
			)}
		</>
	);
}

export default AlertMessage;
