import React, { useEffect, useState } from 'react';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
// import { createPost, getPosts, updatePost } from '../../actions/Posts';
import {
  createPost,
  getPosts,
  updatePost,
} from '../../features/posts/PostsSlice';

const Form = ({ currentId, setCurrentId }) => {
  // Using use selector to find post to edit
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  // Setting the newPost state to id information if matched on edit click
  useEffect(() => {
    if (post) setNewPost(post);
  }, [post]);

  const [newPost, setNewPost] = useState({
    name: '',
    title: '',
    message: '',
    tags: '',
    photo: '',
  });

  // Submit button on form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, newPost));
    } else {
      dispatch(createPost(newPost));
    }

    setCurrentId(null);

    setNewPost({
      name: '',
      title: '',
      message: '',
      tags: '',
      photo: '',
    });

    dispatch(getPosts());
  };

  // Clear button on form
  const handleClear = () => {
    setNewPost({
      name: '',
      title: '',
      message: '',
      tags: '',
      photo: '',
    });
  };

  return (
    <form
      className='xxs:w-full xs:w-full xs:max-w-sm  bg-white rounded flex flex-col sticky lg:mx-5 top-5'
      onSubmit={handleSubmit}
      name='scrollForm'
    >
      {currentId ? (
        <h1 className='text-center text-3xl p-5 '> Editing Post </h1>
      ) : (
        <h1 className='text-center text-3xl p-5 '> Post a Pupdate</h1>
      )}
      <div className='p-5'>
        {/* Name */}
        <div className='xxs:flex xxs:items-center relative right-7 mb-6 xxs:flex-col xs:flex-row '>
          <div className='xxs:w-1/3'>
            <label
              className='block text-gray-500 font-bold xxs:text-center mb-1 xxs:mb-0 ml-8'
              for='inline-full-name'
            >
              Name{' '}
            </label>
          </div>
          <div className='xxs:w-2/3 f'>
            <input
              className='xxs:ml-5 xs:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-full-name'
              type='text'
              value={newPost.name}
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
              required
            />
          </div>
        </div>
        {/* Title */}
        <div className='xxs:flex xxs:items-center mb-6 relative right-7 xxs:flex-col xs:flex-row '>
          <div className='xxs:w-1/3'>
            <label
              className='block text-gray-500 font-bold xxs:text-center mb-1 xxs:mb-0  ml-8'
              for='inline-password'
            >
              Title
            </label>
          </div>
          <div className='xxs:w-2/3'>
            <input
              className='xxs:ml-5 xs:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='text'
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              required
            />
          </div>
        </div>
        {/* Message */}
        <div className='xxs:flex xxs:items-center mb-6 relative right-7 xxs:flex-col xs:flex-row '>
          <div className='xxs:w-1/3'>
            <label
              className='block text-gray-500 font-bold xxs:text-center mb-1 xxs:mb-0 ml-5'
              for='inline-password'
            >
              Message
            </label>
          </div>
          <div className='xxs:w-2/3'>
            <textarea
              className='xxs:ml-5 xs:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='password'
              value={newPost.message}
              onChange={(e) =>
                setNewPost({ ...newPost, message: e.target.value })
              }
              required
            />
          </div>
        </div>
        {/* Tags */}
        <div className='xxs:flex xxs:items-center mb-6 relative right-7 xxs:flex-col xs:flex-row '>
          <div className='xxs:w-1/3'>
            <label
              className='block text-gray-500 font-bold xxs:text-center mb-1 xxs:mb-0 ml-8'
              for='inline-password'
            >
              Tags
            </label>
          </div>
          <div className='xxs:w-2/3'>
            <input
              required
              placeholder='Seperate Tags By Commas'
              className='xxs:ml-5 xs:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='text'
              value={newPost.tags}
              onChange={(e) =>
                setNewPost({ ...newPost, tags: e.target.value.split(',') })
              }
            />
          </div>
        </div>
        {/* Photo */}
        <div>
          <div>
            <label className='block text-gray-500 font-bold xxs:text-center mb-1 xxs:mb-0  p-3'>
              {' '}
              Photo{' '}
            </label>
            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xxs'>
              <div className='space-y-1 text-center '>
                <svg
                  className='mx-auto h-12 w-12 text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600 file-wrapper '>
                  <label
                    for='file-upload'
                    className='mt-3 ml-8 relative cursor-pointer bg-white rounded-xxs font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                  >
                    <FileBase
                      className='file-upload'
                      type='file'
                      multiple={false}
                      onDone={({ base64 }) =>
                        setNewPost({ ...newPost, photo: base64 })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-around p-2 mr-14 mt-6'>
          <div className='xxs:flex xxs:items-center'>
            <div className='xxs:w-1/3'></div>
            <div className='xxs:w-2/3'>
              <button
                className='shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold xs:py-4 xs:px-7 rounded xxs:py-2 xxs:px-4 xxs:mr-2 xs:mr-0'
                type='submit'
              >
                Post
              </button>
            </div>
          </div>
          <div className='xxs:flex xxs:items-center'>
            <div className='xxs:w-1/3'></div>
            <div className='xxs:w-2/3'>
              <button
                className='shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold  xs:py-4 xs:px-7  xxs:py-2 xxs:px-4 rounded'
                type='button'
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
