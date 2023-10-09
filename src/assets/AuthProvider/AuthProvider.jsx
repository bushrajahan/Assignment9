import React, { createContext, useEffect, useState } from 'react';
import auth from '../../config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useAsyncError } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading,setLoading] = useState(false)
  const [user,setUser] = useState(null)
  // Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };
  //log in 

  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  //Google login

   const provider = new GoogleAuthProvider();
   const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider);
   }
     //logout 

  const LogOut =() =>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    });
    return()=>{
      unSubscribe();
    }
  },[])
  console.log(user)

  const authValue = {
    createUser,
    signIn,
    googleSignIn,
    LogOut,
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
