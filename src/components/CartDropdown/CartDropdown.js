import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItemType from '../../typings/CartItem.type';
import {
  CartDropdownWrapper,
  CartDropdownItemsWrapper
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownWrapper>
    <CartDropdownItemsWrapper>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </CartDropdownItemsWrapper>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownWrapper>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(CartItemType)
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });
