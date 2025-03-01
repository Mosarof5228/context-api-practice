import React, { Children, createContext } from 'react';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const authInfo={
        name:"Md.Mosarof Hossen",
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;