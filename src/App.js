import React from 'react';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <div className='w-100 h-screen bg-slate-800'>
      <div className='container mx-auto'>
        <Header />
      </div>
    </div>
  );
};

export default App;
