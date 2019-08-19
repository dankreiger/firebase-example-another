//@ts-check
import UserActionTypes from './user.types';

/**
 * @typedef {Object} UserInfo
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} UserInfoWithDisplayName
 * @property {string} email
 * @property {string} password
 * @property {string} displayName
 */

/**
 * @returns {{type: string}}
 */
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

/**
 *
 * @param {UserInfo} emailAndPassword
 * @returns {{type: string, payload: UserInfo}}
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

/**
 *
 * @param {UserInfoWithDisplayName} userInfo
 * @returns {{type: string, payload: UserInfoWithDisplayName}}
 */
export const signUpStart = userInfo => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userInfo
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

/**
 * @param {any} error
 * @returns {{type: string, payload: any}}
 */
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
