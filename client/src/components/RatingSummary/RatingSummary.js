import React from 'react';
import './RatingSummary.css';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';

function RatingSummary({ userReview }) {
	const { product, loading } = useSelector((state) => state.product);
	const history = useHistory();
	const stars = [
		{ id: 5, title: '5 stars', value: product?.stars[5] },
		{ id: 4, title: '4 stars', value: product?.stars[4] },
		{ id: 3, title: '3 stars', value: product?.stars[3] },
		{ id: 2, title: '2 stars', value: product?.stars[2] },
		{ id: 1, title: '1 stars', value: product?.stars[1] },
	];

	return (
		<div>
			{loading ? (
				<p>Loading</p>
			) : (
				<div className="ratingSummary">
					<div className="ratingSummary__average">
						<p className="ratingSummary__averageOfRating">
							{product?.averageOfRating.toFixed(1)}
						</p>
						<div className="ratingSummary__rating">
							<Rating
								name="hover-feedback"
								precision={0.5}
								value={product?.averageOfRating}
								readOnly
								size="medium"
							/>
							<p>({product?.numberOfReviews})</p>
						</div>

						<Link
							to={`/p/${product?._id}/addReview`}
							id={userReview && 'notDisplayAddReviewButton'}
							className="ratingSummary__addReviewButton"
							onClick={() => history.push('/login')}
						>
							Review the product
						</Link>
					</div>
					<div className="ratingSummary__ratingBar">
						{stars.map((star) => {
							const { id, title, value } = star;
							return (
								<div key={id} className="ratingSummary__breakdown">
									<p className="ratingSummary__numberOfStars">{title}</p>
									<Slider
										className="ratingSummary__chart"
										min={0}
										max={product?.numberOfReviews}
										value={value}
									/>
									<p className="ratingSummary__numberOfReview">{value}</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default RatingSummary;
