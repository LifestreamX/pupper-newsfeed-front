import React from 'react';
import CORGI from '../../assets/images/corgi2.jpg';

const Post = () => {
  return (
    <div class='max-w-sm w-full lg:max-w-full lg:flex '>
      {/* Image */}
      <img
        class='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        src={CORGI}
        title='Woman holding a mug'
        alt='corgi'
      ></img>
      <div class='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div class='mb-8'>
          {/* Tags */}
          <p class='text-sm text-gray-600 flex items-center'># Bday, eggs</p>
          {/* Title */}
          <div class='text-gray-900 font-bold text-xl mb-2'>
            Birthday Corgi{' '}
          </div>
          {/* Message */}
          <p class='text-gray-700 text-base'>
            This is my Corgi on his very first Birthday. He is super excited for
            not only his birthday but also Halloween as well!
          </p>
        </div>
        {/* Name & Date */}
        <div class='flex items-center'>
          <div class='text-sm'>
            <p class='text-gray-900 leading-none'>Tyler Allen</p>
            <p class='text-gray-600'>{Date()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
