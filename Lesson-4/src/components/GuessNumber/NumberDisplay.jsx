import { useEffect, useState } from "react";
import styles from "./NumberDisplay.module.css";

function NumberDisplay({ onEmitNumber, guessedNumberArray }) {
  const [generatedNumber, setGeneratedNumber] = useState([]);

  useEffect(() => {
    const number = [];
    const min = 1;
    const max = 9;

    for (let i = 0; i < 3; ) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!number.some((num) => num === randomNumber)) {
        number.push(randomNumber);
        i++;
      }
    }
    onEmitNumber(number);
    setGeneratedNumber(number);
  }, []);
  return (
    <div className={styles.display}>
      Число
      <div className={styles.number}>{guessedNumberArray[0]}</div>
      <div className={styles.number}>{guessedNumberArray[1]}</div>
      <div className={styles.number}>{guessedNumberArray[2]}</div>
      <div>{generatedNumber}</div>
    </div>
  );
}

export default NumberDisplay;
