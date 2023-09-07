import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable({ products }) {
	console.log("products: ", products);

	// Fruits, Vegetables

	const categories = {};

	products.forEach((item) => {
		// console.log(groups);
		// console.log(item);
		const { category, ...rest } = item;
		console.log(category, rest);

		if (!categories[category]) {
			console.log(" there is no ", categories[category]);
			categories[category] = [];

			console.log(categories[category]);
		}

		{
			// categories[category];
			console.warn(categories[category]);
		}

		categories[category].push(item);
	});

	console.log("groupedItems - categories");
	console.log(categories);

	// chat gpt code

	const rows = [];
	let lastCategory = null;

	products.forEach((product) => {
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{<hr />}
				{rows}
				{/* {<hr />} */}
				{/* {rowsFinal} */}
				{/* {<hr />}
				{products.map((rows) => (
					<ProductRow product={rows} />
				))} */}
			</tbody>
		</table>
	);
}
