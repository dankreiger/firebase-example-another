import React, { useState } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { SignUpWrapper, SignUpTitle } from './SignUp.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

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
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password fuck</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={e => setDisplayName(e.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={e => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
