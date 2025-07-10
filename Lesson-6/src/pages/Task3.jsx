import WindowSize from "@/components/WindowSize.jsx/WindowSize";

function Task3() {
  return (
    <>
      <p>Задача 3. useWindowSize – розмір вікна браузера</p>
      <p>
        Створіть кастомний хук useWindowSize, який повертає поточну ширину та
        висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна.
      </p>
      <p>
        Створіть компонент, який відображає поточні розміри вікна браузера
        (ширина x висота), використовуючи useWindowSize. На основі розмірів
        відображати іконки монітора, планшета або телефона.
      </p>
      <WindowSize />
    </>
  );
}

export default Task3;
