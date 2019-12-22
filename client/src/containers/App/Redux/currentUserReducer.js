import { handleActions } from 'redux-actions';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  signOutCurrentUserRequest,
  signOutCurrentUserSuccess,
  signOutCurrentUserFailure,
} from './currentUserActions';

const defaultState = {
  user: null,
  error: null,
  isFetching: false,
  isAuth: false,
};

export default handleActions({
  [fetchCurrentUserRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [fetchCurrentUserSuccess]: (state, { payload }) => ({
    ...state,
    user: payload,
    isFetching: false,
    error: null,
    isAuth: true,
  }),
  [fetchCurrentUserFailure]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: payload,
  }),
  [signOutCurrentUserRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [signOutCurrentUserSuccess]: state => ({
    ...state,
    user: null,
    isAuth: false,
    isFetching: false,
  }),
  [signOutCurrentUserFailure]: (state, { payload }) => ({
    ...state,
    error: payload,
    isFetching: false,
  }),
}, defaultState);
