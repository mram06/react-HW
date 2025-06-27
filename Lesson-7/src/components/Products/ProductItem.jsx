import apiRoutes from "../../api/apiRoutes";
import styles from "./ProductItem.module.css";

function ProductCard({ id, title, imgSrc, price }) {
  return (
    <div className={styles.card}>
      <div className={styles["card__shine"]}></div>
      <div className={styles["card__glow"]}></div>
      <div className={styles["card__content"]}>
        <div className={styles["card__image"]}>
          <img src={`${apiRoutes.apiBase}/${imgSrc}`} />
        </div>
        <div className={styles["card__text"]}>
          <p className={styles["card__title"]}>{title}</p>
        </div>
        <div className={styles["card__footer"]}>
          <div className={styles["card__price"]}>{price} ₴</div>
          <div className={styles["card__button"]}>
            <svg height="16" width="16" viewBox="0 0 24 24">
              <path
                strokeWidth="2"
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
