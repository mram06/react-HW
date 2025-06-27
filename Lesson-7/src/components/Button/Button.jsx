import styles from "./Button.module.css";

function Button({ children, emitClick }) {
  return (
    <button onClick={emitClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
