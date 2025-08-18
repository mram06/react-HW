import { useState } from "react";
import DeleteCommentButton from "@/features/comments/delete-button";

import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";

export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const user = useSelector(selectAuthUser);

  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "5px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>
        <b>{comment.authorName}</b>: {comment.text}
        {isDeleting && (
          <span style={{ marginLeft: 8, color: "#888" }}>Видаляється...</span>
        )}
      </span>
      {user ? (
        <DeleteCommentButton
          id={comment.id}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
        />
      ) : null}
    </div>
  );
}
// ...existing code...
