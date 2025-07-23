import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { useEffect } from "react";
import { fetchPostsInfinite } from "@/store/postsThunks";
import { resetPostsList, setCurrentPage } from "@/store/postsSlice";

function PostsPageInfinite() {
  const {
    postsList,
    status,
    error,
    currentPageNumber,
    postsNumberPerPage,
    totalPagesNumber,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    const scrollHandler = (e) => {
      const { scrollTop, scrollHeight, clientHeight } =
        e.target.documentElement;

      const isBottom = scrollTop + clientHeight >= scrollHeight - 5;
      if (
        isBottom &&
        status !== "loading" &&
        currentPageNumber <= totalPagesNumber
      ) {
        dispatch(
          fetchPostsInfinite({
            pageNumber: currentPageNumber,
            itemsPerPage: postsNumberPerPage,
          })
        );
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [
    dispatch,
    currentPageNumber,
    postsNumberPerPage,
    status,
    totalPagesNumber,
  ]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(resetPostsList());
    dispatch(
      fetchPostsInfinite({
        pageNumber: currentPageNumber,
        itemsPerPage: postsNumberPerPage,
      })
    );
  }, [dispatch]);

  return (
    <>
      <PostsList postsList={postsList} />

      {status === "loading" ? <div>Завантаження .... </div> : null}
      {status === "failed" ? <div>{error}</div> : null}
    </>
  );
}

export default PostsPageInfinite;
