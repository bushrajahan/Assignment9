import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Banner/Banner';
import Navbar from '../Component/Navbar';
import Services from '../Pages/services/Services';

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto lg:max-w-full '>
      
        <Navbar></Navbar>
        <Outlet></Outlet>
       
       
      </div>
    
  );
};

export default Root;
