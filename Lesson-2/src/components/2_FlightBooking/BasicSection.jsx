import style from "./basic.module.css";

function BasicSection() {
  return (
    <div className={style.container}>
      <label>
        <input type="checkbox" /> Пиво
      </label>
      <label>
        <input type="checkbox" /> Чипси
      </label>
    </div>
  );
}

export default BasicSection;
