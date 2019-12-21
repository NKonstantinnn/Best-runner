import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = history => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());

    if (localStorage.getItem('bestrunnerToken')) {
      const response = await api.user.getCurrent();
      const user = response.data;
      dispatch(fetchCurrentUserSuccess(user));
      history.push('/');
    } else {
      history.push('/signin');
      dispatch(fetchCurrentUserFailure('Sign in to your profile!'));
    }
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};
