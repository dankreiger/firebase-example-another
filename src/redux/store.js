import { createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { persistStore } from 'redux-persist';
import * as actionCreators from '../redux/actions';
import rootReducer from './root-reducer';

let composeEnhancers;
let composedEnhancers;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25
  });
  composedEnhancers = composeEnhancers(applyMiddleware(invariant()));
}

// const composedEnhancers = composeEnhancers(
//   applyMiddleware(invariant(), logger)
// );
export const store = createStore(rootReducer, composedEnhancers);

export const persistor = persistStore(store);

export default { store, persistor };
