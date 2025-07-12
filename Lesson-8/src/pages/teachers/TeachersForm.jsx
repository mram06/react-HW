import { useEffect, useState } from "react";
import useTeachersApi from "../../hooks/useTeachersApi";
import { useNavigate, useParams } from "react-router";
import frontRoutes from "../../routes/frontRoutes";

function TeachersForm() {
  const {
    data: teacherData,
    loading,
    error,
    getTeacherById,
    updateTeacher,
    addTeacher,
  } = useTeachersApi();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();
  useEffect(() => {
    if (id) getTeacherById(id);
  }, []);

  useEffect(() => {
    setName(teacherData?.name ?? "");
    setSubject(teacherData?.subject ?? "");
  }, [teacherData?.name, teacherData?.subject]);

  const navigate = useNavigate();

  function onAction() {
    if (id) {
      updateTeacher(id, { name, subject, photo })
        .then(() => {
          setMessage("Дані оновлено");
        })
        .catch(() => {
          setMessage("Сталася помилка");
        });
    } else {
      addTeacher({ name, subject, photo })
        .then(() => {
          navigate(frontRoutes.navigate.teachers.index);
        })
        .catch(() => {
          setMessage("Сталася помилка");
        });
    }
  }

  return (
    <>
      <h1>Teacher edit</h1>
      {loading && <p>Loading...</p>}
      <div>
        <label>
          Name -
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Subject -
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <br />
        <label>
          Photo URL (optional) -
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>
        <div>{message}</div>
        <button onClick={onAction}>{id ? "Update" : "Add"}</button>
      </div>
    </>
  );
}

export default TeachersForm;
