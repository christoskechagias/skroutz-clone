import React from 'react';
import './ProductDescription.css';
function ProductDescription({ description }) {
	return (
		<div className="productDescription">
			<div className="productDescription__content">
				{description?.[0].youtubeLink && (
					<div className="productDescription__youtubeVideo">
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${description?.[0].youtubeLink}`}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				)}
				<div className="productDescription__rows">
					{description?.map((row, index) => {
						const { title, text, image } = row;
						return (
							<div key={index} className="productDescription__row">
								<div className="productDescription__rowContent">
									<p className="productDescription__rowTitle">{title}</p>
									<p className="productDescription__rowText">{text}</p>
								</div>
								<div className="productDescription__rowImage">
									<img src={image} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductDescription;
