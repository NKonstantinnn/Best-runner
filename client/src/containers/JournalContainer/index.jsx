import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import JournalWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';
import { PlusThickIcon } from '../../shared/styled/icons';
import { showModal, hideModal } from '../../shared/modal/redux/actions';
import { fetchTrainings } from './redux/actions';

const JournalContainer = (props) => {
  // set active tab
  useEffect(
    () => {
      props.changeActiveTab(Tab.JOURNAL);
    },
    [],
  );
  // fetch trainings
  useEffect(
    () => {
      props.fetchTrainings();
    },
    [],
  );


  const showActvityModal = () => {
    const modalProps = {
      handleCancel: props.hideModal,
    };
    props.showModal('TrainingModal', modalProps);
  };

  return (
    <JournalWrapper>
      <Button color="success" onClick={showActvityModal}><PlusThickIcon /> Add training</Button>
    </JournalWrapper>
  );
};

JournalContainer.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  fetchTrainings: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeActiveTab,
  showModal,
  hideModal,
  fetchTrainings,
};

export default connect(null, mapDispatchToProps)(JournalContainer);
