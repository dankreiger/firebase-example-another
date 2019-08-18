import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as cartActions from '../../redux/cart/cart.actions';
import CartItemType from '../../typings/CartItem.type';
import {
  CheckoutItemWrapper,
  ImageWrapper,
  NameWrapper,
  QuantityWrapper,
  RemoveButtonWrapper,
  PriceWrapper
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt="item" />
      </ImageWrapper>
      <NameWrapper>{name}</NameWrapper>
      <QuantityWrapper>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityWrapper>
      <PriceWrapper>${price}</PriceWrapper>
      <RemoveButtonWrapper onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonWrapper>
    </CheckoutItemWrapper>
  );
};

CheckoutItem.propTypes = {
  cartItem: CartItemType,
  clearItemFromCart: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
};

export default connect(
  null,
  cartActions
)(CheckoutItem);
