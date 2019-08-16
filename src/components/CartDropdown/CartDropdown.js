import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';
import CartItemType from '../CartItem/../CartItem/CartItem.type';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape(CartItemType))
};

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(
  mapStateToProps,
  null
)(CartDropdown);
