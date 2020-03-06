import React from 'react';
import GoogleAuth from './GoogleAuth';
import { AuthProvider } from '../context/AuthContext';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <GoogleAuth />
      </AuthProvider>
    </div>
  );
};

export default App;
