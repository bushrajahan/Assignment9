import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import Profile from './Profile/Profile';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const customStyle = {
    fontWeight: 'bold',
    fontFamily: 'Comic Neue, cursive',
    padding: '10px',
    color: '#262f71',
    fontSize: '20px',
  };

  const navLink = (
    <>
      <NavLink
        to="/"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400"
      >
        Home
      </NavLink>

      <NavLink
        to="/banner"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        Features
      </NavLink>

      <NavLink
        to="/service"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        Services
      </NavLink>

      <NavLink
        to="/Location"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        Contact US
      </NavLink>

      <NavLink
        to="/testimonial"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        Testimonial
      </NavLink>
      <NavLink
        to="/blog"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        style={customStyle}
        activeClassName="border-b-2 border-pink-400 font-custom font-bold"
      >
        About
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className="bg-base-100">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img src="/public/logo.webp" alt="" className="" />
              <div className=" flex flex-col md:flex-row  items-center w-auto space-x-4">
                {navLink}
             <div className='lg:hidden'>
            
                {user ?
                <Profile user={user}></Profile>:
                <NavLink
                to="/login"
                style={customStyle}
                activeClassName="border-b-2 border-pink-400 font-custom font-bold"
              >
                Login
              </NavLink>
                
                }
             </div>
              </div>
            </div>
       
            <div
                  
            >
              <div className="hidden lg:block">
         
                
                {user ? <Profile user={user}></Profile>:
                
                <NavLink
                to="/login"
                style={customStyle}
                activeClassName="border-b-2 border-pink-400 font-custom font-bold"
              >
                  Login
                </NavLink>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
