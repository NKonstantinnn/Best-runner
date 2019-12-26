import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import ChartsWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';

const ChartsContainer = (props) => {
  useEffect(
    () => {
      props.changeActiveTab(Tab.CHARTS);
    },
    [],
  );
  return (
    <ChartsWrapper>
      <Container>
        <h1>ChartsContainer</h1>
      </Container>
    </ChartsWrapper>
  );
};

ChartsContainer.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeActiveTab,
};

export default connect(null, mapDispatchToProps)(ChartsContainer);

