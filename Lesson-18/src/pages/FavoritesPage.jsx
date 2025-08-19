import { FavoritesList } from "@/widgets/FavoritesList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function FavoritesPage() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.auth.user);
  if (!user) return <div>Тільки для авторизованих користувачів</div>;
  return (
    <div>
      <h1>{t("favorites.title")}</h1>
      <FavoritesList userId={user.uid} />
    </div>
  );
}

export default FavoritesPage;
