import { handleActions } from 'redux-actions';

import {
  fetchStructuredTrainingsRequest,
  fetchStructuredTrainingsSuccess,
  fetchStructuredTrainingsFailure,
} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
  structuredTrainings: {},
};

export default handleActions({
  [fetchStructuredTrainingsRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [fetchStructuredTrainingsSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    structuredTrainings: payload,
  }),
  [fetchStructuredTrainingsFailure]: (state, { payload }) => ({
    ...state,
    error: payload,
    isFetching: false,
  }),
}, defaultState);
