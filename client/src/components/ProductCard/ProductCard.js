import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import Favorite from '../FavoriteIcon/FavoriteIcon';
import { FaTrashAlt } from 'react-icons/fa';
import CompareIcon from '../CompareIcon/CompareIcon';
import { removeFromCompareListAction } from '../../redux/actions/CompareListActions.js';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import Rating from '@material-ui/lab/Rating';
import CompareAlertMessage from '../CompareAlertMessage/CompareAlertMessage';

function ProductCard({
	userId,
	productId,
	displayName,
	image,
	price,
	description,
	variationsList,
	favorite,
	compareItem,
	type,
	categoryId,
	averageOfRating,
	numberOfReviews,
}) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { search } = useLocation();
	const { compareList } = useSelector((state) => state.compare);

	const deleteCompareItemhandler = () => {
		dispatch(removeFromCompareListAction(userId, productId, categoryId));
		if (compareList.length === 1) {
			history.push(`/c/${categoryId}`);
		} else {
			const productsId = new URLSearchParams(search).get('compare');
			const updatedCompareList = productsId
				.split(',')
				.filter((s) => s !== productId)
				.join(',');
			history.push(`?compare=${updatedCompareList}`);
		}
	};

	return (
		<div
			className={`${type}Card`}
			id={
				variationsList?.length > 1 &&
				type === 'product' &&
				'productCard__withVariationsList'
			}
		>
			<div className={`${type}Card__content`}>
				<div className={`${type}Card__icons`}>
					<div className={`${type}Card__deleteIcon`}>
						<FaTrashAlt onClick={() => deleteCompareItemhandler()} />
					</div>
					<div className={`${type}Card__favoriteIcon`}>
						<Favorite
							userId={userId}
							productId={productId}
							favorite={favorite}
						/>
					</div>

					<div className={`${type}Card__compareIcon`}>
						<CompareIcon
							userId={userId}
							productId={productId}
							categoryId={categoryId}
							compareItem={compareItem}
						/>
					</div>
				</div>
				<CompareAlertMessage productId={productId} categoryId={categoryId} />

				<Link className={`${type}Card__image`} to={`/p/${productId}`}>
					<img src={image} />
				</Link>

				<div className={`${type}Card__informations`}>
					<Link to={`/p/${productId}`}>
						<p className={`${type}Card__name`}>{displayName}</p>
					</Link>
					<p className={`${type}Card__description`}>{description}</p>
					{type === 'product' && (
						<HashLink
							to={`/p/${productId}#reviews`}
							className={`${type}Card__reviews`}
						>
							<Rating
								className={`${type}Card__rating`}
								name="hover-feedback"
								value={averageOfRating}
								precision={0.5}
								readOnly
								size="small"
							/>

							<p className={`${type}Card__numberOfReviews`}>
								({numberOfReviews})
							</p>
						</HashLink>
					)}
					<Link to={`/p/${productId}`}>
						<p className={`${type}Card__price`}>
							<span>from </span>
							{price?.toFixed(2)} €
						</p>
					</Link>

					<div className={`${type}Card__variationsList`}>
						{variationsList?.length > 1 && (
							<>
								{variationsList?.map((product) => {
									const { _id, images } = product;
									return (
										<div key={_id} className={`${type}Card__variationProduct`}>
											<Link to={`/p/${_id}`}>
												<img
													className={`${type}Card__variationProductImage`}
													src={images.main}
												/>
											</Link>
										</div>
									);
								})}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
