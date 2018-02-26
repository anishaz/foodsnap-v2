import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const Input = props => (
  <TextField
    floatingLabelText={props.floatingLabelText}
    name={props.name}
    hintText={props.hintText}
    onChange={props.onChange}
    type={props.type}
  />
);

Input.defaultProps = {
  onChange: '',
  hintText: '',
  type: 'input',
  name: '',
};

Input.propTypes = {
  floatingLabelText: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
