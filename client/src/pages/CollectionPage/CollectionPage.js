import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectCollection,
  selectFetchError
} from '../../redux/shop/shop.selectors';
import CollectionItemType from '../../typings/CollectionItem.type';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import {
  CollectionPageWrapper,
  CollectionTitle,
  CollectionItemsWrapper
} from './CollectionPage.styles';
const CollectionPage = ({ collection, fetchError }) => {
  if (fetchError) {
    return (
      <CollectionPageWrapper>
        <h2>Something went wrong. We're working on it</h2>
      </CollectionPageWrapper>
    );
  }
  if (collection) {
    const { title, items } = collection;
    return (
      <CollectionPageWrapper>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsWrapper>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsWrapper>
      </CollectionPageWrapper>
    );
  } else {
    return (
      <CollectionPageWrapper>
        <CollectionTitle>Page not Found</CollectionTitle>
      </CollectionPageWrapper>
    );
  }
};

CollectionPage.propTypes = {
  collection: CollectionItemType,
  fetchError: PropTypes.any
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  fetchError: selectFetchError(state)
});

export default connect(mapStateToProps)(CollectionPage);
