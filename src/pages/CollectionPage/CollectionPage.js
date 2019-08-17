import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItemType from '../../typings/CollectionItem.type';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="collection-page">
        <h2 className="title">Page not Found</h2>
      </div>
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
