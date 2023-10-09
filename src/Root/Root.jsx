import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      
        <Home />
        <Outlet />
      </div>
    
  );
};

export default Root;
