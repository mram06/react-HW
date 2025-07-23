import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { fetchPosts } from "@/store/postsThunks";
import { setCurrentPage } from "@/store/postsSlice";
import { useEffect } from "react";
import PaginationBlock from "./components/PaginationBlock";

function PostsPage() {
  const {
    postsList,
    currentPageNumber,
    postsNumberPerPage,
    totalPagesNumber,
    status,
    error,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchPosts({
        pageNumber: currentPageNumber,
        itemsPerPage: postsNumberPerPage,
      })
    );
  }, [dispatch, currentPageNumber, postsNumberPerPage]);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <>
      <PostsList postsList={postsList} />

      {status === "loading" ? <div>Завантаження .... </div> : null}
      {status === "failed" ? <div>{error}</div> : null}

      <PaginationBlock
        currentPageNumber={currentPageNumber}
        totalPagesNumber={totalPagesNumber}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default PostsPage;
