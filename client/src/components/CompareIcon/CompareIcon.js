import React from 'react';
import './CompareIcon.css';
import { useDispatch } from 'react-redux';
import {
	addToCompareListAction,
	removeFromCompareListAction,
} from '../../redux/actions/CompareListActions.js';
import { CgCompressLeft } from 'react-icons/cg';

function CompareIcon({ userId, productId, compareItem, categoryId }) {
	const dispatch = useDispatch();

	return (
		<button
			className="compareIcon__button"
			id={compareItem ? 'comparableItem' : 'incomparableItem'}
			onClick={() => {
				if (compareItem) {
					dispatch(removeFromCompareListAction(userId, productId, categoryId));
				} else {
					dispatch(addToCompareListAction(userId, productId, categoryId));
				}
			}}
		>
			<CgCompressLeft className="compareIcon" />
		</button>
	);
}

export default CompareIcon;
