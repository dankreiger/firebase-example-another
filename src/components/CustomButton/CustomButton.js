import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonWrapper } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonWrapper {...props}>{children}</CustomButtonWrapper>
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
