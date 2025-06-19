import { useState } from "react";
import styles from "./Messenger.module.css";
import Message from "./Message";

function Messenger() {
  const [userMessage, setUserMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  function sendMessage() {
    setMessagesList((prevValue) => [
      ...prevValue,
      { id: new Date().getTime(), message: userMessage, likes: 0, dislikes: 0 },
    ]);
    setUserMessage("");
  }

  function onLike(id) {
    const foundMessageIndex = messagesList.findIndex(
      (message) => message.id === id
    );
    const newList = [...messagesList];
    newList[foundMessageIndex].likes += 1;
    setMessagesList(newList);
  }
  function onDislike(id) {
    const foundMessageIndex = messagesList.findIndex(
      (message) => message.id === id
    );
    const newList = [...messagesList];
    newList[foundMessageIndex].dislikes += 1;
    setMessagesList(newList);
  }

  return (
    <>
      <p>
        Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати
        повідомлення і ставити лайки (додайте стилі на свій розсуд).
      </p>
      <div className={styles.messenger__body}>
        <div className={styles.header}>Friend</div>
        <div className={styles.messages}>
          {messagesList.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              message={message.message}
              likes={message.likes}
              dislikes={message.dislikes}
              like={onLike}
              dislike={onDislike}
            />
          ))}
        </div>
        <div className={styles.text_field}>
          <input
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            type="text"
            placeholder="Message"
          />
          <button onClick={sendMessage} disabled={!userMessage}>
            ↑
          </button>
        </div>
      </div>
    </>
  );
}

export default Messenger;
