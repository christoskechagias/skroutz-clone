import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVoteAction } from '../../redux/actions/ReviewActions.js';
import './ReviewsList.css';
import { Avatar as AvatarIcon } from '@material-ui/core';
import SortOptions from '../SortOptions/SortOptions';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useHistory } from 'react-router-dom';

const sortOptions = [
	{ id: 1, title: 'More useful' },
	{ id: 2, title: 'More recent' },
];
function ReviewsList({ reviews, userReview, userInfo, user }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const [sortOption, setSortOption] = useState(sortOptions[0]);

	return (
		<>
			{userReview && (
				<div className="reviewsList__reviewCard">
					<ReviewCard item={userReview} type="myReview" />
				</div>
			)}

			{reviews?.length > 1 && (
				<div className="reviewsList__sort">
					<SortOptions
						sortOptions={sortOptions}
						typeOfSort={(option) => setSortOption(option)}
						componentType="reviews"
					/>
				</div>
			)}
			{reviews
				?.sort((reviewA, reviewB) =>
					sortOption.id === 1
						? reviewA.usefulVotes < reviewB.usefulVotes
							? 1
							: -1
						: sortOption.id === 2 && (reviewA.date > reviewB.date ? -1 : 1)
				)
				?.map((item) => {
					const {
						userId,
						_id,
						userEmail,
						date,
						rating,
						review,
						avatar,
						usefulVotes,
						unusefulVotes,
					} = item;

					return (
						<>
							{userId !== userReview?.userId && (
								<div key={_id} className="reviewsList">
									<div className="reviewsList__content">
										<div className="reviewsList__userSection">
											<AvatarIcon>
												{avatar ? <img src={avatar} /> : userEmail[0]}
											</AvatarIcon>
											<div className="reviewsList__user">
												<div className="reviewsList__rating">
													<Rating readOnly value={rating} size="small" />
													<p>
														{usefulVotes.length} in{' '}
														{usefulVotes.length + unusefulVotes.length} users
														found it helpful
													</p>
												</div>
												<p className="reviewsList__userEmail">
													{userEmail}{' '}
													<span> at {new Date(date).toLocaleDateString()}</span>
												</p>
											</div>
										</div>
										<p className="reviewsList__review">{review}</p>
									</div>
									<div className="reviewsList__helpfullVote">
										<p>Did you find it useful?</p>
										<button
											id={
												usefulVotes.some(
													(userId) => userId === userInfo?._id
												) && 'reviewsList__selectedOption'
											}
											onClick={() => {
												{
													user?.type === 'registered'
														? dispatch(addVoteAction(_id, 'yes'))
														: history.push('/login');
												}
											}}
										>
											Yes
										</button>
										<button
											id={
												unusefulVotes.some(
													(userId) => userId === userInfo?._id
												) && 'reviewsList__selectedOption'
											}
											onClick={() => {
												user?.type == 'registered'
													? dispatch(addVoteAction(_id, 'no'))
													: history.push('/login');
											}}
										>
											No
										</button>
									</div>
								</div>
							)}
						</>
					);
				})}
		</>
	);
}

export default ReviewsList;
