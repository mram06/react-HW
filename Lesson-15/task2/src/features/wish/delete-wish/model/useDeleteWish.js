import { useDeleteWishMutation } from "@/entities/wish";

export const useDeleteWish = () => {
  const [deleteWish, { isLoading, error }] = useDeleteWishMutation();

  const handleDeleteWish = async (wishId) => {
    try {
      await deleteWish(wishId);
      return true;
    } catch (error) {
      console.error("Failed to delete wish:", error);
    }

    return false;
  };
  return { handleDeleteWish, isLoading, error };
};
