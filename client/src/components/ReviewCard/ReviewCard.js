import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ReviewCard.css';
import { deleteReviewAction } from '../../redux/actions/ReviewActions.js';
import { HashLink } from 'react-router-hash-link';

function ReviewCard({ item, type }) {
	const dispatch = useDispatch();
	const {
		_id,
		productId,
		productName,
		productImage,
		date,
		review,
		rating,
		userEmail,
	} = item;
	const [openText, setOpenText] = useState(false);
	const [modal, setModal] = useState(false);

	const removeHandler = (_id) => {
		dispatch(deleteReviewAction(_id));
	};
	return (
		<div className="reviewsScreen__content">
			{type === 'myReview' && (
				<p className="reviewsScreen__myReviewTitle">My review</p>
			)}
			<div className="reviewsScreen__product">
				{type !== 'myReview' && (
					<Link to={`/p/${productId}`}>
						<img className="reviewsScreen__productImage" src={productImage} />
					</Link>
				)}

				<div>
					<Link to={`/p/${productId}`}>
						<p className="reviewsScreen__productName">{productName}</p>
					</Link>
					<Rating
						className="reviewsScreen__productRating"
						name="hover-feedback"
						precision={0.5}
						value={rating}
						readOnly
						size="small"
					/>

					{type === 'myReview' ? (
						<div className="reviewsScreen__authorContainer">
							<p className="reviewsScreen__authtorEmail">{userEmail} </p>
							<HashLink
								className="reviewsScreen__authtorDate"
								to={`/p/${productId}#reviews`}
							>
								<p>
									at <span> {new Date(date).toLocaleDateString()}</span>
								</p>
							</HashLink>
						</div>
					) : (
						<HashLink to={`/p/${productId}#reviews`}>
							<p className="reviewsScreen__reviewDate">
								{' '}
								at {new Date(date).toLocaleDateString()}
							</p>
						</HashLink>
					)}
				</div>
				<MoreVertIcon
					onClick={() => setModal(!modal)}
					className="reviewsScreen__moreIcon"
				/>
				{modal && (
					<div className="reviewsScreen__setting">
						<Link to={`/account/reviews/${_id}/edit`}>
							<button>Editing</button>
						</Link>
						<button onClick={() => removeHandler(_id)}>Deletion</button>
					</div>
				)}
			</div>
			<div className="reviewsScreen__review">
				<p id={openText && 'moreText'}>{review}</p>
				{review?.length > 800 && (
					<button
						id={openText && 'moreTextButton'}
						className="reviewsScreen__moreTextButton"
						onClick={() => setOpenText(true)}
					>
						more
					</button>
				)}
			</div>
		</div>
	);
}
export default ReviewCard;
