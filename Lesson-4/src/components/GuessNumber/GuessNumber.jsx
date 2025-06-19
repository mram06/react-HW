import { useState } from "react";
import NumberDisplay from "./NumberDisplay";
import PlayerSection from "./PlayerSection";

function GuessNumber() {
  const [currentPlayer, setCurrentPlayer] = useState("Гравець 1");

  function nextPlayer(playerTag) {
    if (playerTag === "Гравець 1") setCurrentPlayer("Гравець 2");
    else setCurrentPlayer("Гравець 1");
  }

  const [generatedNumber, setGeneratedNumber] = useState([]);
  function onEmitNumber(numberArray) {
    setGeneratedNumber(numberArray);
  }

  const [guessedNumberArray, setGuessedNumberArray] = useState([]);
  const [enteredNumbers, setEnteredNumbers] = useState([]);

  const [firstPlayerGuessedNumbers, setFirstPlayerGuessedNumbers] = useState(
    []
  );
  const [secondPlayerGuessedNumbers, setSecondPlayerGuessedNumbers] = useState(
    []
  );

  const [winMessage, setWinMessage] = useState("");

  function makeMove(userNumber, playerTag) {
    const guessedNumberIndex = generatedNumber.findIndex(
      (number) => number == userNumber
    );

    if (guessedNumberIndex !== -1) {
      const newArray = guessedNumberArray;
      newArray[guessedNumberIndex] = userNumber;
      setGuessedNumberArray(newArray);

      if (playerTag === "Гравець 1")
        setFirstPlayerGuessedNumbers((prevValue) => [...prevValue, userNumber]);
      else if (playerTag === "Гравець 2")
        setSecondPlayerGuessedNumbers((prevValue) => [
          ...prevValue,
          userNumber,
        ]);
    }
    setEnteredNumbers((prevValue) => [...prevValue, userNumber]);
    if (guessedNumberArray.length === 3) setWinMessage(`Переміг - ${playerTag}`);
  }

  return (
    <div>
      <p>
        Задача. Гра “Вгадай число”. Правила гри: <br /> 1) комп”ютер генерує
        трицифрове число; <br /> 2) кожен гравець по черзі задає цифру, якої ще
        не було (відсліковуємо, щоб цифри не повторювалися гравцями — не
        дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)). <br /> 3)
        якщо цифру вгадано, вона відображаться у полі гри “Число”; <br /> 4)
        програє той, хто вгадав останню цифру.
      </p>
      <h3>{winMessage}</h3>
      <NumberDisplay
        onEmitNumber={onEmitNumber}
        guessedNumberArray={guessedNumberArray}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <PlayerSection
          playerTag="Гравець 1"
          nextPlayer={nextPlayer}
          isCurrentMove={currentPlayer === "Гравець 1" ? true : false}
          emitMove={makeMove}
          enteredNumbers={enteredNumbers}
          firstPlayerGuessedNumbers={firstPlayerGuessedNumbers}
        />
        <PlayerSection
          playerTag="Гравець 2"
          nextPlayer={nextPlayer}
          isCurrentMove={currentPlayer === "Гравець 2" ? true : false}
          emitMove={makeMove}
          enteredNumbers={enteredNumbers}
          secondPlayerGuessedNumbers={secondPlayerGuessedNumbers}
        />
      </div>
    </div>
  );
}

export default GuessNumber;
