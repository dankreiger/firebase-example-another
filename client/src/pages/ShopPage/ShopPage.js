import React, { lazy, Suspense, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import {
  fetchCollectionsStart,
  syncCollectionsWithFirestore
} from '../../redux/shop/shop.actions';
import { handleFirestoreSync } from '../../firebase/firebase.utils';
import Spinner from '../../components/Spinner';
import { ShopPageWrapper } from './ShopPage.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../CollectionPage/CollectionPage.container')
);

const ShopPage = ({
  match,
  isCollectionsLoaded,
  fetchCollectionsStart,
  syncCollectionsWithFirestore
}) => {
  const unsubscribeFromSnapshot = useRef(null);
  useEffect(() => {
    if (!isCollectionsLoaded) {
      fetchCollectionsStart();
    } else {
      handleFirestoreSync('collections', syncCollectionsWithFirestore)
        .then(res => {
          unsubscribeFromSnapshot.current = res;
        })
        .catch(err => console.error('Firestore error', err.message || err));
      return () => {
        // unsubscribe
        unsubscribeFromSnapshot.current();
      };
    }
  }, [
    isCollectionsLoaded,
    fetchCollectionsStart,
    syncCollectionsWithFirestore
  ]);

  return (
    <ShopPageWrapper>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageWrapper>
  );
};

ShopPage.propTypes = {
  isCollectionsLoaded: PropTypes.bool.isRequired,
  fetchCollectionsStart: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  syncCollectionsWithFirestore: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  syncCollectionsWithFirestore: collectionsMap =>
    dispatch(syncCollectionsWithFirestore(collectionsMap))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
