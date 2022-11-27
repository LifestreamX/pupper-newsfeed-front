/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletePost,
  getPosts,
  lovePost,
} from '../../features/posts/PostsSlice';
import { animateScroll } from 'react-scroll';

const Post = ({ setCurrentId, currentId, post }) => {
  // const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // REDUX TOOLKIT
  // const { posts, loading } = useSelector((state) => state.posts);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    dispatch(getPosts());
  };

  const handleLove = (id) => {
    dispatch(lovePost(id));
    dispatch(getPosts());
  };

  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [switching, post.length]);

  // Scroll logic
  let Scroll = require('react-scroll');
  let scroller = Scroll.scroller;

  const scrollToForm = () => {
    // Somewhere else, even another file
    scroller.scrollTo('scrollForm', {
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };


  return (
    <>
      <div class='xs:max-w-lg    xl:max-w-sm   2xl:max-w-2xl 2xl:flex mb-20  sm:flex sm:flex-col 	 2xl:flex-row'>
        {/* Image */}

        <img
          class='  lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center  '
          src={post?.photo}
          name='scrollImage'
        ></img>

        <div class='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='relative flex justify-between '>
            {/* Tags */}
            <div class='mb-8'>
              <p class='text-sm text-gray-600  '>
                {post?.tags?.map((tag) => `#${tag} `)}{' '}
              </p>
            </div>
            {/* Edit Icon */}
            <div>
              <svg
                onClick={() => {
                  setCurrentId(post._id);
                  scrollToForm();
                }}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 cursor-pointer image.png '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div class='text-gray-900 font-bold text-xl mb-2 relative bottom-4'>
            {post?.title}
          </div>
          {/* Message */}
          <div className='w-60'>
            <p class='text-gray-700 text-base mb-16 break-normal break-words 	'>
              {post?.message}
            </p>
          </div>

          {/* Name & Date */}
          <p class='text-gray-900 leading-none'>{post?.name}</p>
          <div class='flex items-center'>
            {/* <div class='text-sm'>
                  <p class='text-gray-600'>{post.createdAt}</p>
                </div> */}
          </div>

          <div className='flex justify-between mt-3'>
            {/* Love button */}
            <div className='flex'>
              <svg
                onClick={() => {
                  handleLove(post._id);
                  setSwitching(!switching);
                }}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 cursor-pointer'
                viewBox='0 0 20 20'
                fill='#ff0011'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-2'>{post?.loveCount}</span>
            </div>

            {/* Delete button */}
            <svg
              onClick={() => {
                handleDelete(post._id);
                setSwitching(!switching);
              }}
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
