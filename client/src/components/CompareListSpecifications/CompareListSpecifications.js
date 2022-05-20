import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategorySpecificationsAction } from '../../redux/actions/CategoryActions';
import './CompareListSpecifications.css';
function CompareListSpecifications({ categoryId, productDetails, index }) {
	const dispatch = useDispatch();
	const { specificationsOfCategory } = useSelector(
		(state) => state.categorySpecifications
	);

	useEffect(() => {
		if (categoryId) {
			dispatch(getCategorySpecificationsAction(categoryId));
		}
	}, [dispatch, categoryId]);

	return (
		<table className="compareListSpecifications">
			{specificationsOfCategory?.groups.map((group) => {
				const { id, name } = group;
				const specification = specificationsOfCategory?.specifications?.filter(
					(item) => item.groupId === id
				);
				return (
					<>
						<tr key={id} id={index !== 0 && 'next'}>
							<td className="compareListSpecifications__title">{name}</td>
						</tr>
						{specification?.map((item) => {
							const { name, id } = item;
							const productSpecification = productDetails?.specifications?.find(
								(item) => item.specificationsId === id
							);

							return (
								<tr
									key={id}
									className="compareListSpecifications__groupTableRow"
								>
									<td>{name}</td>
									<td>{productSpecification?.value}</td>
								</tr>
							);
						})}
					</>
				);
			})}
		</table>
	);
}

export default CompareListSpecifications;
