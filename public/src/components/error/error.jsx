import React from 'react';

const Error = props => (

  <ul className="list-of-errors">
    <li>{props.errors}</li>
  </ul>
);

export default Error;
