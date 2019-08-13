import { UserActionTypes } from './user.types';

const userInitialState = {
  currentUser: null
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
