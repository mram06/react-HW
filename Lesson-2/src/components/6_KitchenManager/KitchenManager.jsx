import { useState } from "react";
import styles from "./KitchenManager.module.css";
import { waiting, processing, completed } from "./data";

function KitchenManager() {
  const [waitingList, setWaitingList] = useState([...waiting]);
  const [processingList, setProcessingList] = useState([...processing]);
  const [completedList, setCompletedList] = useState([...completed]);
  const [newDish, setNewDish] = useState(null);

  function newDishHandler(e) {
    setNewDish(e.target.value);
  }

  function onAddNewDish() {
    setWaitingList((prevVal) => [
      ...prevVal,
      { id: new Date().getTime(), title: newDish },
    ]);
  }

  function onSetProcessing(id) {
    const foundDish = waitingList.find((dish) => dish.id == id);
    setProcessingList((prevVal) => [...prevVal, foundDish]);
    setWaitingList((prevVal) => prevVal.filter((dish) => dish.id !== id));
  }

  function onSetCompleted(id) {
    const foundDish = processingList.find((dish) => dish.id == id);
    setCompletedList((prevVal) => [...prevVal, foundDish]);
    setProcessingList((prevVal) => prevVal.filter((dish) => dish.id !== id));
  }

  function onProvided(id) {
    setCompletedList((prevVal) => prevVal.filter((dish) => dish.id !== id));
  }

  return (
    <div>
      <p>
        Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх
        у список “Очікують на виконання”, якщо повар береться робити —
        замовлення переходить у список “Виконуються”, якщо замовлення виконано —
        переходить у список “Готові до виносу”. Якщо натиснути на “Подано” -
        страва зникає з таблиці
      </p>
      <div>
        <label>
          Нова замовлена страва: <input type="text" onChange={newDishHandler} />
        </label>
        <button onClick={onAddNewDish}>Додати</button>
      </div>
      <div className={styles.table}>
        <div className={styles.column}>
          <div className={styles.cell}>Очікують виконання</div>
          {waitingList.map((dish) => (
            <div key={dish.id} className={styles.cell}>
              {dish.title}{" "}
              <button onClick={() => onSetProcessing(dish.id)}>Готувати</button>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.cell}>Виконуються</div>
          {processingList.map((dish) => (
            <div key={dish.id} className={styles.cell}>
              {dish.title}{" "}
              <button onClick={() => onSetCompleted(dish.id)}>
                Приготовлено
              </button>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.cell}>Готові до виносу</div>
          {completedList.map((dish) => (
            <div key={dish.id} className={styles.cell}>
              {dish.title}{" "}
              <button onClick={() => onProvided(dish.id)}>Подано</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KitchenManager;
