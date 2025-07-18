import Counter from "@/components/task1/Counter";
import { ThemeContext } from "@/context/task1/ThemeContext";

function Task1() {
  return (
    <>
      <p>
        Задача 1. Використовуючи context зробити можливість передачі теми у
        компоненти додатку (невеликий додаток з декількома сторінками і
        всередині сторінок читати значення теми).
      </p>
      <ThemeContext value="Dark">
        <Counter />
      </ThemeContext>

      <Counter />
    </>
  );
}

export default Task1;
