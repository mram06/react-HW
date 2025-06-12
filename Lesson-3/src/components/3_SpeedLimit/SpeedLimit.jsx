// Задача 3. Вводиться дозволена швидкість і поточна швидкість авто.
// Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.
// Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений,
// Якщо значення вище 90% починає блимати повідомлення «Увага!»
import { useEffect, useRef, useState } from "react";
import styles from "./SpeedLimit.module.css";

function SpeedLimit() {
  const [speedLimit, setSpeedLimit] = useState("");
  const [currentSpeed, setCurrentSpeed] = useState("");
  const currentSpeedInput = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Якщо швидкість менше 50% дозволеної, то колір input – оранжевий
    if (currentSpeed < speedLimit * 0.5) {
      currentSpeedInput.current.className = styles.orange;
    }
    // Якщо від 50% до 100% - зелений
    else if (speedLimit * 0.5 <= currentSpeed && currentSpeed <= speedLimit) {
      currentSpeedInput.current.className = styles.green;
    }
    // Якщо вище 100% - червоний
    else if (currentSpeed > speedLimit) {
      currentSpeedInput.current.className = styles.red;
    }

    if (currentSpeed > speedLimit * 0.9) {
      intervalRef.current = setInterval(() => {
        setShowMessage((prevVal) => !prevVal);
      }, 1000);
    } else setShowMessage(false);

    return () => {
      clearInterval(intervalRef.current);
      setShowMessage(false);
    };
  }, [currentSpeed]);

  function speedLimitHandler(e) {
    const speed = parseInt(e.target.value);
    if (!isNaN(speed)) setSpeedLimit(speed);
    else setSpeedLimit("");
  }
  function speedHandler(e) {
    const speed = parseInt(e.target.value);
    if (!isNaN(speed)) setCurrentSpeed(speed);
    else setCurrentSpeed("");
  }

  return (
    <div>
      <p>
        Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. Якщо
        не введено дозволену швидкість, то елемент введення поточної швидкості
        заблокований. Якщо швидкість менше 50% дозволеної, то колір input –
        оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо
        значення вище 90% починає блимати повідомлення «Увага!»
      </p>
      <label>
        Дозволена швидкість:
        <div className={styles.sign}>
          <input
            type="number"
            value={speedLimit}
            onChange={speedLimitHandler}
          />
        </div>
      </label>
      <label>
        Поточна швидкість авто:
        <div>
          <input
            ref={currentSpeedInput}
            type="number"
            value={currentSpeed}
            onChange={speedHandler}
            disabled={!speedLimit}
          />
        </div>
      </label>
      <div
        className={styles.warning}
        style={{ display: showMessage ? "block" : "none" }}
      >
        Увага!
      </div>
    </div>
  );
}

export default SpeedLimit;
