import React from 'react';
import './Footer.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo2 from '../../assets/logo.svg';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillApple } from 'react-icons/ai';

const cards = [
	{
		id: 1,
		link: '/',
		image: logo2,
	},
	{
		id: 2,
		image: <IoStorefrontSharp className="footer__storeIcon" />,
		link: '',
		title: 'Find a store',
		text: '10.000 stores participating in Skroutz',
	},
	{
		id: 3,
		image: <BsQuestionCircleFill className="footer__messageIcon" />,
		link: '',
		title: 'Skroutz cart help',
		text: 'How can we help?',
	},
];
const columns = [
	{
		id: 1,
		title: 'Categories',

		firstColumnCategory: [
			{ link: '/c/1', title: 'Technology' },
			{ link: '/c/2', title: 'House - Garden' },
			{ link: '/c/3', title: 'Fashion' },
			{ link: '/c/4', title: 'Hobby - Sports' },
			{ link: '/c/5', title: 'Health - Beauty' },
		],
		secondColumnCategory: [
			{ link: '/c/6', title: 'Children - Babies' },
			{ link: '/c/7', title: 'Auto - Moto' },
			{ link: '/c/8', title: 'Business - B2B' },
			{ link: '/offers', title: 'Offers' },
		],
	},
	{
		id: 2,
		title: 'Collaborators',
		rows: [
			{
				title: 'Do you have an e-shop?',
				text: 'See how you can increase youe sales',
				link: '',
			},
			{
				title: 'Are you a merchant and do not have an e-shop?',
				text: 'Start selling directly through Skroutz, without having to create an e-shop!',
				link: '',
			},
			{
				title: 'Are you a programmer?',
				text: 'Find everything you need to connect to Skroutz',
				link: '',
			},
		],
	},
	{
		id: 3,
		title: 'Skroutz basket',
		rows: [
			{
				title: 'Basket advantages',
				text: 'See the benefits of the Skroutz Shopping Cart.',
				link: '',
			},
			{
				title: 'Skroutz shopping security',
				text: 'Money back guarantee, free refunds and ongoing support for Skroutz purchases.',
				link: '',
			},
			{
				title: 'Returns policy',
				text: 'Learn about return and how to make a return request for purchases via Skroutz.',
				link: '',
			},
		],
	},
	{
		id: 4,
		title: 'Company',
		rows: [
			{
				title: 'Blog @ Skroutz',
				text: "Learn about the company's DNA, meet the team and discover our blog.",
				link: '',
			},
			{
				title: 'Work @ Skroutz',
				text: 'Join our team. See all vacancies.',
				link: '',
			},
			{
				title: 'Vulnearability Disclosure @ Skroutz',
				text: 'Learn about Skroutz Cyber Security Reporting Pogram.',
				link: '',
			},
		],
	},
];
const skroutzit = [
	{
		title: 'Connect with us',
		icons: [
			{
				image: <AiFillFacebook className="footer__facebookIcon" />,

				link: 'https://www.facebook.com',
			},
			{
				image: <AiOutlineTwitter className="footer__twitterIcon" />,

				link: 'https://twitter.com',
			},
			{
				image: <AiFillInstagram className="footer__instagramIcon" />,
				link: 'https://www.instagram.com',
			},
		],
	},
	{
		title: 'Skroutz Apps',
		icons: [
			{
				image: <AiFillApple className="footer__appleStoreIcon" />,
				link: 'https://apps.apple.com',
			},
			{
				image: (
					<img
						className="footer__googlePlayStoreIcon"
						src="https://i.ibb.co/hyQpxcL/google-play-icon-icons-com-72023.png"
					/>
				),
				link: 'https://play.google.com',
			},
		],
	},
];

function Footer() {
	const location = useLocation();
	let type = '';
	if (location.pathname === '/login' || location.pathname === '/register') {
		type = 'no';
	}

	return (
		<div className={`${type}Footer`}>
			<div style={{ backgroundColor: '#e8e8e8' }}>
				<div className="footer__top">
					{cards.map((card) => {
						const { id, image, title, text, link } = card;
						return (
							<a href={link} key={id} className="footer__card">
								{id === 1 ? (
									<img className="footer__logo" src={image} alt="" />
								) : (
									image
								)}
								<div>
									<p className="footer__cardTitle">{title}</p>
									<p className="footer__cardText">{text}</p>
								</div>
							</a>
						);
					})}
				</div>
			</div>
			<div className="footer__content">
				<div className="footer__categories">
					{columns.map((column) => {
						const {
							id,
							rows,
							title,
							firstColumnCategory,
							secondColumnCategory,
						} = column;
						return (
							<div key={id} className="footer__column">
								<p className="footer__columnTitle">{title}</p>
								{id === 1 ? (
									<div id="category" className="footer__contentColumn">
										<div className="footer__categoriesLinksFirstColumn">
											{firstColumnCategory.map((column, index) => {
												const { link, title } = column;
												return (
													<Link to={link} key={index}>
														<p>{title}</p>
													</Link>
												);
											})}
										</div>
										<div className="footer__categoriesLinksSecondColumn">
											{secondColumnCategory.map((column, index) => {
												const { link, title } = column;
												return (
													<Link to={link} key={index}>
														<p>{title}</p>
													</Link>
												);
											})}
										</div>
									</div>
								) : (
									<>
										{rows.map((row, index) => {
											const { title, link, text } = row;
											return (
												<div key={index}>
													<p className="footer__contentRowTitle">{title}</p>
													<a href={link} className="footer__contentRowText">
														{text}
													</a>
												</div>
											);
										})}
									</>
								)}
							</div>
						);
					})}
				</div>

				<div className="footer__skroutzit">
					{skroutzit.map((items, index) => {
						const { title, icons } = items;
						return (
							<div key={index} className="footer__skroutzitColumn">
								<p>{title}</p>
								<div className="footer__skroutzitIcons">
									{icons.map((item, index) => {
										const { image, link } = item;
										return (
											<a key={index} href={link}>
												{image}
											</a>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className="footer__policy">
					<p>© 20 [0-9] {2} Skroutz. All Rights and Lefts reserved.</p>
					<div className="footer__policyLinks">
						<a href="">FAQ - Terms of Use</a>|<a href="">Privacy Policy</a>|
						<a href="">Cookies</a>|<a href="">Contact</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
