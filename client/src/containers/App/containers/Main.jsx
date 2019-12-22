import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Header from '../components/Header';
import Tab from '../../../shared/types/Tab';

function Main({ children, isAuth, activeTab }) {
  return (
    <main>
      { isAuth && <Header activeTab={activeTab} /> }
      <Container>
        {children}
      </Container>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isAuth: PropTypes.bool.isRequired,
  activeTab: PropTypes.oneOf(Object.keys(Tab)).isRequired,
};

const mapStateToProps = ({ currentUser, app }) => {
  const { isAuth } = currentUser;
  const { activeTab } = app;
  return {
    activeTab,
    isAuth,
  };
};

export default connect(mapStateToProps)(Main);
