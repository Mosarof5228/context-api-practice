import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { Children, createContext, useEffect, useState } from "react";
import { auth } from "../assets/Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

 useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
    })
    return()=>{
        unSubscribe();
    }
 },[])

  const authInfo = {
    name: "Md.Mosarof Hossen",
    createUser,
    loginUser,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
