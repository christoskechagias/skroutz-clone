import React, { useEffect } from 'react';
import './HomeScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { getCategoriesListAction } from '../../redux/actions/CategoryActions';
import bigButton2 from '../../assets/HomeImages/bigButton2.png';
import bigButton1 from '../../assets/HomeImages/bigButton1.png';
import { Link } from 'react-router-dom';
import technologyImage from '../../assets/HomeImages/technology.png';
import houseGardenImage from '../../assets/HomeImages/houseGarden.png';
import hobbySportImage from '../../assets/HomeImages/hobbySport.png';
import businessB2BImage from '../../assets/HomeImages/businessB2B.png';
import fashionImage from '../../assets/HomeImages/fashion.png';
import healthBeautyImage from '../../assets/HomeImages/healthBeauty.png';
import childrenBabiesImage from '../../assets/HomeImages/childrenBabies.png';
import autoMotoImage from '../../assets/HomeImages/autoMoto.png';

const bigButtons = [
	{
		id: '1',
		image: bigButton1,
		title: 'Fitness accessories',
		text: 'Make your home a gym!',
	},
	{
		id: '2',
		image: bigButton2,
		title: 'Books',
		text: 'Literature, Hobby or Psychology?',
	},
];

function HomeScreen() {
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.categoriesList);

	useEffect(() => {
		dispatch(getCategoriesListAction(0));
	}, [dispatch]);

	return (
		<div className="homeScreen">
			<p className="homeScreen__mainCategoriesTitle">Product Categories</p>
			<div className="homeScreen__mainCategoriesCards">
				{categories?.map((subCategory) => {
					const { categoryId, name, links, color } = subCategory;
					return (
						<div key={categoryId}>
							<CategoryCard
								color={color}
								type="mainCategoryCard"
								categoryId={categoryId}
								name={name}
								image={
									categoryId === 1
										? technologyImage
										: categoryId === 2
										? houseGardenImage
										: categoryId === 3
										? fashionImage
										: categoryId === 4
										? hobbySportImage
										: categoryId === 5
										? healthBeautyImage
										: categoryId === 6
										? childrenBabiesImage
										: categoryId === 7
										? autoMotoImage
										: businessB2BImage
								}
								subCategories={links}
							/>
						</div>
					);
				})}
			</div>
			<div className="homeScreen__bigButtons">
				{bigButtons.map((bigButton) => {
					const { id, image, title, text } = bigButton;
					return (
						<Link key={id} to="/">
							<div
								style={{ backgroundImage: 'url(' + image + ')' }}
								className="homeScreen__bigButton"
							>
								<p className="homeScreen__bigButtonTitle">{title}</p>
								<span className="homeScreen__bigButtonText">{text}</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default HomeScreen;
