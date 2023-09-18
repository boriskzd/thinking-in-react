export default function SearchBar({
	filterText,
	inStockOnly,
	onFilterTextChange,
	onInStockOnlyChange,
}) {
	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={filterText}
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
			<div>
				<label>
					<input
						type="checkbox"
						checked={inStockOnly}
						name="myCheckbox"
						onChange={(e) => onInStockOnlyChange(e.target.checked)}
					/>{" "}
					Only show products in stock
				</label>
			</div>
		</form>
	);
}
