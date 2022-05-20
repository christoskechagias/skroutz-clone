import React from 'react';
import RatingSummary from '../RatingSummary/RatingSummary.js';
import ReviewsList from '../ReviewsList/ReviewsList.js';
import { useSelector } from 'react-redux';
import './Reviews.css';
function Reviews() {
	const { userInfo } = useSelector((state) => state.userLogin);
	const { reviews } = useSelector((state) => state.productReviewsList);
	const { user } = useSelector((state) => state.user);

	const userReview = reviews?.find(
		(review) => review?.userId === userInfo?._id
	);

	return (
		<div className="reviews">
			<div className="reviews__ratingSummary">
				<RatingSummary userReview={userReview} />
			</div>
			<div className="reviews__reviewsList">
				<ReviewsList
					userReview={userReview}
					reviews={reviews}
					userInfo={userInfo}
					user={user}
				/>
			</div>
		</div>
	);
}

export default Reviews;
