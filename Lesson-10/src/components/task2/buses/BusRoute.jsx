import styles from "@/components/task2/buses/BusRoute.module.css";
function BusRoute({ data, onSelect, isSelected }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Місто відправлення</div>
        <div>{data.from}</div>
      </div>
      <div>
        <div className={styles.label}>Місто прибуття</div>
        <div>{data.to}</div>
      </div>
      <div>
        <div className={styles.label}>Перевізник</div>
        <div>{data.carrier}</div>
      </div>
      <div className={styles.logo}>
        <img src={data.logoSrc} />
      </div>
      <button
        className={isSelected(data.id) ? styles.selected : ""}
        onClick={() => onSelect(data.id)}
      >
        {isSelected(data.id) ? "Обрано" : "Обрати"}
      </button>
    </div>
  );
}

export default BusRoute;
