import React, { Component } from 'react';
import Login from './components/login/login';
import Logout from './components/logout/logout';


class App extends Component {
    constructor() {
    super();
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    }

    state = {
        users: [],
        loggedIn: false
    }

    logIn() {
        this.setState({
            loggedIn: true
        })
    }

    logOut() {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return (
                <div className="app">
                    <Login logIn={ this.logIn } />
                </div>
            );
        }
        if (this.state.loggedIn === true) {
            return (
                <div className="app">
                    <Logout logOut={ this.logOut } />
                </div>
            )
        }
    }
}


export default App;