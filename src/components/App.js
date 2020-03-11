import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPost from './AddPost';
import Main from './Main';
import posts from './posts';
import PostDetails from './PostDetails';
import history from './history';

class App extends Component {
  // The states are related with
  // the GoogleAuth Component
  state = {
    isSignedIn: null,
    userId: null,
    posts: posts,
    title: '',
    category: '',
    content: ''
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

  addPost = newPost => {
    let newPostList = [...this.state.posts, newPost];
    console.log(newPostList);
    this.setState({ posts: newPostList });
  };

  deletePost = id => {
    const posts = this.state.posts.filter(post => id !== post.id);
    this.setState({ posts: posts });
  };

  editPost = id => {};

  render() {
    console.log(this.state.posts);
    return (
      <Router history={history}>
        <Switch>
          <Route path="/post/" exact component={PostDetails} />
          <Route
            path="/addpost"
            exact
            render={() => (
              <AddPost
                addPost={this.addPost}
                posts={this.state.posts}
                onDismiss={() => history.push('/')}
              />
            )}
          />
          <Route path="/editpost" exact component={AddPost} />
          <Route
            path="/"
            exact
            render={() => (
              <Main
                posts={this.state.posts}
                userId={this.state.userId}
                deletePost={this.deletePost}
                editPost={this.editPost}
                isSignedIn={this.state.isSignedIn}
                updateSignInStatus={this.updateSignInStatus}
                updateUserId={this.updateUserId}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
