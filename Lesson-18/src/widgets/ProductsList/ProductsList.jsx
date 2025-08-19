import { useGetAllProductsQuery } from "@/entities/product/api/productApi";
import { ProductCardWithActions } from "../ProductCardWithActions";
import { useGetAllFavoritesIdsByUserIdQuery } from "@/entities/favorites/api/favoritesApi";

export default function ProductsList({ user, role }) {
  const { data: products = [], isLoading } = useGetAllProductsQuery();

  const { data: favorites = [] } = useGetAllFavoritesIdsByUserIdQuery(
    user?.uid
  );

  if (isLoading)
    return (
      <div className="text-center text-lg text-slate-500 py-8">
        Завантаження...
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => {
        const isFavorite = favorites.some((id) => id == p.id);

        return (
          <ProductCardWithActions
            key={p.id}
            product={p}
            user={user}
            role={role}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
}
