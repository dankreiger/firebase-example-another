import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CheckoutPage.styles.scss';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CartItemType from '../../typings/CartItem.type';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(CartItemType)
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps,
  null
)(CheckoutPage);
