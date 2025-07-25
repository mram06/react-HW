import {
  useAddPostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "@/api/postsApi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const PostEditPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetPostByIdQuery(id);

  useEffect(() => {
    setUserId(data?.userId ?? "");
    setTitle(data?.title ?? "");
    setBody(data?.body ?? "");
  }, [data]);

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const actionButtonTitle = id ? "Оновити пост" : "Додати пост";

  const [addPost, { isLoading: isAddLoading, isError: isAddError }] =
    useAddPostMutation();
  const [updatePost, { isLoading: isUpdateLoading, isUpdateError }] =
    useUpdatePostMutation();

  const navigate = useNavigate();
  const onAction = async () => {
    if (id) {
      try {
        await updatePost({ id: data.id, userId, title, body });
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      try {
        await addPost({ userId, title, body });
      } catch (error) {
        console.log(error);
        return;
      }
    }
    navigate("/posts");
  };

  let content =
    isLoading || isAddLoading || isUpdateLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">
              ID автора
            </label>
            <input
              type="number"
              className="custom-input"
              placeholder="Введіть ID автора"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">
              Заголовок
            </label>
            <input
              type="text"
              className="custom-input"
              placeholder="Введіть заголовок поста"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">
              Опис
            </label>
            <textarea
              rows="4"
              className="custom-input resize-none"
              placeholder="Введіть опис поста"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button onClick={onAction} className="custom-btn">
            {actionButtonTitle}
          </button>
        </div>
      </>
    );

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {id ? "Редагування посту" : "Додати новий пост"}
      </h2>
      {isError || isAddError || isUpdateError}
      {content}
    </div>
  );
};

export default PostEditPage;
