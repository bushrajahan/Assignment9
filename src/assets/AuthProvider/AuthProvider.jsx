import React, { createContext, useEffect, useState } from 'react';
import auth from '../../config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useAsyncError } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
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
  useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
    return()=>{
      unSubscribe();
    }
  },[])

  const authValue = {
    createUser,
    signIn,
    googleSignIn,
    user
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
