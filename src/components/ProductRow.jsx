export default function ProductRow({ product }) {
	// if product is out of stock, display it RED
	const name = product.stocked ? (
		product.name
	) : (
		<span style={{ color: "red" }}>{product.name}</span>
	);

	return (
		<tr>
			<td>{name} </td>
			<td>{product.price}</td>
		</tr>
	);
}
