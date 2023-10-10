// components
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
	return (
		<>
			<SearchBar />
			<ProductTable />
		</>
	);
}
