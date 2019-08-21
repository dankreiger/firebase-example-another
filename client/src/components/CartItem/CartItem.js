import React, { memo } from 'react';
import CartItemType from '../../typings/CartItem.type';
import { CartItemWrapper, CartItemDetailsWrapper } from './CartItem.styles';

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={name} />
      <CartItemDetailsWrapper>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </CartItemDetailsWrapper>
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  item: CartItemType
};

export default memo(CartItem);
