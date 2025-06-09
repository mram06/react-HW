import { useState } from "react";
import BusinessSection from "./BusinessSection";
import BasicSection from "./BasicSection";

function FlightBooking() {
  const [ticketClass, setTicketClass] = useState(null);

  let content;
  if (ticketClass === "business") {
    content = <BusinessSection />;
  } else if (ticketClass === "basic") content = <BasicSection />;

  function classHandler(e) {
    const value = e.target.value;

    setTicketClass(value);
  }

  return (
    <div>
      <p>
        Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо{" "}
        <br /> 1) бізнес - виводимо елементи для вибору газети та коньяку (якщо
        вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення
        бізнес кают <br /> 2) економ – виводимо елементи для вибору типу пива і
        чипсів, на фоні хмарки.
      </p>
      <div>
        <p>Оберіть клас квитка</p>
        <select onChange={classHandler}>
          <option value="not selected">не вказано</option>
          <option value="business">Бізнес клас</option>
          <option value="basic">Економ клас</option>
        </select>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default FlightBooking;
