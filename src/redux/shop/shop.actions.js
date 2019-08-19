// @ts-check
import ShopActionTypes from './shop.types';

/**
 * @returns {{type: string}}
 */
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

/**
 * @TODO jsdocs
 */
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

/**
 * @TODO jsdocs
 */
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/**
 * @TODO jsdocs
 */
export const syncCollectionsWithFirestore = collectionsMap => ({
  type: ShopActionTypes.SYNC_COLLECTIONS_WITH_FIRESTORE,
  payload: collectionsMap
});
