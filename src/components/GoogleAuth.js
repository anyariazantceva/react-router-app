import React from 'react';

// Google OAuth Reference:
// https://developers.google.com/identity/sign-in/web/reference#auth_setup

// TODO: modify to functional component
class GoogleAuth extends React.Component {
  componentDidMount() {
    // load the library
    window.gapi.load('client:auth2', () => {
      // init GoogleAuth obj
      window.gapi.client
        .init({
          clientId:
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email'
        })
        // get GoogleAuth obj
        .then(() => {
          this.authObj = window.gapi.auth2.getAuthInstance();
          this.isSignedIn = this.authObj.isSignedIn;
          this.userObj = this.authObj.currentUser;

          this.onAuthChange(this.isSignedIn.get());
          this.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // update the states - isSignedIn and userId
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.updateSignIn(isSignedIn);
      this.props.updateUserId(this.userObj.get().getId());
    } else {
      this.props.updateSignIn(isSignedIn);
      this.props.updateUserId(null);
    }
  };

  // sign in with google
  onSignInClick = () => {
    this.authObj.signIn();
  };

  // sign out from google
  onSignOutClick = () => {
    this.authObj.signOut();
  };

  // render button
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
