export default function SearchBar({ filterText, inStockOnly }) {
	return (
		<form>
			<input type="text" placeholder="Search..." value={filterText} />
			<div>
				<label>
					<input
						type="checkbox"
						checked={inStockOnly}
						name="myCheckbox"
					/>{" "}
					Only show products in stock
				</label>
			</div>
		</form>
	);
}
