import React, { useEffect } from 'react';
import Form from './components/form/Form';
import Header from './components/Header';
import Posts from './components/post/Posts';
import './index.css';
// Redux
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts';

const App = () => {
  const dispatch = useDispatch();

  // Dispatching get post action for the getPost reducer
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <main className='w-100 h-screen bg-slate-800'>
      <section className='container mx-auto h-screen'>
        <Header />

        <div className='flex justify-between content-center relative top-40'>
          <Form />
          <Posts />
        </div>
      </section>
    </main>
  );
};

export default App;
