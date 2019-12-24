import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import JournalWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';
import { PlusThickIcon } from '../../shared/styled/icons';
import { showModal, hideModal } from '../../shared/modal/redux/actions';

const JournalContainer = (props) => {
  useEffect(
    () => {
      props.changeActiveTab(Tab.JOURNAL);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
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
};

const mapDispatchToProps = {
  changeActiveTab,
  showModal,
  hideModal,
};

export default connect(null, mapDispatchToProps)(JournalContainer);
