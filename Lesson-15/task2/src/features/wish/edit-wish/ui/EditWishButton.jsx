import { useNavigate } from "react-router";

export function EditWishButton({ wishId }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/wishes/edit/${wishId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
    >
      <span>✏️</span>
      Змінити
    </button>
  );
}
