import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

WithSpinner.propTypes = {
  isLoading: PropTypes.bool,
  otherProps: PropTypes.any
};

export default WithSpinner;
