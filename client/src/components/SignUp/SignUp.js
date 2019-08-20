//@ts-check
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { SignUpWrapper, SignUpTitle } from './SignUp.styles';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  // const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  /**
   * @param {React.ChangeEvent<HTMLFormElement>} event
   */
  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired
};

export default connect(
  null,
  { signUpStart }
)(SignUp);
