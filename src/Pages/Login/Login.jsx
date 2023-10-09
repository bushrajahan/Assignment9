import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';

const Login = () => {
  const navigate = useNavigate()
  const{signIn, googleSignIn} = useContext(AuthContext)

  const handleClick = () =>{
    //sign with google
    googleSignIn()
    .then(res =>{
     navigate('/')
     console.log(res.user)
    })
    .catch(error => console.error(error))
  }
  const handleSubmit =(e) =>{
    
  

    //sign in with password
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     signIn(email,password)
    .then(res =>{
     navigate('/')
     console.log(res.user)
    })
    .catch(error => console.error(error))



  }

  return (
    <div>
        <div className="hero-content flex-col " >
   
   <div className="card bg-indigo-800 text-white flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form className="card-body  " onSubmit={handleSubmit}>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Email</span>
         </label>
         <input type="email" name='email' placeholder="email" className="text-blue-800  input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Password</span>
         </label>
         <input type="password" name='password' placeholder="password" className="text-blue-800 input input-bordered" required />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
       <button className="btn bg-white text-indigo-800 text-xl font-bold">Login</button>
       <button className="btn my-2 bg-white text-indigo-800 text-xl font-bold"  onClick={handleClick}>Sign in with Google</button>

       </div>
       <h2 className='p-4'>New here <Link className='border-b-2 border-pink-400 text-xl' to="/register">Register</Link></h2>

     </form>
   </div>
 </div>
    </div>
  );
};

export default Login;