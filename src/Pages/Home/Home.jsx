import React from 'react';
import Navbar from '../../Component/Navbar';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import Location from '../location/Location';
import Login from '../Login/Login';

const Home = () => {
  return (
    <div className=''>
      
    <Banner></Banner>
    <Services></Services>
    {/* <Location></Location> */}
    {/* <Login></Login> */}
    </div>
  );
};

export default Home;