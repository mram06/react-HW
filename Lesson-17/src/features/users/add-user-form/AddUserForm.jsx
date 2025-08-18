import { roles } from "@/shared/config/roles";
import { useState } from "react";
import styles from "./AddUserForm.module.css";
import { useAddUserMutation } from "@/entities/user/api/userApi";

function AddUserForm() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    role: "",
  };

  const [userToAdd, setUserToAdd] = useState(initialFormData);

  const handleChange = (e) => {
    const val = e.target.value;
    const field = e.target.name;
    setUserToAdd((prevVal) => ({ ...prevVal, [field]: val }));
  };

  const [addUser, { isLoading, error }] = useAddUserMutation();

  const onSubmit = async () => {
    if (
      userToAdd.name &&
      userToAdd.email &&
      userToAdd.password &&
      userToAdd.role
    ) {
      try {
        await addUser({ data: userToAdd });
        setUserToAdd(initialFormData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Додати користувача</h2>

      <div className={styles.fields}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Ім'я
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={userToAdd.name}
            onChange={handleChange}
            placeholder="Введіть ім'я"
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={userToAdd.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={userToAdd.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="role" className={styles.label}>
            Роль
          </label>
          <select
            id="role"
            name="role"
            value={userToAdd.role}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled>
              Оберіть роль
            </option>
            {Object.keys(roles).map((role) => (
              <option key={role} value={role} className={styles.option}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.footer}>
        <button onClick={onSubmit} type="button" className={styles.submit}>
          Додати
        </button>
      </div>
    </div>
  );
}

export default AddUserForm;
