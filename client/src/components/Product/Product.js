import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import BuyersProtectionModal from '../BuyersProtectionModal/BuyersProtection';
import './Product.css';
import CompareIcon from '../CompareIcon/CompareIcon.js';
import { IoCartOutline } from 'react-icons/io5';
import { addToCartAction } from '../../redux/actions/CartActions';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { NavHashLink } from 'react-router-hash-link';
import TimerIcon from '@material-ui/icons/Timer';
import { FiTruck } from 'react-icons/fi';
import CompareAlertMessage from '../CompareAlertMessage/CompareAlertMessage';

function Product({
	userId,
	product,
	details,
	variations,
	compareItem,
	favorite,
	cartItem,
}) {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState();

	useEffect(() => {
		if (product) {
			setSelectedImage(product.images.main);
		}
	}, [product]);

	const addToCartHandler = () => {
		dispatch(addToCartAction(userId, product._id, cartItem?.quantity + 1 || 1));
	};

	return (
		<div className="product">
			<div className="product__icons">
				<FavoriteIcon
					userId={userId}
					productId={product?._id}
					favorite={favorite}
				/>
				<div className="product__compareIcon">
					<CompareIcon
						userId={userId}
						productId={product?._id}
						categoryId={product?.categoryId}
						compareItem={compareItem}
					/>
				</div>
			</div>
			<CompareAlertMessage
				productId={product?._id}
				categoryId={product?.categoryId}
			/>
			<div className="product__images">
				<div className="product__alternativesImages">
					<img
						id={
							selectedImage === product?.images?.main &&
							'selectedAlternativeImage'
						}
						className="product__alternativeImage"
						onClick={() => setSelectedImage(product?.images?.main)}
						src={product?.images?.main}
						alt=""
					/>
					{product?.images?.alternatives.map((image, index) => {
						return (
							<img
								key={index}
								id={selectedImage === image && 'selectedAlternativeImage'}
								className="product__alternativeImage"
								onClick={() => setSelectedImage(image)}
								src={image}
								alt=""
							/>
						);
					})}
				</div>
				<img className="product__imageView" src={selectedImage} alt="" />
			</div>
			<div className="product__details">
				<p className="product__name">{product?.displayName}</p>
				<div className="product__mainSpecs">
					<p>Key Features</p>
					<div className="product__mainSpecsList">
						<ul>
							<li>{details?.mainSpecs?.[0]}</li>
							<li>{details?.mainSpecs?.[1]}</li>
						</ul>
						<ul>
							<li>{details?.mainSpecs?.[2]}</li>
							<li>{details?.mainSpecs?.[3]}</li>
						</ul>
					</div>
				</div>
				<p className="product__description">{details?.plain_spec_summary}</p>
				<NavHashLink to="#description" className="product__descriptionLink">
					See the full description
				</NavHashLink>
				{variations?.length > 1 && (
					<div className="product__variations">
						<p className="product__variationsTitle">Colour:</p>
						<div className="product__variationsList">
							{variations?.map((item) => {
								const { variationId, variationImage, variationPrice } = item;
								return (
									<NavLink
										key={variationId}
										activeStyle={{
											border: '1px solid #1c7ece',
											borderRadius: '5px',
										}}
										to={`/p/${variationId}`}
										className="product__variationsListProductLink"
									>
										<img src={variationImage} alt="" />
										<span>from</span>
										<p>{variationPrice?.toFixed(2)} €</p>
									</NavLink>
								);
							})}
						</div>
					</div>
				)}
				<div className="product__cartInfo">
					<div className="product__cartInfoSection">
						<TimerIcon className="product__icon" />
						<p>
							Delivery:<span> 1 to 3 days</span>
						</p>
					</div>
					<div className="product__cartInfoSection">
						<FiTruck className="product__icon" />
						<p>
							Shipping:<span> +2,00 €</span>
						</p>
					</div>
				</div>
				{cartItem?.quantity === 5 && (
					<Link to="/cart" className="product__max5product">
						You have added to your cart the maximum purchase quantity{' '}
						<b>(5) </b>for this product.
					</Link>
				)}
				<div className="product__addToCart">
					<button
						className="product__buyFromSkroutzButton"
						id={cartItem?.quantity === 5 && 'disabledAddToCartButton'}
						disabled={cartItem?.quantity === 5}
						onClick={() => {
							addToCartHandler();
						}}
					>
						Buy through Skroutz from {product?.price?.toFixed(2)} €{' '}
					</button>
					{cartItem?.quantity >= 1 && (
						<Link to="/cart" className="product__cartLink">
							<IoCartOutline className="product__cartLinkIcon" />
							<p className="product__cartQuantity">{cartItem?.quantity}</p>
						</Link>
					)}
				</div>
				<BuyersProtectionModal />
			</div>
		</div>
	);
}

export default Product;
