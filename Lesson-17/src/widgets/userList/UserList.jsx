import React, { useState } from "react";
import { useGetUsersQuery } from "../../entities/user/api/userApi";
import { UserListItem } from "../../entities/user/ui/UserListItem";
import DeleteUserButton from "@/features/users/delete-button";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import AddUserForm from "@/features/users/add-user-form";

export function UserList() {
  const authorizedUser = useSelector(selectAuthUser);

  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetUsersQuery({ page, limit });

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error.toString()}</div>;

  const users = data?.items || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div>
      <AddUserForm />
      {users.map((user) => (
        <UserListItem key={user.id} user={user}>
          {authorizedUser?.role === "admin" ? (
            <DeleteUserButton userId={user.id} />
          ) : null}
        </UserListItem>
      ))}

      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Назад
        </button>
        <span style={{ margin: "0 10px" }}>
          Сторінка {page} з {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Вперед
        </button>
      </div>
    </div>
  );
}
