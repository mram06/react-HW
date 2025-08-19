import { FavoriteItem } from "@/entities/favorites";
import FavoriteAddButton from "@/features/favorites/favorite-add/FavoriteAddButton";

export function FavoriteItemCardWithActions({ item, userId, isFavorite }) {
  return (
    <FavoriteItem item={item} userId={userId}>
      <FavoriteAddButton
        isFavorite={isFavorite}
        userId={userId}
        productId={item.id}
      />
    </FavoriteItem>
  );
}

export default FavoriteItemCardWithActions;
