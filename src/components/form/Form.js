import React, { useState } from 'react';
import '../../index.css';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/Posts';

const Form = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({
    name: '',
    title: '',
    message: '',
    tags: '',
    photo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(newPost));
    // setNewPost({
    //   name: '',
    //   title: '',
    //   message: '',
    //   tags: '',
    //   photo: '',
    // });
  };

  

  // console.log(handleSubmit);

  const handleClear = () => {
    setNewPost({
      name: '',
      title: '',
      message: '',
      tags: '',
      photo: '',
    });
  };


  // console.log(newPost.name);
  // console.log(newPost.title);
  // console.log(newPost.message);
  // console.log(newPost.tags);
  // console.log(newPost.photo);

  return (
    <form
      className='w-full max-w-sm bg-white rounded p-15 flex flex-col'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center text-3xl p-5 '>Post a Pupdate</h1>
      <div className='p-5'>
        {/* Name */}
        <div className='md:flex md:items-center relative right-7 mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'
              for='inline-full-name'
            >
              Name{' '}
            </label>
          </div>
          <div className='md:w-2/3 f'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-full-name'
              type='text'
              value={newPost.name}
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
              // value='Jane Doe'
            />
          </div>
        </div>
        {/* Title */}
        <div className='md:flex md:items-center mb-6 relative right-7'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'
              for='inline-password'
            >
              Title
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='text'
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              // placeholder='******************'
            />
          </div>
        </div>
        {/* Message */}
        <div className='md:flex md:items-center mb-6 relative right-7'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'
              for='inline-password'
            >
              Message
            </label>
          </div>
          <div className='md:w-2/3'>
            <textarea
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='password'
              value={newPost.message}
              onChange={(e) =>
                setNewPost({ ...newPost, message: e.target.value })
              }
              // placeholder='******************'
            />
          </div>
        </div>
        {/* Tags */}
        <div className='md:flex md:items-center mb-6 relative right-7'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'
              for='inline-password'
            >
              Tags
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600'
              id='inline-password'
              type='text'
              value={newPost.tags}
              onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
              // placeholder='******************'
            />
          </div>
        </div>
        {/* Photo */}
        <div>
          <div>
            <label className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4 p-3'>
              {' '}
              Photo{' '}
            </label>
            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
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
                <div className='flex text-sm text-gray-600'>
                  <label
                    for='file-upload'
                    className='mt-3 ml-8 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                  >
                    <FileBase
                      type='file'
                      multiple={false}
                      onDone={({ base64 }) =>
                        setNewPost({ ...newPost, photo: base64 })
                      }
                    />

                    {/* 
                    <input
                      id='file-upload'
                      name='file-upload'
                      type='file'
                      className='sr-only'
                      value={newPost.photo}
                      onChange={(e) =>
                        setNewPost({ ...newPost, photo: e.target.value })
                      }
                    /> */}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-around p-2 mr-14 mt-6'>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                className='shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-7 rounded'
                type='submit'
              >
                Post
              </button>
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                className='shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-7 rounded'
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
