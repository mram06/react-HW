import { useMemo, useState } from "react";
import ResultDisplay from "./ResultDisplay";

function Calculator() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [sum, setSum] = useState("");

  console.log("---- Parent comp rendered ----");

  const resultSum = useMemo(() => {
    console.log("---- resultSum() ----");
    return sum;
  }, [sum]);

  function onCalculate() {
    setSum(parseInt(firstValue) + parseInt(secondValue));
  }

  return (
    <>
      <p>
        Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
        Створіть компонент-калькулятор, який має два незалежні поля вводу: одне
        для числа A і одне для числа B. Також є окремий компонент ResultDisplay,
        який відображає A + B. Обгорніть ResultDisplay у React.memo().
        Використайте useMemo в батьківському компоненті, щоб обчислити A + B і
        передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay
        ререндериться лише тоді, коли змінюються A або B, а не коли змінюється
        інший незалежний стан у батьківському компоненті (наприклад, лічильник,
        що не впливає на A чи B).
      </p>
      <div>
        <label>
          А -{" "}
          <input
            type="number"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        </label>
        <label>
          B -{" "}
          <input
            type="number"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
          />
        </label>
        <button onClick={onCalculate}>Обчислити</button>
      </div>
      <ResultDisplay value={resultSum} />
    </>
  );
}

export default Calculator;
