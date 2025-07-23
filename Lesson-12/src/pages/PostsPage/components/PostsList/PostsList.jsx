import { useDispatch, useSelector } from "react-redux";
import PostsItemCart from "./PostsItemCart";
import { deletePost, fetchPosts } from "@/store/postsThunks";

function PostsList({ postsList }) {
  const dispatch = useDispatch();

  const { currentPageNumber, postsNumberPerPage } = useSelector(
    (state) => state.posts
  );

  const onDeletePost = async (id) => {
    await dispatch(deletePost(id)).then(() => {
      dispatch(
        fetchPosts({
          pageNumber: currentPageNumber,
          itemsPerPage: postsNumberPerPage,
        })
      );
    });
  };

  return (
    <>
      {postsList.length ? (
        <div>
          {postsList.map((post) => (
            <PostsItemCart
              key={post.id}
              postsData={post}
              onDeletePost={onDeletePost}
            />
          ))}
        </div>
      ) : (
        <div>Список порожній</div>
      )}
    </>
  );
}

export default PostsList;
