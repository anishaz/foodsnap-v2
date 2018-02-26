import React, { Component } from 'react';
import Login from './components/login/login';
import Logout from './components/logout/logout';


class App extends Component {
    constructor() {
    super();
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
    }

    state = {
        users: [],
        loggedIn: false
    }

    loggedIn() {
        this.setState({
            loggedIn: true
        })
    }

    loggedOut() {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return (
                <div className="app">
                    <Login loggedIn={ this.loggedIn.bind(this) } />
                </div>
            );
        }
        if (this.state.loggedIn === true) {
            return (
                <div className="app">
                    <Logout loggedOut={ this.loggedOut.bind(this) } />
                </div>
            )
        }
    }
}


export default App;