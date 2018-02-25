import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/login';

class App extends Component {
    constructor() {
    super();
    this.loggedIn = this.loggedIn.bind(this);
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

    render() {
        return (
            <div className="App">
                <Login loggedIn={ this.loggedIn.bind(this) } />
            </div>
            
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
