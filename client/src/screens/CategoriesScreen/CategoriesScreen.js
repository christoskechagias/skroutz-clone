import React, { useEffect } from 'react';
import './CategoriesScreen.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesListAction } from '../../redux/actions/CategoryActions.js';
import ProductListScreen from '../ProductListScreen/ProductListScreen';

function CategoriesScreen(props) {
	const { categoryId } = props.match.params;
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.categoriesList);

	const category = categories?.find(
		(category) => category.categoryId == categoryId
	);
	const subCategories = categories?.filter(
		(item) => item.parentId == categoryId
	);

	useEffect(() => {
		dispatch(getCategoriesListAction(categoryId));
	}, [dispatch]);

	return (
		<div className="categoriesScreen">
			{category?.childrenCount != 0 ? (
				<div className="categoriesScreen__content">
					<div className="categoriesScreen__title">
						<p>{category?.name}</p>
					</div>
					<div className="categoriesScreen__categoryCards">
						{subCategories?.map((subCategory) => {
							const { name, categoryId, image } = subCategory;

							const subCategorie = categories?.filter(
								(item) => item.parentId === categoryId
							);

							return (
								<div
									key={categoryId}
									className="categoriesScreen__categoryCard"
								>
									<CategoryCard
										type="categoryCard"
										name={name}
										categoryId={categoryId}
										image={image}
										subCategories={subCategorie}
									/>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<div className="categoriesScreen__content">
					<ProductListScreen
						categoryName={category.name}
						categoryId={categoryId}
					/>
				</div>
			)}
		</div>
	);
}

export default CategoriesScreen;
