import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom';
const Banner = () => {
const navigate = useNavigate();

  return (
    <div>
      <div className="carousel w-full mt-10">
        <div
          id="slide1"
          className={`carousel-item relative w-full  `}
        >
          <img src="/public/girlboy.jpeg" alt="Slide 1" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           
          </div>
          <div className="carousel-text absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className='text-blue-800  font-bold text-2xl'> welcome to happy Baby.</h1>
            <p className='text-blue-800  font-bold text-2xl'>we arrange baby shower party</p>
         
            <button className="btn bg-blue-800 text-white mt-4 hover:bg-blue-800" onClick={()=>navigate('/service')}>
  Services
  <FaArrowRightLong></FaArrowRightLong>
</button>
          </div>
        </div> 
       
      </div>
    </div>
  );
};

export default Banner;
