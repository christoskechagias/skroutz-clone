import React from 'react';
import './Search.css';

import { BiSearch } from 'react-icons/bi';

function Search() {
	return (
		<div className="search">
			<input
				className="search__input"
				type="text"
				placeholder="Enter the search term"
			/>
			<button className="search__button">
				<BiSearch />
			</button>
		</div>
	);
}

export default Search;
