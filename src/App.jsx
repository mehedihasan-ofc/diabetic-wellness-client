import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='my-container my-10'>
        <Outlet />
      </div>
    </>
  );
};

export default App;