import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CartItemType from '../../typings/CartItem.type';
import StripeButton from '../../components/StripeButton/StripeButton';
import {
  CheckoutHeaderWrapper,
  CheckoutPageWrapper,
  HeaderBlockWrapper,
  TotalWrapper,
  WarningWrapper
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageWrapper>
      <CheckoutHeaderWrapper>
        <HeaderBlockWrapper>
          <span>Product</span>
        </HeaderBlockWrapper>
        <HeaderBlockWrapper>
          <span>Description</span>
        </HeaderBlockWrapper>
        <HeaderBlockWrapper>
          <span>Quantity</span>
        </HeaderBlockWrapper>
        <HeaderBlockWrapper>
          <span>Price</span>
        </HeaderBlockWrapper>
        <HeaderBlockWrapper>
          <span>Remove</span>
        </HeaderBlockWrapper>
      </CheckoutHeaderWrapper>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalWrapper>TOTAL: ${total}</TotalWrapper>
      <WarningWrapper>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningWrapper>
      <StripeButton price={total} />
    </CheckoutPageWrapper>
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
