import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const Input = props => (
  <TextField
    floatingLabelText={props.floatingLabelText}
    name={props.name}
    hintText={props.hintText}
    onChange={props.onChange}
  />
);

Input.defaultProps = {
  onChange: '',
  hintText: '',
};

Input.propTypes = {
  floatingLabelText: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
