import apiClient from "@/api/apiClient";
import initialPosts from "@/data/initialPosts";
import { createAsyncThunk } from "@reduxjs/toolkit";

const postsApi = apiClient("posts", 500, initialPosts);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await postsApi.delete(postId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (item, { rejectWithValue }) => {
    try {
      const response = await postsApi.create(item);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPostsInfinite = createAsyncThunk(
  "posts/fetchPostsInfinite",
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
