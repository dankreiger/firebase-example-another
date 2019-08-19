import React from 'react';
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

class SignIn extends React.Component {
  static propTypes = {
    googleSignInStart: PropTypes.func,
    emailSignInStart: PropTypes.func
  };
  state = {
    email: '',
    password: ''
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart({ email, password });
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInWrapper>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

export default connect(
  null,
  userActions
)(SignIn);
