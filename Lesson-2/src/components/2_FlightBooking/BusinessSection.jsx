import { useState } from "react";

function BusinessSection() {
  const [alcoholSelected, setAlcoholSelected] = useState(false);

  let content;
  if (alcoholSelected) {
    content = (
      <>
        <p>Бажаєте закуску?</p>
        <label>
          <input type="radio" /> Так
        </label>
        <label>
          <input type="radio" /> Ні
        </label>
      </>
    );
  }

  function selectHandler(e) {
    console.log(e);
  }

  return (
    <div>
      <label>
        <input type="checkbox" />
        Газета
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => setAlcoholSelected((value) => !value)}
        />
        Коньяк
      </label>
      <div>{content}</div>
    </div>
  );
}

export default BusinessSection;
