import { handleActions } from 'redux-actions';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
} from './currentUserActions';

const defaultState = {
  data: null,
  error: null,
  isFetching: false,
  isAuth: true,
};

export default handleActions(
  {
    [fetchCurrentUserRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchCurrentUserSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
        isAuth: true,
      };
    },
    [fetchCurrentUserFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
