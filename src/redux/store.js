import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import stateValidator from './middlewares/stateValidator';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.sagas';

let composeEnhancers;
let composedEnhancers;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(invariant({ ignore: ['user'] }), logger, stateValidator);
  composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  });
  composedEnhancers = composeEnhancers(applyMiddleware(...middleware));
} else {
  composedEnhancers = applyMiddleware(...middleware);
}

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
