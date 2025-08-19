import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "../../../shared/api/DbOperations";

const db = new DbOperations("favorites");

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Favorite"],
  endpoints: (builder) => ({
    getAllFavoritesByUserId: builder.query({
      async queryFn(userId) {
        try {
          const filledFavoritesItems = await db.getFilledFavoritesByUserId(
            userId
          );
          console.log(filledFavoritesItems);

          return { data: filledFavoritesItems };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: (result, error, userId) => [
        { type: "Favorite", id: userId },
      ],
    }),
    getAllFavoritesIdsByUserId: builder.query({
      async queryFn(userId) {
        try {
          const { favoritesList } = await db.getFavoritesByUserId(userId);

          return { data: favoritesList };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: (result, error, userId) => [
        { type: "Favorite", id: userId },
      ],
    }),
    addToFavorites: builder.mutation({
      async queryFn({ userId, productId }) {
        try {
          const { favoritesList = [] } =
            (await db.getFavoritesByUserId(userId)) || {};
          const isInFavorite = favoritesList.some((id) => id == productId);
          if (isInFavorite) {
            const newList = favoritesList.filter((id) => id != productId);
            await db.update(userId, { favoritesList: newList });
          } else {
            await db.setWithId(userId, {
              favoritesList: [productId, ...favoritesList],
            });
          }
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result, error, { userId }) => [
        { type: "Favorite", id: userId },
      ],
    }),
  }),
});

export const {
  useGetAllFavoritesByUserIdQuery,
  useGetAllFavoritesIdsByUserIdQuery,
  useAddToFavoritesMutation,
} = favoriteApi;
