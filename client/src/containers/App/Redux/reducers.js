import { reducer as reduxFormReducer } from 'redux-form';

import modalReducer from '../../../shared/modal/redux/reducer';
import signUpReducer from '../../AuthContainer/redux/reducer';
import currentUserReducer from './currentUserReducer';
import appReducer from './appReducer';
import journalReducer from '../../JournalContainer/redux/reducer';
import chartsReducer from '../../ChartsContainer/redux/reducer';

export default {
  app: appReducer,
  form: reduxFormReducer,
  modal: modalReducer,
  signUp: signUpReducer,
  currentUser: currentUserReducer,
  journal: journalReducer,
  charts: chartsReducer,
};
