import { createAction } from 'redux-actions';

import api from '../../../utils/ApiClient';
import showErrorMessage from '../../../utils/showErrorMessage';

export const fetchStructuredTrainingsRequest = createAction('FETCH_STRUCTURED_TRAININGS_REQUEST');
export const fetchStructuredTrainingsSuccess = createAction('FETCH_STRUCTURED_TRAININGS_SUCCESS');
export const fetchStructuredTrainingsFailure = createAction('FETCH_STRUCTURED_TRAININGS_FAILURE');

export const fetchStructuredTrainings = () => async (dispatch) => {
  try {
    dispatch(fetchStructuredTrainingsRequest());
    const response = await api.training.getTrainings();
    const trainings = response.data;
    const structuredTrainings = {
      Running: [],
      Skiing: [],
      Walking: [],
      Bicycle: [],
    };
    trainings.forEach((training) => {
      structuredTrainings[training.activity].push(training);
    });
    dispatch(fetchStructuredTrainingsSuccess(structuredTrainings));
  } catch (error) {
    showErrorMessage(error);
    dispatch(fetchStructuredTrainingsFailure(error));
  }
};
