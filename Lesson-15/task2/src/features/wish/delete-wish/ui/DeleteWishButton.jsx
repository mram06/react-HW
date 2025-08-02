import { useDeleteWish } from "../model/useDeleteWish";

function DeleteWishButton({ wishId, onDeleted }) {
  const { handleDeleteWish, isLoading } = useDeleteWish();

  const handleClick = async () => {
    const success = await handleDeleteWish(wishId);
    if (success && onDeleted) {
      onDeleted(wishId);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Видалення...
        </>
      ) : (
        <>
          <span>🗑️</span>
          Видалити
        </>
      )}
    </button>
  );
}

export default DeleteWishButton;
