import React from 'react';
import Post from './Post';

// Fetching data from global redux store
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div className='text-white'>
      <Post />
    
    </div>
  );
};

export default Posts;
