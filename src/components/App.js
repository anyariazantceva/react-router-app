import React, {Component} from 'react';
import './App.css';
import MainPage from "./MainPage";
import posts from "./posts";

class App extends Component {
    state = {
        posts: posts
    }
    render() {
        return (
            <div className="App">
                <MainPage posts={this.state.posts}/>
            </div>
        );
    }


}

export default App;
