import React from 'react';
import './BuyersProtectionProgramScreen.css';
const secondRow = [
	{
		image:
			'https://d.scdn.gr/assets/schwartz/ecommerce/bpp-page/change_mind-47f2892a2d15c345df2172352a0170ce.svg',
		title: 'I changed my mind',
		text: 'You can cancel your order at any time. This can be done through your account or by contacting us. In any case, we guarantee that you will get your money back in full.',
	},
	{
		image:
			'https://c.scdn.gr/assets/schwartz/ecommerce/bpp-page/package_cancel-46a85c4dadf3289a4cf0f328d997f5d8.svg',
		title: 'I received the wrong product',
		text: 'You can return the products you buy through Skroutz within 14 days from the date of receipt to their original condition without any charge.',
	},
	{
		image:
			'https://a.scdn.gr/assets/schwartz/ecommerce/bpp-page/package_warning-0e7a26ede0df22e1f6b7738988b2708a.svg',
		title: 'My product is defective',
		text: 'Did you find a defect in a product of your order? For 6 months after receipt, we return the full amount of the value of the product, after the defect is confirmed.',
	},
];

function BuyersProtectionProgramScreen() {
	return (
		<div className="buyersProtectionProgramScreen">
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: '#f8f8f8',
				}}
			>
				<div className="buyersProtectionProgramScreen__firstRow">
					<img
						className="buyersProtectionProgramScreen__firstRowImage"
						src="https://c.scdn.gr/assets/schwartz/ecommerce/bpp-page/bpp-logo-bf53711bd3e5741ebe6e1635dd70ef9a.svg"
					/>
					<p className="buyersProtectionProgramScreen__firstRowTitle">
						Skroutz Shopping Security
					</p>
					<p className="buyersProtectionProgramScreen__firstRowText">
						Buy from Skroutz Cart the products you want and we guarantee that
						you will receive your order or get your money back.
					</p>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: '#FFFFFF',
				}}
			>
				<div className="buyersProtectionProgramScreen__secondRow">
					<div className="buyersProtectionProgramScreen__secondRowTop">
						<p className="buyersProtectionProgramScreen__secondRowTopTitle">
							Money back guarantee
						</p>
						<p className="buyersProtectionProgramScreen__secondRowTopText">
							If for any reason you want to cancel your order before receiving
							it or return a product, you can request a refund *. In this case,
							your money is refunded immediately and quickly.
						</p>
					</div>
					{secondRow.map((row) => {
						const { image, title, text } = row;
						return (
							<div className="buyersProtectionProgramScreen__secondRowBottom">
								<img
									className="buyersProtectionProgramScreen__secondRowBottomImage"
									src={image}
								/>
								<div>
									<p className="buyersProtectionProgramScreen__secondRowBottomTitle">
										{title}
									</p>
									<p className="buyersProtectionProgramScreen__secondRowBottomText">
										{text}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div
				style={{
					backgroundColor: '#f8f8f8',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div className="buyersProtectionProgramScreen__thirdRow">
					<div>
						<p className="buyersProtectionProgramScreen__thirdRowTitle">
							Free Returns
						</p>
						<p className="buyersProtectionProgramScreen__thirdRowText">
							If you received the wrong or defective product or if you just
							changed your mind, the return process is free *, extremely simple
							and immediate. Skroutz covers all the costs of returning and
							resending the order in case you want a product replacement.
						</p>
					</div>
					<img
						className="buyersProtectionProgramScreen__thirdRowImage"
						src="https://c.scdn.gr/assets/schwartz/ecommerce/bpp-page/truck-free-returns-0f1a1a6de6c1b930baafdb9e66e56db5.svg"
					/>
				</div>
			</div>
			<div
				style={{
					backgroundColor: '#FFFFFF',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div className="buyersProtectionProgramScreen__fourthRow">
					<div>
						<p className="buyersProtectionProgramScreen__fourthRowTitle">
							Continuous Service
						</p>
						<p className="buyersProtectionProgramScreen__fourthRowText">
							The Skroutz team is with you throughout the purchase process and
							beyond. From the moment you place the order, we know and control
							every step of your package until it reaches your hands. Even after
							you receive the package, we are by your side providing the best
							possible support to solve any question or problem that may arise.
						</p>
					</div>
					<img
						className="buyersProtectionProgramScreen__fourthRowImage"
						src="https://a.scdn.gr/assets/schwartz/ecommerce/bpp-page/continuous-support-c79edb6d6343538d7e79cb4050f010e2.svg"
					/>
				</div>
			</div>
			<div
				style={{
					backgroundColor: '#f8f8f8',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div className="buyersProtectionProgramScreen__fifthRow">
					<div>
						<p className="buyersProtectionProgramScreen__fifthRowTitle">
							Secure payments
						</p>
						<p className="buyersProtectionProgramScreen__fifthRowText">
							At Skroutz we strictly adhere to international electronic security
							regulations. This way your card details are always secure. When
							you choose to save the card, for convenience in your next
							purchases, the data are safely stored in the partner bank.
						</p>
					</div>
					<img
						className="buyersProtectionProgramScreen__fifthRowImage"
						src="https://a.scdn.gr/assets/schwartz/ecommerce/bpp-page/secure-payments-cf2f0a02659d9d94fa71cb1a7668fe31.svg"
					/>
				</div>
			</div>
		</div>
	);
}

export default BuyersProtectionProgramScreen;
