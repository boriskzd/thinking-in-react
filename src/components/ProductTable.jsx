import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import React from "react";

export default function ProductTable({ products, filterText, inStockOnly }) {
	// Fruits, Vegetables
	const categories = {};

	// create data object
	products.forEach((item) => {
		const { category } = item;

		if (!categories[category]) {
			categories[category] = [];
		}

		categories[category].push(item);
	});

	const Table = ({ categories }) => {
		return (
			<>
				{Object.keys(categories).map((category) => (
					<React.Fragment key={category}>
						<ProductCategoryRow category={category} />
						{categories[category].map((item) => (
							<ProductRow product={item} key={item.name} />
						))}
					</React.Fragment>
				))}
			</>
		);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{<Table categories={categories} />}</tbody>
		</table>
	);
}
