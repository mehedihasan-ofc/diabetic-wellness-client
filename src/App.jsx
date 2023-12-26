import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div className='my-container my-5'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;