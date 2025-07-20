import { fetchPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Task2() {
  const {
    postsList,
    isLoading,
    error: errorMessage,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {errorMessage ? <div>{errorMessage}</div> : ""}
      {isLoading ? <div>Fetching data...</div> : ""}
      <div>
        {postsList.map((post) => (
          <div key={post.id}>
            {post.id} - {post.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Task2;
