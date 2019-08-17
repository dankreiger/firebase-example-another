import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ getState }) => next => action => {
  // go through other middleware and get updated state from reducers first
  next(action);
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected', tv4.error);
    console.log('%c Schema is invalid! ', 'background: red; color: #fff');
    console.log(tv4.error);
  } else {
    console.log('%c Schema is valid! ', 'background: green; color: #fff');
  }
};
