import Rating from '@material-ui/lab/Rating';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	getReviewAction,
	updateReviewAction,
} from '../../redux/actions/ReviewActions.js';
const rateOptions = [
	{ id: 1, title: 'Bad' },
	{ id: 2, title: 'Moderate' },
	{ id: 3, title: 'Good' },
	{ id: 4, title: 'Very Good' },
	{ id: 5, title: 'Excellent' },
];

function EditReviewScreen(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const reviewId = props.match.params.reviewId;
	const { userReview } = useSelector((state) => state.review);
	const [hoverStar, setHoverStar] = useState(null);
	const [rating, setRating] = useState(null);
	const [review, setReview] = useState('');

	useEffect(() => {
		if (reviewId) {
			dispatch(getReviewAction(reviewId));
		}
	}, [dispatch, reviewId]);

	useEffect(() => {
		if (userReview) {
			setRating(userReview.rating);
			setHoverStar(userReview.rating);
			setReview(userReview.review);
		}
	}, [userReview]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateReviewAction(reviewId, rating, review));
		history.replace('/account/reviews');
	};

	return (
		<div className="editReviewScreen">
			<p> Evaluation processing {userReview?.productName}</p>
			<form onSubmit={submitHandler}>
				<div className="rating__stars">
					<Rating
						value={rating}
						name="hover-feedback"
						onChange={(event, newValue) => {
							setRating(newValue);
						}}
						onChangeActive={(event, newHover) => {
							setHoverStar(newHover);
						}}
						size="large"
					/>

					<p>
						{rateOptions[hoverStar - 1]
							? rateOptions[hoverStar - 1]?.title
							: rateOptions[rating - 1]?.title}
					</p>
				</div>
				<textarea value={review} onChange={(e) => setReview(e.target.value)} />
				<button type="submit">Update</button>
			</form>
		</div>
	);
}

export default EditReviewScreen;
