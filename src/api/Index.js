import axios from 'axios';

const backendServerUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

const devUrl = process.env.REACT_APP_DEV_SERVER_URL;

const url = backendServerUrl;

// Dev
// const url = 'http://localhost:5000/posts';

// Connecting to back end to work with posts database

export const fetchPosts = () => axios.get(devUrl);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const lovePost = (id) => axios.patch(`${url}/${id}/lovePost`);
