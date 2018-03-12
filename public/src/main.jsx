import React, { Component } from 'react';
import Login from './components/login/login';
import Logout from './components/logout/logout';
import * as Cookies from "js-cookie";

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
        });
        Cookies.set('loggedIn', 'true', { path: '' });
    }

    logOut() {
        this.setState({
            loggedIn: false
        })
        Cookies.set('loggedIn', 'false', { path: '' });

    }

    render() {
        let logInStatus = Cookies.get('loggedIn');
        let loginState = this.state.loggedIn;
        let loggedIn = false;
        if (logInStatus === 'true' || loginState === true) {
           loggedIn = 'true';
        }
        return (
            <div className="app">
                { loggedIn === 'true' ? <Logout logOut={this.logOut} /> :  <Login logIn={this.logIn} /> }
            </div>
        )
    }
}


export default App;