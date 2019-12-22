import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';
import { fetchCurrentUser } from '../../App/Redux/currentUserActions';

export const fetchAuthRequest = createAction('FETCH_AUTH_REQUEST');
export const fetchAuthSuccess = createAction('FETCH_AUTH_SUCCESS');
export const fetchAuthFailure = createAction('FETCH_AUTH_FAILURE');

export const fetchAuth = (user, isSignUp, history) => async (dispatch) => {
  try {
    dispatch(fetchAuthRequest());
    const authFunc = isSignUp ? api.auth.signUp : api.auth.signIn;
    const response = await authFunc(user);
    const { token } = response.data;
    localStorage.setItem('bestrunnerToken', token);
    dispatch(fetchAuthSuccess());
    dispatch(fetchCurrentUser(history));
  } catch (error) {
    dispatch(fetchAuthFailure(error));
  }
};
