import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  fetchPosts,
  fetchPostsInfinite,
} from "./postsThunks";

const initialState = {
  postsList: [],
  currentPageNumber: 1,
  postsNumberPerPage: 5,
  totalPagesNumber: 1,
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload;
    },
    resetPostsList: (state) => {
      state.postsList = [];
    },
  },
  extraReducers: (builder) => {
    // fetch posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.postsList = action.payload.items;
        const paginationData = action.payload.pagination;

        state.currentPageNumber = paginationData.currentPage;
        state.postsNumberPerPage = paginationData.pageSize;
        state.totalPagesNumber = paginationData.totalPages;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // fetch posts infinite
    builder
      .addCase(fetchPostsInfinite.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPostsInfinite.fulfilled, (state, action) => {
        state.status = "success";
        state.postsList.push(...action.payload.items);
        const paginationData = action.payload.pagination;

        state.currentPageNumber = paginationData.currentPage + 1;
        state.postsNumberPerPage = paginationData.pageSize;
        state.totalPagesNumber = paginationData.totalPages;
      })
      .addCase(fetchPostsInfinite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // delete post
    builder
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // create post
    builder
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage, resetPostsList } = postsSlice.actions;

export default postsSlice.reducer;
