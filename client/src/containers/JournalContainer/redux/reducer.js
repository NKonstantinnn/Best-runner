import { handleActions } from 'redux-actions';
import {
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
  trainings: [],
};

export default handleActions({
  [fetchTrainingsRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [fetchTrainingsSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: payload,
  }),
  [fetchTrainingsFailure]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: payload,
  }),
}, defaultState);
