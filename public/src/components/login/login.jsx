import React, { Component } from 'react';
import client from '../../client'; // this is importing axios instance from client.js
import * as Cookies from "js-cookie";
// Components
import Button from '../button/button';
import Input from '../input/input';
import Error from '../error/error';


class Login extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  async onSubmit(e) {
    let self = this;
    e.preventDefault();
    const { email, password } = this.state;
    try {
      let response = await client.post('/login', {email: email, password: password});
      if (response) {
        this.props.logIn();
        Cookies.set('username', email);
      }
    } 
    catch (error) {
      const errorRes = JSON.stringify(error.response.data);
      self.setState({ errors: errorRes });
    }
  }

  render() {
    const hasErrors = this.state.errors;
    let errorsComponent;

    if (hasErrors.length > 1) {
      errorsComponent = <Error errors={this.state.errors}/>;
    }
    return (
      <div className="login">
        { errorsComponent }
        <form action="/" className="login__form" onSubmit={this.onSubmit} >
          <Input floatingLabelText="email" name="email" onChange={ this.onChange } />
          <Input
            floatingLabelText="Password" name="password" type="password" onChange={this.onChange} />
          <Button text="Log in" type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
