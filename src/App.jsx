import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div className='my-container my-10'>
          <Outlet />
        </div>

        {/* Gradiendts */}
        <div className='gradient-01 z-0 absolute'></div>
        <div className='gradient-02 z-0 absolute'></div>
      </div>
    </>
  );
};

export default App;