import { useEffect, useState } from "react";

export const useWishForm = (
  initialTitle = "",
  initialFriend = "",
  initialGoalYear = new Date().getFullYear()
) => {
  const [title, setTitle] = useState(initialTitle);
  const [friend, setFriend] = useState(initialFriend);
  const [goalYear, setGoalYear] = useState(initialGoalYear);

  useEffect(() => {
    setTitle(initialTitle);
    setFriend(initialFriend);
    setGoalYear(initialGoalYear);
  }, [initialTitle, initialFriend, initialGoalYear]);

  return {
    title,
    setTitle,
    friend,
    setFriend,
    goalYear,
    setGoalYear,
  };
};
