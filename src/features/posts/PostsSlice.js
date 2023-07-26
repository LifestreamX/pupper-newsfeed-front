import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/Index';

// Get
export const getPosts = createAsyncThunk('posts/getPost', async () => {
  try {
    const { data } = await api.fetchPosts();
    return data;
  } catch (error) {
    // console.log(error);
  }
});

// Create
export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  try {
    const { data } = await api.createPost(post);
    return data;
  } catch (error) {
    // console.log(error);
  }
});

// Delete
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    await api.deletePost(id);
  } catch (error) {}
});

// Update
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    return data;
  } catch (error) {}
};

// Love
export const lovePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.lovePost(id);
    return data;
  } catch (error) {}
};

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },

  extraReducers: {
    // Get
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
    // Create
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, action.payload];
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Update
    [updatePost.pending]: (state, action) => {
      state.loading = true;
    },

    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      if (!action.payload?._id) {
        // console.log('Could not update');
        return;
      }
    },
    [updatePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Love
    [lovePost.pending]: (state, action) => {
      state.loading = true;
    },

    [lovePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    [lovePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
