import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FavoritesScreen.css';
import { getFavoritesAction } from '../../redux/actions/FavoritesActions.js';
import ProductCard from '../../components/ProductCard/ProductCard';

function FavoritesScreen() {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { favoriteList } = useSelector((state) => state.favoriteList);

	useEffect(() => {
		dispatch(getFavoritesAction(userInfo?._id));
	}, [dispatch]);

	return (
		<div className="favoritesScreen">
			<p className="accountSettingsScreen__title">Favorites</p>

			{favoriteList?.length > 0 ? (
				<div className="favoritesScreen__product">
					{favoriteList.map((favoriteItem) => {
						const {
							favoriteItemImage,
							favoriteItemName,
							favoriteItemPrice,
							favoriteItemId,
						} = favoriteItem;
						return (
							<ProductCard
								userId={userInfo._id}
								key={favoriteItemId}
								type="favorite"
								favorite={true}
								productId={favoriteItemId}
								displayName={favoriteItemName}
								price={favoriteItemPrice}
								image={favoriteItemImage}
							/>
						);
					})}
				</div>
			) : (
				<p className="favoritesScreen__text">
					Here are all the products that you have set as Favorites and the
					products that you have recently seen.
					<br /> You do not have any products at this time.
				</p>
			)}
		</div>
	);
}

export default FavoritesScreen;
