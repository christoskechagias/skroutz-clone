import React, { useState, useEffect } from 'react';
import './AddReviewScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { addReviewAction } from '../../redux/actions/ReviewActions';
import Rating from '@material-ui/lab/Rating';
import { getProductAction } from '../../redux/actions/ProductActions';
import { Link, useHistory } from 'react-router-dom';

const rateOptions = [
	{ id: 1, title: 'Bad' },
	{ id: 2, title: 'Moderate' },
	{ id: 3, title: 'Good' },
	{ id: 4, title: 'Very Good' },
	{ id: 5, title: 'Excellent' },
];
function AddReviewScreen(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const { productId } = props.match.params;
	const { product, loading } = useSelector((state) => state.product);
	const [review, setReview] = useState('');

	useEffect(() => {
		dispatch(getProductAction(productId));
	}, [dispatch, productId]);

	const [hoverStar, setHoverStar] = useState(3);
	const [stars, setStars] = useState(3);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(addReviewAction(product._id, stars, review));
		history.replace(`/p/${productId}`);
	};

	return (
		<form className="addReviewScreen" onSubmit={submitHandler}>
			<div className="reviews__productImage">
				<img src={product?.images?.main} />
			</div>
			<div className="rating__sections">
				<p className="reviews__productName">
					Rate the <Link to={`/p/${productId}`}>{product?.name}</Link>
				</p>
				<div className="rating__starSection">
					<p className="rating__sectionTitle">Add rate:</p>
					<div className="rating__stars">
						<Rating
							value={stars}
							name="hover-feedback"
							onChange={(event, newValue) => {
								setStars(newValue);
							}}
							onChangeActive={(event, newHover) => {
								setHoverStar(newHover);
							}}
							size="large"
						/>

						<p>
							{rateOptions[hoverStar - 1]
								? rateOptions[hoverStar - 1].title
								: rateOptions[stars - 1].title}
						</p>
					</div>
				</div>
				<div className="rating__commentSection">
					<p className="rating__sectionTitle">Add a comment:</p>
					<textarea
						required
						placeholder="Leave a comment"
						onChange={(e) => setReview(e.target.value)}
					/>
				</div>
				<div className="addReviewScreen__publicationButton">
					<button type="submit">Publication</button>
				</div>
			</div>
		</form>
	);
}

export default AddReviewScreen;
