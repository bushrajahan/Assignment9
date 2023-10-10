import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import Profile from './Profile/Profile';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const customStyle = {
    fontWeight: 'bold',
    fontFamily: 'Comic Neue, cursive',
    padding: '10px',
    color: '#262f71',
    fontSize: '20px',
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <NavLink to="/" className="text-lg font-bold text-gray-800 dark:text-white">
            <img src="/public/logo.webp" alt="" className='w-10'/>
          </NavLink>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink
              to="/"
              style={customStyle}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              style={customStyle}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Services
            </NavLink>
            
            <NavLink
              to="/Location"
              style={customStyle}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Contact US
            </NavLink>
            <NavLink
              to="/blog"
              style={customStyle}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Blog
            </NavLink>
            <NavLink
              to="/testimonial"
              style={customStyle}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Testimonial
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block">
          {user && <Profile />}
          {!user && (
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              {isMobileNavOpen && (
                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.75H20.25V7.25H3.75V5.75Z" />
              )}
              {!isMobileNavOpen && (
                <>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.75H20.25V7.25H3.75V5.75Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 11.75H20.25V13.25H3.75V11.75Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 17.75H20.25V19.25H3.75V17.75Z" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              style={customStyle}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400' : '')}
            >
              Home
            </NavLink>

            <NavLink
              to="/service"
              style={customStyle}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Services
            </NavLink>

            <NavLink
              to="/Location"
              style={customStyle}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Contact US
            </NavLink>

            <NavLink
              to="/blog"
              style={customStyle}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Blog
            </NavLink>

            <NavLink
              to="/testimonial"
              style={customStyle}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) => (isActive ? 'border-b-2 border-pink-400 font-custom font-bold' : '')}
            >
              Testimonial
            </NavLink>

            {user && (
              <div onClick={() => setIsMobileNavOpen(true)}>
                {user && <Profile user={user}></Profile>}
              </div>
            )}

            {!user && (
              <button
                onClick={() => {
                  setIsMobileNavOpen(true);
                  navigate('/login');
                }}
                className="block px-3 py-2  bg-blue-800 text-white " >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar