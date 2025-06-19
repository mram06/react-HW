import { useEffect, useState } from "react";

function PlayerSection({
  playerTag,
  nextPlayer,
  isCurrentMove,
  emitMove,
  enteredNumbers,
  firstPlayerGuessedNumbers,
  secondPlayerGuessedNumbers,
}) {
  const [userNumber, setUserNumber] = useState("");
  const [message, setMessage] = useState("");

  function makeMove() {
    if (!enteredNumbers.some((num) => num == userNumber)) {
      nextPlayer(playerTag);
      setUserNumber("");
      emitMove(userNumber, playerTag);
    }
  }

  useEffect(() => {
    if (enteredNumbers.some((num) => num == userNumber))
      setMessage("Число вже було");
    else setMessage("");
  }, [userNumber]);

  return (
    <div>
      <div>{playerTag}</div>
      <div>
        {playerTag === "Гравець 1"
          ? firstPlayerGuessedNumbers
          : secondPlayerGuessedNumbers}
      </div>
      <div>
        <label>
          Цифра
          <input
            type="number"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={makeMove} disabled={message || !isCurrentMove}>
        Зробити хід
      </button>
      <div>{message}</div>
    </div>
  );
}

export default PlayerSection;
