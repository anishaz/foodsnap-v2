import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';


const Logout = props => (
  <Button onClick={props.logOut} text="Logout" type="submit" />
);

Logout.defaultProps = {
  logOut: '',
};


Logout.propTypes = {
  logOut: PropTypes.func,
};

export default Logout;
