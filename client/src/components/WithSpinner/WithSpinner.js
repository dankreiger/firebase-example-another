import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerWrapper, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerWrapper />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

WithSpinner.propTypes = {
  isLoading: PropTypes.bool,
  otherProps: PropTypes.any
};

export default WithSpinner;
