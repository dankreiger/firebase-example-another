import React from 'react';
import PropTypes from 'prop-types';

import {
  FormInputGroupWrapper,
  FormInputWrapper,
  FormInputLabel
} from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputGroupWrapper>
    <FormInputWrapper onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputGroupWrapper>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
};

FormInput.defaultProps = {
  type: 'text',
  value: '',
  required: false
};

export default FormInput;
