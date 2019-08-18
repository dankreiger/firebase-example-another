import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  fetchCollectionsStart,
  syncWithFirestore
} from '../../redux/shop/shop.actions';
import { handleFirestoreSync } from '../../firebase/firebase.utils';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

const ShopPage = ({
  match,
  isCollectionsLoaded,
  fetchCollectionsStart,
  syncWithFirestore
}) => {
  const unsubscribeFromSnapshot = useRef(null);
  useEffect(() => {
    if (!isCollectionsLoaded) {
      fetchCollectionsStart();
    } else {
      handleFirestoreSync('collections', syncWithFirestore)
        .then(res => {
          unsubscribeFromSnapshot.current = res;
        })
        .catch(err => console.error('Firestore error', err.message || err));
      return () => {
        // unsubscribe
        unsubscribeFromSnapshot.current();
      };
    }
  }, [isCollectionsLoaded, fetchCollectionsStart, syncWithFirestore]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStartAsync: PropTypes.func,
  match: ReactRouterPropTypes.match,
  syncWithFirestore: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  syncWithFirestore: collectionsMap =>
    dispatch(syncWithFirestore(collectionsMap))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
