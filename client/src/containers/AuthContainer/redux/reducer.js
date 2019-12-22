import { handleActions } from 'redux-actions';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
};

export default handleActions(
  {
    [fetchAuthRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchAuthSuccess](state) {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    },
    [fetchAuthFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
