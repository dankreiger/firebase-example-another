import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import stateValidator from './middlewares/stateValidator';
import thunk from 'redux-thunk';

let composeEnhancers = {};
let composedEnhancers = {};
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(invariant({ ignore: ['user'] }), logger, stateValidator);
  composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  });
  composedEnhancers = composeEnhancers(applyMiddleware(...middleware));
}

export const store = createStore(rootReducer, composedEnhancers);

export const persistor = persistStore(store);

export default { store, persistor };
