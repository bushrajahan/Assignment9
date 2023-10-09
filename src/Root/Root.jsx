import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Banner/Banner';

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      
        <Home />
        <Banner></Banner>
        <Outlet />
      </div>
    
  );
};

export default Root;
