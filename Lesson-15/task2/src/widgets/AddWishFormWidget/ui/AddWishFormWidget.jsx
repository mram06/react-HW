import { useAddWish } from "@/features/wish/add-wish";
import { useUpdateWish } from "@/features/wish/edit-wish";
import { WishForm, useWishForm } from "@/features/wish/wish-form";
import { useNavigate } from "react-router";

function AddWishFormWidget({ wishId }) {
  const isNew = !wishId;

  const {
    title: editTitle,
    setTitle: setEditTitle,
    friend: editFriend,
    setFriend: setEditFriend,
    goalYear: editGoalYear,
    setGoalYear: setEditGoalYear,
    isLoadingWish,
    isUpdating,
    editWish,
  } = useUpdateWish(wishId);

  const {
    title: addTitle,
    setTitle: setAddTitle,
    friend: addFriend,
    setFriend: setAddFriend,
    goalYear: addGoalYear,
    setGoalYear: setAddGoalYear,
  } = useWishForm();

  const { addWish, isLoading: isAdding } = useAddWish();

  const currentTitle = isNew ? addTitle : editTitle;
  const currentSetTitle = isNew ? setAddTitle : setEditTitle;

  const currentFriend = isNew ? addFriend : editFriend;
  const currentSetFriend = isNew ? setAddFriend : setEditFriend;

  const currentGoalYear = isNew ? addGoalYear : editGoalYear;
  const currentSetGoalYear = isNew ? setAddGoalYear : setEditGoalYear;

  const currentIsLoading = isNew ? isAdding : isUpdating || isLoadingWish;

  const navigate = useNavigate();
  const handleDismiss = () => navigate("/wishes");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew) {
      await addWish({
        title: currentTitle,
        friend: currentFriend,
        goalYear: +currentGoalYear,
      });
    } else {
      await editWish();
    }
    handleDismiss();
  };

  return (
    <WishForm
      title={currentTitle}
      onTitleChange={(e) => currentSetTitle(e.target.value)}
      friend={currentFriend}
      onFriendChange={(e) => currentSetFriend(e.target.value)}
      goalYear={currentGoalYear}
      onGoalYearChange={(e) => currentSetGoalYear(e.target.value)}
      onSubmit={handleSubmit}
      onDismiss={handleDismiss}
      isNew={isNew}
      isSubmitting={currentIsLoading}
    />
  );
}

export default AddWishFormWidget;
