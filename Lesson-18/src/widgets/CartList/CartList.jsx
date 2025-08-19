import { CartItemCardWithActions } from "../CartItemCardWithActions";
import { useGetUserCartQuery } from "../../entities/cartItem/api/cartItemApi";
import { useTranslation } from "react-i18next";

export default function CartList({ userId }) {
  const { t } = useTranslation();
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId);
  const items = Object.entries(cart).filter(([_, item]) => item);
  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (isLoading) return <div>Завантаження...</div>;

  return (
    <div>
      {items.length === 0 && <div>{t("cart.isEmpty")}</div>}
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          item={item}
          productId={productId}
          userId={userId}
        />
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: "bold" }}>
          {t("cart.totalPrice")}: {total}
        </div>
      )}
    </div>
  );
}
