import React from "react";
// redux
import { useSelector } from "react-redux";
// components
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
// hardcoded data
import PRODUCTS from "../utils/products.json";

export default function ProductTable() {
	const filterText = useSelector((state) => state.input.filterText);
	const inStockOnly = useSelector((state) => state.input.inStockOnly);
	// Fruits, Vegetables
	const categories = {};

	// create data object
	PRODUCTS.forEach((item) => {
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
						{categories[category].map((item) => {
							// item.name.toLowerCase().includes(filterText) --- product must contain entered text
							// !inStockOnly --- when checkbox is unchecked, show all items
							// inStockOnly && item.stocked --- when checkbox is checked, show only stocked items
							if (
								item.name
									.toLowerCase()
									.includes(filterText.toLowerCase()) &&
								(!inStockOnly || (inStockOnly && item.stocked))
							) {
								return (
									<ProductRow
										product={item}
										key={item.name}
									/>
								);
							}
						})}
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
