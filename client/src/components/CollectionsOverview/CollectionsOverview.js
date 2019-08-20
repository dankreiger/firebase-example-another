import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionItemType from '../../typings/CollectionItem.type';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionsOverviewWrapper } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewWrapper>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewWrapper>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(CollectionItemType).isRequired
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
