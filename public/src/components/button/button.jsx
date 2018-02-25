import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button>{props.text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Button;
