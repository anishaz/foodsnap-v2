import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post('http://localhost:3001/login', { email: email, password: password }).then(function(response){
      console.log(`${JSON.stringify(response)} sent correctly`);
    })
  }

  render() {
    return (
      <div className="login">
        <form action="/" className="login__form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="email" name="email" onChange={this.onChange} />
          <input type="text" placeholder="password" name="password" onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
