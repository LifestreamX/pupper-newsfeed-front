import axios from 'axios';

// Production
const url = 'https://pupper-newsfeed-backend.onrender.com/posts';

// Dev
// const url = 'http://localhost:5000/posts';

// Connecting to back end to work with posts database

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const lovePost = (id) => axios.patch(`${url}/${id}/lovePost`);
