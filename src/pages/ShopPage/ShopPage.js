import React, {
  useEffect,
  //useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);
  // const unsubscribeFromSnapshot = useRef(null);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const collectionRef = firestore.collection('collections');

        const snapshot = await collectionRef.get();
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        setLoading(false);
      } catch (err) {
        console.log('fetch collections err', err);
      }
    }
    fetchCollections();
    /* observer pattern - also really nice */
    // unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
    //   async snapshot => {
    //     updateCollections(convertCollectionsSnapshotToMap(snapshot));
    //     setLoading(false);
    //   }
    // );
    // return () => {
    //   // unsubcribe
    //   unsubscribeFromSnapshot.current();
    // };
  }, [updateCollections]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

ShopPage.propTypes = {
  updateCollections: PropTypes.func,
  match: ReactRouterPropTypes.match
};
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
