import React, { useState, useEffect } from 'react';
import './FavoriteModal.css';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import {
	getFavoritesAction,
	removeFromFavoritesAction,
} from '../../redux/actions/FavoritesActions.js';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiHeart3Fill } from 'react-icons/ri';

function FavoriteModal() {
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const { user } = useSelector((state) => state.user);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { favoriteList, success } = useSelector((state) => state.favoriteList);

	useEffect(() => {
		if (user?.type == 'registered' && userInfo) {
			dispatch(getFavoritesAction(userInfo._id));
		}
	}, [dispatch, user, userInfo]);

	return (
		<div style={{ display: user?.type == 'registered' ? '' : 'none' }}>
			<div className="favoriteModal__modal" id={modal && 'openModal'}>
				<button
					className="favoriteModal__favoriteButton"
					id={success && 'favoriteAddRemove'}
					style={{
						backgroundColor: favoriteList?.length > 0 ? '#eb5544' : '#bbbbbb',
					}}
					onClick={() => setModal(!modal)}
				>
					{modal ? (
						<CloseIcon style={{ width: '20px', height: '20px' }} />
					) : (
						<RiHeart3Fill style={{ width: '20px', height: '20px' }} />
					)}
				</button>

				<div className="favoriteModal__main">
					{favoriteList?.length === 0 ? (
						<>
							<p>
								Here you will be able to see and compare the products you have
								in Favorites and the ones you saw recently.
							</p>
							<img src="https://i.ibb.co/6RVghbc/Screensh23ot.png" />
						</>
					) : (
						<div className="favoriteModal__favoriteProducts">
							{favoriteList?.map((favoriteItem) => {
								const {
									favoriteItemId,
									favoriteItemImage,
									favoriteItemName,
									favoriteItemPrice,
								} = favoriteItem;

								return (
									<div
										key={favoriteItemId}
										className="favoriteModal__favoriteProduct"
									>
										<Link
											to={`/p/${favoriteItemId}`}
											className="favoriteModal__favoriteProductImage"
										>
											<img src={favoriteItemImage} />
										</Link>
										<Link
											to={`/p/${favoriteItemId}`}
											className="favoriteModal__favoriteProductInfo"
										>
											<p className="favoriteModal__favoriteProductName">
												{favoriteItemName}
											</p>
											<p className="favoriteModal__favoriteProductPrice">
												<span>from </span>
												{favoriteItemPrice.toFixed(2)} €
											</p>
										</Link>
										<FaTrashAlt
											className="favoriteModal__deleteIcon"
											onClick={() =>
												dispatch(
													removeFromFavoritesAction(
														userInfo?._id,
														favoriteItemId
													)
												)
											}
										/>
									</div>
								);
							})}
						</div>
					)}
					{favoriteList?.length > 0 && (
						<Link
							to="/account/favorites"
							className="favoriteModal__allFavoritesLink"
						>
							<button>All the products</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default FavoriteModal;
