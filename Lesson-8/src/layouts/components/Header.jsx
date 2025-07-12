import { NavLink } from "react-router";
import styles from "./Header.module.css";
import links from "./links";

function Header() {
  function getLinkStyles(isActive) {
    return [styles.link, isActive ? styles.active : ""].join(" ");
  }

  return (
    <header className={styles.container}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) => getLinkStyles(isActive)}
        >
          {link.name}
        </NavLink>
      ))}
    </header>
  );
}

export default Header;
