import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  fetchCollectionsStartAsync,
  syncWithFirestore
} from '../../redux/shop/shop.actions';
import {
  firestore,
  handleFirestoreSync,
  handleFirestoreSyncError
} from '../../firebase/firebase.utils';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

const ShopPage = ({
  match,
  isCollectionsLoaded,
  fetchCollectionsStartAsync,
  syncWithFirestore
}) => {
  const unsubscribeFromSnapshot = useRef(null);
  useEffect(() => {
    if (!isCollectionsLoaded) {
      fetchCollectionsStartAsync();
    } else {
      const collectionRef = firestore.collection('collections');
      unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
        snapshot => handleFirestoreSync(snapshot, syncWithFirestore),
        handleFirestoreSyncError
      );
      return () => {
        // unsubscribe
        unsubscribeFromSnapshot.current();
      };
    }
  }, [isCollectionsLoaded, fetchCollectionsStartAsync, syncWithFirestore]);

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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  syncWithFirestore: collectionsMap =>
    dispatch(syncWithFirestore(collectionsMap))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
