import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("sadadsads");
	const [inStockOnly, setInStockOnly] = useState(true);

	return (
		<>
			<SearchBar filterText={filterText} inStockOnly={inStockOnly} />
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</>
	);
}
