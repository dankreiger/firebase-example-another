import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import HomePage from './pages/HomePage';
import { Route, Redirect, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUpPage';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const App = ({ currentUser, setCurrentUser }) => {
  const unsubscribeFromAuth = useRef(null);
  useEffect(() => {
    async function setCurrentUserSnapshot(userAuth) {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } catch (err) {
          console.error('Create user profile document error', err.message);
        }
      } else {
        setCurrentUser(null);
      }
    }
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      setCurrentUserSnapshot(userAuth);
    });
    return () => {
      unsubscribeFromAuth.current();
    };
  }, [setCurrentUser]);

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
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
