import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/login';

class App extends Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
                <Login />
            </div>
            
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
