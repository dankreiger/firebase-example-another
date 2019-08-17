import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import CartItemType from '../../typings/CartItem.type';
import {
  CheckoutItemWrapper,
  ImageWrapper,
  NameWrapper,
  QuantityWrapper,
  RemoveButtonWrapper,
  PriceWrapper
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
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
      <RemoveButtonWrapper onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonWrapper>
    </CheckoutItemWrapper>
  );
};

CheckoutItem.propTypes = {
  cartItem: CartItemType,
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
