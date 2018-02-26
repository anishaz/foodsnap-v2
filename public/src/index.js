import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
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
                <div className="App">
                    <Login loggedIn={ this.loggedIn.bind(this) } />
                </div>
            );
        }
        if (this.state.loggedIn === true) {
            return (
                <div className="App">
                    <Logout loggedOut={ this.loggedOut.bind(this) } />
                </div>
            )
        }
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
