import React from 'react';
import dog from '../assets/images/dog.png'

const Header = () => {
  return (
    <header className='bg-white flex justify-center relative top-10 rounded-full py-8'>
      <h1 className='text-6xl font-bold '> Pupper Newsfeed</h1>
      <img src={dog} alt="dog" className='mx-5' />
    </header>
  );
};

export default Header;
