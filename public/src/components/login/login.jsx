import React, { Component } from 'react';
import axios from 'axios';
import Button from '../button/button';

class Login extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      let response = await axios.post('http://localhost:3001/login', {email: email, password: password})
      console.log(`${JSON.stringify(response)} sent correctly`);
    } catch (error) {
      console.error(error + "Error sending login data");
    }
  }

  render() {
    return (
      <div className="login">
        <form action="/" className="login__form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="email" name="email" onChange={this.onChange} />
          <input type="text" placeholder="password" name="password" onChange={this.onChange} />
          <Button text="Log in" />
        </form>
      </div>
    );
  }
}

export default Login;
