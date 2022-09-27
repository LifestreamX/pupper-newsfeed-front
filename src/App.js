import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <Header  />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/authentication'
          element={<Authentication  />}
        />
      </Routes>
    </>
  );
};

export default App;
