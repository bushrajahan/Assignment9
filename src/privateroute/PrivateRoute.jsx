import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../assets/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login';

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  const {user,loading} = useContext(AuthContext)
  console.log(user)
  if(loading){
    <span className="loading loading-spinner loading-lg"></span>
  }
  if(!user){
    return <Login></Login>
  }
  return children;
};

export default PrivateRoute;