import { reducer as reduxFormReducer } from 'redux-form';
import modalReducer from '../../../shared/modal/redux/reducer';
import exampleReducer from '../../ExampleContrainer/redux/reducer';
import signUpReducer from '../../AuthContainer/redux/reducer';
import currentUserReducer from './currentUserReducer';

export default {
  form: reduxFormReducer,
  modal: modalReducer,
  example: exampleReducer,
  signUp: signUpReducer,
  currentUser: currentUserReducer,
};
