import React from 'react';
import './UserSidebarMenu.css';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';

function SidebarUserMenu({ close, menuOptions }) {
	return (
		<div className="sidebarUserMenu">
			<CloseIcon
				className="sidebarUserMenu__closeIcon"
				onClick={() => close()}
			/>
			{menuOptions.map((option) => {
				const { id, title, subOptions } = option;
				return (
					<div key={id} className="sidebarUserMenu__menuOptions">
						<p className="sidebarUserMenu__optionTitle">{title}</p>
						<div className="sidebarUserMenu__subOptions">
							{subOptions.map((subOption) => {
								const { id, title, link } = subOption;
								return (
									<NavLink
										activeStyle={{ color: '#1c7ece' }}
										onClick={() => close(false)}
										key={id}
										className="sidebarUserMenu__subOption"
										to={link}
									>
										<p>{title}</p>
									</NavLink>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SidebarUserMenu;
