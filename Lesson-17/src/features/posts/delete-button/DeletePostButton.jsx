import { useDeletePostMutation } from "@/entities/post/api/postApi";

function DeletePostButton({ id }) {
  const [deletePost] = useDeletePostMutation();

  return <button onClick={() => deletePost(id)}>Видалити</button>;
}

export default DeletePostButton;
