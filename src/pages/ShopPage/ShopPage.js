import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isCollectionFetching,
  fetchCollectionsStartAsync
}) => {
  const [fetchHasStarted, setFetchHasStarted] = useState(false);
  useEffect(() => {
    setFetchHasStarted(true);
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  const routesAreLoading = () => !fetchHasStarted || isCollectionFetching;
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner
            isLoading={routesAreLoading()}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={routesAreLoading()}
            {...props}
          />
        )}
      />
    </div>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStartAsync: PropTypes.func,
  isCollectionFetching: PropTypes.bool,
  match: ReactRouterPropTypes.match
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
