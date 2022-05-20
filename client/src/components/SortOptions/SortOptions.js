import { useEffect, useRef, useState } from 'react';
import './SortOptions.css';
import { TiArrowSortedUp } from 'react-icons/ti';
import { TiArrowSortedDown } from 'react-icons/ti';
function SortOptions({ sortOptions, typeOfSort, componentType }) {
	const ref = useRef();
	const [openSortMenu, setOpenSortMenu] = useState(false);
	const [sortOption, setSortOption] = useState(sortOptions[0]);

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (openSortMenu && ref.current && !ref.current.contains(e.target)) {
				setOpenSortMenu(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [openSortMenu]);
	return (
		<div className="sortOptions__menu" id={`${componentType}__menu`} ref={ref}>
			<button
				className="sortOptions__select"
				onClick={() => setOpenSortMenu(!openSortMenu)}
				id={openSortMenu && 'openSortMenu'}
			>
				{sortOption.title}
				{!openSortMenu ? (
					<TiArrowSortedDown className="sortOptions__selectSortArrowIcon" />
				) : (
					<TiArrowSortedUp className="sortOptions__selectSortArrowIcon" />
				)}
			</button>
			{openSortMenu && (
				<div className="sortOptions__options" id={`${componentType}__options`}>
					{sortOptions?.map((option) => {
						const { id, title } = option;
						return (
							<>
								{id != sortOption.id && (
									<button
										key={id}
										onClick={() => {
											setSortOption(option);
											setOpenSortMenu(false);
											typeOfSort(option);
										}}
									>
										{title}
									</button>
								)}
							</>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SortOptions;
