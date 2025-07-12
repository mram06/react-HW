import { useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import useTeachersApi from "../../hooks/useTeachersApi";
import { useEffect, useState } from "react";
import TeacherCard from "./components/TeacherCard";

import styles from "./components/TeacherCard.module.css";

function TeachersList() {
  const navigate = useNavigate();
  const {
    data: teachersList,
    loading,
    error,
    fetchTeachers,
    deleteTeacher,
  } = useTeachersApi();
  const [selectedTeachersId, setSelectedTeachersId] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  function goToMeeting() {
    navigate(frontRoutes.navigate.meeting, {
      state: {
        teachers: teachersList.filter((teacher) =>
          selectedTeachersId.includes(teacher.id)
        ),
      },
    });
  }
  function onEdit(teacherId) {
    navigate(frontRoutes.navigate.teachers.edit(teacherId));
  }

  const onSelect = (id) => {
    if (selectedTeachersId.includes(id))
      setSelectedTeachersId((prev) => prev.filter((tId) => tId !== id));
    else setSelectedTeachersId((prev) => [...prev, id]);
  };

  const onDeleteTeacher = (id) => {
    deleteTeacher(id);
  };

  const onAddTeacher = () => {
    navigate(frontRoutes.navigate.teachers.add);
  };

  let content;
  if (loading) content = <h2>Loading...</h2>;
  else if (error) content = <h2>Error!</h2>;
  else
    content = (
      <div>
        {teachersList.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            onSelect={onSelect}
            isSelected={selectedTeachersId.includes(teacher.id)}
          >
            <div className={styles.footer}>
              <button
                onClick={() => onEdit(teacher.id)}
                className={styles.update}
              >
                Update
              </button>
              <button
                onClick={() => onDeleteTeacher(teacher.id)}
                className={styles.delete}
              >
                Delete
              </button>
            </div>
          </TeacherCard>
        ))}
      </div>
    );

  return (
    <div>
      <h1>TeachersList</h1>
      <button onClick={onAddTeacher}>Додати вчителя</button>
      {content}
      <div>
        <button onClick={goToMeeting}>Go to meeting</button>
      </div>
    </div>
  );
}

export default TeachersList;
