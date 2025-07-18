import { ThemeContext } from "@/context/task1/ThemeContext";
import { useContext, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const theme = useContext(ThemeContext);

  return (
    <>
      <div>
        Counter: {count}, Theme - {theme}
      </div>
      <button onClick={() => setCount((prevVal) => ++prevVal)}>+1</button>
    </>
  );
}

export default Counter;
