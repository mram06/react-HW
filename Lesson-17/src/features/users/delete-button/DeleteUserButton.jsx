import { useDeleteUserMutation } from "@/entities/user/api/userApi";

function DeleteUserButton({ userId }) {
  const [deleteUser, { isLoading, error: _error }] = useDeleteUserMutation();

  const onDeleteUser = () => {
    deleteUser({ id: userId });
  };

  return (
    <button
      type="button"
      onClick={onDeleteUser}
      disabled={isLoading}
      aria-busy={isLoading}
      aria-disabled={isLoading}
      className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-500 active:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isLoading && (
        <svg
          className="size-4 animate-spin text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {isLoading ? "Видалення…" : "Видалити"}
    </button>
  );
}

export default DeleteUserButton;
