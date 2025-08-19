import { useGetAllFavoritesByUserIdQuery } from "@/entities/favorites/api/favoritesApi";
import { FavoriteItemCardWithActions } from "../FavoriteItemCardWithActions";

export function FavoritesList({ userId }) {
  const { data, isLoading, error } = useGetAllFavoritesByUserIdQuery(userId);

  return (
    <div>
      {data?.map((item) => (
        <FavoriteItemCardWithActions
          key={item.id}
          item={item}
          userId={userId}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
