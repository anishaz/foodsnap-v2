import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyles = {
  backgroundColor: 'cyan50',
};

const Button = props => (
  <RaisedButton
    primary
    style={buttonStyles}
    type={props.type}
    onClick={props.onClick}
  >
    { props.text }
  </RaisedButton>
);

Button.defaultProps = {
  type: '',
  onClick: '',
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;
