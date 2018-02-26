import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyles = {
  backgroundColor: 'cyan50',
};

const Button = props => (
  <RaisedButton primary style={buttonStyles} type={props.type}>{ props.text }</RaisedButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default Button;
