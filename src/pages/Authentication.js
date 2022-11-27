import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
// import { auth } from '../../features/posts/AuthSlice';
import { setSignedIn, setUserData } from '../features/posts/UserSlice';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  When google signed in succesfully
  const googleSuccess = async (res) => {
    const token = res.credential;
    const user = jwt_decode(token);

    try {
      dispatch(setSignedIn(true));
      dispatch(setUserData(user));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='w-100 '>
      <section className='form container mx-auto '>
        <div className='google-form-wrapper xxs:top-80 xxs:justify-center xxs:align-middle  xxs:flex xxs:flex-row  xxs:content-center xxs:relative  '>
          <form className=' google-form xxs:w-100 xxs:relative  xs:w-full xs:max-w-sm  bg-white rounded p-15 flex flex-col sticky top-40'>
            <h1 className='justify-center align-middle text-center p-10 font-bold text-4xl '>
              Sign In
            </h1>
            <div className='p-5'>
              {/* Buttons */}
              <div className='flex justify-around p-2 mr-14 mt-6'>
                <div className='xxs:flex xxs:items-center'>
                  <div className='xxs:w-1/3'></div>
                  <div className='xxs:w-2/3 flex flex-col justify-center'>
                    {/* Google login */}
                    <div className='flex justify-center relative bottom-10'>
                      <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={() => console.log('error')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Authentication;
