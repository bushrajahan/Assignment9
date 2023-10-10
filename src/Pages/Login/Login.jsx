import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();
  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleClick = () => {
    // sign with google
    googleSignIn()
      .then((res) => {
        navigate('/');
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // sign in with password
    signIn(email, password)
      .then((res) => {
        navigate('/');
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === 'auth/wrong-password') {
          swal('Oops!', 'The password is incorrect.', 'error');
        } else if (error.code === 'auth/user-not-found') {
          swal('Oops!', 'The email is not registered.', 'error');
        }
      });
  };

  return (
    <div className="hero-content z-20 flex-col mt-56 ">
      <div className="card bg-indigo-800 text-white  md:max-w-sm ">
        <form className="card-body  " onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="text-blue-800  input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="text-blue-800 input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-white text-indigo-800 text-xl font-bold">Login</button>

            <button className="btn my-2 bg-white text-indigo-800 text-xl font-bold" onClick={handleClick}>
              Sign in with Google
            </button>
          </div>
        </form>
        <h2 className="p-4">
          New here <Link className="text-white underline" to="/signup">Create an account</Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
