import styles from "./SiteComponent.module.css";

function SiteComponent({ data }) {
  return (
    <div className={styles.item}>
      <div className={styles.item__top}>
        <div className={styles.item__img}>
          <img src={data.logoSrc} />
        </div>
        <div className={styles.item__name}>
          <div>{data.name}</div>
          <div>{data.url}</div>
        </div>
      </div>
      <a href={data.url} className={styles.item__link}>
        {data.title}
      </a>
      <p className={styles.item__description}>{data.description}</p>
    </div>
  );
}

export default SiteComponent;
