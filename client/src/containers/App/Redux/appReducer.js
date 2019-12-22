import { handleActions } from 'redux-actions';

import changeActiveTab from './appActions';
import Tab from '../../../shared/types/Tab';

const defaultState = {
  activeTab: Tab.JOURNAL,
};

export default handleActions({
  [changeActiveTab]: (state, { payload }) => ({
    ...state,
    activeTab: payload,
  }),
}, defaultState);
