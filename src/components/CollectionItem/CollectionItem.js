import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CartItemType from '../../typings/CartItem.type';
import {
  CollectionItemWrapper,
  AddButton,
  BackgroundImage,
  CollectionFooterWrapper,
  NameWrapper,
  PriceWrapper
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemWrapper>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterWrapper>
        <NameWrapper>{name}</NameWrapper>
        <PriceWrapper>{price}</PriceWrapper>
      </CollectionFooterWrapper>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemWrapper>
  );
};

CollectionItem.propTypes = {
  item: CartItemType
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
