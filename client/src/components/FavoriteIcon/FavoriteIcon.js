import React from 'react';
import './FavoriteIcon.css';
import {
	addToFavoritesAction,
	removeFromFavoritesAction,
} from '../../redux/actions/FavoritesActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { RiHeart3Line } from 'react-icons/ri';
import { RiHeart3Fill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

function FavoriteIcon({ userId, productId, favorite }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const handleFavorite = (value) => {
		if (user?.type == 'registered') {
			if (value == false) {
				dispatch(removeFromFavoritesAction(userId, productId));
			} else {
				dispatch(addToFavoritesAction(userId, productId));
			}
		} else if (user?.type == 'guest') {
			history.push('/login');
		}
	};

	return (
		<>
			{favorite ? (
				<button className="favoriteIcon" onClick={() => handleFavorite(false)}>
					<RiHeart3Fill id="productCard__favoriteIcon" />
				</button>
			) : (
				<button className="favoriteIcon" onClick={() => handleFavorite(true)}>
					<RiHeart3Line id="productCard__favoriteBorderIcon" />
				</button>
			)}
		</>
	);
}

export default FavoriteIcon;
