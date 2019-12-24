import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { initialize } from 'redux-form';

import JournalWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';
import { PlusThickIcon } from '../../shared/styled/icons';
import { showModal, hideModal } from '../../shared/modal/redux/actions';
import { fetchTrainings } from './redux/actions';
import { User } from '../../shared/prop-types';

const JournalContainer = (props) => {
  // set active tab
  useEffect(
    () => {
      props.changeActiveTab(Tab.JOURNAL);
    },
    [props.user],
  );
  // fetch trainings
  useEffect(
    () => {
      props.fetchTrainings();
    },
    [],
  );

  const showTrainingModal = (initData = { activity: 'RUNNING', distance: 10 }) => {
    const { user: { signUpDate } } = props;
    const modalProps = {
      handleCancel: props.hideModal,
      minDate: signUpDate,
    };
    props.showModal('TrainingModal', modalProps);
    props.reduxFormInitialize('TrainingForm', initData);
  };

  return (
    <JournalWrapper>
      <Button color="success" onClick={() => showTrainingModal()}><PlusThickIcon /> Add training</Button>
    </JournalWrapper>
  );
};

JournalContainer.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  fetchTrainings: PropTypes.func.isRequired,
  reduxFormInitialize: PropTypes.func.isRequired,
  user: User,
};

JournalContainer.defaultProps = {
  user: {},
};

const mapStateToProps = ({ currentUser }) => {
  const { user } = currentUser;
  return {
    user,
  };
};

const mapDispatchToProps = {
  changeActiveTab,
  showModal,
  hideModal,
  fetchTrainings,
  reduxFormInitialize: initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalContainer);
