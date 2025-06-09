import { useState } from "react";

function LoginComponent() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  function loginHandler(e) {
    setLogin(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  const adminLogin = "Ivan";
  const adminPassword = "111";

  const successImage = (
    <img
      style={{ width: "100px" }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/1024px-Face-smile.svg.png"
      alt="success image"
    />
  );
  function onLogin() {
    if (login === adminLogin && password === adminPassword) {
      setError(false);
      setIsLoggedIn(true);
    } else {
      setError(true);
      setIsLoggedIn(false);
    }
  }

  return (
    <div>
      <p>
        Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл.
        Якщо ні, то:
        <br /> 1) якщо логін = Іван – колір повідомлення про помилку синій
        <br /> 2) якщо хтось інший, то колір повідомлення червоний
      </p>
      <label>
        Login <input type="text" onChange={loginHandler} />
      </label>
      <label>
        Password <input type="text" onChange={passwordHandler} />
      </label>
      <button onClick={onLogin}>Go</button>
      <div
        style={{
          display: error ? "block" : "none",
          color: login === adminLogin ? "blue" : "red",
        }}
      >
        Invalid login or password
      </div>
      <div>{isLoggedIn ? successImage : null}</div>
    </div>
  );
}

export default LoginComponent;
