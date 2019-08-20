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
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  isGoogleSignIn: PropTypes.bool.isRequired,
  inverted: PropTypes.bool
};

CustomButton.defaultProps = {
  type: 'button',
  isGoogleSignIn: false,
  inverted: false
};

export default CustomButton;
