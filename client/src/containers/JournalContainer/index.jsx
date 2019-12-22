import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import JournalWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';

const JournalContainer = (props) => {
  useEffect(
    () => {
      props.changeActiveTab(Tab.JOURNAL);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <JournalWrapper>
      <h1>JournalContainer</h1>
    </JournalWrapper>
  );
};

JournalContainer.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeActiveTab,
};

export default connect(null, mapDispatchToProps)(JournalContainer);
