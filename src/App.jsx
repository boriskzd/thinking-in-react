import FilterableProductTable from "./components/FilterableProductTable";
import PRODUCTS from "./utils/products.json";

function App() {
	return (
		<>
			<FilterableProductTable products={PRODUCTS} />
		</>
	);
}

export default App;
