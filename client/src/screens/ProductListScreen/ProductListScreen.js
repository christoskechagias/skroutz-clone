import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsListAction } from '../../redux/actions/ProductActions';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductListScreen.css';
import {
	getCompareListAction,
	removeAllFromCompareListAction,
} from '../../redux/actions/CompareListActions.js';
import { Link } from 'react-router-dom';

import SortOptions from '../../components/SortOptions/SortOptions';
import { CgCompressLeft } from 'react-icons/cg';
import { FaTrashAlt } from 'react-icons/fa';

const sortOptions = [
	{ id: 1, title: 'Declining price' },
	{ id: 2, title: 'Increasing price' },
];

function ProductListScreen({ categoryName, categoryId }) {
	const dispatch = useDispatch();
	const [sortOption, setSortOption] = useState(sortOptions[0]);
	const { favoriteList } = useSelector((state) => state.favoriteList);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { compareList } = useSelector((state) => state.compare);
	const { products, loading } = useSelector((state) => state.productsList);

	useEffect(() => {
		dispatch(getProductsListAction(categoryId));
	}, [dispatch, categoryId]);

	useEffect(() => {
		if (userInfo && categoryId) {
			dispatch(getCompareListAction(userInfo._id, categoryId));
		}
	}, [dispatch, userInfo, categoryId]);

	const compareDeleteAllhandler = () => {
		const result = window.confirm(
			'Are you sure you want to delete the comparison list?'
		);
		if (result) {
			dispatch(removeAllFromCompareListAction(userInfo._id, categoryId));
		}
	};
	return (
		<>
			<div className="productListScreen">
				<p className="productListScreen__categoryName">
					{categoryName} <span>({products?.length} products)</span>
				</p>
				{compareList?.length > 0 && (
					<div className="productListScreen__compare">
						<Link
							className="productListScreen__compareQuantity"
							to={`/comparelist/${categoryId}?compare=${compareList.join(',')}`}
						>
							<CgCompressLeft className="productListScreen__compareIcon" />

							<p>
								{' '}
								{compareList?.length}
								<span> for comparison</span>
							</p>
						</Link>

						<button
							className="productListScreen__deleteAllFromCompare"
							onClick={() => compareDeleteAllhandler()}
						>
							<FaTrashAlt className="productListScreen__compareDeleteIcon" />
						</button>
					</div>
				)}
				<div className="productListScreen__selectSortMenu">
					<SortOptions
						sortOptions={sortOptions}
						typeOfSort={(option) => setSortOption(option)}
						componentType="productsList"
					/>
				</div>
				<div
					className="productListScreen__cards"
					id={loading && 'loadingScreen'}
				>
					{products
						?.sort((productA, productB) =>
							sortOption.id === 1
								? productA.price < productB.price
									? 1
									: -1
								: sortOption.id === 2 && productA.price > productB.price
								? 1
								: -1
						)
						.map((product) => {
							const {
								_id,
								familyId,
								description,
								displayName,
								categoryId,
								price,
								images,
								numberOfReviews,
								averageOfRating,
							} = product;
							const favorite = favoriteList?.some(
								(favorite) => favorite?.favoriteItemId === _id
							);
							const variationsList = products.filter(
								(item) => item.familyId === familyId
							);
							const compareItemId = compareList?.some(
								(compareItemId) => compareItemId === _id
							);
							return (
								<div key={_id}>
									<ProductCard
										averageOfRating={averageOfRating}
										numberOfReviews={numberOfReviews}
										type="product"
										favorite={favorite}
										compareItem={compareItemId}
										variationsList={variationsList}
										description={description}
										displayName={displayName}
										categoryId={categoryId}
										image={images.main}
										price={price}
										productId={_id}
										userId={userInfo?._id}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default ProductListScreen;
