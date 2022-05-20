import React, { useEffect } from 'react';
import './CompareListsScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromCompareListAction } from '../../redux/actions/CompareListActions.js';
import DeleteIcon from '@material-ui/icons/Delete';
import ProductCard from '../../components/ProductCard/ProductCard';
import CompareListSpecifications from '../../components/CompareListSpecifications/CompareListSpecifications';
import { useHistory, useLocation } from 'react-router-dom';
import { getManyProductsAction } from '../../redux/actions/ProductActions.js';

function CompareListsScreen(props) {
	const { categoryId } = props.match.params;
	const history = useHistory();
	const { search } = useLocation();
	const productsId = new URLSearchParams(search).get('compare');
	const dispatch = useDispatch();
	const { favoriteList } = useSelector((state) => state.favoriteList);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { products, details } = useSelector((state) => state.manyProducts);
	useEffect(() => {
		if (productsId) {
			dispatch(getManyProductsAction(productsId));
		}
	}, [dispatch, productsId, search]);

	const deleteAllItemsFromCompareList = () => {
		const result = window.confirm(
			'Are you sure you want to delete the comparison list?'
		);
		if (result) {
			dispatch(removeAllFromCompareListAction(userInfo._id,categoryId));
		}
		history.replace(`/c/${categoryId}`);
	};

	return (
		<div className="compareListsScreen">
			<div className="compareListsScreen__header">
				<div
					className="compareListsScreen__deleteAll"
					onClick={() => deleteAllItemsFromCompareList()}
				>
					<DeleteIcon />
					<p>Delete comparison</p>
				</div>
				<p className="compareListsScreen__title">
					Compare <span>Cell Phones </span>
				</p>
			</div>
			<div className="compareListsScreen__content">
				{products?.map((product, index) => {
					const { _id, displayName, images, price, categoryId, detailsId } =
						product;
					const favorite = (favorite) => favorite?.favoriteItemId === _id;
					const productDetails = details.find(
						(productDetails) => productDetails.id === detailsId
					);

					return (
						<div key={_id} className="compareListsScreen__product">
							<div className="compareListsScreen__productsCard">
								<ProductCard
									productId={_id}
									displayName={displayName}
									image={images.main}
									price={price}
									categoryId={categoryId}
									type="compare"
									favorite={favoriteList?.some(favorite)}
								/>
							</div>
							<CompareListSpecifications
								categoryId={categoryId}
								productDetails={productDetails}
								index={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CompareListsScreen;
