import React from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard({ image, name, categoryId, type, color, subCategories }) {
	return (
		<>
			<div className={type} style={{ backgroundColor: color }}>
				<div className={`${type}__images`}>
					<Link to={`/c/${categoryId}`}>
						<img className={`${type}__image`} src={image} />
					</Link>
				</div>
				<div className={`${type}__info`}>
					<Link to={`/c/${categoryId}`} className={`${type}__title`}>
						<p>{name}</p>
					</Link>
					<div className={`${type}__subCategories`}>
						{subCategories?.map((subCategory) => {
							const { categoryId, name, path } = subCategory;
							return (
								<Link
									key={categoryId}
									className={`${type}__subCategory`}
									to={categoryId > 8 ? `/c/${categoryId}` : path}
								>
									{name}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default CategoryCard;
