import React, { useEffect, useState } from 'react';
import dog from '../assets/images/dog.png';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userData } = useSelector((state) => state.user);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [userData]);
  // you could also useLocation for when location changes useEffect runs

  // Logic for signing out of google account
  const handleSignOut = (e) => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <header className='bg-white flex justify-center relative top-10  py-8 xxs:flex'>
      {/* Left side  */}
      <Link
        to='/'
        className='xxs:relative xxs:left-40 md:left-64 xl:left-20 2xl:left-0'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-10 relative right-80 top-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
      </Link>

      {/* Middle */}
      <h1 className='font-bold xxs:text-2xl  xxs:right-5 xxs:top-4 xs:text-4xl  lg:text-6xl  '>
        {' '}
        Pupper Newsfeed
      </h1>
      <Link to='/' className='xxs:relative xxs:right-10 sm:right-0'>
        <img src={dog} alt='dog' className='mx-5' />
      </Link>

      {/* Right Side */}
      <div className=' relative flex flex-col xs:left-300 lg:left-20 xl:left-60   2xl:left-80 xxs:flex  '>
        {/* Sign in and Logout Buttons */}

        <>
          {user?.state?.isSignedIn ? (
            <div className=' xxs:relative xxs:right-3'>
              {/* <h1>{user.state?.userData?.name}</h1> */}
              <Avatar
                src={user.state?.userData?.picture}
                round={true}
                className='mr-5 mt-1'
                size='60'
              />
              <button
                onClick={handleSignOut}
                className='relative left-1 top-3 shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold xxs:right-3 xs:py-2 xs:px-2  xxs:py-2 xxs:px-4 rounded '
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to='/authentication'>
              <button className='relative shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold  xs:py-2 xs:px-2  xxs:py-2 xxs:px-4 rounded  xxs:right-3 sm:left-20 sm:top-5'>
                Sign In
              </button>
            </Link>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
