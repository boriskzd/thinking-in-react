export default function ProductCategoryRow({ category }) {
	return (
		<tr style={{ fontWeight: "bold", textAlign: "center" }}>
			<td colSpan={2}>{category}</td>
		</tr>
	);
}
