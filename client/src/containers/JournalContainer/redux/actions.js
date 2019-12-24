import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';
import showErrorMessage from '../../../utils/showErrorMessage';

export const fetchTrainingsRequest = createAction('FETCH_TRAININGS_REQUEST');
export const fetchTrainingsSuccess = createAction('FETCH_TRAININGS_SUCCESS');
export const fetchTrainingsFailure = createAction('FETCH_TRAININGS_FAILURE');

export const addTrainingRequest = createAction('ADD_TRAINING_REQUEST');
export const addTrainingSuccess = createAction('ADD_TRAINING_SUCCESS');
export const addTrainingFailure = createAction('ADD_TRAINING_FAILURE');

export const editTrainingRequest = createAction('EDIT_TRAINING_REQUEST');
export const editTrainingSuccess = createAction('EDIT_TRAINING_SUCCESS');
export const editTrainingFailure = createAction('EDIT_TRAINING_FAILURE');

export const deleteTrainingRequest = createAction('DELETE_TRAINING_REQUEST');
export const deleteTrainingSuccess = createAction('DELETE_TRAINING_SUCCESS');
export const deleteTrainingFailure = createAction('DELETE_TRAINING_FAILURE');

export const fetchTrainings = () => async (dispatch) => {
  try {
    dispatch(fetchTrainingsRequest());
    const response = await api.training.getTrainings();
    const trainings = response.data;
    dispatch(fetchTrainingsSuccess(trainings));
  } catch (error) {
    showErrorMessage(error);
    dispatch(fetchTrainingsFailure(error));
  }
};

export const addTraining = training => async (dispatch) => {
  try {
    dispatch(addTrainingRequest());
    const response = await api.training.addTraining(training);
    const newTraining = response.data;
    dispatch(addTrainingSuccess(newTraining));
  } catch (error) {
    showErrorMessage(error);
    dispatch(addTrainingFailure(error));
  }
};

export const editTraining = training => async (dispatch) => {
  try {
    dispatch(editTrainingRequest());
    const response = await api.training.editTraining(training);
    const editedTraining = response.data;
    dispatch(editTrainingSuccess(editedTraining));
  } catch (error) {
    showErrorMessage(error);
    dispatch(editTrainingFailure(error));
  }
};

export const deleteTraining = trainingId => async (dispatch) => {
  try {
    dispatch(deleteTrainingRequest());
    const response = await api.training.deleteTraining(trainingId);
    /* eslint-disable no-underscore-dangle */
    const deletedId = response.data._id;
    /* eslint-enable */
    dispatch(deleteTrainingSuccess(deletedId));
  } catch (error) {
    showErrorMessage(error);
    dispatch(deleteTrainingFailure(error));
  }
};
