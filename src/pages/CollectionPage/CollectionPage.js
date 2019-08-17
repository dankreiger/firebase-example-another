import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItemType from '../../typings/CollectionItem.type';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import {
  CollectionPageWrapper,
  CollectionTitle,
  CollectionItemsWrapper
} from './CollectionPage.styles';
const CollectionPage = ({ collection }) => {
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
  collection: CollectionItemType
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
