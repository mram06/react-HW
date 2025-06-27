import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Payment() {
  return (
    <>
      <p>
        При отриманні{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-people-carry-box"
          style={{ color: "#61dafb" }}
        />{" "}
      </p>
      <p>
        Переказ на картку{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-credit-card"
          style={{ color: "#61dafb" }}
        />
      </p>
      <p>
        Записати у зошит{" "}
        <FontAwesomeIcon icon="fa-solid fa-book" style={{ color: "#61dafb" }} />
      </p>
    </>
  );
}

export default Payment;
