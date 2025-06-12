import { useState } from "react";
import carsList from "./cars";

function CarSearch() {
  const [makeList, setMakeList] = useState(
    [...new Set(carsList.map((car) => car.make))].sort()
  );
  const [yearList, setYearList] = useState([
    ...new Set(carsList.map((car) => car.year)),
  ]);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  function isCorrespondToFilter(car) {
    if (selectedMake && selectedMake !== car.make) return false;
    if (selectedYear && selectedYear != car.year) return false;
    return true;
  }
  const filteredCarsList = carsList.filter((car) => isCorrespondToFilter(car));

  return (
    <div>
      <p>
        Задача 8. Дано список автомобілів (марка, рік випуску, ціна). Сформувати
        елементи для фільтрування з використанням випадаючого списку (контент
        цих випадаючих списків сформувати у залежності від переданого списку).
      </p>
      <label>
        Марка
        <select onChange={(e) => setSelectedMake(e.target.value)}>
          <option value="">Не вказано</option>
          {makeList.map((make) => (
            <option key={make}>{make}</option>
          ))}
        </select>
      </label>

      <label>
        Рік випуску
        <select onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">Не вказано</option>
          {yearList.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </label>
      <p>Список</p>
      <div>
        {filteredCarsList.length ? (
          filteredCarsList.map((car) => (
            <div key={car.id}>
              {car.make} - {car.year} p. - $ {car.price}
            </div>
          ))
        ) : (
          <div>Не знайдено</div>
        )}
      </div>
    </div>
  );
}

export default CarSearch;
