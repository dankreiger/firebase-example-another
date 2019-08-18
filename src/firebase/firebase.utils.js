import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './firebase.config';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

/**
 *
 * @param {string} collectionKey
 * @param {any[]} objectsToAdd
 */
export const addColectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // empty param in doc() sets document ID to a unique id
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
const handleFirestoreSyncError = err => {
  console.error('Firestore error', err);
};

export const handleFirestoreSync = async (collectionName, reduxAction) => {
  const collectionRef = firestore.collection(collectionName);
  const subscription = collectionRef.onSnapshot(
    async snapshot => reduxAction(convertCollectionsSnapshotToMap(snapshot)),
    handleFirestoreSyncError
  );
  console.log(subscription);
  return subscription;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
