import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HomePage from './pages/HomePage';
import { Route, Redirect, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUpPage';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.object
};

App.defaultProps = {
  currentUser: null
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { checkUserSession }
)(App);
