import React from 'react';
import './ProductSpecifications.css';

function ProductSpecifications({
	specificationsOfProduct,
	specificationsOfCategory,
}) {
	return (
		<div className="productSpecifications">
			{specificationsOfCategory?.groups.map((group) => {
				const { id, name } = group;
				const specifications = specificationsOfCategory?.specifications?.filter(
					(item) => item.groupId === id
				);
				return (
					<table key={id} className="productSpecifications__groupTable">
						<p className="productSpecifications__groupTitle">{name}</p>
						{specifications?.map((item) => {
							const { name, id } = item;
							const productSpecification = specificationsOfProduct?.find(
								(item) => item.specificationsId === id
							);
							return (
								<tr key={id} className="productSpecifications__groupTableRow">
									<td>{name}</td>
									<td>{productSpecification?.value}</td>
								</tr>
							);
						})}
					</table>
				);
			})}
		</div>
	);
}

export default ProductSpecifications;
