import { useAddWishMutation } from "@/entities/wish";

export const useAddWish = () => {
  const [addWishMutation, { isLoading, error }] = useAddWishMutation();

  const addWish = async (wishData) => {
    try {
      await addWishMutation(wishData);
    } catch (error) {
      console.error("Failed to add wish:", error);
    }
  };
  return { addWish, isLoading, error };
};
