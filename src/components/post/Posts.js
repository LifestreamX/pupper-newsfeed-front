import React from 'react';
import Post from './Post';

// Fetching data from global redux store
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId, currentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className='mb-32 post-wrapper'>
      {posts?.posts.map((post) => (
        <div
          key={posts?._id}
          class='xs:max-w-lg    xl:max-w-sm   2xl:max-w-2xl 2xl:flex mb-20  sm:flex sm:flex-col 	 2xl:flex-row  '
        >
          <Post setCurrentId={setCurrentId} currentId={currentId} post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
