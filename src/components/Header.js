import React from 'react';
import dog from '../assets/images/dog.png'

const Header = () => {
  return (
    <div className='bg-white flex justify-center relative top-10 rounded-full py-5'>
      <h1 className='text-5xl font-bold '> Pupper Newsfeed</h1>
      <img src={dog} alt="dog" className='mx-5' />
    </div>
  );
};

export default Header;
