import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';
import { fetchCurrentUser } from '../../App/Redux/actions';

export const fetchSignUpRequest = createAction('FETCH_SIGN_UP_REQUEST');
export const fetchSignUpSuccess = createAction('FETCH_SIGN_UP_SUCCESS');
export const fetchSignUpFailure = createAction('FETCH_SIGN_UP_FAILURE');

export const fetchSignUp = (user, history) => async (dispatch) => {
  try {
    dispatch(fetchSignUpRequest());
    const response = await api.auth.signUp(user);
    const { token } = response.data;
    localStorage.setItem('bestrunnerToken', token);
    dispatch(fetchSignUpSuccess());
    dispatch(fetchCurrentUser(history));
    history.push('/');
  } catch (error) {
    dispatch(fetchSignUpFailure(error));
  }
};
