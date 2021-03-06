import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/face.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { signOutStart } from '../../redux/user/user.actions';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderWrapper,
  LogoWrapper,
  OptionsWrapper,
  OptionLink
} from './Header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo className="logo" />
    </LogoWrapper>
    <OptionsWrapper>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsWrapper>
    {!hidden && <CartDropdown />}
  </HeaderWrapper>
);

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool.isRequired,
  signOutStart: PropTypes.func.isRequired
};

Header.defaultProps = {
  currentUser: null
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(
  mapStateToProps,
  { signOutStart }
)(Header);
