import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext } from 'react';
import { auth } from '../assets/Firebase/firebase.init';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }
    const authInfo={
        name:"Md.Mosarof Hossen",
        createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;