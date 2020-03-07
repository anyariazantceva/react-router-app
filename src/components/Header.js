import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = ({ isSignedIn, updateSignIn, updateUserId }) => {
  return (
    <div className="ui secondary pointing menu">
      {/* switch to Link */}
      <div className="ui header">PostIt</div>
      <div className="right menu">
        <GoogleAuth
          isSignedIn={isSignedIn}
          updateSignIn={updateSignIn}
          updateUserId={updateUserId}
        />
      </div>
    </div>
  );
};

export default Header;
