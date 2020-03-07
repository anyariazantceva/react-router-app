import React from 'react';
import Header from './Header';

class App extends React.Component {
  // The states are related with
  // the GoogleAuth Component
  state = {
    isSignedIn: null,
    userId: null
  };

  // This method is passed as props
  // down to the GoogleAuth Component
  updateSignInStatus = isSignedIn => {
    this.setState({ isSignedIn: isSignedIn });
  };

  // This method is passed as props
  // down to the GoogleAuth Component
  updateUserId = id => {
    this.setState({ userId: id });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <Header
            isSignedIn={this.state.isSignedIn}
            updateSignIn={this.updateSignInStatus}
            updateUserId={this.updateUserId}
          />
        </div>
      </div>
    );
  }
}

export default App;
