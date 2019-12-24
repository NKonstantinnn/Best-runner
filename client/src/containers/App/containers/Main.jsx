import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import withSpinner from '../../../shared/hocs/withSpinner';
import Routes from '../components/Routes';
import Header from '../components/Header';
import Tab from '../../../shared/types/Tab';
import { signOutCurrentUser, fetchCurrentUser } from '../Redux/currentUserActions';
import { History, User } from '../../../shared/prop-types/index';

const RoutesWithSpinner = withSpinner(Routes);

function Main(props) {
  const {
    children,
    isAuth,
    activeTab,
    user,
    isFetching,
    history,
  } = props;

  useEffect(
    () => {
      props.fetchCurrentUser(history);
    },
    [],
  );

  return (
    <main>
      { isAuth && <Header activeTab={activeTab} handleSignOut={props.signOutCurrentUser} user={user} /> }
      <Container>
        <RoutesWithSpinner isFetching={isFetching} />
        {children}
      </Container>
    </main>
  );
}

Main.defaultProps = {
  user: {
    username: '',
  },
};

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isAuth: PropTypes.bool.isRequired,
  activeTab: PropTypes.oneOf(Object.keys(Tab)).isRequired,
  signOutCurrentUser: PropTypes.func.isRequired,
  user: User,
  isFetching: PropTypes.bool.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  history: History.isRequired,
};

const mapStateToProps = ({ currentUser, app }) => {
  const { isAuth, user, isFetching } = currentUser;
  const { activeTab } = app;
  return {
    activeTab,
    isAuth,
    user,
    isFetching,
  };
};

const mapDispatchToProps = {
  signOutCurrentUser,
  fetchCurrentUser,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Main);
