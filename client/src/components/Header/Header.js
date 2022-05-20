import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCartAction } from '../../redux/actions/CartActions';
import logo from '../../assets/logo.svg';
import Avatar from '../Avatar/Avatar';
import { BsPerson } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import AvatarDropdownMenu from '../AvatarDropdownMenu/AvatarDropdownMenu';
import CartDropdownMenu from '../CartDropdownMenu/CartDropdownMenu';
import NotificationsDropdownMenu from '../NotificationsDropdownMenu/NotificationsDropdownMenu';
import { BsCart2 } from 'react-icons/bs';
import cartEdit2 from '../../assets/cartEdit2.svg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoNotificationsSharp } from 'react-icons/io5';
import Search from '../Search/Search';

function Header() {
	const history = useHistory();
	const location = useLocation();
	let type = 'simplePage';
	if (
		location.pathname === '/checkout/details' ||
		location.pathname === '/checkout/payment' ||
		location.pathname === '/login' ||
		location.pathname === '/register'
	) {
		type = 'no';
	} else if (location.pathname === '/') {
		type = 'homePage';
	}

	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { cartItems } = useSelector((state) => state.cart);
	const [openCartDropdownMenu, setOpenCartDropdownMenu] = useState(false);
	const [openNotificationsDropdownMenu, setOpenNotificationsDropdownMenu] =
		useState(false);
	const [openPersonDropdownMenu, setOpenPersonDropdownMenu] = useState(false);

	useEffect(() => {
		if (userInfo) {
			dispatch(getCartAction(userInfo._id));
		}
	}, [dispatch, userInfo]);

	return (
		<div className={`${type}Header`}>
			<div className={`${type}Header__content`}>
				<div className={`${type}Header__userActions`}>
					<div className="header__cart">
						{cartItems?.length > 0 && (
							<span className="header__cartQuantity">{cartItems?.length}</span>
						)}

						<Dropdown onToggle={(e) => setOpenCartDropdownMenu(e)}>
							<Dropdown.Toggle
								className="header__dropdownToggle"
								id={openCartDropdownMenu && 'dropdownToggleCartIcon'}
							>
								<img
									src={cartEdit2}
									style={{ width: '25px' }}
									alt="React Logo"
									className="cartIconHover"
								/>

								<BsCart2 className="cartIconNonHover" />
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<div className="header__cartDropDownMenu">
									<CartDropdownMenu
										userId={userInfo?._id}
										cartItems={cartItems}
									/>
								</div>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					{user?.type === 'registered' ? (
						<>
							<div className="header__notifications">
								<Dropdown onToggle={(e) => setOpenNotificationsDropdownMenu(e)}>
									<Dropdown.Toggle
										className="header__dropdownToggle"
										id={
											openNotificationsDropdownMenu &&
											'dropdownToggleNotificationsIcon'
										}
									>
										<IoNotificationsSharp className="notificationIconHover" />
										<IoNotificationsOutline className="notificationIconNonHover" />
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<div className="header__notificationsDropDownMenu">
											<NotificationsDropdownMenu />
										</div>
									</Dropdown.Menu>
								</Dropdown>
							</div>

							<div className="header__avatar">
								<Dropdown>
									<Dropdown.Toggle className="header__dropdownToggle">
										<Avatar component="header" />
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<div className="header__avatarDropDownMenu">
											<AvatarDropdownMenu />
										</div>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</>
					) : (
						<>
							<button
								className="header__loginButton"
								onClick={() => history.push('/login')}
							>
								Login
							</button>
							<button
								className="header__registerButton"
								onClick={() => history.push('/register')}
							>
								Register
							</button>

							<div className="header__personButton">
								<Dropdown onToggle={(e) => setOpenPersonDropdownMenu(e)}>
									<Dropdown.Toggle
										className="header__dropdownToggle"
										id={openPersonDropdownMenu && 'dropdownTogglePersonIcon'}
									>
										<BsFillPersonFill className="personIconHover" />
										<BsPerson className="personIconNonHover" />
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<div className="header__personDropdownMenu">
											<Dropdown.Item onClick={() => history.push('/login')}>
												<p>Login</p>
											</Dropdown.Item>
											<Dropdown.Item onClick={() => history.push('/register')}>
												<p>Become a member</p>
											</Dropdown.Item>
										</div>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</>
					)}
				</div>

				<div className={`${type}Header__logoAndSearch`}>
					<Link to="/">
						<img className={`${type}Header__logo`} src={logo} />
					</Link>
					<div className={`${type}Header__search`}>
						<Search />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
