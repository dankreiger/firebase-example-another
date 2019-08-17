import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { SignUpWrapper, SignUpTitle } from './SignUp.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpWrapper>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
        </form>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
        </form>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
        </form>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpWrapper>
    );
  }
}

export default SignUp;
