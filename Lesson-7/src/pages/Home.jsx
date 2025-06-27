import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <p>Цей магазин належить програмісту на фрілансі.</p>
      <p>Тому:</p>
      <ul>
        <li>
          магазин працює коли хоче{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-business-time"
            style={{ color: "#61dafb" }}
          />
        </li>
        <li>
          товари надсилає швидко{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-box"
            style={{ color: "#61dafb" }}
          />
        </li>
        <li>
          на запитання відповідає коли висипається{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-circle-question"
            style={{ color: "#61dafb" }}
          />
        </li>
      </ul>
    </>
  );
}

export default Home;
