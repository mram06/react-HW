import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function Task4() {
  const [searchValue, setSearchValue] = useState("");
  const { delayedValue } = useDebounce(searchValue, 500);

  return (
    <>
      <p>Задача 4. useDebounce – відкладений виклик функції</p>
      <p>
        Створіть кастомний хук useDebounce, який приймає значення та затримку в
        мілісекундах. Він повинен повертати "відкладене" значення, яке
        оновлюється лише після того, як минув заданий час без змін.
      </p>
      <p>
        Створіть поле пошуку, де результати пошуку оновлюються не відразу після
        кожного символу, а з невеликою затримкою (наприклад, 500мс) після
        зупинки введення, використовуючи useDebounce.
      </p>
      <label>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <div>{delayedValue}</div>
    </>
  );
}

export default Task4;
