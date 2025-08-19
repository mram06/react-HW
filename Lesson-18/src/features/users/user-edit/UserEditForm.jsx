import { useState } from "react";
import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from "@/entities/user/api/userApi";
import { roles } from "@/shared/config/roles";
import { UserForm } from "@/entities/user";

export function UserEditForm({ user = {}, onSuccess }) {
  const [email, setEmail] = useState(user?.email || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [role, setRole] = useState(user?.role || "user");
  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation();
  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await updateUserRole({ uid: user.id, role });
    } else {
      await addUser({ email, displayName, role });
    }
    onSuccess && onSuccess();
  };

  return (
    <UserForm
      user={user}
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      displayName={displayName}
      setDisplayName={setDisplayName}
      role={role}
      setRole={setRole}
      isUpdating={isUpdating}
      isAdding={isAdding}
    >
      {(updateError || addError) && (
        <div style={{ color: "red" }}>
          {updateError?.data?.message || addError?.data?.message || "Помилка"}
        </div>
      )}
    </UserForm>
  );
}
