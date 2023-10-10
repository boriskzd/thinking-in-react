import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filterText: "",
	inStockOnly: false,
};

export const inputSlice = createSlice({
	name: "input",
	initialState,
	reducers: {
		changeText: (state, action) => {
			state.filterText = action.payload;
		},
		toggleCheckbox: (state) => {
			state.inStockOnly = !state.inStockOnly;
		},
	},
});

export const { changeText, toggleCheckbox } = inputSlice.actions;

export default inputSlice.reducer;
