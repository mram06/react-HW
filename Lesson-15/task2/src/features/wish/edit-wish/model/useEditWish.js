import { useGetWishByIdQuery, useUpdateWishMutation } from "@/entities/wish";
import { useWishForm } from "@/features/wish/wish-form";

export const useUpdateWish = (wishId) => {
  const {
    data: wishData,
    isLoading: isLoadingWish,
    error: loadError,
  } = useGetWishByIdQuery(wishId);

  const [updateWishMutation, { isLoading: isUpdating, error: updateError }] =
    useUpdateWishMutation();

  const { title, setTitle, friend, setFriend, goalYear, setGoalYear } =
    useWishForm(
      wishData?.title || "",
      wishData?.friend || "",
      wishData?.goalYear || new Date().getFullYear()
    );

  const editWish = async () => {
    try {
      await updateWishMutation({
        id: wishId,
        data: { title, friend, goalYear: +goalYear },
      });
    } catch (error) {
      console.error("Failed to update wish:", error);
    }
  };

  return {
    title,
    setTitle,
    friend,
    setFriend,
    goalYear,
    setGoalYear,
    isLoadingWish,
    loadError,
    isUpdating,
    updateError,
    editWish,
  };
};
