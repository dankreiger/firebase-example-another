//@ts-check
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import {
  SignInWrapper,
  SignInTitle,
  SignInButtonsWrapper
} from './SignIn.styles';

import * as userActions from '../../redux/user/user.actions';

/**
 * @typedef {Object} EmailCredentials
 * @property {string} email
 * @property {string} password
 *
 * @typedef {Object} SignInProps
 * @property {() => void} googleSignInStart
 * @property  {(obj: EmailCredentials) => void} emailSignInStart
 *
 * @param {SignInProps} props
 */
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = event => {
    event.preventDefault();
    emailSignInStart({ email, password });
  };

  /**
   * @param {React.ChangeEvent<HTMLFormElement>} event
   */
  const handleChange = event => {
    const { value, name } = event.target;
    console.log(name);
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInWrapper>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <SignInButtonsWrapper>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            type="button"
            isGoogleSignIn
          >
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </SignInButtonsWrapper>
      </form>
    </SignInWrapper>
  );
};

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired
};

export default connect(
  null,
  userActions
)(SignIn);
