import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductScreen.css';
import { getProductAction } from '../../redux/actions/ProductActions';
import Product from '../../components/Product/Product';
import { getCompareListAction } from '../../redux/actions/CompareListActions.js';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductSpecifications from '../../components/ProductSpecifications/ProductSpecifications';
import Reviews from '../../components/Reviews/Reviews.js';
import Scrollspy from 'react-scrollspy';
import { getCategorySpecificationsAction } from '../../redux/actions/CategoryActions';
import { Link } from 'react-router-dom';
import { getProductReviewsListAction } from '../../redux/actions/ReviewActions';

function ProductScreen(props) {
	const { productId } = props.match.params;
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { compareList } = useSelector((state) => state.compare);
	const { favoriteList } = useSelector((state) => state.favoriteList);
	const { success: successReview } = useSelector((state) => state.review);
	const { success: successVote } = useSelector((state) => state.vote);

	const { product, variations, details, loading } = useSelector(
		(state) => state.product
	);
	const { specificationsOfCategory } = useSelector(
		(state) => state.categorySpecifications
	);

	const favorite = (favoriteItem) => favoriteItem.favoriteItemId === productId;
	const compareItem = (compareItemId) => compareItemId === productId;

	useEffect(() => {
		dispatch(getProductAction(productId));
	}, [dispatch, productId, successReview]);

	useEffect(() => {
		dispatch(getProductReviewsListAction(productId));
	}, [dispatch, productId, successReview, successVote]);

	useEffect(() => {
		if (product) {
			dispatch(getCategorySpecificationsAction(product.categoryId));
		}
	}, [dispatch, product]);

	useEffect(() => {
		if (product && userInfo) {
			dispatch(getCompareListAction(userInfo._id, product.categoryId));
		}
	}, [dispatch, product, userInfo]);
	return (
		<div className="productScreen" id={loading && 'loadingScreen'}>
			<div className="productScreen__product">
				<Product
					userId={userInfo?._id}
					product={product}
					variations={variations}
					details={details}
					compareItem={compareList?.some(compareItem)}
					productId={productId}
					favorite={favoriteList?.some(favorite)}
					cartItem={cartItems?.find(
						(item) => item.product.productId === product?._id
					)}
				/>
			</div>
			<div className="productScreen__navigation">
				{/*<div style={{ borderBottom: '1px solid #F1F1F1' }}>
					<section className="sd" id="product">
						<div className="productScreen__productNavigationBar">
							<a href="#">
								<img src={product?.images?.main} />
							</a>
							<div>
								<a href="#">{product?.displayName}</a>
								<p>
									from <span> {product?.price} €</span>
								</p>
							</div>
						</div>
					</section>
				</div>*/}
				<Scrollspy
					className="productScreen__navigationBarLink"
					items={['description', 'specs', 'reviews']}
					currentClassName="activeLink"
				>
					<a className="productScreen__navLink" href="#description">
						Description
					</a>

					<a className="productScreen__navLink" href="#specs">
						Characteristics
					</a>

					{product?.numberOfReviews > 0 ? (
						<a className="productScreen__navLink" href="#reviews">
							Reviews{' '}
							<span className="productScreen__navHashLinkspan">
								({product?.numberOfReviews})
							</span>
						</a>
					) : (
						<div className="productScreen__navHashLink">
							<Link
								to={`/p/${productId}/addReview`}
								id="productScreen__reviewNavLink"
								className="productScreen__navLink"
							>
								Add review
							</Link>
						</div>
					)}
				</Scrollspy>
			</div>

			<section id="description" className="productScreen__section">
				<div style={{ backgroundColor: 'white' }}>
					<div className="productScreen__sectionTitle">Description</div>
				</div>
				<ProductDescription description={details?.description} />
			</section>
			<section id="specs" className="productScreen__section">
				<div style={{ backgroundColor: 'white' }}>
					<div className="productScreen__sectionTitle">Characteristics</div>
				</div>
				<ProductSpecifications
					specificationsOfProduct={details?.specifications}
					specificationsOfCategory={specificationsOfCategory}
				/>
			</section>
			<section id="reviews">
				<div style={{ backgroundColor: 'white' }}>
					<div className="productScreen__sectionTitle">Reviews</div>
				</div>
				<Reviews productId={productId} />
			</section>
		</div>
	);
}

export default ProductScreen;
