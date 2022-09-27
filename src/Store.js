// REDUX TOOLKIT

import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './features/posts/PostsSlice';
import userReducer from './features/posts/UserSlice';

export default configureStore({
  reducer: {
    posts: PostReducer,
    user: userReducer,
  },
});