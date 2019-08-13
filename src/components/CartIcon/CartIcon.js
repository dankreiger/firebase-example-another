import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{cartItems && cartItems.length}</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  cartItems: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
