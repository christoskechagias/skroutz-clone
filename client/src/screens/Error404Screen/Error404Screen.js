import React from 'react';
import { Link } from 'react-router-dom';
import './Error404Screen.css';
import imageError404Image1 from '../../assets/Error404Image1.png';
import imageError404Image2 from '../../assets/Error404Image2.png';

function Error404Screen() {
	return (
		<div className="error404Screen">
			<div className="error404Screen__content">
				<p>You asked for something that no longer exists on Skroutz.gr</p>

				<Link to="/">Return to the home page</Link>
			</div>
			<img className="error404Screen__image1" src={imageError404Image1} />
			<img className="error404Screen__image2" src={imageError404Image2} />
		</div>
	);
}

export default Error404Screen;
