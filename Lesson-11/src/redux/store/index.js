import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/redux/slices/productsSlice";
import postsSlice from "@/redux/slices/postsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    posts: postsSlice,
  },
});

export default store;
