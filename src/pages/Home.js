import React, { useState, useEffect } from 'react';
import Form from '../components/form/Form';
import Header from '../components/Header';
import Posts from '../components/post/Posts';
import '../index.css';
import { Routes, Route, Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/posts/PostsSlice';
import { lovePost } from '../api/Index';
import Home from '../pages/Home';
import Loading from '../components/Loading';
import Post from '../components/post/Post';
// import { getPosts } from './actions/Posts';



const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { loading } = useSelector((state) => state.posts);

  // Dispatching get post action for the getPost reducer
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);




  return (
    <main className='w-100 '>
      <section className='container mx-auto'>
        <div className='lg:flex lg:justify-center lg:align-middle  2xl:flex 2xl:flex-row 2xl:justify-between 2xl:content-center 2xl:relative 2xl:top-0  '>
          <div className='xxs:mt-20 xxs:flex xxs:justify-center'>
            {' '}
            <div className='sticky top-20 lg:mr-60 xxs:mt-20 '>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
          <div className='relative right-60 xl:relative xl:right-20 mt-20  xxs:flex xxs:justify-center xxs:right-0 top-16 '>
            {/* Loading icon while data is being fetched from the server  */}
            {posts.posts.length !== 0 ? (
              <Posts currentId={currentId} setCurrentId={setCurrentId} />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
