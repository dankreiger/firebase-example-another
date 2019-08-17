import React from 'react';
import PropTypes from 'prop-types';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionItemType from '../../typings/CollectionItem.type';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

ShopPage.propTypes = {
  collections: PropTypes.arrayOf(CollectionItemType)
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
