import React from 'react';
import SignIn from '../../components/SignIn';

import './SignInAndSignUpPage.styles.scss';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
