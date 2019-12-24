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
import { fetchTrainings, addTraining, editTraining, deleteTraining } from './redux/actions';
import { User, Training } from '../../shared/prop-types';
import TrainingTable from './components/TrainingTable';
import withSpinner from '../../shared/hocs/withSpinner';

const TrainingTableWithSpinner = withSpinner(TrainingTable);

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

  const createTrainingSubmitHandler = isEdit => (training) => {
    if (isEdit) {
      props.editTraining(training);
    } else {
      props.addTraining(training);
    }
    props.hideModal();
  };

  const showTrainingModal = (isEdit, initData = { activity: 'Running', distance: 10 }) => {
    const { user: { signUpDate } } = props;
    const modalProps = {
      handleCancel: props.hideModal,
      minDate: signUpDate,
      isEdit,
      onSubmit: createTrainingSubmitHandler(isEdit),
    };
    props.showModal('TrainingModal', modalProps);
    props.reduxFormInitialize('TrainingForm', initData);
  };

  return (
    <JournalWrapper>
      <Button color="primary" size="lg" onClick={() => showTrainingModal(false)}><PlusThickIcon /> Add training</Button>
      <TrainingTableWithSpinner
        trainings={props.trainings}
        handleEdit={training => showTrainingModal(true, training)}
        handleDelete={id => props.deleteTraining(id)}
        isFetching={props.isFetching}
      />
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
  trainings: PropTypes.arrayOf(Training),
  addTraining: PropTypes.func.isRequired,
  deleteTraining: PropTypes.func.isRequired,
  editTraining: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

JournalContainer.defaultProps = {
  user: {},
  trainings: [],
};

const mapStateToProps = ({ currentUser, journal }) => {
  const { user } = currentUser;
  const { trainings, isFetching } = journal;
  return {
    user,
    trainings,
    isFetching,
  };
};

const mapDispatchToProps = {
  changeActiveTab,
  showModal,
  hideModal,
  fetchTrainings,
  addTraining,
  deleteTraining,
  editTraining,
  reduxFormInitialize: initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalContainer);
