import { handleActions } from 'redux-actions';
import {
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
  addTrainingRequest,
  addTrainingSuccess,
  addTrainingFailure,
} from './actions';

const transformTrainings = (trainings, training) => {
  /* eslint-disable no-underscore-dangle */
  const idx = trainings.findIndex(el => el._id === training._id);
  /* eslint-enable */
  if (idx !== -1) { // update
    return [
      ...trainings.slice(0, idx),
      training,
      ...trainings.slice(idx + 1),
    ];
  }
  return [...trainings, training]; // add
};

const errorActionHandler = (state, { payload }) => ({
  ...state,
  error: payload,
  isFetching: false,
});


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
  [fetchTrainingsFailure]: errorActionHandler,
  [addTrainingRequest]: state => ({
    ...state,
    isFetching: true,
  }),
  [addTrainingSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: transformTrainings(state.trainings, payload),
  }),
  [addTrainingFailure]: errorActionHandler,
}, defaultState);
