//@ts-check
import UserActionTypes from './user.types';

/**
 * @returns {{type: string}}
 */
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

/**
 * @typedef {Object} Email
 * @property {string} email
 * @property {string} password
 *
 * @param {Email} emailAndPassword
 * @returns {{type: string, payload: Email}}
 */
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

/**
 * @param {Object} user
 * @returns {{type: string, payload: Object}}
 */
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

/**
 * @param {any} error
 * @returns {{type: string, payload: any}}
 */
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

/**
 * @returns {{type: string}}
 */
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

/**
 * @returns {{type: string}}
 */
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

/**
 * @returns {{type: string}}
 */
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

/**
 * @returns {{type: string}}
 */
export const signOutFailure = () => ({
  type: UserActionTypes.SIGN_OUT_FAILURE
});
