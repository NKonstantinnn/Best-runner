import { handleActions } from 'redux-actions';
import {
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
  addTrainingRequest,
  addTrainingSuccess,
  addTrainingFailure,
  editTrainingRequest,
  editTrainingSuccess,
  editTrainingFailure,
  deleteTrainingRequest,
  deleteTrainingSuccess,
  deleteTrainingFailure,
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

const deleteTraining = (trainings, trainingId) => {
  /* eslint-disable no-underscore-dangle */
  const idx = trainings.findIndex(el => el._id === trainingId);
  /* eslint-enable */
  return [...trainings.slice(0, idx), ...trainings.slice(idx + 1)];
};

const errorActionHandler = (state, { payload }) => ({
  ...state,
  error: payload,
  isFetching: false,
});

const requestActionHanler = state => ({
  ...state,
  isFetching: true,
});


const defaultState = {
  error: null,
  isFetching: false,
  trainings: [],
};

export default handleActions({
  [fetchTrainingsRequest]: requestActionHanler,
  [fetchTrainingsSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: payload,
  }),
  [fetchTrainingsFailure]: errorActionHandler,
  [addTrainingRequest]: requestActionHanler,
  [addTrainingSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: transformTrainings(state.trainings, payload),
  }),
  [addTrainingFailure]: errorActionHandler,
  [editTrainingRequest]: requestActionHanler,
  [editTrainingSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: transformTrainings(state.trainings, payload),
  }),
  [editTrainingFailure]: errorActionHandler,
  [deleteTrainingRequest]: requestActionHanler,
  [deleteTrainingSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: null,
    trainings: deleteTraining(state.trainings, payload),
  }),
  [deleteTrainingFailure]: errorActionHandler,
}, defaultState);
