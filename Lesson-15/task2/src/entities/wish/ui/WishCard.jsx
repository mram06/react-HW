import styles from "./WishCard.module.css";

export function WishCard({ wish, onEdit, onDelete, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <span className={styles.titleIcon}>✨</span>
          <h3 className={styles.title}>{wish.title}</h3>
        </div>

        <div className={styles.infoSection}>
          <span className={styles.icon}>👫</span>
          <div>
            <span className={styles.label}>Друг з яким хочу досягти:</span>
            <p className={styles.friendValue}>{wish.friend}</p>
          </div>
        </div>

        <div className={styles.infoSection}>
          <span className={styles.icon}>🎯</span>
          <div>
            <span className={styles.label}>Рік коли хочу досягти:</span>
            <p className={styles.yearValue}>{wish.goalYear}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">{children}</div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.badge}>WISH CARD</span>
          <div className={styles.indicator}></div>
        </div>
      </div>
    </div>
  );
}
