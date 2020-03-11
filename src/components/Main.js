import React, { Component } from 'react';
import Header from './Header';
import MainPage from './MainPage';

export class Main extends Component {
  render() {
    return (
      <div className="ui container main__container">
        <Header
          isSignedIn={this.props.isSignedIn}
          updateSignIn={this.props.updateSignInStatus}
          updateUserId={this.props.updateUserId}
        />

        <MainPage
          editPost={this.props.editPost}
          deletePost={this.props.deletePost}
          userId={this.props.userId}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

export default Main;
