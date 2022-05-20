import React, { useEffect } from 'react';
import { Avatar as AvatarIcon } from '@material-ui/core';
import './Avatar.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAvatarAction,
	getEmailAction,
} from '../../redux/actions/UserSettingsActions';
function Avatar({ component }) {
	const dispatch = useDispatch();
	const { avatarIcon } = useSelector((state) => state.avatar);
	const { userEmail } = useSelector((state) => state.email);

	useEffect(() => {
		dispatch(getAvatarAction());
		dispatch(getEmailAction());
	}, [dispatch]);

	return (
		<AvatarIcon className={`${component}__avatarIcon`}>
			{avatarIcon ? <img src={avatarIcon} /> : <p>{userEmail?.[0]}</p>}
		</AvatarIcon>
	);
}

export default Avatar;
