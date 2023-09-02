export default function SearchBar() {
	return (
		<form>
			<input name="myInput" placeholder="Search..." />
			<div>
				<label>
					<input type="checkbox" name="myCheckbox" /> Only show
					products in stock
				</label>
			</div>
		</form>
	);
}
