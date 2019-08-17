import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartIconWrapper,
  CartItemCount,
  ShoppingIconSvg
} from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconWrapper onClick={toggleCartHidden}>
      <ShoppingIconSvg />
      <CartItemCount>{itemCount}</CartItemCount>
    </CartIconWrapper>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
