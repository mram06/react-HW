import { useDeleteCommentMutation } from "@/entities/post/comments/api/commentApi";

function DeleteCommentButton({ id, isDeleting, setIsDeleting }) {
  const [deleteComment] = useDeleteCommentMutation();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteComment(id).unwrap();
    } catch (e) {
      console.log(e);

      // handle error if needed
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      style={{ marginLeft: 10 }}
    >
      Видалити
    </button>
  );
}

export default DeleteCommentButton;
