import favoriteSvg from "@/assets/icons/favorite.svg";
import inFavoritesSvg from "@/assets/icons/in_favorite.svg";
import { useAddToFavoritesMutation } from "@/entities/favorites/api/favoritesApi";

function FavoriteAddButton({ isFavorite, userId, productId }) {
  const [canAddToFavorites] = useAddToFavoritesMutation();

  return (
    <button onClick={() => canAddToFavorites({ userId, productId })}>
      <img src={isFavorite ? inFavoritesSvg : favoriteSvg} />
    </button>
  );
}

export default FavoriteAddButton;
