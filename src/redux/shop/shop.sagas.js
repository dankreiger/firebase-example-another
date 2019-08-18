import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // snapshot is param form convertCollectionsSnapshotToMap
    // i.e. convertCollectionsSnapshotToMap(snapshot)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap)); // put is like dispatch
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message || err));
    console.error('fetchCollectionsAsync error', err);
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
