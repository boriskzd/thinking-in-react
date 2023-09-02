import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
	console.log(products);

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<ProductRow product={product} />
				))}
			</tbody>
		</table>
	);
}
