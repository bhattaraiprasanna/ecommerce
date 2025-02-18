import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../assets/mockData"; // Ensure the correct path

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
