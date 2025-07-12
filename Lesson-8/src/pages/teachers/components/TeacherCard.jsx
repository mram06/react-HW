import styles from "./TeacherCard.module.css";
function TeacherCard({ teacher, onSelect, isSelected, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <img src={teacher.photo} alt="photo" />
        <div>
          <div>{teacher.name}</div>
          <div>{teacher.subject}</div>
        </div>
      </div>
      <div className={styles.section2}>
        {onSelect ? (
          <button onClick={() => onSelect(teacher.id)}>
            {isSelected ? "Deselect" : "Select"}
          </button>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default TeacherCard;
