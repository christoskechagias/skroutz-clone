import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CompareAlertMessage.css';
import { useLocation } from 'react-router-dom';

function CompareAlertMessage({ productId, categoryId }) {
	const dispatch = useDispatch();
	const { successAdd, successRemove, compareItemId } = useSelector(
		(state) => state.alertCompareMessage
	);
	const { compareList } = useSelector((state) => state.compare);

	useEffect(() => {
		dispatch({ type: 'RESET_COMPARE_ALERT_MESSAGE' });
	}, [dispatch, useLocation]);

	useEffect(() => {
		if (successAdd || successRemove) {
			const timer = setTimeout(() => {
				dispatch({ type: 'RESET_COMPARE_ALERT_MESSAGE' });
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [dispatch, successAdd, successRemove]);

	return (
		<div>
			{(successAdd || successRemove) && productId === compareItemId && (
				<div
					className="alertCompareMessage"
					id="alertCompareMessage__show"
					style={{ backgroundColor: '#1c7ece' }}
				>
					{successAdd ? (
						<p className="alertCompareMessage__text">
							Added to{' '}
							<Link
								to={`/comparelist/${categoryId}?compare=${compareList?.join(
									','
								)}`}
							>
								compare list
							</Link>
						</p>
					) : (
						successRemove && 'Remove from compare list'
					)}
				</div>
			)}
		</div>
	);
}

export default CompareAlertMessage;
