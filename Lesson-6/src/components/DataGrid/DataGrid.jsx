import { useState, useDeferredValue, useMemo } from "react";
import GridRow from "./GridRow";

function DataGrid({ products }) {
  const [searchValue, setSearchValue] = useState("");
  const deferredSearchValue = useDeferredValue(searchValue);
  const [sort, setSort] = useState("ascending");

  const filteredProducts = useMemo(() => {
    let filteredIProducts = products.filter((item) =>
      item.name.toLowerCase().includes(deferredSearchValue.toLowerCase())
    );
    if (sort === "ascending") return filteredIProducts.sort();
    else return filteredIProducts.reverse();
  }, [deferredSearchValue, sort]);

  return (
    <>
      <p>Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI </p>
      <ul>
        <li>
          Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
        </li>
        <li>
          DataGrid отримує великий масив даних, має поле вводу для фільтрації,
          кнопки для сортування за різними колонками.
        </li>
        <li>GridRow (обгорнутий у React.memo) відображає один рядок даних.</li>
        <li>
          Використайте useDeferredValue для пошукового запиту та/або параметрів
          сортування.
        </li>
        <li>
          Використайте useMemo для обчислення відфільтрованих та відсортованих
          даних на основі відкладених значень.
        </li>
        <li>
          Використайте useCallback для функцій-обробників сортування та інших
          інтерактивних елементів, які передаються до дочірніх компонентів.
        </li>
        <li>
          Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо
          обробка даних займає час.
        </li>
      </ul>
      <div>
        <label>
          Пошук за назвою{" "}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button onClick={() => setSort("ascending")}>
          Відсортувати за зростанням
        </button>
        <button onClick={() => setSort("descending")}>
          Відсортувати за спаданням
        </button>
        {filteredProducts.map((product) => (
          <GridRow key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default DataGrid;
