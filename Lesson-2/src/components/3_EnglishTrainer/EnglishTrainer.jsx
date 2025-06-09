import wordsList from "./words";
import styles from "./EnglishTrainer.module.css";
import { useState } from "react";

function EnglishTrainer() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [userValue, setUserValue] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  let message;
  if (isCorrectAnswer === true) message = "Добре. Молодець!";
  else if (isCorrectAnswer === false) message = "Невірно, спробуйте ще раз";

  function checkTranslation() {
    if (
      userValue?.toLowerCase() ===
      wordsList[currentWordIndex].ukrainian.toLowerCase()
    ) {
      setIsCorrectAnswer(true);

      setTimeout(() => {
        message = null;
        setCurrentWordIndex((prevVal) => prevVal + 1);
        setIsCorrectAnswer(null);
      }, 3000);
    } else setIsCorrectAnswer(false);
  }

  return (
    <div>
      <p>
        Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і
        слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу
        «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то
        відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
      </p>
      <div
        className={styles.trainer}
        style={{
          border:
            isCorrectAnswer === true
              ? "3px solid green"
              : isCorrectAnswer === false
              ? "3px solid red"
              : "",
        }}
      >
        <img src={wordsList[currentWordIndex]?.imgSrc} />
        <p className={styles.title}>{wordsList[currentWordIndex]?.english}</p>
        <p>Ваш переклад:</p>
        <input type="text" onChange={(e) => setUserValue(e.target.value)} />
        <p>{message}</p>
        <div>
          <button onClick={checkTranslation}>Перевірити</button>
        </div>
      </div>
    </div>
  );
}

export default EnglishTrainer;
