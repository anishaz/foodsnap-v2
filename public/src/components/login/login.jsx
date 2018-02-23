import React, { Component } from 'react';
import axios from 'axios';

/* eslint-disable react/prefer-stateless-function */
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
    axios.post('/', { email, password }).then((result) => {
      console.log(result);
    })
  }

  render() {
    return (
      <div className="login">
        <form action="/" className="login__form" onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" onChange={this.onChange} />
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password" onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
