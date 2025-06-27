import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Easy Buy
    </footer>
  );
}

export default Footer;
