import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles["active-link"] : "")}
      >
        Головна
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? styles["active-link"] : "")}
      >
        Магазин
      </NavLink>
      <NavLink
        to="/payment"
        className={({ isActive }) => (isActive ? styles["active-link"] : "")}
      >
        Правила оплати
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? styles["active-link"] : "")}
      >
        Контакти
      </NavLink>
    </nav>
  );
}

export default Navbar;
