import styles from "@/components/task2/hotels/HotelCard.module.css";

function HotelCard({ data, isSelected, onSelect }) {
  return (
    <div className={styles.container}>
      <div className={styles.card__header}>
        <div className={styles.logo}>
          <img src={data.logoSrc} />
        </div>
        <div>{data.name}</div>
        <button
          className={isSelected(data.id) ? styles.selected : ""}
          onClick={() => onSelect(data.id)}
        >
          {isSelected(data.id) ? "Обрано" : "Обрати"}
        </button>
      </div>
      <div>Місто: {data.city}</div>
    </div>
  );
}

export default HotelCard;
