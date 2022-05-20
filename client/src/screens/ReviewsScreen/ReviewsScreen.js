import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReviewsListAction } from '../../redux/actions/ReviewActions.js';
import './ReviewsScreen.css';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

function ReviewsScreen() {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { listOfUserReviews, loading, error } = useSelector(
		(state) => state.userReviewsList
	);
	const { success } = useSelector((state) => state.review);

	useEffect(() => {
		dispatch(getUserReviewsListAction());
	}, [dispatch, success]);

	return (
		<div className="reviewsScreen">
			<p className="reviewsScreen__title">Products Reviews</p>
			{loading ? (
				<p>Loading</p>
			) : error ? (
				<p>Error</p>
			) : (
				<>
					{listOfUserReviews?.length > 0 ? (
						<>
							{listOfUserReviews?.map((review) => {
								const { reviewId } = review;
								return (
									<ReviewCard
										key={reviewId}
										item={review}
										userInfo={userInfo}
									/>
								);
							})}
						</>
					) : (
						<p className="reviewsScreen__text">
							Here are all the product reviews you have made.
							<br /> You have not evaluated a product at this time.
							<br />
							You can share your impressions of some products with other Skroutz
							users by writing a review on the product page.
						</p>
					)}
				</>
			)}
		</div>
	);
}

export default ReviewsScreen;
