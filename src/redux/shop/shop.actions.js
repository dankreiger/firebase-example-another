import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return async dispatch => {
    try {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
      const snapshot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
      const error = err.message ? err.message : err;
      dispatch(fetchCollectionsFailure(error));
      console.error('fetchCollectionsStartAsync error', err);
    }
  };
};

export const syncWithFirestore = collectionsMap => ({
  type: ShopActionTypes.SYNC_WITH_FIRESTORE,
  payload: collectionsMap
});
