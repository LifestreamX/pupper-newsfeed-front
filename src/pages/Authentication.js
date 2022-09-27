import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
// import { auth } from '../../features/posts/AuthSlice';
import {
  setSignedIn,
  setUserData,
} from '../features/posts/UserSlice';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = null;

  const [signInForm, setSignInForm] = useState(true);

  const switching = () => {
    setSignInForm(!signInForm);
  };

  // Sign in form inputs state
  const [signInInputs, setSignInInputs] = useState({
    email: '',
    password: '',
  });

  // Sign up form inputs state
  const [signUpInputs, setSignUpInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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

  // Logic for when form is submitted
  const handleFormSignInSubmit = () => {};

  return (
    <main className='w-100 '>
      <section className='container mx-auto '>
        <div className=' xxs:top-80 xxs:justify-center xxs:align-middle  xxs:flex xxs:flex-row  xxs:content-center xxs:relative  '>
          <form
            className='xxs:w-52 xs:w-full xs:max-w-sm  bg-white rounded p-15 flex flex-col sticky top-40 '
            onSubmit={handleFormSignInSubmit}
          >
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
          0
        </div>
      </section>
    </main>
  );
};

export default Authentication;
