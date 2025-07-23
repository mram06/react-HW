import { createPost } from "@/store/postsThunks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function PostsAddForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [authorId, setAuthorId] = useState("");

  const getRandomNumber = (from, to) => Math.floor(Math.random() * to) + from;

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onAddPost = async () => {
    await dispatch(
      createPost({
        title,
        body,
        authorId,
        createdAt: new Date().toString(),
        dislikesNumber: getRandomNumber(1, 300),
        likesNumber: getRandomNumber(1, 300),
      })
    ).then(() => navigate("/posts"));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Додати новий пост
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Заголовок:
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900"
            placeholder="Введіть заголовок поста"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Текст:
          </label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical text-gray-900"
            placeholder="Введіть текст поста"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Автор:
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900"
            placeholder="Введіть ім'я автора"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
        </div>

        <button
          onClick={onAddPost}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Створити пост
        </button>
      </div>
    </div>
  );
}

export default PostsAddForm;
