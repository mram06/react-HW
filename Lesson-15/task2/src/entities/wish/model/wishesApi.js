import { createApi } from "@reduxjs/toolkit/query/react";
import DbOperations from "./api/DbOperations";

const db = new DbOperations("wishes");

export const wishesApi = createApi({
  reducerPath: "wishesApi",
  tagTypes: ["Wishes"],
  endpoints: (builder) => ({
    getAllWishes: builder.query({
      async queryFn() {
        try {
          const data = await db.getAll();
          return { data };
        } catch (error) {
          return error;
        }
      },
      providesTags: ["Wishes"],
    }),
    getWishById: builder.query({
      async queryFn(id) {
        try {
          const data = await db.getById(id);
          return { data };
        } catch (error) {
          return error;
        }
      },
    }),
    addWish: builder.mutation({
      async queryFn(data) {
        try {
          await db.add(data);
          return { data: true };
        } catch (error) {
          return error;
        }
      },
      invalidatesTags: ["Wishes"],
    }),
    updateWish: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data);
          return { data: true };
        } catch (error) {
          return error;
        }
      },
      invalidatesTags: ["Wishes"],
    }),
    deleteWish: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return error;
        }
      },
      invalidatesTags: ["Wishes"],
    }),
  }),
});

export const {
  useGetAllWishesQuery,
  useGetWishByIdQuery,
  useAddWishMutation,
  useUpdateWishMutation,
  useDeleteWishMutation,
} = wishesApi;
