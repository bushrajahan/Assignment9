import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
const Navbar = () => {
const {user} = useContext(AuthContext)

  const customStyle = {
    
    fontWeight: 'bold',  
    fontFamily:'Comic Neue ,cursive',
    padding:'10px',
    color:'#262f71',
    fontSize:'20px'
    
  };
  const navLink = <>

<NavLink
  to="/" style={customStyle}
  className={({ isActive }) =>
     isActive ? ' border-b-2 border-pink-400  '  : ""

  }>Home</NavLink>
  
  
<NavLink style={customStyle}
  to="/banner"
  className={({ isActive }) =>
     isActive ? ' border-b-2 border-pink-400  font-custom font-bold '  : ""

  }>Features</NavLink>

<NavLink style={customStyle}
  to="/service"
  className={({ isActive }) =>
     isActive ? ' border-b-2 border-pink-400  font-custom font-bold '  : ""

  }>Services</NavLink>
  
<NavLink style={customStyle}
  to="/Location"
  className={({ isActive }) =>
     isActive ? ' border-b-2 border-pink-400  font-custom font-bold '  : ""

  }>Contact US</NavLink>

  </>
  return (
    <div>
      <div className="navbar bg-base-100 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content font-custom-400 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}

      </ul>
    </div>
    <img src="/public/logo.webp" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}

    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="/login" className="btn bg-[#262f71] text-white capitalize">Login</NavLink>
  </div>
</div>
    </div>
  );
};

export default Navbar;