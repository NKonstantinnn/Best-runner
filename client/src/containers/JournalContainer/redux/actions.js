import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';
import showErrorMessage from '../../../utils/showErrorMessage';

export const fetchTrainingsRequest = createAction('FETCH_TRAININGS_REQUEST');
export const fetchTrainingsSuccess = createAction('FETCH_TRAININGS_SUCCESS');
export const fetchTrainingsFailure = createAction('FETCH_TRAININGS_FAILURE');

export const addTrainingRequest = createAction('ADD_TRAINING_REQUEST');
export const addTrainingSuccess = createAction('ADD_TRAINING_SUCCESS');
export const addTrainingFailure = createAction('ADD_TRAINING_FAILURE');

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
