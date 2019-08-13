import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
};

CustomButton.defaultProps = {
  type: 'button',
  isGoogleSignIn: false
};

export default CustomButton;
