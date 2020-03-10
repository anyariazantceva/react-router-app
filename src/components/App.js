import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import MainPage from "./MainPage";
import posts from "./posts";

class App extends Component {
    // The states are related with
    // the GoogleAuth Component
    state = {
        isSignedIn: null,
        userId: null,
        posts: posts
    };

    // This method is passed as props
    // down to the GoogleAuth Component
    updateSignInStatus = isSignedIn => {
        this.setState({isSignedIn: isSignedIn});
    };

    // This method is passed as props
    // down to the GoogleAuth Component
    updateUserId = id => {
        this.setState({userId: id});
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
                    <MainPage posts={this.state.posts}/>
                </div>
            </div>
        );
    }
}

export default App;
