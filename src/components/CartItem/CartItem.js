import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.styles.scss';
import CartItemType from './CartItem.type';

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape(CartItemType)
};

export default CartItem;
