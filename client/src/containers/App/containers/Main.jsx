import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Header from '../components/Header';
import Tab from '../../../shared/types/Tab';
import { signOutCurrentUser } from '../Redux/currentUserActions';

function Main(props) {
  const {
    children,
    isAuth,
    activeTab,
  } = props;

  return (
    <main>
      { isAuth && <Header activeTab={activeTab} handleSignOut={props.signOutCurrentUser} /> }
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
  signOutCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser, app }) => {
  const { isAuth } = currentUser;
  const { activeTab } = app;
  return {
    activeTab,
    isAuth,
  };
};

const mapDispatchToProps = {
  signOutCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
