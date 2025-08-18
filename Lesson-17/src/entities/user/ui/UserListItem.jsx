import React from "react";

export function UserListItem({ user, children }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}>
      <strong>{user.name}</strong> — {user.email} — Роль: {user.role}
      {children}
    </div>
  );
}
