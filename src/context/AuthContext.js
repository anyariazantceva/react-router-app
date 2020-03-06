import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <AuthContext.Provider value={[isSignIn, setIsSignIn]}>
      {props.children}
    </AuthContext.Provider>
  );
};
