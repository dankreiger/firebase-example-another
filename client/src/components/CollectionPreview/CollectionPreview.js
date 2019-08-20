import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../CollectionItem/CollectionItem';
import CartItemType from '../../typings/CartItem.type';
import {
  CollectionPreviewWrapper,
  CollectionPreviewTitle,
  CollectionPreviewPreview
} from './CollectionPreview.styles';

const CollectionPreview = ({ items, title }) => {
  return (
    <CollectionPreviewWrapper>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewPreview>
    </CollectionPreviewWrapper>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(CartItemType).isRequired
};

export default CollectionPreview;
