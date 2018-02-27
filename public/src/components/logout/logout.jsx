import React, { Component } from 'react';
import Button from '../button/button';


class Logout extends Component {
  render() {
    return (
      <div className="logout">
        <button onClick={this.props.logOut}>Logout</button>
      </div>
    );
  }
}

export default Logout;
