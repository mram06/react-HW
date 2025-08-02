import { wishesApi } from "@/entities/wish";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [wishesApi.reducerPath]: wishesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishesApi.middleware),
});
