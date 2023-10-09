import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../assets/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  const {user,loading} = useContext(AuthContext)
  console.log(user)
  if(loading){
    <span className="loading loading-spinner loading-lg"></span>
  }
  if(!user?.email){
    return navigate('/login')
  }
  return children;
};

export default PrivateRoute;