import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';
import sweetalert from 'sweetalert';

const Register = () => {
  
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleClick = (e) =>{
  
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; 
    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/;
    if(pattern.test(password)){
    
   
    console.log(email,password)
    createUser(email,password)
    .then(res =>
       navigate('/')
    )
    .catch(error => console.error(error))
    }
    else{
      sweetalert('password contains at least one uppercase letter, one special character, and is a minimum of 6 characters in length')
    }
  }
  return (
    <div>
          <div className="hero-content flex-col mt-40">
   
   <div className="card bg-indigo-800 text-white flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form className="card-body  " onSubmit={handleClick}>
     
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Email</span>
         </label>
         <input name='email' type="email" placeholder="email" className="input text-blue-800 input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Password</span>
         </label>
         <input name='password' type="password" placeholder="password" className=" text-blue-800 input  input-bordered" required />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button  className="btn bg-white text-indigo-800 text-xl font-bold">Register</button>

       </div>
       <h2 className='p-4'>Already have account  <Link className='border-b-2 m-2 border-pink-400 text-xl' to="/login">Login</Link></h2>

     </form>
   </div>
 </div>
    </div>
  );
};

export default Register;