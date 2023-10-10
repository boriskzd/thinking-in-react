import { useSelector, useDispatch } from "react-redux";
import { changeText, toggleCheckbox } from "../store/inputSlice";

export default function SearchBar() {
	const filterText = useSelector((state) => state.input.filterText);
	const inStockOnly = useSelector((state) => state.input.inStockOnly);
	const dispatch = useDispatch();

	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={filterText}
				onChange={(e) => dispatch(changeText(e.target.value))}
			/>
			<div>
				<label>
					<input
						type="checkbox"
						name="myCheckbox"
						checked={inStockOnly}
						onChange={(e) => dispatch(toggleCheckbox())}
					/>{" "}
					Only show products in stock
				</label>
			</div>
		</form>
	);
}
