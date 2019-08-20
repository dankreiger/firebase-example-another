import React from 'react';
import SignIn from '../../components/SignIn';

import SignUp from '../../components/SignUp';
import { SignInAndSignUpWrapper } from './SignInAndSignUpPage.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpWrapper>
    <SignIn />
    <SignUp />
  </SignInAndSignUpWrapper>
);

export default SignInAndSignUpPage;
