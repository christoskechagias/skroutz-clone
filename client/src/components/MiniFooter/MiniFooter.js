import React from 'react';
import { Link } from 'react-router-dom';
import './MiniFooter.css';
import logo2 from '../../assets/logo.svg';

const footerBlocks = [
	{ id: 1, img: logo2, link: '/' },
	{
		id: 2,
		img: 'https://i.ibb.co/CznxcKf/track.png',
		link: '',
		title: 'Quick delivery',
		text: 'through partner courier networks',
	},
	{
		id: 3,
		img: 'https://i.ibb.co/p3TNxCf/boxPNG.png',
		link: '/',
		title: 'Free returns',
		text: 'Learn more',
	},
	{
		id: 4,
		img: 'https://i.ibb.co/ysK1VX1/image.png',
		link: '',
		title: 'Support & Communication',
		text: 'we are here for anything you need',
	},
];
function MiniFooter() {
	return (
		<div className="miniFooter">
			<div style={{ backgroundColor: '#E8E8E8' }}>
				<div className="miniFooter__top">
					{footerBlocks.map((block) => {
						const { id, img, link, title, text } = block;
						return (
							<div key={id} className="miniFooter__block">
								{id === 1 ? (
									<Link to={link}>
										<img className="miniFooter__blockLogoIcon" src={img} />
									</Link>
								) : (
									<img className="miniFooter__blockIcon" src={img} />
								)}

								<div>
									<p>{title}</p>
									{link ? (
										<Link to={link}>
											<span className="miniFooter__blockLink">{text}</span>
										</Link>
									) : (
										<span className="miniFooter__blockText">{text}</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="miniFooter__bottom">
				<p>© 20 [0-9] {2} Skroutz SA All Rights and Lefts reserved.</p>
				<div className="miniFooter__bottomLinks">
					<a href="">FAQ - Terms of Use</a>|<a href="">Privacy Policy</a>|
					<a href="">Cookies</a>|<a href="">Contact</a>
				</div>
			</div>
		</div>
	);
}

export default MiniFooter;
