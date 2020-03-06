import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const GoogleAuth = () => {
  const [isSingedIn, setIsSignedIn] = useContext(AuthContext);

  // Thins I need
  // 0. Understand GoogleAuth
  // https://developers.google.com/identity/protocols/OAuth2

  // 1. componentDidMount or, in this case, useEffect
  //    to get auth API

  return <div>Google Auth</div>;
};

export default GoogleAuth;
