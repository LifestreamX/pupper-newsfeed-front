import React from 'react';
import Post from './Post';

// Fetching data from global redux store
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId, currentId }) => {
  const posts = useSelector((state) => state.posts);


  return (
    <div className='mb-32 post-wrapper'>
      {posts?.posts.map((post) => (
        <Post
          setCurrentId={setCurrentId}
          currentId={currentId}
          post={post}
          key={posts?._id}
        />
      ))}
    </div>
  );
};

export default Posts;
