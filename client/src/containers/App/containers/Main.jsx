import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Header from '../components/Header';

function Main({ children, isAuth }) {
  return (
    <main>
      { isAuth && <Header /> }
      <Container>
        {children}
      </Container>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ currentUser }) => {
  const { isAuth } = currentUser;
  return {
    isAuth,
  };
};

export default connect(mapStateToProps)(Main);
