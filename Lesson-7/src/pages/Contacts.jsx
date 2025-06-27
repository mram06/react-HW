import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  return (
    <>
      <p>
        Нас дуже легко знайти{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-map-location-dot"
          style={{ color: "#61dafb" }}
        />
      </p>
      <ol>
        <li>
          Потягом до Ужгорода{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-train"
            style={{ color: "#5bcceb" }}
          />
        </li>
        <li>
          Шукайте бабу Галю (вона дорогу покаже){" "}
          <FontAwesomeIcon
            icon="fa-solid fa-person-dress"
            style={{ color: "#5bcceb" }}
          />
        </li>
      </ol>
      <p>
        До зустрічі!{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-handshake"
          style={{ color: "#5bcceb" }}
        />
      </p>
    </>
  );
}

export default Contacts;
