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
    <header className='bg-white flex justify-evenly align-middle relative top-10  py-14 w-100'>
      {/* Left side  */}
      <Link to='/' className='absolute left-2 top-2  md:left-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-8 md:w-12 md:h-12   '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
      </Link>

      {/* Middle */}
      <h1 className='font-bold text-2xl absolute top-0  md:text-4xl lg:text-5xl lg:my-3'>
        {' '}
        Pupper Newsfeed
      </h1>
      <Link to='/' className=''>
        <img src={dog} alt='dog' className=' dog lg:relative lg:top-5' />
      </Link>

      {/* Right Side */}
      <div className=' absolute right-2 top-2 md:right-5'>
        {/* Sign in and Logout Buttons */}

        <>
          {user?.state?.isSignedIn ? (
            <div className=' relative flex flex-col justify-center align-middle'>
              <div className=' flex justify-center '>
                <Avatar
                  src={user.state?.userData?.picture}
                  round={true}
                  className=''
                  size='50'
                />
              </div>

              <button
                onClick={handleSignOut}
                className='relative top-2 shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold rounded py-2 text-sm   '
              >
                <p className='px-2 '> Logout</p>
              </button>
            </div>
          ) : (
            <Link to='/authentication'>
              <button className='relative shadow bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white font-bold  py-1 px-1 top-0 lg:py-2 lg:px-2'>
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
