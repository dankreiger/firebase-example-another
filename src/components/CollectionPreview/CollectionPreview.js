import React from 'react';
import PropTypes from 'prop-types';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';
import CartItemType from '../../typings/CartItem.type';

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(CartItemType)
};

export default CollectionPreview;
