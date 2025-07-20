import products from "@/constants/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  productsList: products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addNewProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
  },
});

export const { setFilter, addNewProduct } = productsSlice.actions;

export default productsSlice.reducer;
