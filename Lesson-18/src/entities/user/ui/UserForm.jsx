import { roles } from "@/shared/config/roles";
import { useTranslation } from "react-i18next";

export function UserForm({
  user,
  handleSubmit,
  children,
  email,
  setEmail,
  displayName,
  setDisplayName,
  role,
  setRole,
  isUpdating,
  isAdding,
}) {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={!!user.id}
        required
      />
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Ім'я"
        disabled={!!user.id}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.entries(roles).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit" disabled={isUpdating || isAdding}>
        {user.id ? t("usersEdit.saveBtn") : t("usersEdit.addBtn")}
      </button>
      {children}
    </form>
  );
}

export default UserForm;
