import React, { createContext } from 'react';
import auth from '../../config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };
  //log in 

  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  //Google login

   const provider = new GoogleAuthProvider();
   const googleSignIn = () =>{
    return signInWithPopup(auth,provider);
   }


  const authValue = {
    createUser,
    signIn,
    googleSignIn
  };

  return (
    <div>
      <AuthContext.Provider value={authValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
