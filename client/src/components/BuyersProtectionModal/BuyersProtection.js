import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuyersProtection.css';
import { AiOutlineSafety } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';

const buyerProtectionTooltips = [
	{
		id: 1,
		title: 'Money back guarantee',
	},
	{
		id: 2,
		title: 'Free returns',
	},
	{
		id: 3,
		title: 'Ongoing support',
	},
	{
		id: 4,
		title: 'Secure payments',
	},
];

function BuyersProtection() {
	return (
		<div className="buyersProtection">
			<AiOutlineSafety className="buyersProtection__icon" />
			<div className="buyersProtection__content">
				<p className="buyerProtection__title">Skroutz shopping security</p>
				<p className="buyerProtection__text">
					We guarantee that you will receive your order or get your money back.
					<Dropdown className="buyerProtection__button">
						<Dropdown.Toggle>More</Dropdown.Toggle>

						<Dropdown.Menu>
							<div className="buyerProtection__modal">
								{buyerProtectionTooltips.map((tooltip) => {
									const { id, title } = tooltip;
									return (
										<ul key={id} className="buyerProtection__modalul">
											<li>{title}</li>
										</ul>
									);
								})}
								<div className="buyerProtection__modalLink">
									<Link to="/buyers_protection_program">See in details</Link>
								</div>
							</div>
						</Dropdown.Menu>
					</Dropdown>
				</p>
			</div>
		</div>
	);
}

export default BuyersProtection;
